import ArrowButton from "@/components/ArrowButton"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import { faqs, site } from "@/data/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inquiry | Savannah Villegas",
  description: "Inquire about videography, social media editing, monthly content packages, and creative direction.",
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-[var(--espresso)] text-[var(--paper)]">
        <section className="grid min-h-[100dvh] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex items-end px-6 pb-14 pt-48 sm:px-10 lg:px-16">
            <div>
              <p className="eyebrow text-[var(--sand)]">Inquiry</p>
              <h1 className="display-lg mt-7 text-white">Tell me what you want your content to feel like.</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/70">
                Share the project, the season your brand is in, and what kind of support would make content feel easier.
              </p>
              <div className="mt-9 space-y-2 text-sm text-white/68">
                <p>{site.email}</p>
                <p>{site.phone}</p>
                <p>{site.location}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-6 pb-20 sm:px-10 lg:px-16 lg:pt-44">
            <form className="w-full border border-white/12 bg-white/[0.04] p-5 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Name
                  <input className="field" placeholder="Your name" required />
                </label>
                <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Email
                  <input className="field" placeholder="Email address" type="email" required />
                </label>
                <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Brand / Business
                  <input className="field" placeholder="Business name" required />
                </label>
                <label className="grid gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                  Budget Range
                  <select className="field" defaultValue="" required>
                    <option value="" disabled>Select range</option>
                    <option>Project-based</option>
                    <option>Monthly support</option>
                    <option>Still gathering details</option>
                  </select>
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                What help do you need?
                <select className="field" defaultValue="" required>
                  <option value="" disabled>Choose a service</option>
                  <option>Social media editing</option>
                  <option>Brand videography</option>
                  <option>Monthly content package</option>
                  <option>Creative direction</option>
                  <option>Event coverage</option>
                </select>
              </label>
              <label className="mt-4 grid gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                Message
                <textarea className="field min-h-36" placeholder="Tell me about the project, timeline, and what success would look like." required />
              </label>
              <button type="submit" className="mt-5 w-full bg-[var(--sand)] py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--charcoal)] transition-colors duration-500 hover:bg-[var(--paper)]">
                Send Inquiry
              </button>
              <p className="mt-4 text-center text-xs text-white/54">I typically respond within 24 hours.</p>
            </form>
          </div>
        </section>

        <section id="faq" className="bg-[var(--paper)] px-6 py-20 text-[var(--charcoal)] sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-5 font-serif text-5xl leading-none">A few useful answers before we talk.</h2>
              <div className="mt-8">
                <ArrowButton href={`mailto:${site.email}`}>Email directly</ArrowButton>
              </div>
            </div>
            <div className="divide-y divide-[var(--stone)]/45">
              {faqs.map((item) => (
                <article key={item.question} className="py-7">
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.12em]">{item.question}</h3>
                  <p className="mt-3 text-base leading-8 text-[var(--muted)]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
