import Link from "next/link";
import { CourseDataAndName } from "@/app/types/CourseAndName";


export default function CoursePreview({ data, color } : {data: CourseDataAndName, color:number }){
    const colorClass = (() => {
        switch (color) {
            case 1:
                return "bg-primary_pink";
            case 2:
                return "bg-primary_orange";
            case 3:
                return "bg-primary_purple";
            case 4:
                return "bg-primary_blue";
        }
    })();

    return (
        <>
            <div className={`w-1/5 max-w-72 min-w-64 h-72 m-3 bg-white border border-gray-400 rounded-xl flex flex-col justify-start items-start`}>
                <div className={`h-1/2 w-full p-4 ${colorClass} rounded-t-[11px]`}>
                    <div className={`font-bold text-white text-3xl hover:underline`}>
                        <Link href={`/course/${data.id}`}>{`${data.name}`}</Link>
                    </div>
                    <p className={`text-white`}>{data.teacher_name}</p>
                </div>
            </div>
        </>
    )
}