export const shortenText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;

    const shortened = text.slice(0, maxLength);
    const lastSpace = shortened.lastIndexOf(" ");

    return lastSpace > 0 ? shortened.slice(0, lastSpace) + "..." : shortened + "...";
};
