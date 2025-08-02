export interface FileData {
    id: number;
    original_filename: string;
    local_filename: string;
    post_id: number | null;
    submission_id: number | null;
    uploaded_at: Date;
}