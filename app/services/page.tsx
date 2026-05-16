import ArrowButton from "@/components/ArrowButton"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import { services } from "@/data/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Savannah Villegas",
  description: "Social media editing, brand videography, monthly content packages, creative direction, and event coverage.",
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-[var(--paper)]">
        <section className="px-6 pb-20 pt-48 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <p className="eyebrow">Services</p>
            <div className="mt-7 grid gap-8 lg:grid-cols-[1.1fr_0.7fr]">
              <h1 className="display-lg">Video support shaped around the way your brand actually shows up.</h1>
              <p className="max-w-xl self-end text-lg leading-8 text-[var(--muted)]">
                From one-off filming to monthly content rhythms, each service is designed to make high-quality video feel calm, clear, and useful.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
            <div className="grid gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <article key={service.title} className="grid gap-8 border-t border-[var(--stone)]/45 py-10 lg:grid-cols-[90px_0.8fr_1fr_0.55fr]">
                    <p className="font-mono text-sm font-bold text-[var(--olive)]">0{index + 1}</p>
                    <div>
                      <Icon className="size-8 text-[var(--olive)]" strokeWidth={1.4} />
                      <h2 className="mt-5 font-serif text-4xl leading-none">{service.title}</h2>
                    </div>
                    <div>
                      <p className="text-base leading-8 text-[var(--muted)]">{service.detail}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.deliverables.map((item) => (
                          <span key={item} className="border border-[var(--stone)]/45 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:border-l lg:border-[var(--stone)]/35 lg:pl-8">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em]">Best for</p>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.ideal}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-[var(--espresso)] px-6 py-20 text-[var(--paper)] sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-[var(--sand)]">Not sure where to start?</p>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none text-white">Tell me what you&apos;re trying to make easier.</h2>
            </div>
            <ArrowButton href="/contact" variant="light">Start an inquiry</ArrowButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
