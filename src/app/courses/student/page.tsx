import CoursesPage from "@/pages/courses-page";
import {fetchCoursesBy} from "@/utils/fetchCoursesBy";
import {cookies} from "next/headers";

export default async function HomeStudentServer() {
    const cookieStore = await cookies();
    const coursesData = await fetchCoursesBy(cookieStore.get("userID")?.value, undefined, cookieStore.get("accessToken")?.value)

    return (
    <>
      <CoursesPage data={coursesData} />
    </>
  );
}
