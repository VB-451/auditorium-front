export const fetchCoursesBy = async (userId: number | undefined, teacherId: number | undefined) =>{
    let response;
    if(!userId){
        response = await fetch(`${process.env.BACK_HOST}courses/by-teacher/${teacherId}`);
    } else {
        response = await fetch(`${process.env.BACK_HOST}courses/by-user/${userId}`);
    }
    return await response.json();
}