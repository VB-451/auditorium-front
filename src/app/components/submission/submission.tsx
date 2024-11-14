import {SubmissionInterface} from "@/app/types/Submission";
import {fetchUserData} from "@/app/utils/fetchUserData";
import Image from "next/image";
import {formatDate} from "@/app/utils/formatDate";

export default async function Submission({submissionData} : {submissionData: SubmissionInterface}){
    const studentData = await fetchUserData(submissionData.student_id);

    return (
            <div className="w-full h-16 p-3 bg-white mb-4 rounded-xl flex justify-between items-center">
                <div className="flex-grew flex items-center justify-start">
                    <Image className="rounded-full w-10 h-10 mr-3" src={"/pfp.jpg"} alt={"pfp"} width={40} height={40} />
                    <p className="mr-3 text-lg font-sans">{studentData.name}</p>
                    <div className="w-[1px] h-9 bg-gray-300 mr-3" />
                    <p className="text-primary_green font-semibold">{`on ${formatDate(submissionData.created_at.toString())}`}</p>
                </div>
                <div className="font-semibold">
                    {submissionData.mark ? <p className="text-primary_green">
                        {`${submissionData.mark}/10`}
                    </p> : <p className="text-primary_pink">
                       Not marked yet
                    </p>}
                </div>
            </div>
    )
}