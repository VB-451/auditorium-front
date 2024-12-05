export const newJoinKey = async (course_id: number, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/courses/join_key/${course_id}`, {
        method: 'PUT',
        headers:  { 'Authorization': `Bearer ${token}`},
    })
    return response.json();
}