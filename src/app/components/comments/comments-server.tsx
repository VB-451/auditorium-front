import Comments from "@/app/components/comments/comments";
import {fetchCommentsData} from "@/app/utils/fetchCommentsData";


export default async function CommentsServer({ postID, teacherID }: { postID: number, teacherID: number }) {
    const commentsData = await fetchCommentsData(postID, undefined);
    return (
        <Comments commentsData={commentsData} teacherID={teacherID} />
    )
}