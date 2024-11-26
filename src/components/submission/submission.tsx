import {SubmissionInterface} from "@/types/Submission";
import Image from "next/image";
import {dateDiff} from "@/utils/dateDiff";

export default async function Submission({submissionData, markInterval, deadline} : {submissionData: SubmissionInterface, markInterval: number, deadline: Date}) {
    const lastChanged = submissionData.edited_at || submissionData.created_at;
    const deadlinePassed = lastChanged > deadline;
    return (
            <div className="w-full h-16 p-3 bg-white mb-4 rounded-xl flex justify-between items-center">
                <div className="flex-grew flex items-center justify-start">
                    <Image className="rounded-full w-10 h-10 mr-3" src={"/pfp.jpg"} alt={"pfp"} width={40} height={40}/>
                    <p className="mr-3 text-lg font-sans">{submissionData.student_name}</p>
                    <div className="w-[1px] h-9 bg-gray-300 mr-3"/>
                    <p className={`font-semibold ${deadlinePassed ? "text-primary_pink" : "text-primary_green"}`}>{
                        dateDiff(
                            submissionData.edited_at ? submissionData.edited_at.toString() : submissionData.created_at.toString(),
                            deadline.toString(),
                            deadlinePassed ? "late" : "early"
                        )}
                    </p>
                </div>
                <div className="font-semibold">
                    {submissionData.mark ? <p className="text-primary_green">
                        {`${submissionData.mark}/${markInterval}`}
                    </p> : <p className="text-primary_pink">
                        Not marked yet
                    </p>}
                </div>
            </div>
    )
}