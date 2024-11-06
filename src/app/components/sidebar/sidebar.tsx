"use client"

import styles from "./styles.module.css"
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Sidebar() {

    const [isStudent, setIsStudent] = React.useState(true);

    return (
        <aside className={`fixed left-0 top-0 h-full border-r border-gray-500 0 text-black shadow-lg ${styles.aside}`}>
            <div className="p-4 pt-24 h-48 flex flex-col justify-around">
                <Link title="See courses you're enrolled to." onClick={()=>{setIsStudent(true)}} href="/student">
                    <Image src={isStudent ? "/student-active.svg" : "/student.svg"} width={30} height={0} alt="Student Icon" />
                </Link>
                <Link title="See courses you manage." onClick={()=>{setIsStudent(false)}} href="/teacher">
                    <Image src={!isStudent ? "/teacher-active.svg" : "/teacher.svg"} width={30} height={0} alt="Teacher Icon" />
                </Link>
            </div>
        </aside>
    );
}