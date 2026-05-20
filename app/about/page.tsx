import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import SectionIntro from "@/components/SectionIntro"
import { site, values } from "@/data/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Savannah Villegas",
  description: "Meet Savannah Villegas, a Tennessee-based videographer and social-first video editor.",
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-[var(--paper)]">
        <section className="grid min-h-[92dvh] bg-[var(--espresso)] text-[var(--paper)] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex items-end px-6 pb-16 pt-44 sm:px-10 lg:px-16">
            <div className="reveal">
              <p className="eyebrow text-[var(--sand)]">About Savannah</p>
              <h1 className="display-lg mt-6 text-white">A calm eye for stories that feel lived in.</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/72">
                Savannah creates social-first video for brands that care about atmosphere, honesty, and the small moments people remember.
              </p>
            </div>
          </div>
          <div
            className="min-h-[520px] bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('/savannah-about.jpg')" }}
          />
        </section>

        <section className="py-24">
          <SectionIntro
            eyebrow="Creative Philosophy"
            title="Content should feel considered, not manufactured."
            text="The work sits somewhere between a quiet editorial feature and a practical piece of social content. It needs to look beautiful, but it also needs to help a real business communicate clearly."
            align="split"
          />
          <div className="mx-auto mt-16 grid max-w-[1400px] gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
            <p className="font-serif text-4xl leading-tight text-[var(--charcoal)]">
              I care about the in-between moments: the hand adjusting the product, the light across the table, the laugh before the line starts.
            </p>
            <div className="grid gap-6 text-base leading-8 text-[var(--muted)] md:grid-cols-2">
              <p>
                My process is built for business owners who want content to feel easier. You bring the vision, the offer, and the heart of the brand. I help translate it into footage and edits that feel natural online.
              </p>
              <p>
                The goal is never to make your brand louder for the sake of it. The goal is to make it more recognizable, more trusted, and easier for the right people to connect with.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-soft)] py-20">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
            {values.map(({ title, text, icon: Icon }) => (
              <article key={title} className="border-t border-[var(--stone)]/45 pt-8">
                <Icon className="size-8 text-[var(--olive)]" strokeWidth={1.4} />
                <h2 className="mt-8 text-[12px] font-extrabold uppercase tracking-[0.16em]">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2">
          <div
            className="min-h-[520px] bg-cover bg-center"
            style={{ backgroundImage: "url('/savannah13.jpg')" }}
          />
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16">
            <div>
              <p className="eyebrow">Human First</p>
              <h2 className="display-sm mt-5">The camera is only part of the work.</h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  I bring a steady presence to each project because good content asks people to feel comfortable, clear, and seen.
                </p>
                <p>
                  Whether I&apos;m filming a launch, shaping a monthly content rhythm, or editing the footage you already have, I want the final piece to feel like your brand at its most honest.
                </p>
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
