import CoursesPage from "@/pages/courses-page";
import {fetchCoursesBy} from "@/utils/courses/fetchCoursesBy";
import {cookies} from "next/headers";
import NotFound from "@/app/not-found";
import {redirect} from "next/navigation";

export default async function HomeStudentServer() {
    const cookieStore = await cookies();
    const coursesData = await fetchCoursesBy(cookieStore.get("userID")?.value, undefined, cookieStore.get("accessToken")?.value)
    if (coursesData.statusCode === 404) {
        return <NotFound />;
    } else if (coursesData.statusCode === 403) {
        redirect(`/login`)
    }

    return (
    <>
      <CoursesPage data={coursesData} type="student" />
    </>
  );
}
