import {CoursePost} from "@/app/types/Post";
import {CourseData} from "@/app/types/Course";
import {SubmissionInterface} from "@/app/types/Submission";
import Link from "next/link";
import {shortenText} from "@/app/utils/shortenText";

interface SubmissionProps {
    postData: CoursePost,
    courseData: CourseData,
    submissionsData: SubmissionInterface[]
}

export default function SubmissionsPage({postData, courseData, submissionsData}: SubmissionProps){
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

        </section>
    )
}