import styles from "./styles.module.css"

export default function Sidebar() {
    return (
        <aside className={`fixed left-0 top-0 h-full border-r border-gray-500 0 text-black shadow-lg ${styles.aside}`}>
            <div className="p-4">
            </div>
        </aside>
    );
}