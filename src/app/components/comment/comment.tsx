import {CommentInterface} from "@/app/components/comments/comments";
import {fetchUserData} from "@/app/components/course-preview/course-preview-server";
import Image from "next/image";
import { formatDate } from "@/app/components/post/post";

export default async function Comment({ comment } : { comment : CommentInterface }) {
    const userData = await fetchUserData(comment.user_id)
    return (
        <div className="mb-7 w-full flex items-center justify-center">
            <Image className="rounded-full w-11 h-11 mr-3" src={"/pfp.jpg"} alt={"pfp"} width={40} height={40} />
            <div className={"flex flex-col w-full"}>
                <div className="w-full flex items-center mb-1">
                    <p className={"font-semibold mr-1"}>{`${userData.name} ·`}</p>
                    <p>{formatDate(comment.created_at.toString())}</p>
                </div>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}