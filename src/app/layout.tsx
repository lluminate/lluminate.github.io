import type {Metadata} from "next";
import type {ReactNode} from "react";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Victor Yang",
    description: "Victor's Portfolio",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
            <ThemeProvider
                attribute={"class"}
                defaultTheme={"dark"}
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </body>
        </html>
    );
}
