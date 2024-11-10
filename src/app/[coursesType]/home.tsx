import CoursePreviewServer from "@/app/components/course-preview/course-preview-server";
import {CourseData} from "@/app/[coursesType]/page";

interface HomeProps {
    data: CourseData[];
}

export default function Home({ data } : HomeProps ) {
    let colorVariable : number = 0;
    return (
        <>
            <section className={`w-full flex flex-row flex-wrap max-w-[95%]`}>
                {data.map((course: CourseData) => {
                    colorVariable++;
                    if(colorVariable === 5){colorVariable = 1}
                    return (
                        <CoursePreviewServer key={course.id} data={course} color={colorVariable} />
                    );
                })}
            </section>
        </>
    );
}