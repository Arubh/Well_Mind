'use client'
import { useFormState } from "react-dom";
import { handleRegister } from "@/utils/action";
import Link from "next/link";

export default function RegisterForm() {
    const [state, formAction] = useFormState(handleRegister, undefined);
  
    return (
        <form className='' action={formAction}>
            <input type="text" placeholder="username" name="username" required/>
            <input type="text" placeholder="name" name="name" required/>
            <input type="email" placeholder="email" name="email" required/>
            <input type="password" placeholder="password" name="password" required/>
            <input type="password" placeholder="password again" name="passwordRepeat" required/>
            <button>Register</button>
            {state?.error}
            <Link href="/login">Have an account ? Login</Link>
        </form> 
    )
}
