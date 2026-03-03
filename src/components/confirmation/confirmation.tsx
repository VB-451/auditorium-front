import {useModalContext} from "@/contexts/modal-context";
import {usePathname, useRouter} from "next/navigation";
import {useLoading} from "@/providers/LoadingProvider";
import {useNotification} from "@/providers/NotificationProvider";

interface ConfirmationProps {
    question: string,
    confirmName: string,
    executeFunction: (id: number, token: string | undefined)=> Promise<string>,
    toggle: () => void,
    id: number | undefined;
}

export default function Confirmation({question, confirmName, executeFunction, toggle, id} : ConfirmationProps) {

    const { token } = useModalContext();
    const { showLoading, hideLoading } = useLoading();
    const { notify } = useNotification();
    const router = useRouter();
    const pathname = usePathname();

    const handleDelete = async () =>{
        showLoading();
        const response = await executeFunction(id || 0, token);
        hideLoading();
        if(pathname){
            if(response === "post"){
                notify("Successfully deleted post.", "success")
                router.push(`/course/${pathname.split("/")[2]}`);
            } else if (response === "course"){
                notify("Successfully deleted course.", "success")
                router.push("/courses/teacher")
            } else {
                notify("Successfully deleted submission.", "success")
                router.push(`/course/${pathname.split("/")[2]}/post/${pathname.split("/")[4]}`)
            }
        }
    }
    return (
        <div className="bg-white w-96 h-52 py-4 px-4 rounded-xl flex flex-col items-center justify-between">
            <p className="text-2xl font-medium text-gray-400">Are you sure?</p>
            <p className="text-center text-lg">{question}</p>
            <div className="flex items-center justify-evenly w-full">
                <button className="bg-gray-400 hover:bg-gray-400/90 transition-colors text-white text-lg font-semibold py-1 px-3 rounded" onClick={toggle}>Cancel</button>
                <button className="bg-primary_pink hover:bg-primary_pink/90 transition-colors text-white text-lg font-semibold py-1 px-3 rounded" onClick={handleDelete}>{confirmName}</button>
            </div>
        </div>
    )
}