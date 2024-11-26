import {SubmissionInterface} from "@/types/Submission";
import Submission from "@/components/submission/submission";
import {User} from "@/types/User";
import AbsentSubmission from "@/components/submission/absent-submission";
import {CoursePost} from "@/types/Post";

interface SubmissionProps {
    submissionsData: SubmissionInterface[],
    notSubmittedData: User[],
    postData: CoursePost
}

export default function SubmissionsPage({submissionsData, notSubmittedData, postData}: SubmissionProps){
    return (
        <section className="flex flex-col justify-center items-center mb-5">
            <div className={`bg-primary_purple w-2/3 h-16 p-4 mb-3 rounded-lg flex flex-row justify-between items-center`}>
                <div className={"flex items-center flex-grow"}>
                    {/*<Link className={"mr-2"} href={`/course/${courseData.id}`}>*/}
                    {/*    <p className="text-white font-bold text-xl hover:underline">{courseData.name}</p>*/}
                    {/*</Link>*/}
                    {/*<Link className={"mr-2"} href={`/course/${courseData.id}/post/${submissionsData[0].post_id || null}`}>*/}
                    {/*    <p className="text-white font-bold text-xl hover:underline">{`> ${shortenText("title", 30)}`}</p>*/}
                    {/*</Link>*/}
                    {/*<p className="text-white font-bold text-xl">{`> Submissions`}</p>*/}
                </div>
            </div>
            <div className="w-2/3 flex flex-col justify-start items-start mb-5">
                {notSubmittedData.map((user: User) => (
                    <AbsentSubmission key={user.id} userData={user} deadline={postData.deadline} />
                ))}
                {submissionsData
                    .sort((a) => (a.mark === null ? -1 : 1))
                    .map((submissionData: SubmissionInterface) => (
                        <Submission key={submissionData.id} submissionData={submissionData} markInterval={postData.mark_interval} deadline={postData.deadline} />
                ))}
            </div>
        </section>
    )
}