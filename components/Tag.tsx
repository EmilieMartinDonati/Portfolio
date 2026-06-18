export type ColorVariant = "teal" | "coral" | "purple" | "neutral" | "dark"

const variantClassMap = {
    "teal": "teal-tag",
    "coral": "coral-tag",
    "purple": "purple-tag",
    "neutral": "neutral-tag",
    "dark": "dark-tag"
}

export default function Tag({
    colorVariant = "teal",
    sizeVariant = "m",
    text,
    textTransform = "uppercase",
    showPresenceDot = false
}: { 
    colorVariant?: ColorVariant,
    text: string,
    showPresenceDot?: boolean,
    sizeVariant?: "xs" | "s" | "m" | "l" | "xl",
    font?: string,
    textTransform?: "capitalize" | "uppercase" | "lowercase"
 }) {
    console.log("text transfrom", textTransform, text)
    return (
        <div className={`tag ${variantClassMap[colorVariant]} flex flex-row items-center justify-center gap-1`}>
            {showPresenceDot && (
                <div className="bg-accent w-1.5 h-1.5 rounded-dot"></div>
            )}
            <span className={`${textTransform}`}>{text}</span>
        </div>

    )
}