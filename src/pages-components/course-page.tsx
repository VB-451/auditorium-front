import Post from "@/components/post/post";
import {CourseData} from "@/types/Course";
import {CoursePost} from "@/types/Post";
import Options from "@/components/options/options";
import NewPostButton from "@/components/post/new-post-button";
import {User} from "@/types/User";
import {shortenText} from "@/utils/common/shortenText";

interface CoursePageProps {
    courseData: CourseData;
    cookiesID: number | undefined;
    coursePosts: Array<CoursePost>;
    courseUsers: Array<User>
}

export default function CoursePage({ courseData, coursePosts, cookiesID, courseUsers }: CoursePageProps) {

    return (
        <section className="w-full flex justify-center items-center">
            <div className="w-2/3 min-w-[800px]">
                <div className={`bg-primary_${courseData.color} w-full h-56 p-3 mb-4 rounded-lg flex flex-col-reverse justify-between`}>
                    <div className="flex justify-between items-center">
                        <p className="text-white font-bold text-3xl w-4/12 text-left" title={courseData.name}>{shortenText(courseData.name, 23)}</p>
                        {courseData.teacher_id === cookiesID && (
                            <p className="text-white font-bold text-xl text-center w-4/12">{`Join Key: ${courseData.join_key}`}</p>
                        )}
                        <p className={`text-white font-bold w-4/12 text-right`}>{courseData.teacher_name}</p>
                    </div>
                    <Options type={"course"} isTeacher={courseData.teacher_id === cookiesID} courseUsers={courseUsers} courseData={courseData}  />
                </div>
                <div>
                    {courseData.teacher_id === cookiesID && (
                        <NewPostButton courseData={courseData} />
                    )}
                    {!coursePosts.length && (
                        <p className="w-full text-3xl text-center font-semibold">There are no posts for now</p>
                    )}
                    {coursePosts.map((post) => (
                        <Post key={post.id} data={post} courseId={courseData.id} located="course"/>
                    ))}
                </div>
            </div>
        </section>
    );
}
