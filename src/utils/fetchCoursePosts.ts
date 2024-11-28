export const fetchCoursePosts = async (id: string, token: string | undefined) => {
    const response = await fetch(`${process.env.BACK_HOST}/posts/by-course/${id}`,{
        headers:  { 'Authorization': `Bearer ${token}` },
    });
    return await response.json();
}