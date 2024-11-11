import CoursePage from "@/app/course/[courseId]/course-page";
import {fetchUserData} from "@/app/components/course-preview/course-preview-server";

const fetchCourseData = async (id: string) => {
    const response = await fetch(`${process.env.BACK_HOST}courses/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
};

const fetchCoursePosts = async (id: string) => {
    const response = await fetch(`${process.env.BACK_HOST}posts/by-course/${id}`);
    return await response.json();
}

export default async function CoursePageServer({ params }: { params: { courseId: string } }) {
    const { courseId } = await params;
    const courseData = await fetchCourseData(await courseId);
    const coursePosts = await fetchCoursePosts(courseId);
    const teacherData = await fetchUserData(courseData.teacher_id);

    return <CoursePage courseData={courseData} coursePosts={coursePosts} teacherData={teacherData} />;
}
