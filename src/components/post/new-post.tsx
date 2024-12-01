import Image from "next/image";
import {CourseData} from "@/types/Course";

export default function NewPost({courseData} : {courseData: CourseData}) {
    return (
        <button className={`w-full max-w-full min-h-12 max-h-16 bg-primary_${courseData.color} rounded-lg p-3 mb-2.5 flex justify-center items-center transition-transform transform hover:scale-[1.005]`}>
            <Image src="/add.svg" alt="add" width={50} height={0}/>
        </button>
    )
}