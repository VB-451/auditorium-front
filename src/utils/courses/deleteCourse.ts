export const deleteCourse = async (id: number, token: string | undefined) => {
    await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/courses/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return "course"
}