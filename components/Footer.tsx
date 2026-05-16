import { Instagram, Mail, Play, Send } from "lucide-react"
import Link from "next/link"
import { navLinks, site } from "@/data/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[var(--paper)] px-6 pb-10 pt-14 sm:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid gap-10 border-t border-[var(--stone)]/45 pt-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--charcoal)]">
              {site.name}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.34em] text-[var(--muted)]">
              {site.studio}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
            {navLinks.slice(0, 6).map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-[var(--charcoal)]">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:justify-end">
            {[
              { label: "Instagram", icon: Instagram },
              { label: "TikTok", icon: Send },
              { label: "YouTube", icon: Play },
              { label: "Email", icon: Mail },
            ].map(({ label, icon: Icon }) => (
              <a
                key={label}
                href={label === "Email" ? `mailto:${site.email}` : "#"}
                aria-label={label}
                className="grid size-9 place-items-center border border-[var(--stone)]/50 text-[var(--charcoal)] transition-colors hover:border-[var(--olive)] hover:text-[var(--olive)]"
              >
                <Icon className="size-4" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[var(--stone)]/35 pt-6 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)] sm:flex-row">
          <p>© {currentYear} {site.name}</p>
          <p>Based in {site.location}</p>
        </div>
      </div>
    </footer>
  )
}
