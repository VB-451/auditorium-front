import CoursePreviewServer from "@/components/course-preview/course-preview-server";
import {CourseData} from "@/types/Course";
import NewCoursePreview from "@/components/course-preview/new-course-preview";
import {CoursePost} from "@/types/Post";
import Post from "@/components/post/post";

interface HomeProps {
    data: CourseData[];
    posts: CoursePost[]
    type: string,
}

export default function CoursesPage({ data, posts, type } : HomeProps ) {

    return (
        <>
            <section className={`w-full flex flex-col mb-5`}>
                <div className={`flex overflow-x-auto overflow-y-hidden`}>
                    {data.length > 3 && (
                        <NewCoursePreview type={type} />
                    )}
                    {data.map((course: CourseData) => {
                        return (
                            <CoursePreviewServer key={course.id} data={course} />
                        );
                    })}
                    {data.length <= 3 && (
                        <NewCoursePreview type={type} />
                    )}
                </div>
                {posts.length > 0 && (
                    <div className="mt-5">
                        <p className="text-2xl">
                            {type === "teacher" ? "Posts with unmarked submissions:" : "Posts you have to submit to:"}
                        </p>
                        <div className="mt-2 pr-1 w-1/3 max-h-80 overflow-y-auto">
                            {posts.map((post) => (
                                <Post key={post.id} data={post} courseId={post.course_id} located="courses"/>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}