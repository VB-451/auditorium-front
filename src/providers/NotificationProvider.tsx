'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Notification = {
    id: string;
    message: string;
    type: "success" | "error";
    leaving?: boolean;
};


type NotificationContextType = {
    notify: (message: string, type: "success" | "error") => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) throw new Error("useNotification must be used within a NotificationProvider");
    return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);


    const notify = (message: string, type: "success" | "error") => {
        const id = crypto.randomUUID();

        setNotifications((prev) => [
            ...prev,
            { id, message, type, leaving: false }
        ]);

        setTimeout(() => {
            setNotifications((prev) =>
                prev.map((n) =>
                    n.id === id ? { ...n, leaving: true } : n
                )
            );

            setTimeout(() => {
                setNotifications((prev) =>
                    prev.filter((n) => n.id !== id)
                );
            }, 300);

        }, 3000);
    };


    return (
        <NotificationContext.Provider value={{ notify }}>
            {children}
            {mounted &&
                createPortal(
                    <div className="absolute bottom-4 right-4 flex flex-col items-end gap-2 pointer-events-auto">
                        {notifications.map((n) => (
                            <div
                                key={n.id}
                                className={`
                                    px-2 py-2 rounded-lg shadow text-white w-fit flex items-center
                                    transform transition-all duration-300 ease-out
                                    ${n.leaving ? "opacity-0 translate-x-6 scale-95" : "opacity-100 translate-x-0 scale-100"}
                                    ${n.type === "success" ? "bg-primary_green" : "bg-primary_pink"}
                                `}
                            >
                            <Image src={n.type === "success" ? "/success.svg" : "/failure.svg"} alt={"image"} width={25} height={25} />
                                <div className="font-semibold pl-1">
                                    {n.message}
                                </div>
                            </div>
                        ))}
                    </div>,
                    document.getElementById("toast-root")!
                )}

        </NotificationContext.Provider>
    );
};
