import ArrowButton from "@/components/ArrowButton"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import ReelCard from "@/components/ReelCard"
import { featuredWork } from "@/data/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work | Savannah Villegas",
  description: "A curated portfolio of social-first video, brand films, reels, and event coverage.",
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="bg-[var(--espresso)] text-[var(--paper)]">
        <section className="px-6 pb-14 pt-48 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <p className="eyebrow text-[var(--sand)]">Work Archive</p>
            <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.68fr]">
              <h1 className="display-lg text-white">A quiet archive of brands, places, and moments in motion.</h1>
              <p className="max-w-xl self-end text-lg leading-8 text-white/68">
                Sample project directions for reels, launch content, brand stories, event coverage, and recurring social packages.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredWork.map((item, index) => (
              <div key={item.title} className={index === 1 || index === 3 ? "lg:mt-16" : ""}>
                <ReelCard {...item} index={index} />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--paper)] px-6 py-20 text-[var(--charcoal)] sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="eyebrow">Portfolio Notes</p>
            <div>
              <h2 className="display-sm">Every edit should know what it is trying to make someone feel.</h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)]">
                The final delivery can be practical and still feel artful. The strongest social content has a clear job, a natural pace, and enough atmosphere to make the viewer stay.
              </p>
              <div className="mt-8">
                <ArrowButton href="https://cal.com/adxengine/savannah-example">Book a call</ArrowButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
