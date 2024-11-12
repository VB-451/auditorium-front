import CoursePreview from "@/app/components/course-preview/course-preview";
import {fetchUserData} from "@/app/utils/fetchUserData";
import {CoursePreviewServerData} from "@/app/types/CoursePreview";


export default async function CoursePreviewServer({ data, color }: { data: CoursePreviewServerData, color: number }) {
    const teacherData = await fetchUserData(data.teacher_id);

    return (
        <>
            <CoursePreview data={{id: data.id, name: data.name, teacher_name: teacherData.name}} color={color} />
        </>
    )
}