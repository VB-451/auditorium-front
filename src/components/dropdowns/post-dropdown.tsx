"use client"

import {useState} from "react";
import Modal from "@/components/modal/modal";
import Confirmation from "@/components/confirmation/confirmation";
import {deletePost} from "@/utils/posts/deletePost";
import AlterPost from "@/components/post/alter-post";
import {CoursePost} from "@/types/Post";

export default function PostDropdown({isTeacher, postData} : {isTeacher: boolean, postData?:CoursePost}) {
    const [isOn, setIsOn] = useState(false);
    const [type, setType] = useState("");

    const toggleOn = () => {
        setIsOn(!isOn);
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
                    </>
                )}
            </ul>
            <Modal isOpen={isOn} action={toggleOn}>
                {type === "edit"
                    ? <AlterPost alterType={"edit"} postData={postData} toggle={toggleOn} />
                    : <Confirmation question={"The post and all of its comments and submissions will be deleted"}
                                    confirmName={"Delete post"} executeFunction={deletePost} toggle={toggleOn} id={postData?.id} />}
            </Modal>
        </>
    )
}