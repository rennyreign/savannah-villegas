"use client"

import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"

type ReelCardProps = {
  title: string
  category: string
  video: string
  index?: number
  autoPlay?: boolean
}

export default function ReelCard({ title, category, video, index = 0, autoPlay = false }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <article
      className="reveal group min-w-[220px] overflow-hidden bg-[var(--charcoal)] md:min-w-0"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative aspect-[0.68] overflow-hidden">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          autoPlay={autoPlay}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          onClick={togglePlay}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/50"
        >
          {isMuted ? (
            <VolumeX className="size-4" strokeWidth={1.5} />
          ) : (
            <Volume2 className="size-4" strokeWidth={1.5} />
          )}
        </button>
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/55 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20"
        >
          {isPlaying ? (
            <Pause className="size-4 fill-current" strokeWidth={1.5} />
          ) : (
            <Play className="ml-0.5 size-4 fill-current" strokeWidth={1.5} />
          )}
        </button>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">{category}</p>
          <h3 className="mt-2 font-serif text-2xl leading-none text-white">{title}</h3>
        </div>
      </div>
    </article>
  )
}
