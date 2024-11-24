import CoursesPage from "@/pages/courses-page";
import {fetchCoursesBy} from "@/utils/fetchCoursesBy";

export default async function HomeTeacherServer() {
    const coursesData = await fetchCoursesBy(undefined,7)

    return (
    <>
      <CoursesPage data={coursesData} />
    </>
  );
}
