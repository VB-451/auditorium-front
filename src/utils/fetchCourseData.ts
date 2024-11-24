import {ApiBearer} from "@/utils/apibearer";

export const fetchCourseData = async (id: string | number) => {
    const response = await fetch(`${process.env.BACK_HOST}/courses/${id}`,{
        headers:  { 'Authorization': `${ApiBearer}` },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
};