import Comments from "@/components/comments/comments";
import {fetchCommentsData} from "@/utils/fetchCommentsData";


export default async function CommentsServer({ postID, teacherName }: { postID: number, teacherName: string }) {
    const commentsData = await fetchCommentsData(postID, undefined);
    return (
        <Comments commentsData={commentsData} teacherName={teacherName} />
    )
}