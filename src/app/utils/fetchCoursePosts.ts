export const fetchCoursePosts = async (id: string) => {
    const response = await fetch(`${process.env.BACK_HOST}posts/by-course/${id}`);
    return await response.json();
}