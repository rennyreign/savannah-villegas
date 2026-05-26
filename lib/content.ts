import { readFileSync } from "fs"
import { join } from "path"

function loadJSON<T>(relativePath: string, fallback: T): T {
  try {
    const file = readFileSync(join(process.cwd(), "content", relativePath), "utf-8")
    return JSON.parse(file) as T
  } catch {
    return fallback
  }
}

export type SiteContent = {
  name: string
  studio: string
  location: string
  phone: string
  email: string
  tagline: string
  description: string
}

export function loadSiteContent(): SiteContent {
  return loadJSON<SiteContent>("site/general.json", {
    name: "Savannah Villegas",
    studio: "Video Production",
    location: "Tennessee, USA",
    phone: "(615) 430-0672",
    email: "hello@savannahvillegas.com",
    tagline: "Social-first video production",
    description: "Videography and editing for brands and businesses who want thoughtful content that feels natural, beautiful, and ready to share.",
  })
}

export type HeroContent = {
  heroImage: string
  tagline: string
  heading: string
  description: string
  ctaBookLabel: string
  ctaBookHref: string
  ctaWorkLabel: string
  locationBadge: string
}

export function loadHeroContent(): HeroContent {
  return loadJSON<HeroContent>("homepage/hero.json", {
    heroImage: "/savhero2.png",
    tagline: "Social-first video production",
    heading: "Storytelling\nThat Moves\nPeople.",
    description: "Videography and editing for brands and businesses who want thoughtful content that feels natural, beautiful, and ready to share.",
    ctaBookLabel: "Book a call",
    ctaBookHref: "https://cal.com/adxengine/savannah-example",
    ctaWorkLabel: "View my work",
    locationBadge: "Based in\nTennessee",
  })
}

export type HomepageIntro = {
  introImage: string
  introEyebrow: string
  introHeading: string
  introBody1: string
  introBody2: string
  introSignature: string
}

export function loadHomepageIntro(): HomepageIntro {
  return loadJSON<HomepageIntro>("homepage/intro.json", {
    introImage: "/savannah11.jpg",
    introEyebrow: "Hi, I'm Savannah",
    introHeading: "Your creative partner from start to publish.",
    introBody1: "I believe in creating content that feels natural, looks beautiful, and connects with the right people.",
    introBody2: "I handle the filming, editing, and strategy so you can show up, stay consistent, and grow your brand with confidence.",
    introSignature: "Savannah",
  })
}

export type HomepageFeaturedWork = {
  workEyebrow: string
  workHeading: string
  workSubtext: string
  workCtaLabel: string
}

export function loadHomepageFeaturedWork(): HomepageFeaturedWork {
  return loadJSON<HomepageFeaturedWork>("homepage/featured-work.json", {
    workEyebrow: "Featured Work",
    workHeading: "Real brands.\nReal people.\nReal results.",
    workSubtext: "A few recent project styles and content directions.",
    workCtaLabel: "Watch more",
  })
}

export type HomepageContact = {
  contactImage: string
  contactEyebrow: string
  contactHeading: string
  contactSubtext: string
  contactResponseNote: string
}

export function loadHomepageContact(): HomepageContact {
  return loadJSON<HomepageContact>("homepage/contact.json", {
    contactImage: "/savannah12.jpg",
    contactEyebrow: "Let's create something amazing",
    contactHeading: "Ready to bring your vision to life?",
    contactSubtext: "Tell me about your project and I'll reply with thoughtful next steps.",
    contactResponseNote: "I typically respond within 24 hours.",
  })
}

export type ServiceItem = {
  title: string
  short: string
  detail: string
  deliverables: string[]
  ideal: string
  icon: string
}

type RawServiceItem = {
  title: string
  short: string
  detail: string
  ideal: string
  deliverable1: string
  deliverable2: string
  deliverable3: string
  deliverable4: string
  icon?: string
}

const SERVICE_FILES = [
  { file: "services/social-media-editing.json", icon: "video" },
  { file: "services/brand-videography.json", icon: "camera" },
  { file: "services/monthly-packages.json", icon: "calendar-days" },
  { file: "services/creative-direction.json", icon: "pen-tool" },
  { file: "services/event-coverage.json", icon: "clapperboard" },
  { file: "services/strategy-support.json", icon: "messages-square" },
]

export function loadServices(): ServiceItem[] {
  return SERVICE_FILES.map(({ file, icon }) => {
    const raw = loadJSON<RawServiceItem>(file, {
      title: "", short: "", detail: "", ideal: "",
      deliverable1: "", deliverable2: "", deliverable3: "", deliverable4: "",
    })
    return {
      title: raw.title,
      short: raw.short,
      detail: raw.detail,
      ideal: raw.ideal,
      icon: raw.icon ?? icon,
      deliverables: [raw.deliverable1, raw.deliverable2, raw.deliverable3, raw.deliverable4].filter(Boolean),
    }
  })
}

export type WorkItem = {
  order: number
  title: string
  category: string
  video: string
  thumbnail: string
}

const WORK_DEFAULT: WorkItem = { order: 99, title: "", category: "", video: "", thumbnail: "" }

export function loadFeaturedWork(): WorkItem[] {
  return [
    loadJSON<WorkItem>("work/item1.json", { ...WORK_DEFAULT, order: 1 }),
    loadJSON<WorkItem>("work/item2.json", { ...WORK_DEFAULT, order: 2 }),
    loadJSON<WorkItem>("work/item3.json", { ...WORK_DEFAULT, order: 3 }),
    loadJSON<WorkItem>("work/item4.json", { ...WORK_DEFAULT, order: 4 }),
    loadJSON<WorkItem>("work/item5.json", { ...WORK_DEFAULT, order: 5 }),
    loadJSON<WorkItem>("work/item6.json", { ...WORK_DEFAULT, order: 6 }),
    loadJSON<WorkItem>("work/item7.json", { ...WORK_DEFAULT, order: 7 }),
    loadJSON<WorkItem>("work/item8.json", { ...WORK_DEFAULT, order: 8 }),
  ]
    .filter((item) => item.title !== "")
    .sort((a, b) => a.order - b.order)
    .slice(0, 8)
}

export function loadHomepageWork(): WorkItem[] {
  return loadFeaturedWork().slice(0, 4)
}

export type ProcessStep = {
  title: string
  text: string
  icon: string
}

const PROCESS_ICONS = ["compass", "pen-tool", "camera", "check"]

export function loadProcessSteps(): ProcessStep[] {
  return [
    loadJSON<{ title: string; text: string }>("process/step1.json", { title: "", text: "" }),
    loadJSON<{ title: string; text: string }>("process/step2.json", { title: "", text: "" }),
    loadJSON<{ title: string; text: string }>("process/step3.json", { title: "", text: "" }),
    loadJSON<{ title: string; text: string }>("process/step4.json", { title: "", text: "" }),
  ]
    .filter((s) => s.title !== "")
    .map((s, i) => ({ ...s, icon: PROCESS_ICONS[i] ?? "check" }))
}

export type AboutHero = {
  heroImage: string
  heroHeading: string
  heroSubheading: string
}

export function loadAboutHero(): AboutHero {
  return loadJSON<AboutHero>("about/hero.json", {
    heroImage: "/savannah-about.jpg",
    heroHeading: "A calm eye for stories that feel lived in.",
    heroSubheading: "Savannah creates social-first video for brands that care about atmosphere, honesty, and the small moments people remember.",
  })
}

export type AboutPhilosophy = {
  philosophyTitle: string
  philosophyText: string
  pullQuote: string
  col1Text: string
  col2Text: string
}

export function loadAboutPhilosophy(): AboutPhilosophy {
  return loadJSON<AboutPhilosophy>("about/philosophy.json", {
    philosophyTitle: "Content should feel considered, not manufactured.",
    philosophyText: "The work sits somewhere between a quiet editorial feature and a practical piece of social content. It needs to look beautiful, but it also needs to help a real business communicate clearly.",
    pullQuote: "I care about the in-between moments: the hand adjusting the product, the light across the table, the laugh before the line starts.",
    col1Text: "My process is built for business owners who want content to feel easier. You bring the vision, the offer, and the heart of the brand. I help translate it into footage and edits that feel natural online.",
    col2Text: "The goal is never to make your brand louder for the sake of it. The goal is to make it more recognizable, more trusted, and easier for the right people to connect with.",
  })
}

export type AboutHumanFirst = {
  bottomImage: string
  humanFirstEyebrow: string
  humanFirstHeading: string
  humanFirstBody1: string
  humanFirstBody2: string
}

export function loadAboutHumanFirst(): AboutHumanFirst {
  return loadJSON<AboutHumanFirst>("about/human-first.json", {
    bottomImage: "/savannah13.jpg",
    humanFirstEyebrow: "Human First",
    humanFirstHeading: "The camera is only part of the work.",
    humanFirstBody1: "I bring a steady presence to each project because good content asks people to feel comfortable, clear, and seen.",
    humanFirstBody2: "Whether I'm filming a launch, shaping a monthly content rhythm, or editing the footage you already have, I want the final piece to feel like your brand at its most honest.",
  })
}

export type AboutContent = {
  value1Title: string
  value1Text: string
  value1Icon: string
  value2Title: string
  value2Text: string
  value2Icon: string
  value3Title: string
  value3Text: string
  value3Icon: string
  value4Title: string
  value4Text: string
  value4Icon: string
}

export type ProcessPage = {
  ctaImage: string
}

export function loadProcessPage(): ProcessPage {
  return loadJSON<ProcessPage>("process/page.json", {
    ctaImage: "/savannah16.jpg",
  })
}

export function loadAboutContent(): AboutContent {
  return loadJSON<AboutContent>("about/content.json", {
    value1Title: "Reliable",
    value1Text: "Deadlines matter. Your content gets done without you chasing for updates.",
    value1Icon: "check",
    value2Title: "Collaborative",
    value2Text: "I listen, I care, and I treat your brand like my own.",
    value2Icon: "users",
    value3Title: "Calm Process",
    value3Text: "Clear communication and a smooth experience from first idea to final file.",
    value3Icon: "leaf",
    value4Title: "Authentic Storytelling",
    value4Text: "I capture the real moments that build connection.",
    value4Icon: "sprout",
  })
}

export type FaqItem = {
  question: string
  answer: string
}

export function loadFaqs(): FaqItem[] {
  return [
    loadJSON<FaqItem>("contact/faq1.json", { question: "", answer: "" }),
    loadJSON<FaqItem>("contact/faq2.json", { question: "", answer: "" }),
    loadJSON<FaqItem>("contact/faq3.json", { question: "", answer: "" }),
    loadJSON<FaqItem>("contact/faq4.json", { question: "", answer: "" }),
  ].filter((faq) => faq.question !== "")
}
