export const fetchSubmissionData = async (submissionID: string, token: string | undefined) => {
    const response = await fetch(`${process.env.BACK_HOST}/submissions/${submissionID}`,{
        headers:  { 'Authorization': `Bearer ${token}` },
    });
    return await response.json();
}