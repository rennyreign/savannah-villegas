/**
 * Netlify Image CDN helper.
 *
 * Transforms any local or remote image URL through Netlify's image CDN at
 * /.netlify/images. On local dev the path is returned unchanged so the dev
 * server continues to serve files directly from /public.
 *
 * Usage:
 *   imgSrc(url, { w: 1600, fit: "cover" })     → background / hero
 *   imgSrc(url, { w: 800, h: 1000, fit: "cover" }) → portrait slot
 *   imgSrc(url, { w: 560, h: 560, fit: "cover" }) → thumbnail / square
 */

type ImgOptions = {
  w?: number
  h?: number
  fit?: "cover" | "contain" | "fill"
  position?: "top" | "bottom" | "left" | "right" | "center"
  fm?: "webp" | "avif" | "jpg" | "png"
  q?: number
}

export function imgSrc(url: string | undefined | null, opts: ImgOptions = {}): string {
  if (!url) return ""

  // In local dev (no NETLIFY env var) return the path as-is so Next.js static
  // serving works without the CDN route being available.
  if (process.env.NETLIFY !== "true") return url

  const params = new URLSearchParams()
  params.set("url", encodeURIComponent(url))
  if (opts.w) params.set("w", String(opts.w))
  if (opts.h) params.set("h", String(opts.h))
  if (opts.fit) params.set("fit", opts.fit)
  if (opts.position) params.set("position", opts.position)
  params.set("fm", opts.fm ?? "webp")
  params.set("q", String(opts.q ?? 80))

  return `/.netlify/images?${params.toString()}`
}
