export const fetchUserData = async (user_id: number) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}users/${user_id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
}