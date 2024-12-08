export const createPost = async (title: string, content: string, type: string, course_id:number | undefined, teacher_name:string | undefined,  token:string | undefined, deadline:Date, mark_interval: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                title: title,
                content: content,
                type: type,
                course_id: course_id,
                teacher_name: teacher_name,
                deadline: deadline || null,
                mark_interval: mark_interval,
            })
    })
    return await response.json();
}