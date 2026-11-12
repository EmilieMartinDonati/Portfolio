import Image from "next/image"
import type { ProjectScreen } from "@/data/projects"

// Each screen sits a bit lower than the previous one, so the cascade reads top-left to bottom-right.
const alignClassMap = ["self-start", "self-center", "self-end"]

/** Several phone screens overlapping in a cascade, e.g. the steps of a flow. */
export default function ScreenCascade({ screens, priority }: { screens: ProjectScreen[]; priority: boolean }) {
    return (
        <div className="flex h-full items-center">
            {screens.map((screen, index) => (
                <Image
                    key={screen.src}
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    sizes="(min-width: 768px) 260px, 50vw"
                    priority={priority}
                    // Wider overlap on mobile so the three screens still fit the frame.
                    className={`h-5/6 w-auto rounded-card border-hairline border-card-border object-contain shadow-xl ${
                        alignClassMap[index % alignClassMap.length]
                    } ${index > 0 ? "-ml-24 md:-ml-8" : ""}`}
                />
            ))}
        </div>
    )
}
