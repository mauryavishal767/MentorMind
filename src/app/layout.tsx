import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mentor Mind",
    description: "MentorMind is an AI-powered platform that provides daily personalized tech mentoring to developers — through chat, voice, and video — helping them stay on track, learn faster, and become job-ready.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    
    return (
        <html lang="en">
            <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}