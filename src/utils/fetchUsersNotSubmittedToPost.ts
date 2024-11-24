import {ApiBearer} from "@/utils/apibearer";

export const fetchUsersNotSubmittedToPost = async (post_id: string) =>{
    const response = await fetch(`${process.env.BACK_HOST}/users/by-post/${post_id}`,{
        headers:  { 'Authorization': `${ApiBearer}` },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
}