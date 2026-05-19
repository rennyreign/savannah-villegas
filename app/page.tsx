import ArrowButton from "@/components/ArrowButton"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import PageTransition from "@/components/PageTransition"
import ReelCard from "@/components/ReelCard"
import SectionIntro from "@/components/SectionIntro"
import { featuredWork, processSteps, services, site, values } from "@/data/site"
import { ArrowRight, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <PageTransition>
      <Nav />
      <main>
        <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--espresso)] text-[var(--paper)]">
          <img
            src="/savhero2.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(215,197,178,0.16),transparent_28%),linear-gradient(90deg,rgba(10,9,7,0.94),rgba(10,9,7,0.63)_40%,rgba(10,9,7,0.16)_72%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.16),rgba(12,10,8,0.1)_36%,rgba(12,10,8,0.28)_100%)] mix-blend-multiply" />

          <div className="relative mx-auto flex min-h-[100dvh] max-w-[1480px] flex-col justify-end px-6 pb-12 pt-44 sm:px-10 lg:px-16">
            <div className="reveal max-w-3xl">
              <p className="eyebrow text-[var(--sand)]">{site.tagline}</p>
              <h1 className="display-xl mt-7 text-white">
                Storytelling
                <br />
                That Moves
                <br />
                People.
              </h1>
              <div className="mt-7 h-px w-10 bg-[var(--sand)]" />
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/86">{site.description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ArrowButton href="https://cal.com/adxengine/savannah-example" variant="light">Book a call</ArrowButton>
                <ArrowButton href="/work" variant="outline">View my work</ArrowButton>
              </div>
            </div>

            <div className="absolute bottom-16 right-8 hidden rotate-[-8deg] border-y border-white/50 px-4 py-3 font-serif text-3xl italic leading-none text-white lg:block">
              Based in
              <br />
              Tennessee
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-soft)] px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[80px_repeat(4,1fr)]">
            <div className="hidden border-r border-[var(--stone)]/35 lg:flex lg:items-center lg:justify-center">
              <p className="-rotate-90 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--olive)]">What I Do</p>
            </div>
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="reveal border-[var(--stone)]/35 lg:border-r lg:px-8" style={{ animationDelay: `${index * 90}ms` }}>
                  <Icon className="mx-auto size-7 text-[var(--olive)]" strokeWidth={1.4} />
                  <h2 className="mt-5 text-center text-[12px] font-extrabold uppercase tracking-[0.12em]">{service.title}</h2>
                  <div className="mx-auto mt-4 h-px w-8 bg-[var(--sand)]" />
                  <p className="mx-auto mt-5 max-w-[18rem] text-center text-sm leading-7 text-[var(--muted)]">{service.short}</p>
                  <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--charcoal)]">
                    {service.deliverables.slice(0, 3).join(" · ")}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="bg-[var(--espresso)] py-20 text-[var(--paper)]">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-6 sm:px-10 lg:grid-cols-[260px_1fr] lg:px-16">
            <div>
              <p className="eyebrow text-[var(--sand)]">Featured Work</p>
              <h2 className="mt-8 font-serif text-5xl leading-[0.92] text-white">
                Real brands.
                <br />
                Real people.
                <br />
                Real results.
              </h2>
              <p className="mt-6 max-w-[15rem] text-sm leading-7 text-white/66">A few recent project styles and content directions.</p>
              <div className="mt-8">
                <ArrowButton href="/work" variant="outline">Watch more</ArrowButton>
              </div>
            </div>
            <div className="grid auto-cols-[230px] grid-flow-col gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid-flow-row md:grid-cols-3 lg:grid-cols-6 lg:overflow-visible">
              {featuredWork.map((item, index) => <ReelCard key={item.title} {...item} index={index} />)}
            </div>
          </div>
        </section>

        <section className="grid bg-[var(--paper)] lg:grid-cols-[0.88fr_1.52fr]">
          <div
            className="min-h-[460px] bg-cover lg:min-h-[620px]"
            style={{ backgroundImage: "url('/savannah11.jpg')" }}
          />
          <div className="grid gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-16 lg:py-24">
            <div>
              <p className="eyebrow">Hi, I&apos;m Savannah</p>
              <h2 className="display-sm mt-5">Your creative partner from start to publish.</h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>I believe in creating content that feels natural, looks beautiful, and connects with the right people.</p>
                <p>I handle the filming, editing, and strategy so you can show up, stay consistent, and grow your brand with confidence.</p>
              </div>
              <p className="mt-8 font-serif text-3xl italic text-[var(--charcoal)]">Savannah</p>
            </div>
            <div className="border-l border-[var(--stone)]/35 pl-0 lg:pl-10">
              <div className="space-y-7">
                {values.map(({ title, text, icon: Icon }) => (
                  <div key={title} className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--sand)]/35 text-[var(--olive)]">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-soft)] py-16">          <p className="eyebrow mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">My Process</p>
          <div className="mx-auto mt-12 grid max-w-[1400px] gap-8 px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
            {processSteps.map(({ title, text, icon: Icon }, index) => (
              <article key={title} className="relative">
                <p className="font-mono text-sm font-bold">0{index + 1}</p>
                <Icon className="mt-8 size-8 text-[var(--olive)]" strokeWidth={1.4} />
                <h3 className="mt-7 text-[12px] font-extrabold uppercase tracking-[0.16em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
                {index < processSteps.length - 1 ? (
                  <ArrowRight className="absolute right-4 top-16 hidden size-5 text-[var(--olive)] lg:block" strokeWidth={1.4} />
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="grid bg-[var(--espresso)] text-[var(--paper)] lg:grid-cols-[1fr_1.05fr]">
          <div className="hidden items-end bg-[url('/savannah12.jpg')] bg-cover bg-center p-12 lg:flex">
            <div className="flex items-center gap-3 bg-black/30 px-4 py-3 text-sm backdrop-blur-md">
              <MapPin className="size-4" />
              Based in {site.location}
            </div>
          </div>
          <div id="contact" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <p className="eyebrow text-[var(--sand)]">Let&apos;s create something amazing</p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-white">Ready to bring your vision to life?</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              Tell me about your project and I&apos;ll reply with thoughtful next steps.
            </p>
            <form className="mt-8 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="field" placeholder="Your name" aria-label="Your name" required />
                <input className="field" placeholder="Email address" aria-label="Email address" type="email" required />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="field" placeholder="Business / brand" aria-label="Business or brand" required />
                <select className="field" aria-label="What do you need help with?" defaultValue="" required>
                  <option value="" disabled>What do you need help with?</option>
                  <option>Videography</option>
                  <option>Editing</option>
                  <option>Monthly content</option>
                  <option>Strategy support</option>
                </select>
              </div>
              <textarea className="field min-h-28" placeholder="Tell me about your project and goals..." aria-label="Project message" required />
              <button type="submit" className="bg-[var(--sand)] py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--charcoal)] transition-colors duration-500 hover:bg-[var(--paper)]">
                Send Inquiry
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-white/58">I typically respond within 24 hours.</p>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  )
}
