import styles from "./styles.module.css"
import Image from 'next/image'

export default function Navbar({ currentUser }:{ currentUser:string }) {
    return (
        <>
            <nav className={`fixed top-0 w-full border-b border-gray-500 z-10 ${styles.nav}`}>
                <div className="max-w-7xl h-16 mx-auto px-4 py-3 flex items-center justify-between">
                    <Image src="/logo3.svg" width={190} height={0} alt="logo"/>
                </div>
            </nav>
        </>
    )
}