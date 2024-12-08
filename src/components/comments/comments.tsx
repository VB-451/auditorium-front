'use client'

import Comment from "@/components/comments/comment";
import {useState} from "react";
import { CommentInterface } from "@/types/Comment";
import Image from "next/image";
import {createComment} from "@/utils/comments/createComment";
import {useRouter} from "next/navigation";


interface CommentsProps {
    commentsData: CommentInterface[],
    teacherName: string,
    type:string,
    id:number,
    userID: string | undefined,
    username: string | undefined,
    token: string | undefined
}

export default function Comments({ commentsData, teacherName, type, id, userID, username, token } : CommentsProps) {
    const router = useRouter();
    const [newComment, setNewComment] = useState("");

    const handeNewComment = async () => {
        await createComment(newComment, type, id, userID, username, token);
        router.refresh()
        setNewComment("");
    }

    return (
        <div className="w-8/12 mt-4">
            <p className="font-semibold text-lg mb-5">{`Comments: (${commentsData.length})`}</p>
            <div className="max-h-80 h-fit overflow-auto mb-4">
                {commentsData.map((comment: CommentInterface) => (
                    <Comment key={comment.id} comment={comment} teacherName={teacherName}
                    username={username} token={token}/>
                ))}
            </div>
            <div className="w-full h-fit flex flex-col items-start pb-10">
                <p className="font-semibold text-lg mb-5">Add comment:</p>
                <div className="w-full h-12 flex justify-between items-center">
                    <textarea className="border-gray-300 rounded-l-lg border w-full h-full px-3 py-1 outline-0 resize-none"
                              onChange={(e) => setNewComment(e.target.value)}
                              value={newComment}/>
                    <button className="bg-primary_green h-full w-12 rounded-r-xl flex items-center justify-center"
                    onClick={handeNewComment}>
                        <Image className={"w-8 h-8"} src={"/send.svg"} alt={"send"} width={50} height={50} />
                    </button>
                </div>
            </div>
        </div>
    )
}