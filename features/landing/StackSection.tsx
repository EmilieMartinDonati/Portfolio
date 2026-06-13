import { skills, SkillType } from "@/data/skills"
import Tag from "@/components/Tag"

export default function StackSection() {
    return (
        <section className="landing-section bg-bg-dark flex flex-col gap-6.5">
            <div className="flex flex-col gap-1.5">
                <span className="section-title">02. Stack</span>
                <h2 className="text-h2 text-heading text-white">Tools I reach for first.</h2>
            </div>
            <div className="grid grid-cols-4 gap-4.5">
                {skills.map(
                    ({ label, identifier, list, colorVariant }: SkillType) => (
                        <div
                            key={identifier}
                            className="flex flex-col gap-3">
                            <span className="text-timid-grey capitalize text-xs">{label}</span>
                            <div className="flex flex-wrap gap-1.5">{list.map((tool, index) => (
                                <Tag
                                    key={index}
                                    text={tool}
                                    colorVariant={colorVariant}
                                    textTransform="capitalize"
                                />
                            ))}</div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}