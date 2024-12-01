"use client"

import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import {getCookie} from "@/utils/getCookie";

export default function Sidebar() {

    const pathname = usePathname();
    const [type, setType] = useState("NoType");

    useEffect(() => {
        const username = getCookie("username");
        if(!username){
            setType("NoType")
        }
        const pathParts = pathname ? pathname.split("/") : [];
        if (pathParts[1] === "courses"){
            setType(pathParts[2]);
        } else if(username){
            setType("")
        }
    }, [pathname]);

    return (
        <aside className={`fixed bg-white h-full shadow w-[4%] max-w-[55px] min-w-[50px] border-r border-gray-500`}>
            {type !== "NoType" && (
                <div className="p-4 mt-20 h-fit flex flex-col justify-around items-center">
                    <Link title="See courses you're enrolled to." href="/courses/student">
                        <Image src={type === "student" ? "/student-active.svg" : "/student.svg"}
                               width={30} height={0} alt="Student Icon"/>
                    </Link>
                    <Link title="See courses you manage." href="/courses/teacher" className="mt-4">
                        <Image src={type === "teacher" ? "/teacher-active.svg" : "/teacher.svg"}
                               width={30} height={0} alt="Teacher Icon"/>
                    </Link>
                    <div className="w-full h-[1px] bg-gray-400 mt-5 "/>
                </div>
            )}
        </aside>
    );
}