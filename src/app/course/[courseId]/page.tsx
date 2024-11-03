import CoursePage from "@/app/course/[courseId]/course-page";

interface CoursePageParams {
    courseId: string;
}

const fetchData = async (id: string) => {
    const response = await fetch(`${process.env.BACK_HOST}courses/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
};

export default async function CoursePageServer({ params }: { params: CoursePageParams }) {
    const { courseId } = await params;
    const data = await fetchData(await courseId);
    return <CoursePage data={data} />;
}
