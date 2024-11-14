import {CoursePost} from "@/app/types/Post";
import {CourseData} from "@/app/types/Course";
import {SubmissionInterface} from "@/app/types/Submission";
import Link from "next/link";
import {shortenText} from "@/app/utils/shortenText";
import Submission from "@/app/components/submission/submission";
import {User} from "@/app/types/User";
import AbsentSubmission from "@/app/components/submission/absent-submission";

interface SubmissionProps {
    postData: CoursePost,
    courseData: CourseData,
    submissionsData: SubmissionInterface[],
    notSubmittedData: User[]
}

export default function SubmissionsPage({postData, courseData, submissionsData, notSubmittedData}: SubmissionProps){
    return (
        <section className="flex flex-col justify-center items-center mb-5">
            <div className={`bg-primary_purple w-2/3 h-16 p-4 mb-3 rounded-lg flex flex-row justify-between items-center`}>
                <div className={"flex items-center flex-grow"}>
                    <Link className={"mr-2"} href={`/course/${courseData.id}`}>
                        <p className="text-white font-bold text-xl hover:underline">{courseData.name}</p>
                    </Link>
                    <Link className={"mr-2"} href={`/course/${courseData.id}/post/${postData.id}`}>
                        <p className="text-white font-bold text-xl hover:underline">{`> ${shortenText(postData.title, 30)}`}</p>
                    </Link>
                    <p className="text-white font-bold text-xl">{`> Submissions`}</p>
                </div>
            </div>
            <div className="w-2/3 flex flex-col justify-start items-start mb-5">
                {notSubmittedData.map((user: User) => (
                    <AbsentSubmission key={user.id} userData={user} />
                ))}
                {submissionsData
                    .sort((a) => (a.mark === null ? -1 : 1))
                    .map((submissionData: SubmissionInterface) => (
                        <Submission key={submissionData.id} submissionData={submissionData} />
                ))}
            </div>
        </section>
    )
}