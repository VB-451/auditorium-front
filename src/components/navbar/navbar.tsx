"use client"

import Image from 'next/image'
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {handleLogout} from "@/utils/handleLogout";
import {useEffect, useState} from "react";

export default function Navbar({ name } : {name: string | undefined}) {
    const router = useRouter();
    const [loggedOut, setLoggedOut] = useState(false);

    const pathname = usePathname();


    useEffect(() => {
        const pathParts = pathname ? pathname.split("/") : [];
        if (pathParts[1] === "register" || pathParts[1] === "login"){
            setLoggedOut(true)
        }
    }, [pathname]);

    const logOut = () =>{
        handleLogout()
        setLoggedOut(true);
        router.replace("/login")
    }

    return (
        <>
            <nav className={`fixed bg-primary_green top-0 left-0 m-0 p-0 pr-1 w-full border-b border-gray-500 z-10`}>
                <div className="max-w-7xl h-16 mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href="/"><Image src="/logo3.svg" width={190} height={0} alt="logo"/></Link>
                    {!name || loggedOut && (
                        <div className="w-fit ml-5 h-full flex items-center justify-between">
                            <Link href="/login">
                                <button
                                    className="px-2 py-2 rounded text-white bg-primary_green font-semibold hover:bg-[#1ad087] transition">Login
                                </button>
                            </Link>
                            <Link href="/register">
                                <button
                                    className="px-2 py-2 ml-3 rounded text-white font-semibold bg-primary_pink">Register
                                </button>
                            </Link>
                        </div>
                    )}
                    {!loggedOut && (
                        (
                            <div className="w-fit ml-5 h-full flex items-center justify-between">
                                <p className="px-2 py-2 rounded text-white bg-primary_green font-semibold ">{name}</p>
                                <button onClick={logOut}
                                        className="px-2 py-2 ml-3 rounded text-white font-semibold bg-primary_orange">Log Out
                                </button>
                            </div>
                        )
                    )}
                </div>
            </nav>
        </>
    )
}