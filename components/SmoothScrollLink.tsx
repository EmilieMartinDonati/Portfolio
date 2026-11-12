"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MouseEvent, ReactNode } from "react"

const MIN_DURATION_MS = 700
const MAX_DURATION_MS = 1400
/** Extra milliseconds per pixel travelled, so long jumps take a little longer */
const MS_PER_PIXEL = 0.5

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

function animateScrollTo(targetY: number) {
    const startY = window.scrollY
    const distance = targetY - startY
    const duration = Math.min(MAX_DURATION_MS, Math.max(MIN_DURATION_MS, Math.abs(distance) * MS_PER_PIXEL))
    const startTime = performance.now()
    let frame = 0

    // The visitor takes over as soon as they scroll themselves.
    const cancel = () => {
        cancelAnimationFrame(frame)
        window.removeEventListener("wheel", cancel)
        window.removeEventListener("touchstart", cancel)
    }
    window.addEventListener("wheel", cancel, { passive: true })
    window.addEventListener("touchstart", cancel, { passive: true })

    const step = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration)
        // "instant" so the CSS scroll-behavior: smooth on <html> doesn't fight each frame
        window.scrollTo({ top: startY + distance * easeInOutCubic(progress), behavior: "instant" })
        if (progress < 1) frame = requestAnimationFrame(step)
        else cancel()
    }
    frame = requestAnimationFrame(step)
}

/**
 * Link to a section of the landing page ("/#about").
 * On the landing page it scrolls there with an eased animation; elsewhere it navigates normally.
 */
export default function SmoothScrollLink({
    href,
    className,
    children,
}: {
    href: `/#${string}`
    className?: string
    children: ReactNode
}) {
    const pathname = usePathname()

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (pathname !== "/") return
        const target = document.getElementById(href.slice(2))
        if (!target) return

        event.preventDefault()
        history.pushState(null, "", href)

        // Capped at the bottom of the page, so the easing ends where the scroll actually stops
        const maxScrollY = document.documentElement.scrollHeight - window.innerHeight
        const targetY = Math.min(maxScrollY, target.getBoundingClientRect().top + window.scrollY)
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            window.scrollTo({ top: targetY, behavior: "instant" })
        } else {
            animateScrollTo(targetY)
        }
    }

    return (
        <Link href={href} onClick={handleClick} className={className}>
            {children}
        </Link>
    )
}
