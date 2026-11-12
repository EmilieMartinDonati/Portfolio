import Section from "@/components/Section"
export default function AboutSection() {
    return (
        <Section tone="light" id="about" className="grid gap-5 md:grid-cols-3 md:gap-6">
            <div className="flex flex-col gap-2.5">
                <span className="section-title text-timid-grey">01. About</span>{/** AUDIT bg timid grey overriding on white background section*/}
                <h2 className="text-h2 text-heading font-heading">Not just a
                    frontend dev.</h2>
            </div>
            <div className="flex flex-col gap-5 md:col-span-2">
                <div className="flex flex-col gap-3">
                    <span className="text-standard-grey text-xs">I&apos;m a full-stack developer who specializes in animated, high-performance UIs backed by solid architecture. I care as much about database design as I do about motion curves</span>
                    <span className="text-standard-grey text-xs" >Building products end-to-end — shipping features, designing APIs, debugging race conditions, and making sure the page transition actually feels right.</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-h2 text-heading">5+</span>
                        <span className="text-timid-grey text-xs">Years exp.</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-h2 text-heading">3+</span>
                        <span className="text-timid-grey text-xs">Projects shipped</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-h2 text-heading text-accent">∞</span>
                        <span className="text-timid-grey text-xs">Pull requests</span>
                    </div>
                </div>
            </div>
        </Section>
    )
}