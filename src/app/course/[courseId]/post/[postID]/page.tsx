import PostPage from "@/pages-components/post-page";
import NotFound from "@/app/not-found";
import {fetchPostData} from "@/utils/posts/fetchPostData";
import {cookies} from "next/headers";
import { redirect } from 'next/navigation'
import {fetchIfSubmission} from "@/utils/posts/fetchIfSubmission";

export default async function PostPageServer({ params }: { params: { postID: string, courseId: string } }) {
    const { postID } = await params;
    const cookieStore = await cookies();
    const postData = await fetchPostData(postID, cookieStore.get("accessToken")?.value)
    const submissionExists = await fetchIfSubmission(postID, cookieStore.get("userID")?.value, cookieStore.get("accessToken")?.value )
    if (postData.statusCode === 404){
        return <NotFound />
    } else if (postData.statusCode === 403){
        redirect(`/login`)
    }
    return (
        <PostPage postData={postData} cookieName={cookieStore.get("username")?.value} submission={submissionExists} />
    )
}