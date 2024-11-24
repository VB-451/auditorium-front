import PostPage from "@/pages/post-page";
import NotFound from "@/app/not-found";
import {fetchPostData} from "@/utils/fetchPostData";


export default async function PostPageServer({ params }: { params: { postID: string, courseId: string } }) {
    const { postID, courseId } = await params;
    const postData = await fetchPostData(postID)
    if (postData.course_id.toString() !== courseId) { return <NotFound />}
    return (
        <PostPage postData={postData} />
    )
}