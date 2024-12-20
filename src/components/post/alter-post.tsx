import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {CoursePost} from "@/types/Post";
import {createPost} from "@/utils/posts/createPost";
import {useModalContext} from "@/contexts/modal-context";
import {useRouter} from "next/navigation";
import {updatePost} from "@/utils/posts/updatePost";

export default function AlterPost({alterType, postData, course_id, toggle} : {alterType: string, postData?: CoursePost, course_id?: number, toggle?:()=>void}) {
    const [title, setTitle] = useState(postData?.title || '');
    const [content, setContent] = useState(postData?.content || '');
    const [type, setType] = useState(postData?.type || "ANNOUNCEMENT");
    const [markInterval, setMarkInterval] = useState(50);
    const [deadline, setDeadline] = useState(()=>{
        if(postData?.deadline){
            return new Date(postData.deadline);
        } else return new Date();
    });

    const { token, username } = useModalContext();
    const router = useRouter()

    const filterPassedTime = (time: Date) => {
        const currentDate = new Date();
        return currentDate.getTime() < time.getTime();
    };

    const handleCreatePost = async () =>{
        const post = await createPost(title, content, type, course_id, username, token, deadline, markInterval);
        router.replace(`/course/${course_id}/post/${post.id}`);
    }

    const handleUpdatePost = async () =>{
        await updatePost(postData?.id, title, content, deadline, token)
        router.refresh()
        if(toggle){
            toggle();
        }
    }

    return (
        <div className="w-[790px] h-80 bg-white rounded-xl flex items-center justify-center">
            <div className="w-8/12 h-full pl-3 py-4 flex flex-col">
                <input type="text" placeholder="Title" className="bg-gray-100 rounded py-1 px-2 text outline-0"
                onChange={(e) => setTitle(e.target.value)} value={title}/>
                <textarea placeholder="Content" className="bg-gray-100 mt-5 rounded h-5/6 py-1 px-2 text outline-0 resize-none"
                onChange={(e) => setContent(e.target.value)} value={content}/>
            </div>
            <div className="w-4/12 h-full px-3 py-4 flex flex-col items-center">
                <div className="h-[35px] w-full flex justify-between items-center">
                    <>
                        {(alterType === "create" || type === "ANNOUNCEMENT") && (
                            <button className={`text-white font-semibold py-1 px-1 rounded
                            ${type === "ANNOUNCEMENT" ? "bg-primary_green" : "bg-gray-300"}`}
                                    onClick={() => {
                                        setType("ANNOUNCEMENT")
                                    }}>
                                Announcement
                            </button>
                        )}
                        {(alterType === "create" || type === "HOMEWORK") && (
                            <button className={`bg-gray-300 text-white font-semibold py-1 px-1 rounded
                            ${type === "HOMEWORK" ? "bg-primary_green" : "bg-gray-300"}`}
                                    onClick={() => {
                                        setType("HOMEWORK")
                                    }}>
                                Homework
                            </button>
                        )}
                    </>
                </div>
                {type === "HOMEWORK" && (
                    <div className="w-full mt-4">
                        <p className="text-gray-700">Deadline:</p>
                        <DatePicker
                            selected={deadline}
                            onChange={(date) => setDeadline(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            filterTime={filterPassedTime}
                            dateFormat="MMMM d, yyyy HH:mm"
                            className="w-60 bg-gray-100 rounded py-1 px-2 text-center"/>
                        {alterType === "create" && (
                            <>
                                <p className="text-gray-700 mt-3">Points available: {markInterval}</p>
                                <input
                                    id="slider"
                                    type="range"
                                    min="1"
                                    max="100"
                                    value={markInterval}
                                    onChange={(e) => setMarkInterval(Number(e.target.value))}
                                    className="w-full max-w-md h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                                />
                            </>
                        )}
                    </div>
                )}
                <button className={`mt-auto text-white font-semibold py-1 px-2 rounded transition
                ${(title.length < 3 || title.length > 250) || (content.length < 10) ? "bg-gray-300" : "bg-primary_green"}`}
                onClick={alterType === "create" ? handleCreatePost : handleUpdatePost}
                disabled={(title.length < 3 || title.length > 250) || (content.length < 10)}>
                    {alterType === "create" ? "Create" : "Update"}
                </button>
            </div>
        </div>
    )
}