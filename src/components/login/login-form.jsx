import '../scss/button.scss'
import '../scss/background.scss'
import './login-form.scss'

export default function LoginForm() {
    return (
        <>
            <div className='background'>
                <div className='container'>
                   <h2>Log ind</h2>
                <form className='form'>
                    <div className='form__input-container'>
                        <input placeholder="brugernavn" type="text" name="brugernavn" />
                        <input placeholder="adgangskode" type="password" name="adgangskode" />
                    </div>
                </form>
                <button className="button">Log ind</button> 
                </div>
            </div>
        </>
    )
}