"use client"

import { useEffect, useState } from "react"

const WORD_DURATION_MS = 2600
const SCRAMBLE_STEP_MS = 40
/** Letters revealed per step: lower means a longer scramble */
const REVEAL_PER_STEP = 0.6
const SCRAMBLE_CHARS = "abcdefghijklmnopqrstuvwxyz"

const randomChar = () => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]

/**
 * Cycles through `words`: each new word scrambles in letter by letter, then resolves.
 * Stays on the first word for visitors who prefer reduced motion.
 */
export default function RotatingWord({ words }: { words: string[] }) {
    const [text, setText] = useState(words[0])

    useEffect(() => {
        if (words.length < 2) return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        let wordIndex = 0
        let scrambleTimer: ReturnType<typeof setInterval> | undefined

        const scrambleTo = (target: string) => {
            let revealed = 0
            clearInterval(scrambleTimer)
            scrambleTimer = setInterval(() => {
                revealed += REVEAL_PER_STEP
                if (revealed >= target.length) {
                    setText(target)
                    clearInterval(scrambleTimer)
                    return
                }
                setText(
                    target
                        .split("")
                        .map((char, index) => (index < revealed ? char : randomChar()))
                        .join("")
                )
            }, SCRAMBLE_STEP_MS)
        }

        const cycleTimer = setInterval(() => {
            wordIndex = (wordIndex + 1) % words.length
            scrambleTo(words[wordIndex])
        }, WORD_DURATION_MS)

        return () => {
            clearInterval(cycleTimer)
            clearInterval(scrambleTimer)
        }
    }, [words])

    return (
        <>
            {/* Screen readers get the first word once, not every scrambled frame */}
            <span className="sr-only">{words[0]}</span>
            <span aria-hidden="true" className="text-accent">
                {text}
            </span>
            <span aria-hidden="true" className="text-accent motion-safe:animate-blink">
                .
            </span>
        </>
    )
}
