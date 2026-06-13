const SOCIAL_LINKS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="font-heading text-lg font-bold tracking-tight text-accent"
          >
            YN/
          </a>

          <nav className="flex items-center gap-6">
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
              href="mailto:hello@yourname.dev"
              className="text-body text-accent transition-colors hover:opacity-80"
            >
              hello@yourname.dev
            </a>
          </nav>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-separator-dark pt-6">
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
