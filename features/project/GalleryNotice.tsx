import type { ProjectImage } from "@/data/projects"

type Notice = NonNullable<ProjectImage["notice"]>

const kindLabelMap: Record<Notice["kind"], string> = {
    confidential: "Confidential",
    "in-progress": "In progress",
}

function LockIcon() {
    return (
        <span className="relative flex size-7 items-center justify-center">
            <span
                aria-hidden="true"
                className="absolute inset-0 rounded-dot bg-tag-coral-bg motion-safe:animate-ping"
            />
            <span className="relative flex size-7 items-center justify-center rounded-dot bg-tag-coral-bg text-accent">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
            </span>
        </span>
    )
}

function ProgressBar() {
    return (
        <span aria-hidden="true" className="block h-1 w-full overflow-hidden rounded-tag bg-tag-dark-border">
            <span className="block h-full w-2/5 rounded-tag bg-accent motion-safe:animate-progress" />
        </span>
    )
}

/** Animated message shown over a placeholder image in the gallery. */
export default function GalleryNotice({ notice }: { notice: Notice }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center p-5">
            <div className="motion-safe:animate-notice-in">
                <div className="flex max-w-xs flex-col items-center gap-3 rounded-card border-hairline border-tag-dark-border bg-bg-dark p-5 text-center text-white shadow-xl motion-safe:animate-notice-float">
                    {notice.kind === "confidential" && <LockIcon />}
                    <span className="text-label uppercase text-accent">{kindLabelMap[notice.kind]}</span>
                    <h3 className="font-heading text-subtitle">{notice.title}</h3>
                    <p className="text-body text-muted-white">{notice.text}</p>
                    {notice.kind === "in-progress" && <ProgressBar />}
                </div>
            </div>
        </div>
    )
}
