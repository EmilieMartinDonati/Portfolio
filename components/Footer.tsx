const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/EmilieMartinDonati" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emilie-martin-donati/" }
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <a
            href="#"
            className="font-heading text-lg font-bold tracking-tight text-accent"
          >
            EMILIE MARTIN-DONATI
          </a>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body text-muted-white transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:emilie.martindonati@gmail.com"
              className="text-body break-all text-accent transition-colors hover:opacity-80"
            >
              emilie.martindonati@gmail.com
            </a>
          </nav>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-separator-dark pt-5">
          <p className="text-tag text-muted-white">
            Built with Next.js, Tailwind CSS &amp; GSAP
          </p>
          <p className="text-tag text-muted-white">
            2026 · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
