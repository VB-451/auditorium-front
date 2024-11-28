import SubmissionsPage from "@/pages/submissions-page";
import {fetchPostData} from "@/utils/fetchPostData";
import {fetchSubmissionsData} from "@/utils/fetchSubmissionsData";
import {fetchUsersNotSubmittedToPost} from "@/utils/fetchUsersNotSubmittedToPost";
import {cookies} from "next/headers";

export default async function SubmissionsPageServer({ params }: { params: { postID: string, courseId: string } }){
    const { postID, courseId } = await params;
    const cookieStore = await cookies();
    const submissionsData = await fetchSubmissionsData(postID, cookieStore.get("accessToken")?.value);
    const notSubmittedData = await fetchUsersNotSubmittedToPost(postID, cookieStore.get("accessToken")?.value)
    const postData = await fetchPostData(postID, cookieStore.get("accessToken")?.value)

    return (
        <SubmissionsPage submissionsData={submissionsData} notSubmittedData={notSubmittedData}
            postData={postData}
        />
    )
}