export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div
                className="h-14 w-14 animate-spin rounded-full border-4 border-transparent"
                style={{
                    borderTopColor: "#17b978",
                    borderRightColor: "#17b978",
                }}
            />
        </div>
    );
}
