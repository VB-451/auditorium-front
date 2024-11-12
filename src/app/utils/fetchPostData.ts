export const fetchPostData = async (postId: string) => {
    const response = await fetch(`${process.env.BACK_HOST}posts/${postId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
}