import LoginForm from "@/components/login/login-form";
import './log-in.scss';

export default async function Login() {

    /* const response = await fetch('http://localhost:4000/api/v1/users/1')
    const json = await response.json()
    console.log(json); */
    

    
    return (
        <>
        <LoginForm/>
        </>
    )
}