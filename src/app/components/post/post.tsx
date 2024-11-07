import {CoursePost} from "@/app/course/[courseId]/course-page";

interface CoursePosts {
    coursePosts: CoursePost[];
}

export default function Post( {coursePosts} : CoursePosts ) {
    return (
        <>
            <div className={`w-full min-h-24 bg-white border-gray-300 rounded-lg border`}>

            </div>
        </>
    )
}