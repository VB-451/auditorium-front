export const formatDate = (dateString: string, type: string): string => {
    const date = new Date(dateString);

    const formatType = type === "hour"
        ? {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }
        : {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        };

    const formatter = new Intl.DateTimeFormat('en-GB', formatType);
    const formatted = formatter.format(date);

    return formatted.replaceAll("/", '.')
};
