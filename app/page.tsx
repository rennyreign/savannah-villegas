import ArrowButton from "@/components/ArrowButton"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import PageTransition from "@/components/PageTransition"
import ReelCard from "@/components/ReelCard"
import { loadAboutContent, loadHeroContent, loadHomepageContact, loadHomepageFeaturedWork, loadHomepageIntro, loadHomepageWork, loadProcessSteps, loadServices, loadSiteContent } from "@/lib/content"
import { imgSrc } from "@/lib/image"
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  Clapperboard,
  Compass,
  HeartHandshake,
  Leaf,
  MapPin,
  MessagesSquare,
  PenTool,
  Play,
  Sparkles,
  Sprout,
  Users,
  Video,
} from "lucide-react"
import type { ElementType } from "react"

const serviceIconMap: Record<string, ElementType> = {
  video: Video,
  camera: Camera,
  "calendar-days": CalendarDays,
  "pen-tool": PenTool,
  clapperboard: Clapperboard,
  "messages-square": MessagesSquare,
}

const processIconMap: Record<string, ElementType> = {
  compass: Compass,
  "pen-tool": PenTool,
  camera: Camera,
  check: Check,
}

const valuesIconMap: Record<string, ElementType> = {
  check: Check,
  users: Users,
  leaf: Leaf,
  sprout: Sprout,
}

const proofIconMap: Record<string, ElementType> = {
  sparkles: Sparkles,
  camera: Camera,
  play: Play,
  "heart-handshake": HeartHandshake,
}

export default function HomePage() {
  const site = loadSiteContent()
  const hero = loadHeroContent()
  const intro = loadHomepageIntro()
  const featuredWork_section = loadHomepageFeaturedWork()
  const contact_section = loadHomepageContact()
  const about = loadAboutContent()
  const services = loadServices()
  const featuredWork = loadHomepageWork()
  const processSteps = loadProcessSteps()

  return (
    <PageTransition>
      <Nav />
      <main>
        <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--espresso)] text-[var(--paper)]">
          <img
            src={imgSrc(hero.heroImage, { w: 1800, fit: "cover", position: "top" })}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(215,197,178,0.16),transparent_28%),linear-gradient(90deg,rgba(10,9,7,0.94),rgba(10,9,7,0.63)_40%,rgba(10,9,7,0.16)_72%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.16),rgba(12,10,8,0.1)_36%,rgba(12,10,8,0.28)_100%)] mix-blend-multiply" />

          <div className="relative mx-auto flex min-h-[100dvh] max-w-[1480px] flex-col justify-end px-6 pb-12 pt-44 sm:px-10 lg:px-16">
            <div className="reveal max-w-3xl">
              <p className="eyebrow text-[var(--sand)]">{hero.tagline}</p>
              <h1 className="display-xl mt-7 text-white">
                {hero.heading.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h1>
              <div className="mt-7 h-px w-10 bg-[var(--sand)]" />
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/86">{hero.description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ArrowButton href={hero.ctaBookHref} variant="light">{hero.ctaBookLabel}</ArrowButton>
                <ArrowButton href="/work" variant="outline">{hero.ctaWorkLabel}</ArrowButton>
              </div>
            </div>

            <div className="absolute bottom-16 right-8 hidden rotate-[-8deg] border-y border-white/50 px-4 py-3 font-serif text-3xl italic leading-none text-white lg:block">
              {hero.locationBadge.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-soft)] px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[80px_repeat(4,1fr)]">
            <div className="hidden border-r border-[var(--stone)]/35 lg:flex lg:items-center lg:justify-center">
              <p className="-rotate-90 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--olive)]">{featuredWork_section.workEyebrow}</p>
            </div>
            {services.slice(0, 4).map((service, index) => {
              const Icon = serviceIconMap[service.icon] ?? Video
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
              <p className="eyebrow text-[var(--sand)]">{featuredWork_section.workEyebrow}</p>
              <h2 className="mt-8 font-serif text-5xl leading-[0.92] text-white">
                {featuredWork_section.workHeading.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h2>
              <p className="mt-6 max-w-[15rem] text-sm leading-7 text-white/66">{featuredWork_section.workSubtext}</p>
              <div className="mt-8">
                <ArrowButton href="/work" variant="outline">{featuredWork_section.workCtaLabel}</ArrowButton>
              </div>
            </div>
            <div className="grid auto-cols-[280px] grid-flow-col gap-5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 lg:overflow-visible">
              {featuredWork.map((item, index) => <ReelCard key={item.title} {...item} index={index} autoPlay />)}
            </div>
          </div>
        </section>

        <section className="grid bg-[var(--paper)] lg:grid-cols-[0.88fr_1.52fr]">
          <div
            className="min-h-[460px] bg-cover lg:min-h-[620px]"
            style={{ backgroundImage: `url('${imgSrc(intro.introImage, { w: 900, fit: "cover" })}')` }}
          />
          <div className="grid gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-16 lg:py-24">
            <div>
              <p className="eyebrow">{intro.introEyebrow}</p>
              <h2 className="display-sm mt-5">{intro.introHeading}</h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>{intro.introBody1}</p>
                <p>{intro.introBody2}</p>
              </div>
              <p className="mt-8 font-serif text-3xl italic text-[var(--charcoal)]">{intro.introSignature}</p>
            </div>
            <div className="border-l border-[var(--stone)]/35 pl-0 lg:pl-10">
              <div className="space-y-7">
                {[
                  { title: about.value1Title, text: about.value1Text, icon: about.value1Icon },
                  { title: about.value2Title, text: about.value2Text, icon: about.value2Icon },
                  { title: about.value3Title, text: about.value3Text, icon: about.value3Icon },
                  { title: about.value4Title, text: about.value4Text, icon: about.value4Icon },
                ].map(({ title, text, icon }) => {
                  const Icon = valuesIconMap[icon] ?? Check
                  return (
                    <div key={title} className="flex gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--sand)]/35 text-[var(--olive)]">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper-soft)] py-16">
          <p className="eyebrow mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">My Process</p>
          <div className="mx-auto mt-12 grid max-w-[1400px] gap-8 px-6 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
            {processSteps.map(({ title, text, icon }, index) => {
              const Icon = processIconMap[icon] ?? Compass
              return (
                <article key={title} className="relative">
                  <p className="font-mono text-sm font-bold">0{index + 1}</p>
                  <Icon className="mt-8 size-8 text-[var(--olive)]" strokeWidth={1.4} />
                  <h3 className="mt-7 text-[12px] font-extrabold uppercase tracking-[0.16em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
                  {index < processSteps.length - 1 ? (
                    <ArrowRight className="absolute right-4 top-16 hidden size-5 text-[var(--olive)] lg:block" strokeWidth={1.4} />
                  ) : null}
                </article>
              )
            })}
          </div>
        </section>

        <section className="grid bg-[var(--espresso)] text-[var(--paper)] lg:grid-cols-[1fr_1.05fr]">
          <div className="hidden items-end bg-cover bg-center p-12 lg:flex" style={{ backgroundImage: `url('${imgSrc(contact_section.contactImage, { w: 900, fit: "cover" })}')` }}>
            <div className="flex items-center gap-3 bg-black/30 px-4 py-3 text-sm backdrop-blur-md">
              <MapPin className="size-4" />
              Based in {site.location}
            </div>
          </div>
          <div id="contact" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <p className="eyebrow text-[var(--sand)]">{contact_section.contactEyebrow}</p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-white">{contact_section.contactHeading}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              {contact_section.contactSubtext}
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
            <p className="mt-4 text-center text-xs text-white/58">{contact_section.contactResponseNote}</p>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  )
}
