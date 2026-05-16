import { Play } from "lucide-react"

type ReelCardProps = {
  title: string
  category: string
  image: string
  index?: number
}

export default function ReelCard({ title, category, image, index = 0 }: ReelCardProps) {
  return (
    <article
      className="reveal group min-w-[220px] overflow-hidden bg-[var(--charcoal)] md:min-w-0"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative aspect-[0.68] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <button
          type="button"
          aria-label={`Play ${title}`}
          className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/55 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20"
        >
          <Play className="ml-0.5 size-4 fill-current" strokeWidth={1.5} />
        </button>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">{category}</p>
          <h3 className="mt-2 font-serif text-2xl leading-none text-white">{title}</h3>
        </div>
      </div>
    </article>
  )
}
