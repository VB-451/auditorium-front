import {FormEvent, useState} from "react";
import {createCourse} from "@/utils/courses/createCourse";
import {useModalContext} from "@/contexts/modal-context";
import {useRouter} from "next/navigation";
import {updateCourse} from "@/utils/courses/updateCourse";
import {CourseData} from "@/types/Course";
import {useLoading} from "@/providers/LoadingProvider";
import {useNotification} from "@/providers/NotificationProvider";
import {shortenText} from "@/utils/common/shortenText";

export default function AlterCourse({type, courseData, action} : {type: string, courseData?: CourseData, action?:()=>void}) {
    const { user_id, username, token } = useModalContext();
    const router = useRouter();
    const [courseName, setCourseName] = useState(courseData?.name || "");
    const [selectedColor, setSelectedColor] = useState(courseData?.color || "pink");
    const colors = ["pink", "purple", "blue", "orange"]
    const { showLoading, hideLoading } = useLoading();
    const { notify } = useNotification();


    const handleCreateCourse = async (e: FormEvent) =>{
        e.preventDefault();
        showLoading()
        const createdCourse = await createCourse(courseName, selectedColor, user_id, username, token)
        hideLoading()
        if(createdCourse.id){
            notify(`${shortenText(createdCourse.name, 30)} course created successfully.`, "success")
            router.push(`/course/${createdCourse.id}`);
        } else {
            notify("Course creation error.", "error")
        }

    }

    const handleUpdateCourse = async (e: FormEvent) =>{
        e.preventDefault();
        showLoading()
        if(courseData){
            await updateCourse(courseData.id, courseName, selectedColor, token);
            notify(`Course updated successfully.`, "success")
        }
        if(action){
            action()
        }
        hideLoading()
        router.refresh()
    }

    return (
        <form onSubmit={type === "post" ? handleCreateCourse : handleUpdateCourse} className="bg-white rounded-lg w-96 h-fit py-4 px-3 flex flex-col items-center">
            <p className="text-3xl font-semibold text-primary_green">{type === "post" ? "New Course" : "Edit Course"}</p>
            <input type="text" className="w-full h-12 px-2 py-1 mt-3 focus:outline-none text-xl rounded bg-gray-100"
                   placeholder="Course Name"
                   onChange={(e) => {
                        if (e.target.value.length < 70) {
                            setCourseName(e.target.value)
                        }
                    }}
                   value={courseName}
            />
            <p className={`text-sm ${!(courseName.length < 3 || courseName.length > 70) || !courseName ? "text-transparent" : "text-primary_pink"}`}>
                Name must have more than 3 characters</p>
            <div className="w-full px-3 flex justify-between items-center mt-3">
                {colors.map((color) =>(
                    <div key={color} className={`rounded w-14 h-14 cursor-pointer bg-primary_${color} 
                    ${selectedColor === color ? "outline outline-primary_green outline-offset-2" : ""}`}
                     onClick={() => {setSelectedColor(color)}}/>
                ))}
            </div>
            <button disabled={(courseName.length < 3 || courseName.length > 70)}
                    className={`mt-5 py-2 px-3 text-white text-xl font-semibold rounded transition-colors
                    ${(courseName.length < 3 || courseName.length > 70) 
                    ? "bg-gray-300 cursor-not-allowed" 
                    : "bg-primary_green"}`}
                    onClick={type === "post" ? handleCreateCourse : handleUpdateCourse}>
                    {type === "post" ? "Create" : "Update"}
            </button>
        </form>
    )
}