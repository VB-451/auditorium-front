export const fetchPostsBy = async (userId: string | undefined, teacherId: string | undefined, token: string | undefined) => {
    let response;
    if(!userId){
        response = await fetch(`${process.env.BACK_HOST}/posts/by-teacher/${teacherId}`,{
            headers:  { 'Authorization': `Bearer ${token}` },
        });
    } else {
        response = await fetch(`${process.env.BACK_HOST}/posts/by-user/${userId}`,{
            headers:  { 'Authorization': `Bearer ${token}` },
        });
    }
    return await response.json();
}