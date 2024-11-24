import {ApiBearer} from "@/utils/apibearer";

export const fetchCoursePosts = async (id: string) => {
    const response = await fetch(`${process.env.BACK_HOST}/posts/by-course/${id}`,{
        headers:  { 'Authorization': `${ApiBearer}` },
    });
    return await response.json();
}