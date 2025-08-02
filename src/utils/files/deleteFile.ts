export const deleteFile = async (id: number | undefined, token: string | undefined ) =>{
    await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/files/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
}