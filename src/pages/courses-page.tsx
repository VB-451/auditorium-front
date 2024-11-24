import CoursePreviewServer from "@/components/course-preview/course-preview-server";
import {CourseData} from "@/types/Course";

interface HomeProps {
    data: CourseData[];
}

export default function CoursesPage({ data } : HomeProps ) {

    return (
        <>
            <section className={`w-full flex flex-row flex-wrap max-w-[95%]`}>
                {data.map((course: CourseData) => {
                    return (
                        <CoursePreviewServer key={course.id} data={course} />
                    );
                })}
            </section>
        </>
    );
}