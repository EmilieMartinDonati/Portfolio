import Section from "@/components/Section"
import { projectsList, Project } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
    return (
        <Section tone="light" id="work">
            <div className="flex flex-col gap-1.5 mb-5">
                <span className="section-title">03. Projects</span>
                <h2 className="text-h2 text-heading font-heading">Personal and professional projects</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {projectsList.map(({
                    name, description, nature, stack, slug, url, caseStudy
                }) => (
                    <ProjectCard
                    key={name}
                    name={name}
                    stack={stack}
                    description={description}
                    nature={nature}
                    url={url || undefined}
                    href={caseStudy ? `/projects/${slug}` : undefined}
                    />
                ))}
            </div>
        </Section>
    )
}