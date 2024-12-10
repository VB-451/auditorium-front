export const fetchIfSubmission = async (post_id:string, user_id:string | undefined, token: string | undefined) =>{
    const response = await fetch(`${process.env.BACK_HOST}/submissions/by-post-user/${post_id}/${user_id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return await response.json();
}