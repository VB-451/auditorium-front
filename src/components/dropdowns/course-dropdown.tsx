import {useState} from "react";
import Confirmation from "@/components/confirmation/confirmation";
import Modal from "@/components/modal/modal";
import {deleteCourse} from "@/utils/deleteCourse";
import {getCookie} from "@/utils/getCookie";
import {deleteEnroll} from "@/utils/deleteEnroll";
import {useRouter} from "next/navigation";
import EditCourse from "@/components/edit-course/edit-course";
import Students from "@/components/students/students";
import KeyGenerate from "@/components/key-generate/key-generate";
import {User} from "@/types/User";

export default function CourseDropdown({isTeacher, course_id, courseUsers} : {isTeacher: boolean, course_id: number, courseUsers?: Array<User>}) {
    const router = useRouter();

    const [isOn, setIsOn] = useState(false);
    const [type, setType] = useState("");

    const toggleOn = () => {
        setIsOn(!isOn);
    }

    const user_id = getCookie("userID");
    const token = getCookie("accessToken");

    const componentType = (()=>{
        switch (type){
            case "edit": return <EditCourse />;
            case "students": return <Students courseUsers={courseUsers} />;
            case "join_key": return <KeyGenerate />;
            case "delete": return <Confirmation question={"The course and all of its posts will be deleted"}
                                                confirmName={"Delete course"} executeFunction={deleteCourse} toggle={toggleOn} id={course_id} />;
        }
    })

    const handleDeleteEnroll = async () => {
        await deleteEnroll(user_id, course_id, token);
        router.push("/courses/student")
    }
    return (
        <>
            <ul className="flex flex-col">
                {isTeacher && (
                    <>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_green"
                            onClick={() => {
                                setType("edit");
                                toggleOn();
                            }}>
                            Edit
                        </li>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_orange"
                            onClick={() => {
                                setType("students");
                                toggleOn();
                            }}>
                            Students
                        </li>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_purple"
                            onClick={() => {
                                setType("join_key");
                                toggleOn();
                            }}>
                            New Join Key
                        </li>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_pink"
                            onClick={() => {
                                setType("delete")
                                toggleOn();
                            }}>
                            Delete
                        </li>
                    </>
                )}
                {!isTeacher && (
                    <>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_orange"
                            onClick={() => {
                                setType("students");
                                toggleOn();
                            }}>
                            Students
                        </li>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_pink"
                            onClick={handleDeleteEnroll}>
                            Leave course
                        </li>
                    </>
                )}
                <Modal isOpen={isOn} action={toggleOn}>
                    {componentType()}
                </Modal>
            </ul>
        </>
    )
}