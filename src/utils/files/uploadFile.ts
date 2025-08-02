export const uploadFile = async (fileData: FormData, token: string | undefined ) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/files`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: fileData
    })
    return await response.json()

}