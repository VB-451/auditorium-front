'use client'

import {useState} from "react";
import Modal from "@/components/modal/modal";
import AlterSubmission from "@/components/submission/alter-submission";
import {CoursePost} from "@/types/Post";

export default function NewSubmissionButton({ postData } : { postData: CoursePost}) {
    const [isOn, setIsOn] = useState(false);

    const toggleOn = () => {
        setIsOn(!isOn);
    }

    return (
        <>
            <button onClick={toggleOn}
                className="bg-primary_green text-white text-xl font-bold px-3 py-2 rounded">Submit
                Homework
            </button>
            <Modal isOpen={isOn} action={toggleOn}>
                <AlterSubmission alterType={"create"} postData={postData} />
            </Modal>
        </>
    )
}