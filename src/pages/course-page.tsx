import Post from "@/components/post/post";
import {CourseData} from "@/types/Course";
import {CoursePost} from "@/types/Post";

interface TeacherData{
    id: number;
    name: string;
}

interface CoursePageProps {
    courseData: CourseData;
    coursePosts: Array<CoursePost>;
}

export default function CoursePage({ courseData, coursePosts }: CoursePageProps) {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="w-2/3">
                <div className={`bg-primary_${courseData.color} w-full h-56 p-4 mb-4 rounded-lg flex justify-between items-end`}>
                    <p className="text-white font-bold text-3xl">{courseData.name}</p>
                    <p className={`text-white font-bold`}>{courseData.teacher_name}</p>
                </div>
                <div>

                    {!coursePosts.length && (
                        <p className="w-full text-3xl text-center font-semibold">There are no posts for now</p>
                    )}
                    {coursePosts.map((post) => (
                        <Post key={post.id} data={post} courseId={courseData.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}
