import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

type ArrowButtonProps = {
  href: string
  children: React.ReactNode
  variant?: "dark" | "light" | "outline"
}

export default function ArrowButton({ href, children, variant = "dark" }: ArrowButtonProps) {
  const classes = {
    dark: "bg-[var(--charcoal)] text-[var(--paper)] hover:bg-[#3a332b]",
    light: "bg-[var(--sand)] text-[var(--charcoal)] hover:bg-[#e4ccb5]",
    outline:
      "border border-[var(--stone)]/50 text-[var(--paper)] hover:border-[var(--sand)] hover:bg-white/5",
  }

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 rounded-none px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${classes[variant]}`}
    >
      <span>{children}</span>
      <span className="grid size-7 place-items-center border border-current/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5">
        <ArrowUpRight className="size-3.5" strokeWidth={1.6} />
      </span>
    </Link>
  )
}

