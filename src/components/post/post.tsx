import {CoursePost} from "@/types/Post";
import Image from "next/image";
import Link from "next/link";
import {formatDate} from "@/utils/common/formatDate";
import {dateDiff} from "@/utils/common/dateDiff";

interface PostProps {
    data: CoursePost;
    courseId: number;
    located: string;
}

export default function Post({ data, courseId, located }: PostProps) {
    const isLate = new Date() > new Date(data.deadline) ? "passed" : "left"

    return (
        <Link className={`z-10 `} href={`/course/${courseId}/post/${data.id}`}>
            <div
                className="w-full max-w-full min-h-fit  bg-white border-gray-300 rounded-lg border p-4 mb-2.5 flex items-center">
                <div className="flex flex-grow items-center">
                    <div
                        className={`bg-primary_green h-10 min-h-10 w-10 min-w-10 mr-4 flex items-center justify-center rounded-full `}>
                        <Image className={data.type === "HOMEWORK" ? `w-5 h-5 m-3.5` : `w-8 m-2 h-8`}
                               src={data.type === "HOMEWORK" ? "/homework.svg" : "/announcement.svg"} alt="Icon"
                               width={40} height={40}/>
                    </div>
                    <div>
                        <p className={`font-bold`}>{data.title}</p>
                        <p>{formatDate(data.created_at.toString(), "")}</p>
                    </div>
                </div>
                {located === "courses" && (
                    <p className="mr-3 font-semibold text-primary_purple">
                        {dateDiff(new Date().toString(), data.deadline.toString(), isLate)}
                    </p>
                )}
            </div>
        </Link>

    );
}
