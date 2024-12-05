export const fetchCommentsData = async (post_id: number | undefined, submission_id: number | undefined, token: string | undefined ) => {
    let data;
    if (!post_id) {
        data = await fetch(`${process.env.BACK_HOST}/comments/by-submission/${submission_id}`,{
            headers:  { 'Authorization': `Bearer ${token}` },
        });
    } else {
        data = await fetch(`${process.env.BACK_HOST}/comments/by-post/${post_id}`,{
            headers:  { 'Authorization': `Bearer ${token}` },
        });
    }
    return await data.json();

}