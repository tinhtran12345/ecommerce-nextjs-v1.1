import ProtectAuth from "@/components/Protect/ProtectAuth";

export default function LoginLayout({ children }) {
    return (
        <ProtectAuth>
            <div className="h-full mt-10 flex justify-center items-center">
                {children}
            </div>
        </ProtectAuth>
    );
}
