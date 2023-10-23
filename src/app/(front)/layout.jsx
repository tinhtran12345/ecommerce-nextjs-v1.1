export default function Layout({
    children, // will be a page or nested layout
}) {
    return (
        <div className="max-w-[1220px] m-auto py-0 px-10 relative">
            {children}
        </div>
    );
}
