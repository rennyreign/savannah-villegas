import {
  CalendarDays,
  Camera,
  Check,
  Clapperboard,
  Compass,
  HeartHandshake,
  Leaf,
  MessagesSquare,
  PenTool,
  Play,
  Sparkles,
  Sprout,
  Users,
  Video,
} from "lucide-react"

export const site = {
  name: "Savannah Villegas",
  studio: "Video Production",
  location: "Tennessee, USA",
  phone: "(615) 430-0672",
  email: "hello@savannahvillegas.com",
  tagline: "Social-first video production",
  description:
    "Videography and editing for brands and businesses who want thoughtful content that feels natural, beautiful, and ready to share.",
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/contact#faq" },
]

export const services = [
  {
    title: "Social Media Editing",
    short: "Short-form edits built to stop the scroll without losing the soul of the story.",
    detail:
      "Polished reels, TikToks, shorts, captions, pacing, and content polish for brands with footage that needs a stronger finish.",
    deliverables: ["Reels", "TikTok", "Shorts", "Caption pacing"],
    ideal: "Brands with existing footage or recurring content needs.",
    icon: Video,
  },
  {
    title: "Brand Videography",
    short: "On-location filming that captures your brand with warmth and intention.",
    detail:
      "Cinematic brand films, launch assets, founder-led content, product moments, and behind-the-scenes storytelling.",
    deliverables: ["Brand films", "Promos", "BTS", "Launch content"],
    ideal: "Boutiques, hospitality brands, studios, and service-led businesses.",
    icon: Camera,
  },
  {
    title: "Monthly Packages",
    short: "Consistent, high-quality content so you always have something to post.",
    detail:
      "A steady production rhythm with planning, filming, editing, and delivery designed around your calendar.",
    deliverables: ["Weekly", "Biweekly", "Monthly", "Content calendar"],
    ideal: "Businesses that want consistency without managing every detail.",
    icon: CalendarDays,
  },
  {
    title: "Creative Direction",
    short: "A clearer visual point of view before the camera ever comes out.",
    detail:
      "Campaign concepts, shot direction, moodboards, content pillars, and creative planning for specific launches or seasons.",
    deliverables: ["Concepts", "Shot lists", "Moodboards", "Campaign arcs"],
    ideal: "Teams who know they need content, but need the idea sharpened first.",
    icon: PenTool,
  },
  {
    title: "Event Coverage",
    short: "Editorial coverage for moments worth remembering and repurposing.",
    detail:
      "Warm, observant filming for retreats, launches, brand activations, openings, and intimate gatherings.",
    deliverables: ["Event reels", "Recaps", "Social cuts", "Highlight films"],
    ideal: "Brands hosting thoughtful experiences or customer-facing moments.",
    icon: Clapperboard,
  },
  {
    title: "Strategy Support",
    short: "Guidance on what to post, how to say it, and what actually works.",
    detail:
      "Practical content support for offers, posting cadence, hooks, content themes, and campaign planning.",
    deliverables: ["Planning", "Ideas", "Hooks", "Content direction"],
    ideal: "Owners who want clearer content without sounding over-produced.",
    icon: MessagesSquare,
  },
]

export const featuredWork = [
  {
    title: "Lakeside Wellness",
    category: "Brand Reel",
    image: "https://picsum.photos/seed/savannah-lake-editorial/720/1040",
  },
  {
    title: "Coffee House Launch",
    category: "Social Campaign",
    image: "https://picsum.photos/seed/savannah-coffee-cream/720/1040",
  },
  {
    title: "Boutique Interior",
    category: "Content Package",
    image: "https://picsum.photos/seed/savannah-boutique-room/720/1040",
  },
  {
    title: "Founder Story",
    category: "Brand Film",
    image: "https://picsum.photos/seed/savannah-founder-hat/720/1040",
  },
  {
    title: "Field Notes",
    category: "Reels Edit",
    image: "https://picsum.photos/seed/savannah-phone-field/720/1040",
  },
  {
    title: "Supper Club",
    category: "Event Coverage",
    image: "https://picsum.photos/seed/savannah-table-food/720/1040",
  },
]

export const processSteps = [
  {
    title: "Discover",
    text: "We talk through your goals, audience, offers, and the kind of content your brand actually needs.",
    icon: Compass,
  },
  {
    title: "Plan",
    text: "I shape the content plan, shot list, location rhythm, and creative direction so the shoot feels calm.",
    icon: PenTool,
  },
  {
    title: "Film / Edit",
    text: "I capture clean footage or craft your existing clips into polished social-first edits.",
    icon: Camera,
  },
  {
    title: "Deliver",
    text: "You receive ready-to-post content that represents your brand with care and consistency.",
    icon: Check,
  },
]

export const values = [
  {
    title: "Reliable",
    text: "Deadlines matter. Your content gets done without you chasing for updates.",
    icon: Check,
  },
  {
    title: "Collaborative",
    text: "I listen, I care, and I treat your brand like my own.",
    icon: Users,
  },
  {
    title: "Calm Process",
    text: "Clear communication and a smooth experience from first idea to final file.",
    icon: Leaf,
  },
  {
    title: "Authentic Storytelling",
    text: "I capture the real moments that build connection.",
    icon: Sprout,
  },
]

export const faqs = [
  {
    question: "Do you film on location?",
    answer:
      "Yes. Savannah is based in Tennessee and works with brands on location for shoots, events, and recurring content days.",
  },
  {
    question: "Can you edit footage we already have?",
    answer:
      "Yes. Social media editing can start with your existing clips, brand footage, phone content, or event captures.",
  },
  {
    question: "Do you offer monthly support?",
    answer:
      "Yes. Monthly packages are designed for businesses that need a consistent rhythm of polished content.",
  },
  {
    question: "What happens after I inquire?",
    answer:
      "You will receive a thoughtful reply, usually within 24 hours, with next steps based on your goals and timeline.",
  },
]

export const proof = [
  { label: "Content planning", icon: Sparkles },
  { label: "Filming", icon: Camera },
  { label: "Social edits", icon: Play },
  { label: "Ongoing support", icon: HeartHandshake },
]
