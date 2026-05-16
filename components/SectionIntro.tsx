type SectionIntroProps = {
  eyebrow: string
  title: string
  text?: string
  align?: "left" | "split"
}

export default function SectionIntro({ eyebrow, title, text, align = "left" }: SectionIntroProps) {
  if (align === "split") {
    return (
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16">
        <p className="eyebrow">{eyebrow}</p>
        <div>
          <h2 className="display-sm max-w-4xl">{title}</h2>
          {text ? <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{text}</p> : null}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-sm mt-5 max-w-4xl">{title}</h2>
      {text ? <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{text}</p> : null}
    </div>
  )
}

