import {ExternalLink, FileText, Mail} from "lucide-react"
import ThemeToggle from "@/components/theme-toggle";
import {Card, CardContent} from "@/components/ui/card";
import EmailPopover from "@/components/email-popover";

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
                                <h1 className={"font-bold text-2xl"}>Victor Yang.</h1>
                                <h2 className={"italic mb-3"}>Manufacturing Engineering Student.</h2>
                                <p className={"text-balance align-text-bottom"}>
                                    Get in touch via&nbsp;
                                    <a target={"_blank"} rel={"noopener noreferrer"} href={"https://www.linkedin.com/in/victor-y"}
                                       className={"underline underline-offset-2 hover:text-primary"}>
                                        Linkedin <ExternalLink size={16} className={"inline align-text-top"} aria-hidden="true"/>
                                    </a>
                                    &nbsp;or&nbsp;
                                    <EmailPopover className={"underline underline-offset-2 hover:text-primary cursor-pointer"}>
                                        email <Mail size={16} className={"inline align-text-top"}/>
                                    </EmailPopover>
                                    , browse my projects on&nbsp;
                                    <a target={"_blank"} rel={"noopener noreferrer"} href={"https://www.github.com/lluminate"}
                                       className={"underline underline-offset-2 hover:text-primary"}>
                                        Github <ExternalLink size={16} className={"inline align-text-top"} aria-hidden="true"/>
                                    </a>
                                    &nbsp;and view my&nbsp;
                                    <a target={"_blank"} rel={"noopener noreferrer"} href={"/resume.pdf"}
                                       className={"underline underline-offset-2 hover:text-primary"}>
                                        resume <FileText size={16} className={"inline align-text-top"} aria-hidden="true"/>
                                    </a>.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <footer className={"bottom-0"}>
                <div className={"flex flex-col gap-2 items-center justify-center mt-10"}>
                    <p className={"text-sm text-muted-foreground text-center align-text-bottom"}>&copy; {new Date().getFullYear()} Victor Yang.</p>
                </div>
            </footer>
        </div>
    );
}
