export const deletePost = async (id: number, token: string | undefined) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return "post"
}