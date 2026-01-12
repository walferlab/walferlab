export default function Error404() {
    return (
        <>
        <div className="h-screen flex items-center justify-center">
            <div className="space-y-2">
                <p className="text-[#0a0a0a] font-bold text-7xl sm:text-9xl font-bold-sans text-center">404!</p>
                <p className="text-[#1b1b1b] font-bold text-xl font-satoshi text-center">Oops! Page Not Found. <a href="/" className="underline font-medium text-[#000000]">Home Page</a></p>
            </div>
        </div>
        </>
    )
}