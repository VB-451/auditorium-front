export const fetchUserData = async (user_id: number, token: string | undefined) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/users/${user_id}`,{
        headers:  { 'Authorization': `Bearer ${token}` },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
}