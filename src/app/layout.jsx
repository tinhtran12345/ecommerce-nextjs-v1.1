import { Inter } from "next/font/google";
import "./globals.css";
import CustomProvider, { ReduxProvider } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar, ScrollToTop } from "@/components";

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
            <body className={`${inter.className} relative`}>
                <ReduxProvider>
                    <Navbar />
                    <ToastContainer />
                    <ScrollToTop />
                    {children}
                    {/* <CustomProvider></CustomProvider> */}
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    );
}
