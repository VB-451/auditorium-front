import Comments from "@/components/comments/comments";
import {fetchCommentsData} from "@/utils/fetchCommentsData";
import {cookies} from "next/headers";


export default async function CommentsServer({ postID, teacherName }: { postID: number, teacherName: string }) {
    const cookieStore = await cookies();
    const commentsData = await fetchCommentsData(postID, undefined, cookieStore.get("accessToken")?.value);
    return (
        <Comments commentsData={commentsData} teacherName={teacherName} />
    )
}