import {useState} from "react";
import Enroll from "@/components/enroll/enroll";
import Confirmation from "@/components/confirmation/confirmation";
import Modal from "@/components/modal/modal";
import {deleteCourse} from "@/utils/deleteCourse";
import {getCookie} from "@/utils/getCookie";
import {deleteEnroll} from "@/utils/deleteEnroll";
import {useRouter} from "next/navigation";

export default function CourseDropdown({isTeacher, course_id} : {isTeacher: boolean, course_id: number}) {
    const router = useRouter();

    const [isOn, setIsOn] = useState(false);
    const [type, setType] = useState("");

    const toggleOn = () => {
        setIsOn(!isOn);
    }

    const user_id = getCookie("userID");
    const token = getCookie("accessToken");

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
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_pink"
                            onClick={() => {
                                setType("delete")
                                toggleOn();
                            }}>
                            Delete
                        </li>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_purple"
                            onClick={() => alert("New Join Key clicked Course")}>
                            New Join Key
                        </li>
                    </>
                )}
                {!isTeacher && (
                    <>
                        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md font-semibold text-primary_pink"
                            onClick={handleDeleteEnroll}>
                            Leave course
                        </li>
                    </>
                )}
                <Modal isOpen={isOn} action={toggleOn}>
                    {type === "edit"
                        ? <Enroll />
                        : <Confirmation question={"The course and all of its posts will be deleted"}
                                        confirmName={"Delete course"} executeFunction={deleteCourse} toggle={toggleOn} id={course_id} />}
                </Modal>
            </ul>
        </>
    )
}