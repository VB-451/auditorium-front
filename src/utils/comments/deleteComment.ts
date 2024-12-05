export const deleteComment = async (comment_id:number, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/comments/${comment_id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response;
}