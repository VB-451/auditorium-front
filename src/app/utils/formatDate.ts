export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatted = new Intl.DateTimeFormat('en-GB').format(date);
    return formatted.replaceAll("/", '.');
}