export const registerFetch = async (name: string, password: string, email: string) => {
    const userData = {
        name: name.trim(),
        password: password.trim(),
        email: email.trim(),
    }
    return await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/users`,{
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        }
    })
}