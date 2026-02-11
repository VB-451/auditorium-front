export const loginFetch = async (login: string, password: string) => {
    const userCredentials = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/auth/login/`, {
        method: 'POST',
        body: JSON.stringify({login: login, password: password}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return userCredentials;
}