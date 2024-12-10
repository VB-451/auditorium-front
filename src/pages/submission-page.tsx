import {SubmissionInterface} from "@/types/Submission";
import Image from "next/image";
import {dateDiff} from "@/utils/common/dateDiff";
import CommentsServer from "@/components/comments/comments-server";
import SubmissionMark from "@/components/submission/submission-mark";
import Link from "next/link";

export default function SubmissionPage({submissionData, markInterval, deadline, courseId, isTeacher, token} : {submissionData: SubmissionInterface, markInterval: number, deadline: Date, courseId:string, isTeacher:boolean, token: string | undefined}) {

    const lastChanged = submissionData.edited_at || submissionData.created_at;
    const deadlinePassed = lastChanged > deadline;
    
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div
                className={`bg-primary_pink w-2/3 h-16 p-4 mb-3 rounded-lg flex flex-row justify-between items-center`}>
                <div className={"flex items-center flex-grow"}>
                    <Link className={"mr-2"} href={`/course/${courseId}`}>
                        <p className="text-white font-bold text-xl hover:underline">Course</p>
                    </Link>
                    <Link className={"mr-2"} href={`/course/${courseId}/post/${submissionData.post_id}`}>
                        <p className="text-white font-bold text-xl hover:underline">{`> Post`}</p>
                    </Link>
                    {isTeacher && (
                        <Link href={`/course/${courseId}/post/${submissionData.post_id}/submissions`}>
                            <p className="text-white mr-2 font-bold text-xl hover:underline">{`> Submissions`}</p>
                        </Link>
                    )}
                    {!isTeacher && (
                        <p className="text-white mr-2 font-bold text-xl">{`> Submissions`}</p>
                    )}
                    <p className="text-white font-bold text-xl">{`> ${submissionData.student_name}`}</p>
                </div>
            </div>
            <div className="bg-white w-2/3 h-fit px-4 py-4 rounded-lg flex flex-col">
                <div className="flex items-center w-full justify-between">
                    <div className="flex items-center w-full flex-grow">
                        <Image className="rounded-full w-10 h-10 mr-3" src={"/pfp.jpg"} alt={"pfp"} width={40}
                               height={40}/>
                        <p className="mr-3 text-lg font-sans">{submissionData.student_name}</p>
                        <div className="w-[1px] h-9 bg-gray-200 mr-3"/>
                        <p className={`font-semibold ${deadlinePassed ? "text-primary_pink" : "text-primary_green"}`}>{
                            dateDiff(
                                submissionData.edited_at ? submissionData.edited_at.toString() : submissionData.created_at.toString(),
                                deadline.toString(),
                                deadlinePassed ? "late" : "early"
                            )}
                        </p>
                    </div>
                    <SubmissionMark submissionData={submissionData} markInterval={markInterval} isTeacher={isTeacher} token={token}/>
                </div>
                <div className="w-full h-[1px] bg-gray-200 mt-3"/>
                <p className="w-full text-left mt-4 pl-1 whitespace-break-spaces">{submissionData.content}</p>
                <div className="w-full h-[1px] bg-gray-200 mt-3"/>
                <CommentsServer id={submissionData.id} teacherName={""} type={"submission"}/>
            </div>
        </div>
    )
}