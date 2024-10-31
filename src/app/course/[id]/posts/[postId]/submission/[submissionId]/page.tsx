import { NextPage } from 'next';

const SubmissionPage: NextPage<{ params: { id: string } }> = async ({ params }) => {
    const { id } = await params;

    return (
        <div>
            <h1>Submission ID: {id}</h1>
        </div>
    );
};

export default SubmissionPage;