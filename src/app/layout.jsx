import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Loading, Navbar, ScrollToTop } from "@/components";
import { Suspense } from "react";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Shopping Now",
    description: "Nextjs app",
    icons: {
        icon: [{ url: "/icon.png", type: "image/png" }],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning={true}
                className={`${inter.className} relative`}
            >
                <AuthProvider>
                    <ReduxProvider>
                        <Suspense fallback={<Loading />}>
                            <div>
                                <Navbar />
                                <ToastContainer />
                                <ScrollToTop />
                                {children}
                                <Footer />
                            </div>
                        </Suspense>
                    </ReduxProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
