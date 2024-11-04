import styles from "./styles.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {


    return (
        <aside className={`fixed left-0 top-0 h-full border-r border-gray-500 0 text-black shadow-lg ${styles.aside}`}>
            <div className="p-4 pt-24 h-48 flex flex-col justify-around">
                <Link href="/student"><Image src="/student.svg" width={30} height={0} alt="Student Icon" /></Link>
                <Link href="/teacher"><Image src="/teacher.svg" width={30} height={0} alt="Teacher Icon" /></Link>
            </div>
        </aside>
    );
}