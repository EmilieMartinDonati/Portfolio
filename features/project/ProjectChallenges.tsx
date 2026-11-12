import type { ProjectChallenge } from "@/data/projects"
import ChallengeCard from "./ChallengeCard"
import Section from "@/components/Section"
import SectionHeading from "./SectionHeading"

export default function ProjectChallenges({ challenges }: { challenges: ProjectChallenge[] }) {
    if (challenges.length === 0) return null

    return (
        <Section tone="light">
            <SectionHeading
                tone="light"
                label="03 / Technical challenges"
                title="The difficulties I faced and how I solved them."
            />

            <div className="mt-5 flex flex-col gap-4">
                {challenges.map((challenge, index) => (
                    <ChallengeCard key={challenge.title} challenge={challenge} position={index + 1} />
                ))}
            </div>
        </Section>
    )
}
