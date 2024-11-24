import CoursePreview from "@/components/course-preview/course-preview";
import {CourseData} from "@/types/Course";


export default async function CoursePreviewServer({ data }: { data: CourseData }) {
    return (
        <>
            <CoursePreview data={ data } />
        </>
    )
}