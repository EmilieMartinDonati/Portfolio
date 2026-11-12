import ActionButton from "@/components/ActionButton"
import Tag from "@/components/Tag"
import type { Project, ProjectCaseStudy } from "@/data/projects"

const flagLabelMap = {
    pet: "Pet project",
    pro: "Client project",
}

export default function ProjectHero({
    name,
    nature,
    flag,
    tagline,
    links,
}: Pick<Project, "name" | "nature" | "flag"> & Pick<ProjectCaseStudy, "tagline" | "links">) {
    const hasLinks = Boolean(links.live || links.github)

    return (
        <section className="bg-bg-dark pt-5 pb-section-y text-white">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-5 flex flex-wrap gap-1.5">
                    <Tag colorVariant="coral" text="Case study" />
                    <Tag colorVariant="dark" text={nature} />
                    <Tag colorVariant="dark" text={flagLabelMap[flag]} />
                </div>

                <h1 className="font-heading text-h1 break-words">
                    {name}
                    <span className="text-accent">.</span>
                </h1>

                <p className="mt-5 max-w-xl text-h3 leading-relaxed text-muted-white">{tagline}</p>

                {hasLinks && (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {links.live && <ActionButton text="View live ↗" href={links.live} />}
                        {links.github && (
                            <ActionButton text="GitHub ↗" href={links.github} colorVariant="ghost" />
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}
