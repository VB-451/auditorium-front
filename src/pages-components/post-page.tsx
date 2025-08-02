import Image from "next/image";
import CommentsServer from "@/components/comments/comments-server";
import {CoursePost} from "@/types/Post";
import {formatDate} from "@/utils/common/formatDate";
import Link from "next/link";
import Options from "@/components/options/options";
import {dateDiff} from "@/utils/common/dateDiff";
import {shortenText} from "@/utils/common/shortenText";
import NewSubmissionButton from "@/components/submission/new-submission-button";
import {FileData} from "@/types/FileData";


export default async function PostPage({ postData, cookieName, submission, fileData }: { postData: CoursePost, cookieName: string | undefined,
    submission: {id: number, mark: number}, fileData: FileData | null }) {

    const isLate = new Date() > new Date(postData.deadline) ? "passed" : "left"
    return (
        <section className="flex flex-col justify-center items-center mb-5">
            <div className={`bg-primary_blue w-2/3 h-16 p-4 mb-3 rounded-lg flex flex-row justify-between items-center`}>
                <div className={"flex items-center flex-grow"}>
                    <Link className={"mr-2"} href={`/course/${postData.course_id}`}>
                        <p className="text-white font-bold text-xl hover:underline">Course</p>
                    </Link>
                    <p className="text-white font-bold text-xl">{`> ${shortenText(postData.title, 30)}`}</p>
                </div>
            </div>
            <div className="bg-white h-fit w-2/3 rounded-xl px-7 py-4 flex flex-col">
                <div className="w-full h-fit flex items-center">
                    <div className="flex items-center flex-grow">
                        <div
                            className="bg-primary_green min-w-12 min-h-10 flex items-center justify-center rounded-full mr-7">
                            <Image className={postData.type === "HOMEWORK" ? "w-5 h-5 m-3.5" : "w-8 m-2 h-8"}
                                   src={postData.type === "HOMEWORK" ? "/homework.svg" : "/announcement.svg"}
                                   alt="Icon"
                                   width={40} height={40}
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-2xl">{postData.title}</p>
                            <p className="mt-1">{`${formatDate(postData.edited_at ? postData.edited_at.toString() : postData.created_at.toString(), "hour")}`}</p>
                        </div>
                    </div>
                    {postData.type === "HOMEWORK" && (
                        <div className="w-fit flex items-center justify-between">
                            {!(cookieName === postData.teacher_name) ? (
                                <>
                                    {!submission.id && (
                                        <>
                                            <p className="mr-3 font-semibold text-primary_purple">
                                                {dateDiff(new Date().toString(), postData.deadline.toString(), isLate)}
                                            </p>
                                            <NewSubmissionButton postData={postData}/>
                                        </>
                                    )}
                                    {submission.id && (
                                        <>
                                            <p className="text-lg text-primary_green font-semibold px-0.5 bg-gray-100 rounded-r">
                                                {`${submission.mark ? submission.mark : "?"}/${postData.mark_interval}`}
                                            </p>
                                            <Link href={`${postData.id}/submissions/${submission.id}`}>
                                                <button
                                                    className="bg-primary_green ml-2 text-white text-xl font-bold px-3 py-2 rounded">
                                                    View Submission
                                                </button>
                                            </Link>
                                        </>
                                    )}
                                </>
                            ) : (
                                <Link href={`/course/${postData.course_id}/post/${postData.id}/submissions`}>
                                    <button
                                        className="mr-3 bg-primary_green text-white text-xl font-bold px-3 py-2 rounded">View
                                        Submissions
                                    </button>
                                </Link>
                            )}
                        </div>
                    )}
                    <Options type="post" isTeacher={postData.teacher_name === cookieName} postData={postData} fileData={fileData} />
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="w-full h-[1px] bg-gray-200 mt-5"/>
                </div>
                <div className="flex w-full mt-4 pl-1 whitespace-break-spaces"><p>{postData.content}</p></div>
                <div className="flex justify-center items-center w-full">
                    <div className="w-full h-[1px] bg-gray-200 mt-4"/>
                </div>
                {fileData && (
                    <>
                        <a href={`${process.env.NEXT_PUBLIC_BACK_HOST}/files/${fileData.local_filename}`} download
                           target="_blank"
                           className="mt-4 py-3 px-2 w-fit flex justify-between items-center rounded-md bg-gray-100 ">
                            <Image src={"/file.svg"} alt={"file"} width={20} height={20}/>
                            <div className="ml-1">{fileData.original_filename}</div>
                        </a>
                        <div className="flex justify-center items-center w-full">
                            <div className="w-full h-[1px] bg-gray-200 mt-4"/>
                        </div>
                    </>
                )}
                <CommentsServer id={postData.id} teacherName={postData.teacher_name} type={"post"}/>
            </div>
        </section>

    )
}