import {ApiBearer} from "@/utils/apibearer";

export const fetchCoursesBy = async (userId: number | undefined, teacherId: number | undefined) =>{
    let response;
    if(!userId){
        response = await fetch(`${process.env.BACK_HOST}/courses/by-teacher/${teacherId}`,{
            headers:  { 'Authorization': `${ApiBearer}` },
        });
    } else {
        response = await fetch(`${process.env.BACK_HOST}/courses/by-user/${userId}`,{
            headers:  { 'Authorization': `${ApiBearer}` },
        });
    }
    return await response.json();
}