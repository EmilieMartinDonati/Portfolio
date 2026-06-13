export default function ActionButton({ 
    colorVariant = "accent",
    text
}: {
    text: string
    colorVariant?: "accent" | "dark"
}) {
    return (
        <button type="button" className={`action-button bg-${colorVariant}`}>
            {text}
        </button>
    )
}