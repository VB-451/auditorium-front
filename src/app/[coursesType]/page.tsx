import Home from "@/app/[coursesType]/home";
import NotFound from "@/app/not-found";
import {CourseData} from "@/app/types/Course";
import {fetchCoursesBy} from "@/app/utils/fetchCoursesBy";

export default async function HomeServer({ params } : { params: { coursesType: string }}) {
    const { coursesType } = await params;

    let coursesData : Array<CourseData> = [];

    if (coursesType === "student") {
        coursesData = await fetchCoursesBy(4, undefined);
    } else if (coursesType === "teacher") {
        coursesData = await fetchCoursesBy(undefined,1)
    } else {
        return <NotFound />
    }

    return (
    <>
      <Home data={coursesData} />
    </>
  );
}
