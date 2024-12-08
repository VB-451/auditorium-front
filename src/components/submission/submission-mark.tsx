'use client'

import {useState} from "react";
import {SubmissionInterface} from "@/types/Submission";
import {markSubmission} from "@/utils/submissions/markSubmission";

export default function SubmissionMark({submissionData, markInterval, isTeacher, token} : {submissionData: SubmissionInterface, markInterval: number, isTeacher: boolean, token:string | undefined}) {
    const [mark, setMark] = useState(submissionData.mark?.toString() || "");

    const handleMarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length <= 3 && Number(e.target.value) <= markInterval) {
            setMark(e.target.value);
        }
    }

    const handleMark = async () =>{
        await markSubmission(submissionData.id, Number(mark), token)
    }

    const inputWidth = (() =>{
        switch(mark.length) {
            case 0: return "w-3";
            case 1: return "w-3";
            case 2: return "w-5";
            case 3: return "w-8";
        }
    })

    return (
        <div className="flex items-center">
            <input type="text" readOnly={!isTeacher} value={mark} onChange={handleMarkChange} placeholder={`0`}
                   className={`${inputWidth()} bg-gray-100 text-primary_green font-semibold text-right rounded-l text-lg outline-0`}/>
            <p className="text-lg text-primary_green font-semibold pr-0.5 bg-gray-100 rounded-r">/{markInterval}</p>
            <button className="ml-4 bg-primary_pink text-white font-semibold py-1 px-2 rounded" onClick={handleMark}>
                Mark</button>
        </div>
    )
}