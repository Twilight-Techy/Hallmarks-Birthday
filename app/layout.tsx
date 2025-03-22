import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hallmark's Birthday",
  description: "A special birthday celebration for Hallmark",
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

