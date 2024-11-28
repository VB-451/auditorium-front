export const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        const cookie = parts[1]?.split(';').shift();
        return cookie || null;
    }

    return null;
};