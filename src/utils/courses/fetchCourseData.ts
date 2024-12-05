export const fetchCourseData = async (id: string | number, token: string | undefined) => {
    const response = await fetch(`${process.env.BACK_HOST}/courses/${id}`,{
        headers:  { 'Authorization': `Bearer ${token}` },
    });
    return await response.json();
};