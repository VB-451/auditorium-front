import SubmissionsPage from "@/pages/submissions-page";
import {fetchPostData} from "@/utils/posts/fetchPostData";
import {fetchSubmissionsData} from "@/utils/submissions/fetchSubmissionsData";
import {fetchUsersNotSubmittedToPost} from "@/utils/posts/fetchUsersNotSubmittedToPost";
import {cookies} from "next/headers";
import NotFound from "@/app/not-found";
import {redirect} from "next/navigation";

export default async function SubmissionsPageServer({ params }: { params: { postID: string }}){
    const { postID } = await params;
    const cookieStore = await cookies();
    const submissionsData = await fetchSubmissionsData(postID, cookieStore.get("accessToken")?.value);
    if (submissionsData.statusCode === 404){
        return <NotFound />
    } else if (submissionsData.statusCode === 403){
        redirect(`/login`)
    }
    const notSubmittedData = await fetchUsersNotSubmittedToPost(postID, cookieStore.get("accessToken")?.value)
    const postData = await fetchPostData(postID, cookieStore.get("accessToken")?.value)

    return (
        <SubmissionsPage submissionsData={submissionsData} notSubmittedData={notSubmittedData}
            postData={postData}
        />
    )
}