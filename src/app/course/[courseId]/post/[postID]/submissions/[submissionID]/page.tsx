import {cookies} from "next/headers";
import {fetchSubmissionData} from "@/utils/submissions/fetchSubmissionData";
import NotFound from "@/app/not-found";
import {redirect} from "next/navigation";
import SubmissionPage from "@/pages-components/submission-page";
import {fetchPostData} from "@/utils/posts/fetchPostData";
import {fetchFileData} from "@/utils/files/fetchFileData";

export default async function SubmissionPageServer({ params }: {params: {submissionID: string, postID: string, courseId: string}}) {
    const { submissionID, postID, courseId } = await params;
    const cookieStore = await cookies();

    const submissionData = await fetchSubmissionData(submissionID, cookieStore.get("accessToken")?.value)
    const postData = await fetchPostData(postID, cookieStore.get("accessToken")?.value)
    const fileData = await fetchFileData("submission", submissionID ,cookieStore.get("accessToken")?.value)
    if (submissionData.statusCode === 404){
        return <NotFound />
    } else if (submissionData.statusCode === 403){
        redirect(`/login`)
    }

    const isTeacher = cookieStore.get("username")?.value !== submissionData.student_name;

    return <SubmissionPage submissionData={submissionData} markInterval={postData.mark_interval}
                           deadline={postData.deadline} courseId={courseId} isTeacher={isTeacher}
                           token={cookieStore.get("accessToken")?.value} fileData={fileData.statusCode === 404 ? null : fileData} />
}