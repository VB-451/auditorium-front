import Image from "next/image";
import CommentsServer from "@/components/comments/comments-server";
import {CoursePost} from "@/types/Post";
import {formatDate} from "@/utils/formatDate";
import {fetchCourseData} from "@/utils/fetchCourseData";
import {shortenText} from "@/utils/shortenText";
import Link from "next/link";


export default async function PostPage({ postData }: { postData: CoursePost }) {
    const courseData= await fetchCourseData(postData.course_id);

    return (
        <section className="flex flex-col justify-center items-center mb-5">
            <div className={`bg-primary_blue w-2/3 h-16 p-4 mb-3 rounded-lg flex flex-row justify-between items-center`}>
                <div className={"flex items-center flex-grow"}>
                    <Link className={"mr-2"} href={`/course/${courseData.id}`}>
                        <p className="text-white font-bold text-xl hover:underline">{courseData.name}</p>
                    </Link>
                    <p className="text-white font-bold text-xl">{`> ${shortenText(postData.title, 30)}`}</p>
                </div>
                <p className={`text-white font-bold`}>{courseData.teacher_name}</p>
            </div>
            <div className="bg-white h-fit w-2/3 rounded-xl flex items-center justify-start flex-col">
                <div className="w-full h-fit flex items-center px-7 py-4">
                    <div className="flex items-center flex-grow">
                        <div className="bg-primary_green min-w-12 min-h-10 flex items-center justify-center rounded-full mr-7">
                            <Image className={postData.type === "HOMEWORK" ? "w-5 h-5 m-3.5" : "w-8 m-2 h-8"}
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
                        <div className="w-full max-w-64  flex justify-center items-center">
                            <button className="bg-primary_green text-white text-xl font-bold px-3 py-2 rounded">Submit
                                Homework
                            </button>
                            <Link href={`/course/${postData.course_id}/post/${postData.id}/submissions`}>
                                <button className="bg-primary_green text-white text-xl font-bold px-3 py-2 rounded">View
                                    Submissionss
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="w-[95%] h-[1px] bg-gray-200 mb-6"/>
                <div className="flex w-full pl-8 mb-6"><p>{postData.content}</p></div>
                <div className="w-[95%] h-[1px] bg-gray-200 mb-6"/>
                <CommentsServer postID={postData.id} teacherName={postData.teacher_name}/>
            </div>
        </section>

    )
}