'use client'

import Image from "next/image";
import {CommentInterface} from "@/types/Comment";
import {formatDate} from "@/utils/common/formatDate";
import {deleteComment} from "@/utils/comments/deleteComment";
import {useRouter} from "next/navigation";


export default function Comment({ comment, teacherName, username, token } : { comment : CommentInterface, teacherName : string, username: string | undefined, token : string | undefined }) {

    const router = useRouter();

    const handleCommentDelete = async () =>{
        await deleteComment(comment.id, token);
        router.refresh()
    }

    return (
        <div className={`mb-7 w-full flex justify-center group`}>
            <Image className="rounded-full w-11 h-11 mr-3" src={"/pfp.jpg"} alt={"pfp"} width={40} height={40}/>
            <div className={"flex flex-col w-full"}>
                <div className="w-full flex items-center mb-1">
                    <p className={"font-semibold mr-1"}>{`${comment.user_name} ·`}</p>
                    <p className="mr-1">{formatDate(comment.created_at.toString(), "")}</p>
                    {comment.user_name === teacherName && (
                        <p className="text-primary_green font-semibold">[teacher]</p>
                    )}
                </div>
                <p>{comment.content}</p>
            </div>
            {(teacherName === username || username === comment.user_name) && (
                <button className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity" onClick={handleCommentDelete}>
                    <Image src={"/cancel.svg"}
                           alt={"cancel"} width={15} height={15}/>
                </button>
            )}
        </div>
    )
}