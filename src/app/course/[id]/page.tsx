import { NextPage } from 'next';

const CoursePage: NextPage<{ params: { id: string } }> = async ({ params }) => {
    const { id } = await params;

    return (
        <div>
            <h1>Course ID: {id}</h1>
        </div>
    );
};

export default CoursePage;