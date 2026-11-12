import Link from "next/link"
import type { Project } from "@/data/projects"
import Section from "@/components/Section"

function PagerLink({ project, label, alignEnd = false }: { project: Project; label: string; alignEnd?: boolean }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className={`project-card flex flex-col gap-1 p-5 transition-colors hover:border-accent ${
                alignEnd ? "md:col-start-2 md:items-end md:text-right" : ""
            }`}
        >
            <span className="text-label uppercase text-timid-grey">{label}</span>
            <span className="font-heading text-subtitle">{project.name}</span>
            <span className="text-xs text-muted-dark">
                {project.nature} · {project.stack.slice(0, 2).join(", ")}
            </span>
        </Link>
    )
}

export default function ProjectPager({ previous, next }: { previous?: Project; next?: Project }) {
    if (!previous && !next) return null

    return (
        <Section tone="light">
            <nav aria-label="Other projects" className="grid gap-4 md:grid-cols-2">
                {previous && <PagerLink project={previous} label="← Previous project" />}
                {next && <PagerLink project={next} label="Next project →" alignEnd />}
            </nav>
        </Section>
    )
}
