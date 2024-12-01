"use client"

import {FormEvent, useState} from "react";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [emailValidated, setEmailValidated] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [loading, setLoading] = useState(false);

    const nameValidated = username.length < 50 && username.length > 3;
    const passwordValidated = password.length < 50 && password.length > 7;
    const passwordConfirmed = password === confirmPass;
    const buttonActive = nameValidated && emailValidated && passwordValidated && passwordConfirmed;

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const emailValue = e.target.value.trim();
        setEmail(emailValue);
        setEmailValidated(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue));
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setUserExists(false);
        const userData = {
            name: username.trim(),
            password: password,
            email: email.trim(),
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/users`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!response.ok){
            setTimeout(() => {
                setUserExists(true);
                setLoading(false);
            }, 700);
        } else {
            router.replace("/login");
        }
    };


    return (
        <section className="w-full flex justify-center items-center">
            <div className="mt-12 w-3/12 min-w-80 max-w-96 h-fit py-8 px-2 border border-gray-300 bg-white rounded-xl flex flex-col items-center">
                <p className="text-2xl text-gray-700 font-semibold">Join Auditorium</p>
                <form onSubmit={handleSubmit} className={`flex flex-col justify-center h-fit w-10/12 mt-5`}>
                    <input type="text" id="name" placeholder="Name" value={username}
                           onChange={(e) => {
                               setUsername(e.target.value)
                           }}
                           className={`bg-gray-100 h-10 w-full px-2 py-1 rounded focus:outline-none ${!nameValidated && username ? "border border-primary_pink" : "" }`}/>
                    <label htmlFor="name" className={`my-1 text-xs ${!nameValidated && username ? "text-primary_pink" : "text-transparent"}`}>
                        Name must have more than 3 characters</label>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange}
                           className={`bg-gray-100 h-10 w-full px-2 py-1 rounded focus:outline-none ${!emailValidated && email ? "border border-primary_pink" : ""}`}/>
                    <label htmlFor="email"
                           className={`my-1 text-xs ${!emailValidated && email ? "text-primary_pink" : "text-transparent"}`}>Must be a valid email</label>
                    <input type="password" id="password" placeholder="Password" value={password}
                           onChange={e => {
                               setPassword(e.target.value)
                           }}
                           className={`bg-gray-100 h-10 w-full px-2 py-1 rounded focus:outline-none ${!passwordValidated && password 
                               ? "border border-primary_pink" : ""}`}/>
                    <label htmlFor="password"
                           className={`my-1 text-xs ${!passwordValidated && password ? "text-primary_pink" : "text-transparent"}`}>
                            Password must have at least 8 characters</label>
                    <input type="password" id="confirmPass" placeholder="Confirm Password" value={confirmPass}
                           onChange={(e =>{
                               setConfirmPass(e.target.value)
                           })}
                           className={`bg-gray-100 h-10 w-full px-2 py-1 rounded focus:outline-none ${!passwordConfirmed && confirmPass 
                               ? "border border-primary_pink" : ""} `}/>
                    <label htmlFor="confirmPass" className={`my-1 text-xs ${!passwordConfirmed && confirmPass ? "text-primary_pink" : "text-transparent"}`}>
                        Password not confirmed</label>
                    {userExists && (
                        <p className="text-sm text-center text-primary_pink">User with that name or email already exists</p>
                    )}
                    <button disabled={!buttonActive || loading}
                        className={`mt-4 text-white font-bold px-2 py-1 h-10 rounded ${buttonActive && !loading ? "bg-primary_green" : "bg-gray-300 cursor-not-allowed transition-colors"}`}>Register
                    </button>
                </form>
            </div>
        </section>
    )
}