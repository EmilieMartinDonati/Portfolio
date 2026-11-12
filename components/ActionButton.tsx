import Link from "next/link"

const variantClassMap = {
    accent: "bg-accent text-white hover:opacity-90",
    dark: "bg-dark text-white hover:opacity-90",
    ghost: "border-hairline border-tag-dark-border text-muted-white hover:text-white",
}

export type ActionButtonVariant = keyof typeof variantClassMap

export default function ActionButton({
    colorVariant = "accent",
    text,
    href,
}: {
    text: string
    colorVariant?: ActionButtonVariant
    /** When set, the button renders as a link. External URLs open in a new tab. */
    href?: string
}) {
    const className = `action-button inline-block text-xs transition ${variantClassMap[colorVariant]}`

    if (!href) {
        return (
            <button type="button" className={className}>
                {text}
            </button>
        )
    }

    if (href.startsWith("http")) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={className}>
                {text}
            </a>
        )
    }

    return (
        <Link href={href} className={className}>
            {text}
        </Link>
    )
}
