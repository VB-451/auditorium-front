import Image from "next/image";
import {CommentInterface} from "@/types/Comment";
import {formatDate} from "@/utils/formatDate";


export default function Comment({ comment, teacherName } : { comment : CommentInterface, teacherName : string }) {

    return (
        <div className="mb-7 w-full flex items-center justify-center">
            <Image className="rounded-full w-11 h-11 mr-3" src={"/pfp.jpg"} alt={"pfp"} width={40} height={40} />
            <div className={"flex flex-col w-full"}>
                <div className="w-full flex items-center mb-1">
                    <p className={"font-semibold mr-1"}>{`${comment.user_name} ·`}</p>
                    <p className="mr-1">{formatDate(comment.created_at.toString())}</p>
                    {comment.user_name === teacherName && (
                        <p className="text-primary_green font-semibold">[teacher]</p>
                    )}
                </div>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}