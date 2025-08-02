import {SubmissionInterface} from "@/types/Submission";
import {CoursePost} from "@/types/Post";
import {useState} from "react";
import {useModalContext} from "@/contexts/modal-context";
import {createSubmission} from "@/utils/submissions/createSubmission";
import {useRouter} from "next/navigation";
import {updateSubmission} from "@/utils/submissions/updateSubmission";
import Image from "next/image";
import {uploadFile} from "@/utils/files/uploadFile";
import {FileData} from "@/types/FileData";
import {deleteFile} from "@/utils/files/deleteFile";

export default function AlterSubmission({alterType, submissionData, postData, toggle, fileData} :
    {alterType: string, submissionData?: SubmissionInterface, postData?:CoursePost, toggle?:()=>void, fileData?: FileData | null }) {
    const [content, setContent] = useState(submissionData?.content || '');
    const [file, setFile] = useState<File | null | boolean>(fileData ? true : null);
    const [fileRemoved, setFileRemoved] = useState(false);

    const { user_id, username, token } = useModalContext();
    const router = useRouter()

    const removeFile = () =>{
        setFile(null);
        setFileRemoved(true);
    }

    const handleCreateSubmission = async ()=>{
        const submission = await createSubmission(content, Number(user_id), postData?.id, username, postData?.deadline, token);
        if(file){
            const formData = new FormData();
            formData.append('file', file);
            formData.append('submission_id', submission.id);
            await uploadFile(formData, token)
        }
        router.push(`/course/${postData?.course_id}/post/${postData?.id}/submissions/${submission.id}`);
    }

    const handleUpdateSubmission = async () =>{
        if(fileRemoved){
            await deleteFile(fileData?.id, token)
        }
        if(file){
            const formData = new FormData();
            formData.append('file', file);
            formData.append('submission_id', submissionData.id);
            await uploadFile(formData, token)
        }
        await updateSubmission(submissionData?.id, content, token);
        if(toggle){
            toggle();
        }
        router.refresh()
    }

    return (
        <div className="w-[790px] h-80 py-4 px-3 bg-white rounded-xl flex items-center justify-between">
            <div className="w-8/12 h-full  flex flex-col">
                <textarea placeholder="Content"
                          className="bg-gray-100 rounded w-full h-full py-1 px-2 text outline-0 resize-none"
                          onChange={(e) => setContent(e.target.value)} value={content}/>
            </div>
            <div className="w-4/12 h-full px-3 flex flex-col justify-between">
                {!file ? (
                    <label
                        className="cursor-pointer border-dashed border-primary_green border-2 rounded-md py-2 w-full text-center text-primary_green font-bold">
                        <input className="hidden" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)}/>
                        Upload File
                    </label>
                ) : (
                    <div className="py-2 px-2 w-full flex justify-between items-center rounded-md bg-gray-100 ">
                        <Image src={"/file.svg"} alt={"file"} width={20} height={20}/>
                        <div className="">{file.name || fileData?.original_filename}</div>
                        <button onClick={removeFile}>
                            <Image src={"/delete.svg"} alt={"cancel"} width={18} height={18}/>
                        </button>
                    </div>
                )}
                <button
                    className={`text-white text-xl font-semibold py-1 px-2 rounded ${content.length >= 3 ? "bg-primary_green" : "bg-gray-300"}`}
                    onClick={alterType === "create" ? handleCreateSubmission : handleUpdateSubmission}
                    disabled={content.length < 3}>
                    {alterType === "create" ? "Submit" : "Update"}
                </button>
            </div>
        </div>
    )
}