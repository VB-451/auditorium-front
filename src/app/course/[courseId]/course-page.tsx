import styles from "./styles.module.css"
import Post from "@/app/components/post/post";

type CourseData = {
    id: number;
    name: string;
    join_key: string;
};

export interface CoursePost {
    id: number;
    type: string;
    title: string;
    content: string;
    course_id: number;
    teacher_id: number;
    created_at: Date;
}

interface CoursePageProps {
    courseData: CourseData;
    coursePosts: Array<CoursePost>;
}



interface CoursePageProps {
    courseData: CourseData;
}

export default function CoursePage({ courseData, coursePosts }: CoursePageProps) {
    return (
        <>
            <section className={`w-full h-64 flex justify-center items-center`}>
                <div className={`w-2/3 min-w-fit h-64`}>
                    <div className={`bg-black w-full h-56 p-3 mb-4 rounded-lg flex justify-start items-end ${styles.description}`}>
                        <p className={`text-white font-bold text-3xl`}>{courseData.name}</p>
                    </div>
                    <div className={``}>
                        <Post coursePost={coursePosts} />
                    </div>
                </div>
            </section>
        </>
    );
}
