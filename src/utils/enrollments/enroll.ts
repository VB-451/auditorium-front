export const enroll = async (user_id: string | undefined, join_key: string | undefined, token: string | undefined ) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/enrollments`, {
        method: 'POST',
        body: JSON.stringify({user_id: user_id, join_key: join_key}),
        headers: {
            'Authorization': `Bearer ${token}` ,
            'Content-Type': 'application/json'
        },

    })
    return response;
}