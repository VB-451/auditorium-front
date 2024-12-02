import {User} from "@/types/User";
import Image from "next/image";

export default function Student({studentData} : {studentData: User}){
    return (
        <div className="w-full flex justify-between items-center mb-2 group">
            <div className={"flex flex-grow items-center mr-5"}>
                <Image className="rounded-full w-auto h-9 mr-2" src={"/pfp.jpg"} alt={"pfp"} width={40} height={40} />
                <div className="flex flex-col items-start">
                    <p className="">{studentData.name}</p>
                    <p className="text-sm text-gray-500">{studentData.email}</p>
                </div>
            </div>
            <Image className="opacity-0 group-hover:opacity-100 transition-opacity" src={"/cancel.svg"} alt={"cancel"} width={15} height={15} />
        </div>
    )
}