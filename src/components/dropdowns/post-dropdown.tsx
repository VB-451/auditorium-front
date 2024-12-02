"use client"

import {useState} from "react";
import Modal from "@/components/modal/modal";
import Confirmation from "@/components/confirmation/confirmation";
import {deletePost} from "@/utils/deletePost";
import EditPost from "@/components/edit-post/edit-post";

export default function PostDropdown({isTeacher, post_id} : {isTeacher: boolean, post_id: number}) {
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
                    ? <EditPost />
                    : <Confirmation question={"The post and all of its comments and submissions will be deleted"}
                                    confirmName={"Delete post"} executeFunction={deletePost} toggle={toggleOn} id={post_id} />}
            </Modal>
        </>
    )
}