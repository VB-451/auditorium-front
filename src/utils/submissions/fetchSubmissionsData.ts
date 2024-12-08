export const fetchSubmissionsData = async (postId: string, token: string | undefined) => {
    const response = await fetch(`${process.env.BACK_HOST}/submissions/by-post/${postId}`,{
        headers:  { 'Authorization': `Bearer ${token}` },
    });
    return await response.json();
}