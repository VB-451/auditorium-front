"use client"

export default function LogOutButton(){

    const logOut = () =>{
        document.cookie = "accessToken=; path=/; max-age=-1";
        document.cookie = "userID=; path=/; max-age=-1";
        document.cookie = "username=; path=/; max-age=-1";
        location.assign("/login")
    }

    return (
        <button onClick={logOut}
                className="px-2 py-2 ml-3 rounded text-white font-semibold bg-primary_pink">Log Out
        </button>
    )
}