import Comments from "@/app/components/comments/comments";

const fetchCommentsData = async (post_id: number | undefined, submission_id: number | undefined ) => {
    let data;
    if (!post_id) {
        data = await fetch(`${process.env.BACK_HOST}comments/by-submission/${submission_id}`);
    } else {
        data = await fetch(`${process.env.BACK_HOST}comments/by-post/${post_id}`);
    }
    return await data.json();

}

export default async function CommentsServer({ postID }: { postID: number }) {
    const commentsData = await fetchCommentsData(postID, undefined);
    return (
        <Comments commentsData={commentsData} />
    )
}