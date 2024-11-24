export interface SubmissionInterface {
    id: number
    content: string
    mark: number | null
    student_id: number
    student_name: string;
    deadline: Date;
    post_id: number
    created_at: Date;
    edited_at: Date | null;
}