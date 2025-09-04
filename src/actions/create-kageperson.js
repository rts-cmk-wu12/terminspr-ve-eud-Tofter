"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import z, { toJSONSchema } from "zod";

export default async function createKageperson(prevState, formData) {

    const name = formData.get("name");
    const slug = formData.get("slug");
    const dough = formData.get("dough");
    const topping = formData.get("topping");
    const price = formData.get("price");

    const schema = z.object({
        name: z.string().min(1, { message: "Give name" }).max(50, { message: "Too much" }),
        slug: z.string().min(1, { message: "slug duh" }),
        dough: z.string().min(1, { message: "doh" }),
        topping: z.string().min(1, { message: "glazer" }),
        price: z.string().min(1, { message: "all you own" }),
    })

    const validated = schema.safeParse({
        name,
        slug,
        dough,
        topping,
        price
    })

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const cookieStore = await cookies();
    const access_token = cookieStore.get("dimsedut");

    const response = await fetch("http://localhost:4000/kagepersoner", {
        headers: {
            Authorization: "Bearer " + access_token.value
        },
        method: "POST",
        body: JSON.stringify( {
            name: validated.data.name,
            slug: validated.data.slug,
            dough: validated.data.dough,
            topping: validated.data.topping,
            price: parseFloat(validated.data.price)
        })
    });

    if( response.status !== 201) return {
        success: false,
        errors: ["try again heh"]
    }

    revalidatePath("http://localhost:3000/dashboard");

    return await response.json()
}