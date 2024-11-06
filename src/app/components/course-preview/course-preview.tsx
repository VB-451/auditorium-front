import styles from "./styles.module.css"
import Link from "next/link";

interface CourseData {
    id: number
    name: string
    teacher_name: string
}

export default function CoursePreview({ data } : {data: CourseData }){
    return (
        <>
            <div className={`w-1/5 max-w-72 min-w-64 h-72 m-3 bg-white border border-gray-400 rounded-xl flex flex-col justify-start items-start`}>
                <div className={`h-1/2 w-full p-4 ${styles.coursePreview}`}>
                    <div className={`font-bold text-white text-3xl hover:underline`}>
                        <Link href={`/course/${data.id}`}>{`${data.name}`}</Link>
                    </div>
                    <p className={`text-white`}>{data.teacher_name}</p>
                </div>
            </div>
        </>
    )
}