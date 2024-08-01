'use client'
import { useFormState } from "react-dom";
import { handleRegister } from "@/utils/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
    const [state, formAction] = useFormState(handleRegister, undefined);
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state?.success, router])

    return (
        <form className='' action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="password again" name="passwordRepeat" />
            <button>Register</button>
            {state?.error}
            <Link href="/login">Have an account ? Login</Link>
        </form>
    )
}
