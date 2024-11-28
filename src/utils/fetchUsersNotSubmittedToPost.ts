export const fetchUsersNotSubmittedToPost = async (post_id: string, token: string | undefined) =>{
    const response = await fetch(`${process.env.BACK_HOST}/users/by-post/${post_id}`,{
        headers:  { 'Authorization': `Bearer ${token}` },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
}