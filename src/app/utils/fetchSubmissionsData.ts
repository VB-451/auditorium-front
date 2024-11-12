export const fetchSubmissionsData = async (postId: string) => {
    const response = await fetch(`${process.env.BACK_HOST}submissions/by-post/${postId}`);
    return await response.json();
}