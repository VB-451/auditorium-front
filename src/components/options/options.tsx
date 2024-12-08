"use client"

import Image from "next/image";
import {useState} from "react";
import CourseDropdown from "@/components/dropdowns/course-dropdown";
import PostDropdown from "@/components/dropdowns/post-dropdown";
import {User} from "@/types/User";
import {CourseData} from "@/types/Course";
import {CoursePost} from "@/types/Post";

export default function Options({type, isTeacher, courseUsers, courseData, postData}: {type: string, isTeacher: boolean, courseUsers?: Array<User>, courseData?:CourseData ,postData?:CoursePost}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen((prev) => !prev);
    };

    const definedCourse = courseData || {id:0, color:"pink", teacher_id:0, teacher_name:"", name:"", join_key:"" }

    const typeSwitch = () =>{
        switch (type) {
            case "course": return 'bg-white bg-opacity-0 hover:bg-opacity-20';
            case "post": return 'bg-primary_green bg-opacity-100 hover:bg-opacity-85';
        }
    }

    return (
        <div className="flex justify-end relative">
            {((isTeacher && type === "post") || type === "course") && (
                <button onClick={handleDropdownToggle}
                        className={`${typeSwitch()} p-2 rounded-full transition-all`}>
                    <div className="w-6">
                        <Image src={"/options.svg"} alt={"edit"} width={64} height={64}/>
                    </div>
                </button>
            )}
            {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                    {type === "course"
                        ? <CourseDropdown isTeacher={isTeacher} courseData={definedCourse} courseUsers={courseUsers} />
                        : <PostDropdown isTeacher={isTeacher} postData={postData} />}
                </div>
            )}
        </div>
    )
}