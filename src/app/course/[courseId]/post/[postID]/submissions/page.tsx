import SubmissionsPage from "@/app/course/[courseId]/post/[postID]/submissions/submissions-page";
import {fetchPostData} from "@/app/utils/fetchPostData";
import NotFound from "@/app/not-found";
import {fetchCourseData} from "@/app/utils/fetchCourseData";
import {fetchSubmissionsData} from "@/app/utils/fetchSubmissionsData";
import {fetchUsersNotSubmittedToPost} from "@/app/utils/fetchUsersNotSubmittedToPost";

export default async function SubmissionsPageServer({ params }: { params: { postID: string, courseId: string } }){
    const { postID, courseId } = await params;
    const postData = await fetchPostData(postID)
    const courseData = await fetchCourseData(courseId);
    const submissionsData = await fetchSubmissionsData(postID);
    const notSubmittedData = await fetchUsersNotSubmittedToPost(postID)
    if (postData.course_id.toString() !== courseId) { return <NotFound />}

    return (
        <SubmissionsPage postData={postData} courseData={courseData} submissionsData={submissionsData}
            notSubmittedData={notSubmittedData}
        />
    )
}