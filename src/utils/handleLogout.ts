export const handleLogout = () => {
    document.cookie = "accessToken=; path=/; max-age=-1";
    document.cookie = "userID=; path=/; max-age=-1";
    document.cookie = "username=; path=/; max-age=-1";
}