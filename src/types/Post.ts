export interface CoursePost {
    id: number;
    type: string;
    title: string;
    content: string;
    course_id: number;
    teacher_name: string;
    mark_interval: number;
    deadline: Date;
    created_at: Date;
    edited_at: Date | null;
}