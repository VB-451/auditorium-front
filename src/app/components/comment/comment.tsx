import {fetchUserData} from "@/app/utils/fetchUserData";
import Image from "next/image";
import {useEffect, useState} from "react";
import {CommentInterface} from "@/app/types/Comment";
import {formatDate} from "@/app/utils/formatDate";


export default function Comment({ comment, teacherID } : { comment : CommentInterface, teacherID : number }) {
    const [userdata, setUserdata] = useState({name: ""})

    useEffect(() => {
        const getUserData = async (user_id : number) =>{
            const userData = await fetchUserData(user_id);
            setUserdata(userData);
        }
        getUserData(comment.user_id)
    }, [comment.user_id]);

    return (
        <div className="mb-7 w-full flex items-center justify-center">
            <Image className="rounded-full w-11 h-11 mr-3" src={"/pfp.jpg"} alt={"pfp"} width={40} height={40} />
            <div className={"flex flex-col w-full"}>
                <div className="w-full flex items-center mb-1">
                    <p className={"font-semibold mr-1"}>{`${userdata.name} ·`}</p>
                    <p className="mr-1">{formatDate(comment.created_at.toString())}</p>
                    {comment.user_id === teacherID && (
                        <p className="text-primary_green font-semibold">[teacher]</p>
                    )}
                </div>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}