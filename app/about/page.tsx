import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import SectionIntro from "@/components/SectionIntro"
import { loadAboutContent, loadSiteContent } from "@/lib/content"
import { imgSrc } from "@/lib/image"
import {
  Check,
  Leaf,
  Sprout,
  Users,
} from "lucide-react"
import type { ElementType } from "react"
import type { Metadata } from "next"

const valuesIconMap: Record<string, ElementType> = {
  check: Check,
  users: Users,
  leaf: Leaf,
  sprout: Sprout,
}

export const metadata: Metadata = {
  title: "About | Savannah Villegas",
  description: "Meet Savannah Villegas, a Tennessee-based videographer and social-first video editor.",
}

export default function AboutPage() {
  const site = loadSiteContent()
  const about = loadAboutContent()

  const values = [
    { title: about.value1Title, text: about.value1Text, icon: about.value1Icon },
    { title: about.value2Title, text: about.value2Text, icon: about.value2Icon },
    { title: about.value3Title, text: about.value3Text, icon: about.value3Icon },
    { title: about.value4Title, text: about.value4Text, icon: about.value4Icon },
  ]

  return (
    <>
      <Nav />
      <main className="bg-[var(--paper)]">
        <section className="grid min-h-[92dvh] bg-[var(--espresso)] text-[var(--paper)] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex items-end px-6 pb-16 pt-44 sm:px-10 lg:px-16">
            <div className="reveal">
              <p className="eyebrow text-[var(--sand)]">About Savannah</p>
              <h1 className="display-lg mt-6 text-white">{about.heroHeading}</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/72">
                {about.heroSubheading}
              </p>
            </div>
          </div>
          <div
            className="min-h-[520px] bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url('${imgSrc(about.heroImage, { w: 1400, fit: "cover" })}')` }}
          />
        </section>

        <section className="py-24">
          <SectionIntro
            eyebrow="Creative Philosophy"
            title={about.philosophyTitle}
            text={about.philosophyText}
            align="split"
          />
          <div className="mx-auto mt-16 grid max-w-[1400px] gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
            <p className="font-serif text-4xl leading-tight text-[var(--charcoal)]">
              {about.pullQuote}
            </p>
            <div className="grid gap-6 text-base leading-8 text-[var(--muted)] md:grid-cols-2">
              <p>{about.col1Text}</p>
              <p>{about.col2Text}</p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-soft)] py-20">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
            {values.map(({ title, text, icon }) => {
              const Icon = valuesIconMap[icon] ?? Check
              return (
                <article key={title} className="border-t border-[var(--stone)]/45 pt-8">
                  <Icon className="size-8 text-[var(--olive)]" strokeWidth={1.4} />
                  <h2 className="mt-8 text-[12px] font-extrabold uppercase tracking-[0.16em]">{title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="grid lg:grid-cols-2">
          <div
            className="min-h-[520px] bg-cover bg-center"
            style={{ backgroundImage: `url('${imgSrc(about.bottomImage, { w: 1000, fit: "cover" })}')` }}
          />
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16">
            <div>
              <p className="eyebrow">{about.humanFirstEyebrow}</p>
              <h2 className="display-sm mt-5">{about.humanFirstHeading}</h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>{about.humanFirstBody1}</p>
                <p>{about.humanFirstBody2}</p>
              </div>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--olive)]">
                Based in {site.location}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
