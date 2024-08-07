"use client";

import { handleLogin } from "@/utils/action";
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
        const formData = new FormData(event.currentTarget);

        const response = await handleLogin(formData);

        if (!!response.error) {
            console.error(response.error);
            setError(response.error.message);
        } else {
          window.location.href = "/";
        }
    } catch (e) {
        console.error(e);
        setError("Check your Credentials");
    }
}


  return (
    <form className='' onSubmit={onSubmit}>
      <input type="text" placeholder="username" name="username" /> 
      <input type="password" placeholder="password" name="password" />
      <button type="submit">Login</button>
      {error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
