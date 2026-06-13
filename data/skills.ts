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

export const skills:SkillType[] = [
    {
        identifier: "languages",
        label: "langages",
        list: languagesList,
        colorVariant: "coral"
    },
    {
        identifier: "backend",
        label: "backend",
        list: backEndToolsList,
        colorVariant: "coral"
    },
    {
        identifier: "frontend",
        label: "frontend",
        list: frontEndToolsList,
       colorVariant: "coral"
    }, {
        identifier: "styles",
        label: "styles",
        list: designToolsList,
        colorVariant: "coral"
    },
]