import SubmissionsPage from "@/pages/submissions-page";
import {fetchPostData} from "@/utils/fetchPostData";
import {fetchSubmissionsData} from "@/utils/fetchSubmissionsData";
import {fetchUsersNotSubmittedToPost} from "@/utils/fetchUsersNotSubmittedToPost";

export default async function SubmissionsPageServer({ params }: { params: { postID: string, courseId: string } }){
    const { postID, courseId } = await params;
    const submissionsData = await fetchSubmissionsData(postID);
    const notSubmittedData = await fetchUsersNotSubmittedToPost(postID)
    const postData = await fetchPostData(postID)

    return (
        <SubmissionsPage submissionsData={submissionsData} notSubmittedData={notSubmittedData}
            postData={postData}
        />
    )
}