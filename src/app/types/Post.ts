export interface CoursePost {
    id: number;
    type: string;
    title: string;
    content: string;
    course_id: number;
    teacher_id: number;
    created_at: Date;
}