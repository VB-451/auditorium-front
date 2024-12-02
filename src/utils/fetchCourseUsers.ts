export const fetchCourseUsers = async (course_id: string, token: string | undefined) => {
    const response = await fetch(`${process.env.BACK_HOST}/users/by-course/${course_id}`,{
        headers:  { 'Authorization': `Bearer ${token}` },
    });
    return await response.json();
}