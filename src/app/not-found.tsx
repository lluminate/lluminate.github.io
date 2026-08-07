import {Undo2} from "lucide-react"
import ThemeToggle from "@/components/theme-toggle";
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={"flex min-h-full flex-col justify-center px-6 py-20"}>
            <div className={"w-full max-w-fit mx-auto"}>
                <div className={"flex flex-col gap-6"}>
                    <Card className={"shadow-2xl rounded-3xl border-transparent dark:border-border/64"}>
                        <CardContent className={"p-10 m-3"}>
                            <div className={"font-serif"}>
                                <h1 className={"font-bold text-2xl"}>404 Page Not Found.</h1>
                                <h2 className={"italic mb-3"}>Oops, all blank!</h2>
                                <p className={"text-balance align-text-bottom"}>
                                    The page you are looking for does not exist,&nbsp;
                                    <Link href={"/"}
                                       className={"underline underline-offset-2 hover:text-primary"}>
                                        go back home <Undo2 size={16} className={"inline align-text-top"} aria-hidden="true"/>
                                    </Link>
                                    .
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
