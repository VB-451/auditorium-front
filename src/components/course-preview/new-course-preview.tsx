"use client"

import Image from "next/image";
import {useState} from "react";
import Modal from "@/components/modal/modal";
import Enroll from "@/components/enroll/enroll";
import AlterCourse from "@/components/alter-course/alter-course";

export default function NewCoursePreview({type} : {type: string}) {
    const [isOn, setIsOn] = useState(false);

    const toggleOn = () => {
        setIsOn(!isOn);
    }

    return (
        <>
            <button
                className={`w-1/5 max-w-72 min-w-64 h-72 mr-6 mt-3 bg-primary_green rounded-xl flex flex-col justify-evenly items-center transition-transform transform hover:scale-[1.01]`}
                onClick={toggleOn}>
                <p className="text-white font-semibold text-2xl text-center mt-5">{type === "student" ? "Enroll to a new course" : "Create a new course"}</p>
                <Image src="/add.svg" alt="add" width={120} height={0}/>
            </button>
            <Modal isOpen={isOn} action={toggleOn}>
                {type === "student" ? <Enroll /> : <AlterCourse type="post" />}
            </Modal>
        </>
    )
}