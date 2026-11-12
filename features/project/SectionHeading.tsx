import type { SectionTone } from "@/components/Section"

const labelClassMap = {
    dark: "text-standard-grey",
    light: "text-timid-grey",
}

export default function SectionHeading({
    label,
    title,
    tone,
}: {
    label: string
    title: string
    tone: SectionTone
}) {
    return (
        <div className="flex flex-col gap-2">
            <span className={`section-title ${labelClassMap[tone]}`}>{label}</span>
            <h2 className="font-heading text-h2">{title}</h2>
        </div>
    )
}
