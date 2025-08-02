import {SubmissionInterface} from "@/types/Submission";
import {useState} from "react";
import Confirmation from "@/components/confirmation/confirmation";
import Modal from "@/components/modal/modal";
import AlterSubmission from "@/components/submission/alter-submission";
import {deleteSubmission} from "@/utils/submissions/deleteSubmission";
import {FileData} from "@/types/FileData";

export default function SubmissionDropdown({submissionData, fileData} : {submissionData?: SubmissionInterface, fileData?:FileData | null}) {
    const [isOn, setIsOn] = useState(false);
    const [type, setType] = useState("");

    const toggleOn = () => {
        setIsOn(!isOn);
    }

    return (
        <>
            <ul className="flex flex-col">
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
            </ul>
            <Modal isOpen={isOn} action={toggleOn}>
                {type === "edit"
                    ? <AlterSubmission alterType="edit" submissionData={submissionData} toggle={toggleOn} fileData={fileData} />
                    : <Confirmation question={"The submissions and all of its comments will be deleted"}
                                    confirmName={"Delete Submission"} executeFunction={deleteSubmission} toggle={toggleOn} id={submissionData?.id} />}
            </Modal>
        </>
    )
}