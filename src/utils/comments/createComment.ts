export const createComment = async (content: string, type:string, id:number, user_id:string | undefined, username: string | undefined, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            content: content,
            submission_id: type === "submission" ? id : null,
            post_id: type === "post" ? id : null,
            user_id: Number(user_id),
            user_name: username
        })
    })
    return await response.json();
}