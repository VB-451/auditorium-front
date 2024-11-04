import styles from "@/app/styles.module.css";
import CoursePreviewServer from "@/app/components/course-preview/course-preview-server";
import {CourseData} from "@/app/[coursesType]/page";

interface HomeProps {
    data: CourseData[];
}

export default function Home({ data } : HomeProps ) {
    return (
        <>
            <section>
                <div className={`w-full flex flex-row flex-wrap ${styles.courses}`}>
                    {data.map((course : CourseData)=>(
                        <CoursePreviewServer key={course.id} data={course}/>
                    ))}
                </div>
            </section>
        </>
    );
}