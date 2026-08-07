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
        <body className="bg-background text-foreground antialiased">
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

                <div className="fixed top-4 right-4 z-50">
                    <ThemeToggle />
                </div>

                <div className="flex min-h-svh flex-col">
                    <main className="flex-1">
                        {children}
                    </main>

                    <footer className={"w-full py-6"}>
                        <div className={"flex flex-col gap-2 items-center justify-center mt-10"}>
                            <p className={"text-sm text-muted-foreground text-center align-text-bottom"}>&copy; 2026 Victor Yang.</p>
                        </div>
                    </footer>
                </div>
            </ThemeProvider>
        </body>
        </html>
    );
}
