export const updateSubmission = async (submission_id: number | undefined, content: string,  token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/submissions/${submission_id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content,
        })
    })
    return await response.json()
}