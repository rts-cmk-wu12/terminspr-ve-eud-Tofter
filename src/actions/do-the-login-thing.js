"use server";

import { cookies } from "next/headers";
import z from "zod";

export default async function DoTheLoginThing(prevState, formData) {
    const username = formData.get("username")
    const password = formData.get("password")
    const cookieStore = await cookies()

    const schema = z.object({
        username: z.string().min(1, { message: 'Brugernavn skal udfyldes' }),
        password: z.string().min(1, { message: 'Password skal udfyldes' }),
    })

    const validated = schema.safeParse({
        username, password
    })

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const response = await fetch(`http://localhost:4000/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
  },
        body: JSON.stringify( {
        username: validated.data.username,
        password: validated.data.password
    })
})
const json = await response.json()
console.log('login', json);



if (!json) return {
    success: false,
    errors: ["Du er forkert"]
}

if (json.password === validated.data.password) {
    
    cookieStore.set('userCookie', 'Login successfull', {
        validUntil: 60 * 500 
    })
}

cookieStore.set({
    name: 'userCookie',
    value: json.token,
    validUntil: 60 * 500 
})

cookieStore.set({
    name: 'userCookieId',
    value: json.userId,
    validUntil: 60 * 500 
})


return validated
    
}
