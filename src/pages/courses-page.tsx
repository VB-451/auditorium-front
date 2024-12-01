import CoursePreviewServer from "@/components/course-preview/course-preview-server";
import {CourseData} from "@/types/Course";
import NewCoursePreview from "@/components/course-preview/new-course-preview";

interface HomeProps {
    data: CourseData[];
    type: string,
}

export default function CoursesPage({ data, type } : HomeProps ) {

    return (
        <>
            <section className={`w-full flex flex-row flex-wrap max-w-[95%]`}>
                {data.map((course: CourseData) => {
                    return (
                        <CoursePreviewServer key={course.id} data={course} />
                    );
                })}
                <NewCoursePreview type={type} />
            </section>
        </>
    );
}