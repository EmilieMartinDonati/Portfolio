export default function AboutSection() {
    return (
        <section className="landing-section grid grid-cols-3 gap-6 ">
            <div className="col-span-1 flex flex-col gap-2.5">
                <span className="section-title text-timid-grey">1.About</span>{/** AUDIT bg timid grey overriding on white background section*/}
                <h2 className="text-h2 text-heading font-heading">Not just a
                    frontend dev.</h2>
            </div>
            <div className="col-span-2 flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <span className="text-standard-grey text-xs">I'm a full-stack developer who specializes in animated, high-performance UIs backed by solid architecture. I care as much about database design as I do about motion curves</span>
                    <span className="text-standard-grey text-xs" >Building products end-to-end — shipping features, designing APIs, debugging race conditions, and making sure the page transition actually feels right.</span>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-1">
                        <span className="text-h2 text-heading">5+</span>
                        <span className="text-timid-grey text-xs">Years exp.</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-h2 text-heading">10+</span>
                        <span className="text-timid-grey text-xs">Projects shipped</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-h2 text-heading text-accent">∞</span>
                        <span className="text-timid-grey text-xs">Pull requests</span>
                    </div>
                </div>
            </div>
        </section>
    )
}