export const updatePost = async (id: number | undefined, title: string, content: string, deadline:Date, token: string | undefined) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: title,
            content: content,
            deadline: deadline || null,
        })
    })
    return await response.json();
}