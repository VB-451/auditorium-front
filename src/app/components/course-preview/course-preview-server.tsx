import CoursePreview from "@/app/components/course-preview/course-preview";

interface CoursePreviewServerData {
    id: number,
    name: string,
    teacher_id: number
}

const fetchTeacherData = async (teacher_id: number) =>{
    const response = await fetch(`${process.env.BACK_HOST}users/${teacher_id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
}

export default async function CoursePreviewServer({ data }: { data: CoursePreviewServerData }) {
    const teacherData = await fetchTeacherData(data.teacher_id);

    return (
        <>
            <CoursePreview data={{id: data.id, name: data.name, teacher_name: teacherData.name}} />
        </>
    )
}