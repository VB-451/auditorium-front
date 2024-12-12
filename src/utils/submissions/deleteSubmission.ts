export const deleteSubmission = async (submission_id:number, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/submissions/${submission_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    console.log(response)
    return "submission";
}