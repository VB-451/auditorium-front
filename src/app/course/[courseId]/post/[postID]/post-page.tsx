import {CoursePost} from "@/app/course/[courseId]/course-page";
import Image from "next/image";
import { formatDate } from "@/app/components/post/post";
import CommentsServer from "@/app/components/comments/comments-server";


export default function PostPage({ postData }: { postData: CoursePost }) {
    return (
        <section className="flex justify-center mt-12">
            <div className="bg-white min-h-96 w-2/3 rounded-xl flex items-center justify-start flex-col">
                <div className="w-full h-fit flex items-center px-7 py-4">
                    <div className="flex items-center flex-grow">
                        <div className="bg-primary_green min-w-12 min-h-10 flex items-center justify-center rounded-full mr-7">
                            <Image
                                className={postData.type === "HOMEWORK" ? "w-5 h-5 m-3.5" : "w-8 m-2 h-8"}
                                src={postData.type === "HOMEWORK" ? "/homework.svg" : "/announcement.svg"}
                                alt="Icon"
                                width={40} height={40}
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-2xl mb-1">{postData.title}</p>
                            <p>{formatDate(postData.created_at.toString())}</p>
                        </div>
                    </div>
                    {postData.type === "HOMEWORK" && (
                        <div className="w-full max-w-64 min-w-52 min-h-32 flex justify-center items-center">
                            <button className="bg-primary_green text-white text-xl font-bold px-3 py-2 rounded">Submit Homework</button>
                        </div>
                    )}
                </div>
                <div className="w-[95%] h-[1px] bg-gray-200 mb-6"/>
                <div className="flex w-full pl-8 mb-6" >
                    <p>{postData.content}</p>
                </div>
                <div className="w-[95%] h-[1px] bg-gray-200 mb-6"/>
                <CommentsServer postID={postData.id} />
            </div>
        </section>

    )
}