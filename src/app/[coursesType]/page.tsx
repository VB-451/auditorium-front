import Home from "@/app/[coursesType]/home";
import NotFound from "@/app/not-found";

export interface CourseData {
    id: number
    name: string
    join_key: string
    teacher_id: number
}

let coursesData : Array<CourseData> = [];

const fetchCoursesByUser = async (userId: number) =>{
    const response = await fetch(`${process.env.BACK_HOST}courses/by-user/${userId}`);
    coursesData = await response.json();
}

const fetchCoursesByTeacher = async (teacherId: number) =>{
    const response = await fetch(`${process.env.BACK_HOST}courses/by-teacher/${teacherId}`);
    coursesData = await response.json();
}

export default async function HomeServer({ params } : { params: { coursesType: string }}) {
    const { coursesType } = await params;

    if (coursesType === "student") {
        await fetchCoursesByUser(4)
    } else if (coursesType === "teacher") {
        await fetchCoursesByTeacher(1)
    } else {
        return <NotFound />
    }

    return (
    <>
      <Home data={coursesData} />
    </>
  );
}
