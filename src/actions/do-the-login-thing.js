"use server";

import { cookies } from "next/headers";
import z from "zod";

export default async function DoTheLoginThing(prevState, formData) {
    const username = formData.get("username")
    const password = formData.get("password")
    
    const schema = z.object({
        username: z.string().min(1, { message: 'Brugernavn skal udfyldes' }),
        password: z.string().min(1, { message: 'Password skal udfyldes'}),
    })

    const validated = schema.safeParse({
        username, password
    })

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const response = await fetch(`http://localhost:4000/api/v1/users/1?username=${validated.data.username}`)
    const json = await response.json()
    console.log(json);
    

    if (!json.length) return {
        success: false,
        errors: ["Du er forkert"]
    }

    if (json[0].password === validated.data.password) {
        const cookieStore = await cookies()
        cookieStore.set('dimsedut', 'Login successfull', {
            maxAge: 60 * 500
        })
    }
    return validated
    
}
