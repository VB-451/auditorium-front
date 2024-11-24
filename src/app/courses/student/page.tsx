import CoursesPage from "@/pages/courses-page";
import {fetchCoursesBy} from "@/utils/fetchCoursesBy";

export default async function HomeStudentServer() {
    const coursesData = await fetchCoursesBy(7, undefined)

    return (
    <>
      <CoursesPage data={coursesData} />
    </>
  );
}
