import {useState} from "react";
import Confirmation from "@/components/confirmation/confirmation";
import Modal from "@/components/modal/modal";
import {deleteCourse} from "@/utils/courses/deleteCourse";
import {getCookie} from "@/utils/common/getCookie";
import {deleteEnroll} from "@/utils/enrollments/deleteEnroll";
import {useRouter} from "next/navigation";
import Students from "@/components/students/students";
import {User} from "@/types/User";
import {newJoinKey} from "@/utils/courses/newJoinKey";
import AlterCourse from "@/components/alter-course/alter-course";
import {CourseData} from "@/types/Course";
import {useLoading} from "@/providers/LoadingProvider";
import {useNotification} from "@/providers/NotificationProvider";

export default function CourseDropdown({isTeacher, courseData, courseUsers} : {isTeacher: boolean, courseData: CourseData, courseUsers?: Array<User>}) {
    const router = useRouter();

    const [isOn, setIsOn] = useState(false);
    const [type, setType] = useState("");

    const toggleOn = () => {
        setIsOn(!isOn);
    }

    const { showLoading, hideLoading } = useLoading();
    const { notify } = useNotification();

    const user_id = getCookie("userID");
    const token = getCookie("accessToken");

    const componentType = (()=>{
        switch (type){
            case "edit": return <AlterCourse type={"put"} courseData={courseData} action={toggleOn} />;
            case "students": return <Students courseUsers={courseUsers} isTeacher={isTeacher} course_id={courseData.id} />;
            case "delete": return <Confirmation question={"The course and all of its posts will be deleted"}
                                                confirmName={"Delete Course"} executeFunction={deleteCourse} toggle={toggleOn} id={courseData.id} />;
        }
    })

    const handleDeleteEnroll = async () => {
        showLoading();
        await deleteEnroll(user_id, courseData.id, token);
        hideLoading()
        notify("Course successfully left.", "success")
        router.push("/courses/student")
    }

    const handleNewJoinKey = async () => {
        showLoading();
        await newJoinKey(courseData.id, token);
        hideLoading()
        notify("New join key generated.", "success")
        router.refresh()
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
                            onClick={handleNewJoinKey}>
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