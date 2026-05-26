import ArrowButton from "@/components/ArrowButton"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import { loadProcessPage, loadProcessSteps } from "@/lib/content"
import { imgSrc } from "@/lib/image"
import { Camera, Check, Compass, PenTool } from "lucide-react"
import type { ElementType } from "react"
import type { Metadata } from "next"

const processIconMap: Record<string, ElementType> = {
  compass: Compass,
  "pen-tool": PenTool,
  camera: Camera,
  check: Check,
}

export const metadata: Metadata = {
  title: "Process | Savannah Villegas",
  description: "A calm four-step process for planning, filming, editing, and delivering social-first video.",
}

export default function ProcessPage() {
  const processSteps = loadProcessSteps()
  const processPage = loadProcessPage()

  return (
    <>
      <Nav />
      <main className="bg-[var(--paper)]">
        <section className="px-6 pb-20 pt-48 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <p className="eyebrow">Process</p>
            <h1 className="display-lg mt-7 max-w-5xl">Organized enough to feel easy. Flexible enough to feel human.</h1>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            {processSteps.map(({ title, text, icon }, index) => {
              const Icon = processIconMap[icon] ?? Compass
              return (
              <article key={title} className="grid gap-8 border-t border-[var(--stone)]/45 py-12 lg:grid-cols-[160px_0.7fr_1fr]">
                <p className="font-mono text-2xl text-[var(--olive)]">0{index + 1}</p>
                <div>
                  <Icon className="size-9 text-[var(--olive)]" strokeWidth={1.4} />
                  <h2 className="mt-6 font-serif text-5xl leading-none">{title}</h2>
                </div>
                <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">{text}</p>
              </article>
              )
            })}
          </div>
        </section>

        <section className="grid bg-[var(--espresso)] text-[var(--paper)] lg:grid-cols-[1fr_1fr]">
          <div
            className="min-h-[440px] bg-cover bg-center"
            style={{ backgroundImage: `url('${imgSrc(processPage.ctaImage, { w: 1000, fit: "cover" })}')` }}
          />
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16">
            <div>
              <p className="eyebrow text-[var(--sand)]">The handoff</p>
              <h2 className="font-serif text-5xl leading-none text-white">Ready-to-post means less to manage.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                Files are delivered with practical context, so your team knows what each piece is for and where it belongs.
              </p>
              <div className="mt-8">
                <ArrowButton href="https://cal.com/adxengine/savannah-example" variant="light">Book a call</ArrowButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
