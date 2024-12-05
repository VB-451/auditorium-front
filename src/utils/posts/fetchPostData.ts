export const fetchPostData = async (postId: string, token: string | undefined) => {
    const response = await fetch(`${process.env.BACK_HOST}/posts/${postId}`,{
        headers:  { 'Authorization': `Bearer ${token}` },
    });
    return await response.json();
}