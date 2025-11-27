import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Amasia School",
  description: "Bilingual school in Yaoundé",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}