import Tag from "./Tag";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

// rewrite import header styles

export default function Header() {
  return (
    <header className="bg-bg-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-0">
        <a
          href="#"
          className="font-heading text-lg font-bold tracking-tight text-accent"
        >
          EMILIE MARTIN-DONATI
        </a>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body text-muted-white transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-button border border-accent px-4 py-2 text-tag font-medium uppercase tracking-[2px] text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
