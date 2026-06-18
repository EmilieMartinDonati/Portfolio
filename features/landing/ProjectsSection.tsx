import { projectsList, Project } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
    return (
        <section className="landing-section bg-bg-light">
            <div className="flex flex-col gap-1.5 mb-5">
                <span className="section-title">02. Projects</span>
                <h2 className="text-h2 text-heading font-heading">Projets pro et perso.</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {projectsList.map(({
                    name, description, nature, stack
                }) => (
                    <ProjectCard 
                    key={name}
                    name={name}
                    stack={stack}
                    description={description}
                    nature={nature}
                    />
                ))}
            </div>
        </section>
    )
}