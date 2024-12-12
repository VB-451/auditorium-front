import {SubmissionInterface} from "@/types/Submission";
import {CoursePost} from "@/types/Post";
import {useState} from "react";
import {useModalContext} from "@/contexts/modal-context";
import {createSubmission} from "@/utils/submissions/createSubmission";
import {useRouter} from "next/navigation";
import {updateSubmission} from "@/utils/submissions/updateSubmission";

export default function AlterSubmission({alterType, submissionData, postData, toggle}:{alterType: string, submissionData?: SubmissionInterface, postData?:CoursePost, toggle?:()=>void }) {
    const [content, setContent] = useState(submissionData?.content || '');

    const { user_id, username, token } = useModalContext();
    const router = useRouter()


    const handleCreateSubmission = async ()=>{
        const submission = await createSubmission(content, Number(user_id), postData?.id, username, postData?.deadline, token);
        router.push(`/course/${postData?.course_id}/post/${postData?.id}/submissions/${submission.id}`);
    }

    const handleUpdateSubmission = async () =>{
        await updateSubmission(submissionData?.id, content, token);
        if(toggle){
            toggle();
        }
        router.refresh()
    }

    return (
        <div className="w-[790px] h-80 px-3 py-3 bg-white rounded-xl flex flex-col items-center justify-between">
            <textarea placeholder="Content"
                      className="bg-gray-100 rounded w-full h-5/6 py-1 px-2 text outline-0 resize-none"
                      onChange={(e) => setContent(e.target.value)} value={content}/>
            <button className={`text-white text-xl font-semibold py-1 px-2 rounded ${content.length ? "bg-primary_green" : "bg-gray-300"}`}
            onClick={alterType === "create" ? handleCreateSubmission : handleUpdateSubmission}>
                {alterType === "create" ? "Submit" : "Update"}
            </button>
        </div>
    )
}