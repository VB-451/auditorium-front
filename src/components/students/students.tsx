import {User} from "@/types/User";
import Student from "@/components/students/student";

export default function Students({courseUsers, isTeacher, course_id} : {courseUsers: Array<User> | undefined, isTeacher: boolean, course_id:number}) {
    const users = courseUsers ? courseUsers : [];

    return (
        <div className="bg-white rounded-lg w-fit min-w-72 h-fit px-4 py-3">
            <p className="text-2xl font-semibold text-primary_orange">Students:</p>
            <div className="w-full h-fit max-h-52 flex flex-col mt-3 overflow-scroll">
                {users.map(user => (
                    <Student studentData={user} key={user.id} isTeacher={isTeacher} course_id={course_id} />
                ))}
                {users.length === 0 && (
                    <p className="text-center">No students for now</p>
                )}
            </div>
        </div>
    )
}