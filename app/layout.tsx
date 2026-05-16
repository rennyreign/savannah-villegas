import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope, DM_Mono } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Savannah Villegas | Video Production",
  description:
    "Tennessee-based videographer and social-first video editor creating thoughtful content for brands and businesses.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Savannah Villegas | Video Production",
    description:
      "Videography and editing for brands who want calm, cinematic, social-first content.",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${dmMono.variable}`}
    >
      <body>
        <div className="scroll-progress" />
        {children}
      </body>
    </html>
  )
}
