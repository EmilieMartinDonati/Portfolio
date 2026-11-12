import Tag from "@/components/Tag"
import type { ProjectChallenge } from "@/data/projects"

const excerptClassMap = {
    code: "text-tag-dark-text",
    terminal: "text-code-success",
}

export default function ChallengeCard({
    challenge,
    position,
}: {
    challenge: ProjectChallenge
    /** 1-based position in the list, shown as "01", "02"… */
    position: number
}) {
    const { title, tags, problem, solution, result, excerpt } = challenge
    const steps = [
        { label: "The problem", text: problem, isResult: false },
        { label: "What I did", text: solution, isResult: false },
        { label: "Result", text: result, isResult: true },
    ]

    return (
        <article className="project-card overflow-hidden">
            <header className="flex items-start gap-4 p-4 md:p-5">
                <span className="font-heading text-h2 leading-none text-accent">
                    {String(position).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                    <h3 className="font-heading text-subtitle">{title}</h3>
                    {tags.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {tags.map((tag) => (
                                <Tag key={tag.label} text={tag.label} colorVariant={tag.color} />
                            ))}
                        </div>
                    )}
                </div>
            </header>

            <div className="grid divide-y divide-separator-light border-t border-separator-light md:grid-cols-3 md:divide-x md:divide-y-0">
                {steps.map((step) => (
                    <div key={step.label} className="p-4 md:p-5">
                        <h4 className={`mb-2 text-label uppercase ${step.isResult ? "text-accent" : "text-timid-grey"}`}>
                            {step.label}
                        </h4>
                        <p className={`text-xs leading-relaxed ${step.isResult ? "text-dark" : "text-muted-dark"}`}>
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>

            {excerpt && (
                <figure className="bg-bg-dark p-4 md:p-5">
                    <figcaption className="mb-3 flex justify-between gap-3 font-mono text-tag text-standard-grey">
                        <span className="min-w-0 break-all">{excerpt.source}</span>
                        <span>{excerpt.kind === "code" ? "excerpt" : "terminal"}</span>
                    </figcaption>
                    <pre className={`overflow-x-auto font-mono text-xs leading-loose ${excerptClassMap[excerpt.kind]}`}>
                        {excerpt.content}
                    </pre>
                </figure>
            )}
        </article>
    )
}
