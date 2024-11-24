import {ApiBearer} from "@/utils/apibearer";

export const fetchSubmissionsData = async (postId: string) => {
    const response = await fetch(`${process.env.BACK_HOST}/submissions/by-post/${postId}`,{
        headers:  { 'Authorization': `${ApiBearer}` },
    });
    return await response.json();
}