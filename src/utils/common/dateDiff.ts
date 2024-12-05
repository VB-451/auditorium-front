export const dateDiff = (date: string, deadline: string, mode: string): string => {
    const date1 = new Date(date);
    const date2 = new Date(deadline);
    const diffInMilliseconds = date2.getTime() - date1.getTime();

    const absoluteDiffInMilliseconds = Math.abs(diffInMilliseconds);

    const diffInMinutes = Math.floor(absoluteDiffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays >= 1) {
        return diffInDays === 1
            ? `1 day ${mode}`
            : `${diffInDays} days ${mode}`;
    } else if (diffInHours >= 1) {
        return diffInHours === 1
            ? `1 hour ${mode}`
            : `${diffInHours} hours ${mode}`;
    } else {
        return diffInMinutes === 1
            ? `1 minute ${mode}`
            : `${diffInMinutes} minutes ${mode}`;
    }
}