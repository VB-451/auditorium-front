export const updateCourse = async (id:number, name: string, color: string, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/courses/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: name.trim(),
            color: color
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return await response.json();
}