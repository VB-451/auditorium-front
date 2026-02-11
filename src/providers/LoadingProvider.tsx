"use client";

import { createContext, useContext, useState } from "react";

type LoadingContextType = {
    showLoading: () => void;
    hideLoading: () => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider
            value={{
                showLoading: () => setLoading(true),
                hideLoading: () => setLoading(false),
            }}
        >
            {children}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div
                        className="h-14 w-14 animate-spin rounded-full border-4 border-transparent"
                        style={{
                            borderTopColor: "#17b978",
                            borderRightColor: "#17b978",
                        }}
                    />
                </div>
            )}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const ctx = useContext(LoadingContext);
    if (!ctx) throw new Error("useLoading must be used inside LoadingProvider");
    return ctx;
}
