'use client';

type CourseData = {
    id: number;
    name: string;
    join_key: string;
};


interface CoursePageProps {
    data: CourseData;
}

export default function CoursePage({ data }: CoursePageProps) {
    return (
        <>
            <h1>Course Page</h1>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Join Key: {data.join_key}</p>
        </>
    );
}
