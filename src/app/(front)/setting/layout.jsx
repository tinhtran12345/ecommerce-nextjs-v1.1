import { HeaderSetting } from "@/components";

export default function SettingLayout({
    children, // will be a page or nested layout
}) {
    return (
        <div className="min-h-[400px]">
            <HeaderSetting />
            {children}
        </div>
    );
}
