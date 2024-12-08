import Comments from "@/components/comments/comments";
import {fetchCommentsData} from "@/utils/comments/fetchCommentsData";
import {cookies} from "next/headers";


export default async function CommentsServer({ id, teacherName, type }: { id: number, teacherName: string, type: string }) {
    const cookieStore = await cookies();
    let commentsData;
    if(type === "post"){
        commentsData = await fetchCommentsData(id, undefined, cookieStore.get("accessToken")?.value);
    } else {
        commentsData = await fetchCommentsData(undefined, id, cookieStore.get("accessToken")?.value);
    }

    return (
        <Comments commentsData={commentsData} teacherName={teacherName} type={type}
                  id={id} userID={cookieStore.get("userID")?.value} username={cookieStore.get("username")?.value}
                  token={cookieStore.get("accessToken")?.value}
        />
    )
}