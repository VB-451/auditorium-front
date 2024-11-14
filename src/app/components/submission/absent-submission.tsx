import Image from "next/image";
import {User} from "@/app/types/User";
import {formatDate} from "@/app/utils/formatDate";

export default async function AbsentSubmission({userData} : {userData: User}){
    return (
        <div className="w-full h-16 p-3 bg-white mb-4 rounded-xl flex justify-between items-center">
            <div className="flex-grew flex items-center justify-start">
                <Image className="rounded-full w-10 h-10 mr-3" src={"/pfp.jpg"} alt={"pfp"} width={40} height={40}/>
                <p className="mr-3 text-lg font-sans">{userData.name}</p>
                <div className="w-[1px] h-9 bg-gray-300 mr-3"/>
                <p className="text-primary_pink font-semibold">{`2 hours left`}</p>
            </div>
            <div className="font-semibold">
                <p className="text-primary_pink">Not submitted</p>
            </div>
        </div>
    )
}