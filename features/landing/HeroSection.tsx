import Tag from "@/components/Tag"
import RotatingWord from "@/features/landing/RotatingWord"

// Defined outside the component so the array keeps the same identity between renders
const HERO_WORDS = ["scale", "ship", "breathe"]

export default function HeroSection() {
    return (
        <section className="bg-bg-dark pt-5 pb-section-y">
            <div className="mx-auto max-w-6xl px-6">
            <div className="mb-5">
                <Tag colorVariant="green" text="Available for work" showPresenceDot />
            </div>
            <div className="mb-6">
                <span className="pitch">Full-stack dev
                    <br />
                    who makes things
                    <br />
                    <RotatingWord words={HERO_WORDS} />
                </span>
            </div>
            <div className="self-description flex flex-col gap-3">
                <p>
                    Hi there ! I am Emilie, a full-stack developer with experience as a product owner and product lead, and further training in generative IA.
                </p>
                <p>In my spare time, I am passionate about cultural studies, history, literature and cinema.</p>
                <p>A geek at heart, I am always eager to exchange ideas and insights about the future of development.</p>
            </div>
            </div>
        </section>
    )
}