"use client"

import { Menu, Phone, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { navLinks, site } from "@/data/site"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setOpen(false)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-5 pt-5 sm:px-8 lg:px-10 pointer-events-none">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-6">
        <Link
          href="/"
          onClick={scrollToTop}
          className="pointer-events-auto text-[var(--paper)] mix-blend-difference"
        >
          <span className="block text-xl font-semibold uppercase leading-[0.9] tracking-[0.36em] sm:text-2xl">
            Savannah
          </span>
          <span className="block text-xl font-semibold uppercase leading-[0.9] tracking-[0.36em] sm:text-2xl">
            Villegas
          </span>
          <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.35em]">
            Video Production
          </span>
        </Link>

        <nav className="pointer-events-auto hidden items-center gap-7 bg-[rgba(245,241,235,0.82)] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--charcoal)] shadow-[0_18px_60px_rgba(36,33,29,0.12)] backdrop-blur-xl lg:flex">
          {navLinks.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0])
            return (
              <Link
                key={label}
                href={href}
                className={`border-b pb-1 transition-colors duration-300 ${
                  active
                    ? "border-[var(--olive)] text-[var(--charcoal)]"
                    : "border-transparent text-[var(--charcoal)]/72 hover:text-[var(--charcoal)]"
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="pointer-events-auto hidden items-center gap-5 text-[var(--paper)] mix-blend-difference lg:flex">
          <Link
            href="/contact"
            className="bg-[var(--sand)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--charcoal)] mix-blend-normal transition-colors duration-300 hover:bg-[var(--paper)]"
          >
            Inquire
          </Link>
          <a href={`tel:${site.phone}`} className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="size-4" strokeWidth={1.7} />
            {site.phone}
          </a>
        </div>

        <div className="pointer-events-auto flex items-center gap-2.5 lg:hidden">
          <Link href="/contact" onClick={() => setOpen(false)} className="bg-[var(--sand)] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--charcoal)]">
            Inquire
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center bg-[rgba(245,241,235,0.86)] text-[var(--charcoal)] backdrop-blur-xl"
          >
            {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 flex flex-col bg-[var(--espresso)] px-6 pb-10 pt-32 text-[var(--paper)] lg:hidden">
          <nav className="flex flex-1 flex-col">
            {navLinks.map(({ label, href }, index) => (
              <Link
                key={label}
                href={href}
                onClick={href === "/" ? scrollToTop : () => setOpen(false)}
                className="reveal border-b border-white/10 py-4 font-serif text-[3rem] leading-none transition-colors duration-300 hover:text-[var(--sand)]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 block w-full bg-[var(--sand)] py-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--charcoal)]"
          >
            Send Inquiry
          </Link>
        </div>
      )}
    </>
  )
}
