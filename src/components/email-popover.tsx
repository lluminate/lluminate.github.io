"use client"

import React, {useId, useRef, useState} from "react"
import {CheckIcon, CopyIcon, Send} from "lucide-react"
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

export default function EmailPopover({children, className}: { children?: React.ReactNode, className?: string }) {
    const id = useId()
    const [copied, setCopied] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const email = "victoryang2005@outlook.com"

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
                    <span className={className}>
                        {children}
                    </span>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0 rounded-md border-none outline-border outline-1 outline-offset-0 font-mono" side={"top"} onOpenAutoFocus={(e) => e.preventDefault()}>
                    <div className="*:not-first:mt-2">
                        <div className="flex rounded-md shadow-xs relative">
                            <Input
                                className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10 pe-9"
                                ref={inputRef}
                                id={id}
                                type="text"
                                defaultValue={email}
                                aria-label="Email Address"
                                readOnly
                            />
                            <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={handleCopy}
                                            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute z-20 inset-y-0 end-9 flex h-full w-9 items-center justify-center transition-[color,box-shadow] outline-none focus:z-20 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
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
                            <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-9 items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                            aria-label="Send Email"
                                            href={"mailto:"+email}
                                        >
                                            <Send size={16} aria-hidden="true"/>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent className="px-2 py-1 text-xs">
                                        Send an email
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </span>
    )
}
