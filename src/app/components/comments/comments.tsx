'use client'

import Comment from "@/app/components/comment/comment";
import {useState} from "react";
import { CommentInterface } from "@/app/types/Comment";
import Image from "next/image";

export default function Comments({ commentsData, teacherID } : { commentsData: CommentInterface[], teacherID: number }) {
    const [comments, setComments] = useState(commentsData);

    return (
        <div className="w-full px-8">
            <p className="font-semibold text-lg mb-5">{`Comments (${comments.length}):`}</p>
            <div className="max-h-80 h-fit overflow-auto mb-4">
                {comments.map((comment: CommentInterface) => (
                    <Comment key={comment.id} comment={comment} teacherID={teacherID} />
                ))}
            </div>
            <div className="w-full h-fit flex flex-col items-start pb-10">
                <p className="font-semibold text-lg mb-5">Add comment:</p>
                <div className="w-7/12 h-12 flex justify-between items-center">
                    <textarea className="border-gray-300 rounded-l-lg border w-full h-full px-3 py-1 outline-0 resize-none"/>
                    <button className="bg-primary_green h-full w-12 rounded-r-xl flex items-center justify-center">
                        <Image className={"w-8 h-8"} src={"/send.svg"} alt={"send"} width={50} height={50} />
                    </button>
                </div>
            </div>
        </div>
    )
}