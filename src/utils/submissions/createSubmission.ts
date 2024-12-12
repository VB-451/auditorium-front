export const createSubmission = async (content: string, student_id: number | undefined, post_id: number | undefined, student_name: string | undefined, deadline: Date | undefined, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/submissions/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content,
            student_id,
            post_id,
            student_name,
            deadline
        })
    })
    return await response.json()
}