import type { ReactNode } from "react"

const toneClassMap = {
    dark: "bg-bg-dark text-white border-separator-dark",
    light: "bg-bg-light text-dark border-separator-light",
}

export type SectionTone = keyof typeof toneClassMap

/**
 * Full-width band shared by every page: same vertical padding, and the same
 * centred container (max width + side padding) as the header and footer.
 */
export default function Section({
    tone,
    id,
    className = "",
    children,
}: {
    tone: SectionTone
    /** Anchor target, e.g. "about" for "/#about" */
    id?: string
    /** Layout classes for the inner container (grid, flex, gap…) */
    className?: string
    children: ReactNode
}) {
    return (
        <section id={id} className={`border-t py-section-y ${toneClassMap[tone]}`}>
            <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
        </section>
    )
}
