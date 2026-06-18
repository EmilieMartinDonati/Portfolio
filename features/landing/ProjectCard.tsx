import Tag from "@/components/Tag"

export default function ProjectCard({
    name,
    image,
    description,
    stack,
    url,
    nature
}: { name: string, image?: string, description: string, stack: any[], url?: string, nature?: string }) {
    return (
        <div className="project-card overflow-hidden">
            <div className="p-4">
                <div className="mb-2 flex flex-row items-center justify-between flex-wrap gap-2">
                    <span className="text-sm">{name}</span>
                    <div className="border-timid-grey border-hairline px-2 py-1 rounded-badge flex justify-center align-center">
                        <span className="text-tag text-standard-grey">VOIR</span>
                    </div>
                </div>
                <div className="mb-2.5">
                    <span className='text-muted-dark text-xs'>{description}</span>
                </div>
                <div className="mb-4 flex flex-row flex-wrap gap-1.5">
                    {stack.map((item, index) => (
                        <Tag
                            text={item}
                            key={`${name}-${index}`}
                            textTransform={"capitalize"}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-end">
                    <span className="text-accent text-tag">Full case study {`->`}</span>
                </div>
            </div>
        </div>
    )
}