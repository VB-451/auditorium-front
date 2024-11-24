import CoursePage from "@/pages/course-page";
import {fetchCourseData} from "@/utils/fetchCourseData";
import {fetchCoursePosts} from "@/utils/fetchCoursePosts";


export default async function CoursePageServer({ params }: { params: { courseId: string } }) {
    const { courseId } = await params;
    const courseData = await fetchCourseData(courseId);
    const coursePosts = await fetchCoursePosts(courseId);

    return <CoursePage courseData={courseData} coursePosts={coursePosts} />;
}
