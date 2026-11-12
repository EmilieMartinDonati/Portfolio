import Link from "next/link"
import Tag from "@/components/Tag"

export default function ProjectCard({
    name,
    image,
    description,
    stack,
    url,
    nature,
    href
}: { name: string, image?: string, description: string, stack: string[], url?: string, nature?: string, href?: string }) {
    return (
        // With a case study, the whole card is clickable: the "Full case study" link is stretched over it (see below)
        <div
            className={`project-card relative overflow-hidden transition-colors ${
                href ? "group hover:border-dark focus-within:border-dark" : ""
            }`}
        >
            <div className="p-4">
                <div className="mb-2 flex flex-row items-center justify-between flex-wrap gap-2">
                    <span className="min-w-0 text-sm break-words">{name}</span>
                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Voir le site de ${name} (nouvel onglet)`}
                            // relative z-10: stays clickable above the stretched case-study link
                            className="relative z-10 border-timid-grey border-hairline px-2 py-1 rounded-badge flex justify-center items-center text-tag text-standard-grey transition-colors hover:text-dark"
                        >
                            VOIR
                        </a>
                    )}
                </div>
                <div className="mb-2.5">
                    <span className='text-muted-dark text-xs'>{description}</span>
                </div>
                <div className="mb-4 flex flex-row flex-wrap gap-1.5">
                    {stack.map((item, index) => (
                        <Tag
                            text={item}
                            key={`${name}-${index}`}
                            textTransform={"capitalize"}
                        />
                    ))}
                </div>
                {href && (
                    <div className="flex flex-row justify-end">
                        {/* after:absolute after:inset-0 stretches the link's click area over the whole card */}
                        <Link
                            href={href}
                            aria-label={`${name} — full case study`}
                            // Keyboard focus is shown by the card's dark border (focus-within) instead of an outline
                            className="text-accent text-tag group-hover:underline after:absolute after:inset-0 focus-visible:outline-none"
                        >
                            Full case study {`->`}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}