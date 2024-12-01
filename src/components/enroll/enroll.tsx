"use client"

import {useState} from "react";
import {useModalContext} from "@/contexts/modal-context";
import {enroll} from "@/utils/enroll";
import { useRouter   } from 'next/navigation'

export default function Enroll(){
    const router = useRouter();

    const [joinKey, setJoinKey] = useState("")
    const [keyValid, setKeyValid] = useState(false)
    const [courseExists, setCourseExists] = useState(true)

    const { user_id, token } = useModalContext();


    const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setJoinKey(e.target.value)
        setKeyValid(/^[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$/.test(e.target.value))
    }

    const handleEnroll = async () =>{
        setCourseExists(true)
        const response = await enroll(user_id, joinKey, token);
        if (!response.ok) {
            setTimeout(() => {setCourseExists(false)}, 2000)
        } else {
            const { course_id } = await response.json();
            router.push(`/course/${course_id}`);
        }
    }

    return (
        <div className="bg-white w-96 h-64 py-4 px-4 rounded-xl flex flex-col items-center">
            <p className="font-semibold text-3xl text-primary_purple mt-3">Join a new course</p>
            <input className="w-full h-16 mt-6 text-2xl text-center bg-gray-100 rounded px-3 py-1 focus:outline-none" type="text" placeholder="Join Key"
            onChange={handleKeyChange}/>
            <p className={`${(keyValid || joinKey.length === 0) ? "text-transparent" : "text-primary_pink"} mt-1`}>Key is not valid</p>
            <button disabled={!keyValid} onClick={handleEnroll} className={`text-white text-xl font-semibold w-5/12 h-12 mt-3 rounded 
            ${keyValid ? "bg-primary_purple" 
                : "bg-gray-300 cursor-not-allowed transition-colors"}`}>Enroll</button>
            <p className={`${courseExists ? "text-transparent" : "text-primary_pink"} mt-1`}>Such course does not exist</p>
        </div>
    )
}