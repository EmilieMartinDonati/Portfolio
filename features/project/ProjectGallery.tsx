"use client"

import Image from "next/image"
import { useState } from "react"
import type { ProjectImage } from "@/data/projects"
import Section from "@/components/Section"
import GalleryNotice from "@/features/project/GalleryNotice"
import ScreenCascade from "@/features/project/ScreenCascade"

const formatIndex = (index: number) => String(index + 1).padStart(2, "0")

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
    const [activeIndex, setActiveIndex] = useState(0)

    if (images.length === 0) return null

    const activeCaption = images[activeIndex].caption
    const hasSeveralImages = images.length > 1

    return (
        <Section tone="light">
            <div className="relative h-110 overflow-hidden rounded-card border-hairline border-card-border bg-tag-neutral-bg md:h-150">
                {images.map((image, index) => {
                    const isActive = index === activeIndex
                    return (
                        <div
                            key={image.src}
                            aria-hidden={!isActive}
                            className={`absolute inset-0 flex items-center justify-center gap-7 p-5 transition-opacity duration-500 md:p-6 ${
                                isActive ? "opacity-100" : "pointer-events-none opacity-0"
                            }`}
                        >
                            {image.moreScreens ? (
                                <ScreenCascade screens={[image, ...image.moreScreens]} priority={index === 0} />
                            ) : (
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    // Portrait screens stay narrow; landscape ones can fill the whole frame.
                                    sizes={
                                        image.width > image.height
                                            ? "(min-width: 1152px) 1100px, 100vw"
                                            : "(min-width: 768px) 240px, 50vw"
                                    }
                                    priority={index === 0}
                                    className={`h-full w-auto max-w-full rounded-card object-contain shadow-xl ${
                                        image.notice ? "opacity-60 blur-sm" : ""
                                    }`}
                                />
                            )}
                            {image.notice && <GalleryNotice notice={image.notice} />}
                            {image.caption && (
                                <div className="hidden max-w-64 flex-col gap-2 md:flex">
                                    <h3 className="font-heading text-subtitle">{image.caption.title}</h3>
                                    <p className="text-body text-muted-dark">{image.caption.text}</p>
                                </div>
                            )}
                        </div>
                    )
                })}

                {hasSeveralImages && (
                    <span className="absolute right-4 bottom-3 text-label text-timid-grey">
                        {formatIndex(activeIndex)} / {formatIndex(images.length - 1)}
                    </span>
                )}
            </div>

            {/* On small screens the caption sits under the image instead of next to it */}
            {activeCaption && (
                <div className="mt-4 flex flex-col gap-1 md:hidden">
                    <h3 className="font-heading text-subtitle">{activeCaption.title}</h3>
                    <p className="text-body text-muted-dark">{activeCaption.text}</p>
                </div>
            )}

            {hasSeveralImages && (
                <div className="mt-3 grid grid-cols-2 gap-3 md:flex md:justify-center">
                    {images.map((image, index) => {
                        const isActive = index === activeIndex
                        return (
                            <button
                                key={image.src}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setActiveIndex(index)}
                                className={`flex cursor-pointer flex-col rounded-card border-hairline bg-card-bg px-4 py-3 text-left transition-colors md:w-56 ${
                                    isActive
                                        ? "border-accent text-dark"
                                        : "border-card-border text-muted-dark hover:text-dark"
                                }`}
                            >
                                <span className={`text-label ${isActive ? "text-accent" : "text-timid-grey"}`}>
                                    {formatIndex(index)}
                                </span>
                                <span className="text-xs">{image.label}</span>
                            </button>
                        )
                    })}
                </div>
            )}
        </Section>
    )
}
