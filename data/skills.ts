import { ColorVariant } from "@/components/Tag"

const frontEndToolsList = [
    "React", "Next.js", "React-Native/Expo"
]

const backEndToolsList = [
    "Node", "Express", "Supabase (SQL)", "Parse Server (MongoDB)"
]

const languagesList = [
    "JS/Typescript",
    "Python",
    "CSS"
]


const designToolsList = [
    "Tailwind",
    "Framer-motion / React-spring",
    "Material UI",
    "Emotion"
]

export type SkillType = {
    identifier: string,
    label: string,
    list: string[],
    colorVariant: ColorVariant
}

// One colour per nature of tool: neutral for languages, teal for back end,
// purple for front end (as on the project cards), coral for styling and animation.
export const skills:SkillType[] = [
    {
        identifier: "languages",
        label: "langages",
        list: languagesList,
        colorVariant: "dark"
    },
    {
        identifier: "backend",
        label: "backend",
        list: backEndToolsList,
        colorVariant: "teal-soft"
    },
    {
        identifier: "frontend",
        label: "frontend",
        list: frontEndToolsList,
        colorVariant: "purple-soft"
    }, {
        identifier: "styles",
        label: "styles",
        list: designToolsList,
        colorVariant: "coral"
    },
]