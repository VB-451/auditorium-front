import {User} from "@/types/User";
import Image from "next/image";
import {useState} from "react";
import {useModalContext} from "@/contexts/modal-context";
import {deleteEnroll} from "@/utils/enrollments/deleteEnroll";

export default function Student({studentData, isTeacher, course_id} : {studentData: User, isTeacher: boolean, course_id:number}){
    const [deleted, setDeleted] = useState(false);
    const { token } = useModalContext();

    const handleDelete = async () =>{
        const response = await deleteEnroll(studentData.id.toString(), course_id, token);
        setDeleted(true);
    }

    return (
        <>
            <div className={`w-full flex justify-between items-center mb-2 group ${!deleted ? "block" : "hidden"}`}>
                <div className={"flex flex-grow items-center mr-8"}>
                    <Image className="rounded-full w-auto h-9 mr-2" src={"/pfp.jpg"} alt={"pfp"} width={40}
                           height={40}/>
                    <div className="flex flex-col items-start">
                        <p className="">{studentData.name}</p>
                        <p className="text-sm text-gray-500">{studentData.email}</p>
                    </div>
                </div>
                {isTeacher && (
                    <button className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity" onClick={handleDelete}>
                        <Image src={"/cancel.svg"}
                               alt={"cancel"} width={15} height={15}/>
                    </button>
                )}
            </div>
        </>
    )
}