import Image from 'next/image'
import Link from "next/link";

export default function Navbar({ currentUser }:{ currentUser:string }) {
    return (
        <>
            <nav className={`fixed bg-primary_green top-0 w-full border-b border-gray-500 z-10`}>
                <div className="max-w-7xl h-16 mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href="/"><Image src="/logo3.svg" width={190} height={0} alt="logo"/></Link>
                </div>
            </nav>
        </>
    )
}