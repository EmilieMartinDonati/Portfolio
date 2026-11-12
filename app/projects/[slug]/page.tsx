import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projectsList } from "@/data/projects"
import ProjectChallenges from "@/features/project/ProjectChallenges"
import ProjectContext from "@/features/project/ProjectContext"
import ProjectGallery from "@/features/project/ProjectGallery"
import ProjectHero from "@/features/project/ProjectHero"
// Outcome section hidden for now — uncomment this import and the <ProjectOutcome> below to bring it back.
// import ProjectOutcome from "@/features/project/ProjectOutcome"
import ProjectPager from "@/features/project/ProjectPager"
import ProjectStack from "@/features/project/ProjectStack"

type PageProps = { params: Promise<{ slug: string }> }

// Only projects with a case study have a detail page; any other slug is a 404.
const projectsWithCaseStudy = projectsList.filter((project) => project.caseStudy)

export const dynamicParams = false

export function generateStaticParams() {
    return projectsWithCaseStudy.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const project = projectsWithCaseStudy.find((item) => item.slug === slug)
    if (!project?.caseStudy) return {}

    return {
        title: `${project.name} — Case study`,
        description: project.caseStudy.tagline,
    }
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params
    const index = projectsWithCaseStudy.findIndex((item) => item.slug === slug)
    const project = projectsWithCaseStudy[index]
    if (!project?.caseStudy) notFound()

    const { caseStudy } = project

    return (
        <>
            <ProjectHero
                name={project.name}
                nature={project.nature}
                flag={project.flag}
                tagline={caseStudy.tagline}
                links={caseStudy.links}
            />
            <ProjectGallery images={caseStudy.images} />
            <ProjectContext context={caseStudy.context} />
            <ProjectStack stackGroups={caseStudy.stackGroups} architecture={caseStudy.architecture} />
            <ProjectChallenges challenges={caseStudy.challenges} />
            {/* <ProjectOutcome outcome={caseStudy.outcome} /> */}
            <ProjectPager previous={projectsWithCaseStudy[index - 1]} next={projectsWithCaseStudy[index + 1]} />
        </>
    )
}
