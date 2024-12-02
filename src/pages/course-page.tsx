import Post from "@/components/post/post";
import {CourseData} from "@/types/Course";
import {CoursePost} from "@/types/Post";
import Options from "@/components/options/options";
import NewPost from "@/components/post/new-post";
import {User} from "@/types/User";

interface CoursePageProps {
    courseData: CourseData;
    cookiesID: number | undefined;
    coursePosts: Array<CoursePost>;
    courseUsers: Array<User>
}

export default function CoursePage({ courseData, coursePosts, cookiesID, courseUsers }: CoursePageProps) {

    return (
        <section className="w-full flex justify-center items-center">
            <div className="w-2/3">
                <div className={`bg-primary_${courseData.color} w-full h-56 p-3 mb-4 rounded-lg flex flex-col-reverse justify-between`}>
                    <div className="flex justify-between items-center">
                        <p className="text-white font-bold text-3xl">{courseData.name}</p>
                        {courseData.teacher_id === cookiesID && (
                            <p className="text-white font-bold text-xl">{`Join Key: ${courseData.join_key}`}</p>
                        )}
                        <p className={`text-white font-bold`}>{courseData.teacher_name}</p>
                    </div>
                    <Options type={"course"} isTeacher={courseData.teacher_id === cookiesID} id={courseData.id} courseUsers={courseUsers}  />
                </div>
                <div>
                    {courseData.teacher_id === cookiesID && (
                        <NewPost courseData={courseData} />
                    )}
                    {!coursePosts.length && (
                        <p className="w-full text-3xl text-center font-semibold">There are no posts for now</p>
                    )}
                    {coursePosts.map((post) => (
                        <Post key={post.id} data={post} courseId={courseData.id}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
