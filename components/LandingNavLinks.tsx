"use client"

import { usePathname } from "next/navigation"
import SmoothScrollLink from "@/components/SmoothScrollLink"

const NAV_LINKS = [
    { label: "About", href: "/#about" },
    { label: "Stack", href: "/#stack" },
    { label: "Work", href: "/#work" },
] as const

/** Links to the landing page sections. Hidden on case-study pages, where the name already leads home. */
export default function LandingNavLinks() {
    const pathname = usePathname()
    if (pathname !== "/") return null

    return (
        <>
            {NAV_LINKS.map((link) => (
                <SmoothScrollLink
                    key={link.label}
                    href={link.href}
                    className="text-body text-muted-white transition-colors hover:text-white"
                >
                    {link.label}
                </SmoothScrollLink>
            ))}
        </>
    )
}
