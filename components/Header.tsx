import Link from "next/link";
import LandingNavLinks from "@/components/LandingNavLinks";

// File lives in public/projects/cv/ — update the name here when the CV changes.
const CV_HREF = "/projects/cv/EN_EmilieMartin_CV_Nov2026.pdf";

export default function Header() {
  return (
    <header className="bg-bg-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-0">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-accent"
        >
          EMILIE MARTIN-DONATI
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-8">
          <LandingNavLinks />

          <a
            href={CV_HREF}
            download
            className="whitespace-nowrap rounded-button border border-accent px-4 py-2 text-tag font-medium uppercase tracking-[2px] text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
