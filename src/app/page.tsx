import {ExternalLink, FileText, Heart} from "lucide-react"
import ThemeToggle from "@/components/theme-toggle";
import {Card, CardContent} from "@/components/ui/card";
import EmailPopover from "@/components/email-popover";

const year = new Date().getFullYear();

export default function Home() {
    return (
        <div className={"px-6 py-20 min-h-svh flex flex-col justify-center bg-background text-foreground"}>
            <div className="fixed top-4 right-4">
                <ThemeToggle />
            </div>
            <div className={"w-full max-w-fit mx-auto"}>
                <div className={"flex flex-col gap-6"}>
                    <Card className={"shadow-2xl rounded-3xl border-transparent dark:border-border/64"}>
                        <CardContent className={"p-10 m-3"}>
                            <div className={"font-serif"}>
                                <h1 className={"font-bold text-2xl mb-3"}>Victor Yang.</h1>
                                <p className={"text-balance align-text-bottom"}>
                                    Get in touch via&nbsp;
                                    <a target={"_blank"} rel={"noopener noreferrer"} href={"https://www.linkedin.com/in/victor-y"}
                                       className={"underline"}>
                                        Linkedin <ExternalLink size={"1.1em"} className={"inline align-text-top"}/>
                                    </a>
                                    &nbsp;or&nbsp;
                                    <EmailPopover/>
                                    , browse my projects on&nbsp;
                                    <a target={"_blank"} rel={"noopener noreferrer"} href={"https://www.github.com/lluminate"}
                                       className={"underline"}>
                                        Github <ExternalLink size={"1.1em"} className={"inline align-text-top"}/>
                                    </a>
                                    &nbsp;and view my&nbsp;
                                    <a target={"_blank"} rel={"noopener noreferrer"} href={"/May_2025_Victor_Yang_Resume.pdf"}
                                       className={"underline"}>
                                        Resume <FileText size={"1.1em"} className={"inline align-text-top"}/>
                                    </a>.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <footer className={"bottom-0"}>
                <div className={"flex flex-col gap-2 items-center justify-center mt-10"}>
                    <p className={"text-sm text-muted-foreground text-center align-text-bottom"}>© {year} Victor Yang. Made with <Heart strokeWidth={0} size={"1.1em"} className={"inline align-text-bottom fill-current"}/> in Vancouver. </p>
                </div>
            </footer>
        </div>
    );
}
