import CoursePage from "@/app/course/[courseId]/course-page";
import {fetchUserData} from "@/app/utils/fetchUserData";
import {fetchCourseData} from "@/app/utils/fetchCourseData";
import {fetchCoursePosts} from "@/app/utils/fetchCoursePosts";


export default async function CoursePageServer({ params }: { params: { courseId: string } }) {
    const { courseId } = await params;
    const courseData = await fetchCourseData(await courseId);
    const coursePosts = await fetchCoursePosts(courseId);
    const teacherData = await fetchUserData(courseData.teacher_id);

    return <CoursePage courseData={courseData} coursePosts={coursePosts} teacherData={teacherData} />;
}
