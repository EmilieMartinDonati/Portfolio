import { Fragment } from "react"
import Tag from "@/components/Tag"
import type { ProjectCaseStudy } from "@/data/projects"
import Section from "@/components/Section"
import SectionHeading from "./SectionHeading"

export default function ProjectStack({
    stackGroups,
    architecture,
}: Pick<ProjectCaseStudy, "stackGroups" | "architecture">) {
    return (
        <Section tone="dark">
            <SectionHeading tone="dark" label="02 / Stack & architecture" title="In the toolbox." />

            <div className="mt-6 grid gap-6 md:grid-cols-3 md:gap-5">
                {stackGroups.map((group, index) => (
                    <div key={group.title}>
                        <h3 className={`text-label uppercase ${index === 0 ? "text-accent" : "text-timid-grey"}`}>
                            {group.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                                <Tag key={item} text={item} colorVariant={index === 0 ? "coral" : "dark"} />
                            ))}
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-muted-white">{group.reason}</p>
                    </div>
                ))}
            </div>

            {architecture && architecture.length > 0 && (
                <div className="mt-7 flex flex-col gap-3 border-t border-separator-dark pt-6 md:flex-row md:items-stretch">
                    {architecture.map((node) => (
                        <Fragment key={node.title}>
                            <div className="rounded-card border-hairline border-tag-dark-border bg-tag-dark-bg p-4 md:flex-1">
                                <h3 className="font-heading text-h3">{node.title}</h3>
                                <p className="text-tag text-muted-white">{node.subtitle}</p>
                                <ul className="mt-3 font-mono text-tag leading-loose text-code-success">
                                    {node.parts.map((part) => (
                                        <li key={part}>{part}</li>
                                    ))}
                                </ul>
                            </div>
                            {node.linkToNext && (
                                <div className="flex items-center justify-center gap-2 font-mono text-tag text-standard-grey md:max-w-20 md:flex-col md:text-center">
                                    <span aria-hidden="true" className="rotate-90 text-accent md:rotate-0">
                                        →
                                    </span>
                                    {node.linkToNext}
                                </div>
                            )}
                        </Fragment>
                    ))}
                </div>
            )}
        </Section>
    )
}
