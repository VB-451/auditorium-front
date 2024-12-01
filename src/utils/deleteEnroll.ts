export const deleteEnroll = async (user_id: string | undefined, course_id: number, token: string | undefined): Promise<Response> => {
    console.log(user_id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/enrollments`, {
        method: 'DELETE',
        body: JSON.stringify({user_id: Number(user_id), course_id: Number(course_id)}),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return response;
}