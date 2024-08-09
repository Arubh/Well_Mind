"use client";

import { handleLogin } from "@/utils/action";
import { useState } from "react";
import Link from "next/link";
import { handleGoogleLogin } from "@/utils/action";

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
    <div className="form-container w-80 rounded-lg bg-navyBlue p-8 text-gray-200">
      <p className="title text-center text-2xl font-bold">Login</p>
      <form className="form mt-6" onSubmit={onSubmit}>
        <div className="input-group mt-1 text-sm">
          <label htmlFor="username" className="block text-gray-400 mb-1">Username</label>
          <input type="text" name="username" id="username" placeholder="" className="w-full rounded-md border border-gray-700 outline-0 bg-gray-900 p-3 text-gray-200 focus:border-purple-500" />
        </div>
        <div className="input-group mt-1 text-sm">
          <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
          <input type="password" name="password" id="password" placeholder="" className="w-full rounded-md border border-gray-700 outline-0 bg-gray-900 p-3 text-gray-200 focus:border-purple-500" />
          <div className="forgot flex justify-end text-xs text-gray-400 mt-2 mb-3">
            <a rel="noopener noreferrer" href="#" className="hover:underline text-gray-200">Forgot Password ?</a>
          </div>
        </div>
        <button type="submit" className="sign block w-full bg-purple-500 p-3 text-center text-gray-900 rounded-md font-semibold">Sign in</button>
      </form>
      <div className="social-message flex items-center pt-4">
        <div className="line flex-1 h-px bg-gray-700"></div>
        <p className="message px-3 text-sm text-gray-400">Login with social accounts</p>
        <div className="line flex-1 h-px bg-gray-700"></div>
      </div>
      <div className="social-icons flex justify-center mt-2">
       <form action={handleGoogleLogin}>
       <button aria-label="Log in with Google" className="icon rounded-sm p-3 border-none bg-transparent mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-white">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
       </form>
      </div>
      <p className="signup text-center text-xs text-gray-400 mt-4">
        Don't have an account?
        <Link rel="noopener noreferrer" href="/register" className="hover:underline text-gray-200">Sign up</Link>
      </p>
    </div>

  );
};

export default LoginForm;
