"use client"

import {FormEvent, useState} from "react";
import {loginFetch} from "@/utils/login";

export default function LoginPage() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [wrongCredentials, setWrongCredentials] = useState(false);

    const handleLogin = async (e: FormEvent) =>{
        e.preventDefault();
        setLoading(true);
        setWrongCredentials(false)
        const response = await loginFetch(login, password);

        if (!response.ok) {
            setTimeout(() => {
                setLoading(false)
                setWrongCredentials(true);
            }, 2000);
        } else {
            const authResult = await response.json();

            document.cookie = `accessToken=${authResult.accessToken}; path=/; max-age=${3600 * 24 * 3}; sameSite=Lax`;
            document.cookie = `userID=${authResult.userID}; path=/; max-age=${3600 * 24 * 3}; sameSite=Lax`;
            document.cookie = `username=${authResult.username}; path=/; max-age=${3600 * 24 * 3}; sameSite=Lax`;

            location.assign("/courses/teacher")
        }
    }
    return (
        <section className="w-full flex justify-center items-center">
            <div className="mt-12 w-3/12 min-w-80 max-w-96 h-fit py-8 px-2 border border-gray-300 bg-white rounded-xl flex flex-col items-center">
                <p className="text-2xl text-gray-700 font-semibold">Login</p>
                <form onSubmit={handleLogin} className={`flex flex-col justify-center h-fit w-10/12 mt-5`}>
                    <input type="text" placeholder="Username or Email" value={login}
                           onChange={(e) => setLogin(e.target.value)}
                           className={`bg-gray-100 h-10 w-full px-2 py-1 rounded focus:outline-none`}/>
                    <input type="password" placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className={`bg-gray-100 h-10 w-full px-2 py-1 rounded focus:outline-none mt-5`}
                    />
                    {wrongCredentials && (
                        <p className="mt-3 text-sm text-center text-primary_pink">Login or password incorrect</p>
                    )}
                    <button disabled={!login || !password || loading}
                            className={`mt-4 text-white font-bold px-2 py-1 h-10 rounded 
                            ${(login.length < 3 || login.length > 40) || password.length < 8 || loading 
                                ? "bg-gray-300 cursor-not-allowed transition-colors" 
                                : "bg-primary_green transition-colors"}`}>Login
                    </button>
                </form>
            </div>
        </section>
    )
}