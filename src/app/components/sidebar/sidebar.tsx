"use client"

import styles from "./styles.module.css"
import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const pathname = usePathname();
    const [type, setType] = useState("");

    useEffect(() => {
        const pathParts = pathname.split("/");
        const coursesType = pathParts[1];
        setType(coursesType);
    }, [pathname]);

    return (
        <aside className={`fixed left-0 top-0 h-full border-r border-gray-500 0 text-black shadow-lg ${styles.aside}`}>
            <div className="p-4 pt-24 h-48 flex flex-col justify-around">
                <Link title="See courses you're enrolled to." href="/student">
                    <Image src={type === "student" ? "/student-active.svg" : "/student.svg"}
                           width={30} height={0} alt="Student Icon" />
                </Link>
                <Link title="See courses you manage." href="/teacher">
                    <Image src={type === "teacher" ? "/teacher-active.svg" : "/teacher.svg"}
                           width={30} height={0} alt="Teacher Icon" />
                </Link>
            </div>
        </aside>
    );
}