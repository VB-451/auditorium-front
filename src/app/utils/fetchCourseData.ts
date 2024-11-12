export const fetchCourseData = async (id: string | number) => {
    const response = await fetch(`${process.env.BACK_HOST}courses/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
};