import Navbar from "@/components/navbar/navbar";
import { cookies } from 'next/headers'

export default async function NavbarServer() {
    const cookieStore = await cookies();
    return (
        <>
            <Navbar name={cookieStore.get("username")?.value} />
        </>
    )
}