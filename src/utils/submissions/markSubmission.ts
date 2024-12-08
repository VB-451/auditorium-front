export const markSubmission = async (submissionID:number, mark:number, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/submissions/teacher/${submissionID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            mark: mark,
        })
    })
    return await response.json();
}