export interface SubmissionInterface {
    id: number
    content: string
    mark: number | null
    student_id: number
    post_id: number
    created_at: Date;
}