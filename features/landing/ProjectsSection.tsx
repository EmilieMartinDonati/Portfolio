import { projectsList, Project } from "@/data/projects"

export default function ProjectsSection() {
    return (
        <section className="landing-section bg-bg-light">
            <div className="flex flex-col gap-1.5">
                <span className="section-title">02. Stack</span>
                <h2 className="text-h2 text-heading">Things I've
                    built or shipped.</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {projectsList.map(({
                    name, description, nature, stack
                }) => (
                    <div key={name}>{name}</div>
                ))}
            </div>
        </section>
    )
}