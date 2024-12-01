import { createContext, useContext } from "react";

interface ModalContextProps {
    user_id: string | undefined;
    username: string | undefined;
    token: string | undefined;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};