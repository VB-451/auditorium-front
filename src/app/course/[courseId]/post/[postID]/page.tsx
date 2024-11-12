import PostPage from "@/app/course/[courseId]/post/[postID]/post-page";
import NotFound from "@/app/not-found";
import {fetchPostData} from "@/app/utils/fetchPostData";


export default async function PostPageServer({ params }: { params: { postID: string, courseId: string } }) {
    const { postID, courseId } = await params;
    const postData = await fetchPostData(postID)
    if (postData.course_id.toString() !== courseId) { return <NotFound />}
    return (
        <PostPage postData={postData} />
    )
}