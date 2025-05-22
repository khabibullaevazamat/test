import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "",
    description: "",
};

interface Props {
    children: Readonly<React.ReactNode>;
}

function RootLayout({ children }: Props) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <body>
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                    <Header />
                    <main className="overflow-hidden">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

export default RootLayout;
