import CoursesPage from "@/pages/courses-page";
import {fetchCoursesBy} from "@/utils/fetchCoursesBy";
import {cookies} from "next/headers";

export default async function HomeTeacherServer() {
    const cookieStore = await cookies();
    const coursesData = await fetchCoursesBy(undefined, cookieStore.get("userID")?.value, cookieStore.get("accessToken")?.value)

    return (
    <>
      <CoursesPage data={coursesData} />
    </>
  );
}
