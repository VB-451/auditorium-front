import CoursePreview from "@/app/components/course-preview/course-preview";

interface CoursePreviewServerData {
    id: number,
    name: string,
    teacher_id: number
}

export const fetchUserData = async (user_id: number) =>{
    console.log(user_id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}users/${user_id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
}

export default async function CoursePreviewServer({ data, color }: { data: CoursePreviewServerData, color: number }) {
    const teacherData = await fetchUserData(data.teacher_id);

    return (
        <>
            <CoursePreview data={{id: data.id, name: data.name, teacher_name: teacherData.name}} color={color} />
        </>
    )
}