import {User} from "@/types/User";
import Student from "@/components/students/student";

export default function Students({courseUsers} : {courseUsers: Array<User> | undefined}) {
    const users = courseUsers ? courseUsers : [];
    return (
        <div className="bg-white rounded-lg w-fit h-fit p-4">
            <p className="text-2xl font-semibold text-primary_orange">Students:</p>
            <div className="w-full h-48 flex flex-col mt-3 overflow-scroll">
                {users.map(user => (
                    <Student studentData={user} key={user.id} />
                ))}
            </div>
        </div>
    )
}