"use client"

import {ReactNode} from "react";
import {getCookie} from "@/utils/common/getCookie";
import {ModalContext} from "@/contexts/modal-context";

interface ModalProps {
    isOpen: boolean;
    action: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, action, children }: ModalProps ){
    if (!isOpen) return null;

    const contextValue = {
        user_id: getCookie("userID"),
        username: getCookie("username"),
        token: getCookie("accessToken"),
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10" onMouseDown={action}>
            <div className="bg-transparent rounded" onMouseDown={(e) => e.stopPropagation()}>
                <ModalContext.Provider value={contextValue}>
                    {children}
                </ModalContext.Provider>
            </div>
        </div>
    );
};