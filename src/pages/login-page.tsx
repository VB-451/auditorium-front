"use client"

import {useRouter} from "next/navigation";
import {useState} from "react";
import {log} from "node:util";

export default function LoginPage() {
    const router = useRouter();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = () =>{

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