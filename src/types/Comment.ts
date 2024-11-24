export interface CommentInterface {
    id: number;
    content: string;
    submission_id: number | null;
    post_id: number | null;
    user_id: number;
    user_name: string;
    created_at: Date;
}