export const fetchFileData = async (type: string, id: string, token: string | undefined) =>{
    let response;
    if(type === "post"){
        response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/files/by-post/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
    } else {
        response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/files/by-submission/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
    }
    return await response.json()
}