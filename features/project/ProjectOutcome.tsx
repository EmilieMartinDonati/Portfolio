import type { ProjectCaseStudy } from "@/data/projects"
import Section from "@/components/Section"
import SectionHeading from "./SectionHeading"

export default function ProjectOutcome({ outcome }: { outcome: ProjectCaseStudy["outcome"] }) {
    return (
        <Section tone="dark">
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                <SectionHeading tone="dark" label="04 / Outcome" title="What shipped, what I learned." />

                <div className="md:col-span-2">
                    <p className="text-body text-muted-white">{outcome.summary}</p>

                    {outcome.learnings.length > 0 && (
                        <ol className="mt-6 border-t border-separator-dark">
                            {outcome.learnings.map((learning, index) => (
                                <li
                                    key={index}
                                    className="flex gap-4 border-b border-separator-dark py-4 text-body text-muted-white"
                                >
                                    <span aria-hidden="true" className="font-heading text-accent">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span>
                                        <strong className="font-medium text-white">{learning.title}</strong>{" "}
                                        {learning.text}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        </Section>
    )
}
