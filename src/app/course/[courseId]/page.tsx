import CoursePage from "@/pages-components/course-page";
import {fetchCourseData} from "@/utils/courses/fetchCourseData";
import {fetchCoursePosts} from "@/utils/courses/fetchCoursePosts";
import {cookies} from "next/headers";
import NotFound from "@/app/not-found";
import { redirect } from 'next/navigation'
import {fetchCourseUsers} from "@/utils/courses/fetchCourseUsers";


export default async function CoursePageServer({ params }: { params: { courseId: string } }) {
    const { courseId } = params;
    const cookieStore = await cookies();
    const courseData = await fetchCourseData(courseId, cookieStore.get("accessToken")?.value);
    if (courseData.statusCode === 404) {
        return <NotFound />;
    } else if (courseData.statusCode === 403) {
        redirect(`/login`)
    }
    const courseUsers = await fetchCourseUsers(courseId, cookieStore.get("accessToken")?.value)
    const coursePosts = await fetchCoursePosts(courseId, cookieStore.get("accessToken")?.value);

    return <CoursePage courseData={courseData} cookiesID={Number(cookieStore.get("userID")?.value)} coursePosts={coursePosts} courseUsers={courseUsers} />;
}
