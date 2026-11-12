import type { ProjectCaseStudy } from "@/data/projects"
import Section from "@/components/Section"
import SectionHeading from "./SectionHeading"

export default function ProjectContext({ context }: { context: ProjectCaseStudy["context"] }) {
    return (
        <Section tone="light">
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                <SectionHeading tone="light" label="01 / Context" title="Why this project ?" />

                <div className="md:col-span-2">
                    <div className="flex flex-col gap-4">
                        {context.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-body text-standard-grey">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {context.stats && context.stats.length > 0 && (
                        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
                            {context.stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col-reverse gap-1">
                                    <dt className="text-tag text-timid-grey">{stat.label}</dt>
                                    <dd className={`font-heading text-h2 ${stat.highlight ? "text-accent" : ""}`}>
                                        {stat.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </div>
            </div>
        </Section>
    )
}
