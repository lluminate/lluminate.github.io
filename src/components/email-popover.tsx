"use client"

import {useId, useRef, useState} from "react"
import {CheckIcon, CopyIcon, Mail} from "lucide-react"
import {cn} from "@/lib/utils"
import {Input} from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function EmailPopover() {
    const id = useId()
    const [copied, setCopied] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleCopy = () => {
        if (inputRef.current) {
            navigator.clipboard.writeText(inputRef.current.value)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        }
    }

    return (
        <span className="inline-flex flex-col gap-4">
            <Popover>
                <PopoverTrigger asChild>
                    <span className={"underline cursor-pointer"}>Email <Mail size={"1.1em"} className={"inline align-text-top"}/></span>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-0" side={"top"}>
                    <div className="flex flex-col gap-3 text-center">
                        <div className="space-y-2">
                            <div className="relative">
                                <Input
                                    ref={inputRef}
                                    id={id}
                                    className="pe-9"
                                    type="text"
                                    defaultValue="victoryang2005@outlook.com"
                                    aria-label="Email Address"
                                    readOnly
                                />
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                onClick={handleCopy}
                                                className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                                                aria-label={copied ? "Copied" : "Copy to clipboard"}
                                                disabled={copied}
                                            >
                                                <div
                                                    className={cn(
                                                        "transition-all",
                                                        copied
                                                            ? "scale-100 opacity-100"
                                                            : "scale-0 opacity-0"
                                                    )}
                                                >
                                                    <CheckIcon
                                                        className="stroke-emerald-500"
                                                        size={16}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div
                                                    className={cn(
                                                        "absolute transition-all",
                                                        copied
                                                            ? "scale-0 opacity-0"
                                                            : "scale-100 opacity-100"
                                                    )}
                                                >
                                                    <CopyIcon size={16} aria-hidden="true"/>
                                                </div>
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="px-2 py-1 text-xs">
                                            Copy to clipboard
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </span>
    )
}
