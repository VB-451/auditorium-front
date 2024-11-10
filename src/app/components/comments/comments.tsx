import Comment from "@/app/components/comment/comment";

export interface CommentInterface {
    id: number;
    content: string;
    submission_id: number | null;
    post_id: number | null;
    user_id: number;
    created_at: Date;
}

export default function Comments({ commentsData } : { commentsData: CommentInterface[] }) {
    return (
        <div className="w-full pl-8">
            <p className="font-semibold text-lg mb-5">Comments: </p>
            {commentsData.map((comment: CommentInterface) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}