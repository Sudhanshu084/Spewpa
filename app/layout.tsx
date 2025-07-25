import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"

import "./globals.css";

export const metadata: Metadata = {
    title: "Spewpa | A Text-to-Image Generation Platform.",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Toaster position="top-right" />
                {children}
            </body>
        </html>
    );
}
