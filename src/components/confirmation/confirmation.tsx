import {useModalContext} from "@/contexts/modal-context";
import {usePathname, useRouter} from "next/navigation";

interface ConfirmationProps {
    question: string,
    confirmName: string,
    executeFunction: (id: number, token: string | undefined)=> Promise<string>,
    toggle: () => void,
    id: number | undefined;
}

export default function Confirmation({question, confirmName, executeFunction, toggle, id} : ConfirmationProps) {

    const { token } = useModalContext();
    const router = useRouter();
    const pathname = usePathname();

    const handleDelete = async () =>{
        const response = await executeFunction(id || 0, token);
        if(pathname){
            if(response === "post"){
                router.push(`/course/${pathname.split("/")[2]}`);
            } else if(response === "course"){
                router.push("/courses/teacher")
            }
        }
    }
    return (
        <div className="bg-white w-96 h-52 py-4 px-4 rounded-xl flex flex-col items-center justify-between">
            <p className="text-3xl font-semibold text-gray-400">Are you sure?</p>
            <p className="text-center text-xl mt-3">{question}</p>
            <div className="flex items-center justify-evenly w-full mt-3">
                <button className="bg-gray-400 text-white text-xl font-semibold py-2 px-3 rounded" onClick={toggle}>Cancel</button>
                <button className="bg-primary_pink text-white text-xl font-semibold py-2 px-3 rounded" onClick={handleDelete}>{confirmName}</button>
            </div>
        </div>
    )
}