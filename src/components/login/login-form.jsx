"use client";

import DoTheLoginThing from "@/actions/do-the-login-thing";
import { useActionState, useEffect } from "react";

import '../scss/button.scss'
import '../scss/background.scss'
import './login-form.scss'

export default function LoginForm() {

    const [formState, formAction, isPending] = useActionState(DoTheLoginThing)

    useEffect(function () {
        if (!formState) return;
        console.log(formState);
    }, [formState]);


    return isPending ? <p>loading...</p> : (
        <>
            <div className='background'>
                <div className='container'>
                    <h2>Log ind</h2>
                    <form action={formAction} className='form'>
                        <div className='form__input-container'>
                            <input placeholder="brugernavn" type="text" name="username" />
                            <span>{formState?.properties?.username.errors}</span>
                            
                            <input placeholder="adgangskode" type="password" name="password" />
                            <span>{formState?.properties?.password.errors}</span>
                        </div>
                    </form>
                    <button type="submit" className="button">Log ind</button>
                    <span>{formState?.errors}</span>
                </div>
            </div>
        </>
    )
}