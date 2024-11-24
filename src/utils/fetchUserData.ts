import {ApiBearer} from "@/utils/apibearer";

export const fetchUserData = async (user_id: number) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/users/${user_id}`,{
        headers:  { 'Authorization': `${ApiBearer}` },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
}