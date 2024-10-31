import { NextPage } from 'next';

const PostPage: NextPage<{ params: { id: string } }> = async ({ params }) => {
    const { id } = await params;

    return (
        <div>
            <h1>Post ID: {id}</h1>
        </div>
    );
};

export default PostPage;