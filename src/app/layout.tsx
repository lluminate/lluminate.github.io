import type {Metadata} from "next";
import type {ReactNode} from "react";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Noise from "@/components/noise";

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
                defaultTheme={"system"}
                disableTransitionOnChange
                enableSystem
            >
                <div className={"fixed inset-0 pointer-events-none w-full h-full z-100 overflow-hidden"}>
                    <Noise
                        patternSize={250}
                        patternScaleX={1}
                        patternScaleY={1}
                        patternRefreshInterval={2}
                        patternAlpha={12}
                    />
                </div>
                {children}
            </ThemeProvider>
        </body>
        </html>
    );
}
