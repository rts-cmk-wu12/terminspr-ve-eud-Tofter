# Dokumentation for Landrup - Terminsprøve
Rasmus Toft, WU12

<img src="./public/file.svg">

# Sådan kommer du i gang
`npm install`

`npm run dev`

`npm start ( på API )`

Jeg har valgt opgave ****

Jeg har valg at fjerne søge siden og smide søgefeltet over på Aktivitet siden pga. siderne indeholder de samme elementer og giver kun forvirring til brugere.
Jeg har dermed også valgt at lave en USER til navigationen til login siden.

## Tech-stack
* **Next.js**  
Et front-end framework baseret på React.js som også giver adgang til server-side komponenter og -actions, samt mappebaseret routing. Server-side komponenter og funktioner giver en større sikkerhed, da al koden afvikles på serveren fremfor i klienten.
* **React**  
Et bibliotek der giver mig mulighed for at lave komponenter og håndtere states på en god og let måde. React har et stort community med et stort modul-bibliotek, som er aktivt, vel-dokumenteret og vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor.
* **Git**  
Et versionsstyringsværktøj, som lader mig lave branches og versioner af min kode, så jeg let kan gå tilbage til tidligere versioner, hvis jeg for eksempel har lavet en fejl. Jeg bruger Git sammen med GitHub.
* **React-icons**  
Et ikon-bibliotek, som er beregnet på React.
* **SASS**  
En udvidelse til CSS, som lader mig lave funktioner, variabler, mixins og nesting. Jeg kan opdele min CSS i moduler og dermed genbruge kode flere steder.
* **Web-API fra Landrup**  
Et interface til at få adgang til Spotify's data, så jeg kan lave min egen app. Dette er den eneste måde hvor jeg lovligt kan få adgang til Spotify's data.
* **Zod**  
Et valideringsbibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.

## Kode-eksempel
Kode-eksempel path: src/components/login/login-form.jsx
```jsx
export default function LoginForm() {

    const [formState, formAction, isPending] = useActionState(DoTheLoginThing)

    useEffect(function () {
        if (!formState) return;
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
                        <div className='button-container'>
                            <button type="submit" className="button">Log ind</button>
                            <span>{formState?.errors}</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
```
