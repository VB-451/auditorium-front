export const createCourse = async (name: string, color: string, teacher_id: string | undefined, teacher_name:string | undefined, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/courses/`, {
        method: 'POST',
        body: JSON.stringify({
            name: name.trim(),
            color: color,
            teacher_id: Number(teacher_id),
            teacher_name: teacher_name
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return await response.json();
}