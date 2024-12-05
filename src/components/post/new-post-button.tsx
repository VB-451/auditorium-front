'use client'

import Image from "next/image";
import {CourseData} from "@/types/Course";
import {useState} from "react";
import Modal from "@/components/modal/modal";
import AlterPost from "@/components/post/alter-post";

export default function NewPostButton({courseData} : {courseData: CourseData}) {
    const [isOn, setIsOn] = useState(false);

    const toggleOn = () => {
        setIsOn(!isOn);
    }

    return (
        <>
            <button className={`w-full max-w-full min-h-12 max-h-16 bg-primary_${courseData.color} rounded-lg p-3 
            mb-2.5 flex justify-center items-center transition-transform transform hover:scale-[1.005]`}
            onClick={toggleOn}>
                <Image src="/add.svg" alt="add" width={50} height={0}/>
            </button>
            <Modal isOpen={isOn} action={toggleOn}>
                <AlterPost alterType={"create"}/>
            </Modal>
        </>

    )
}