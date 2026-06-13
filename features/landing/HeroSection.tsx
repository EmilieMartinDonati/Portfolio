import Tag from "../../components/Tag"
import ActionButton from "../../components/ActionButton"

export default function HeroSection() {
    return (
        <section className="landing-section pt-7 bg-bg-dark">
            <div className="mb-5">
                <Tag colorVariant="coral" text="Available for work" showPresenceDot />
            </div>
            <div className="mb-5">
                <span className="pitch">Full-stack dev
                    <br />
                    who makes things
                    <br />
                    SCALE
                </span>
            </div>
            <div className="mb-6">
                <h2 className="self-description">Back-end architecture, business logic, and animations that don't feel bolted on. From DB schema to GSAP timeline — I build the whole product.</h2>
            </div>
            <div className="flex flex-row items-center gap-2">
                <ActionButton text="View projects" />
                <ActionButton text="Download CV" />
            </div>
        </section>
    )
}