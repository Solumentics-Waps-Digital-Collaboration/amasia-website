import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import { locales, type Locale } from "@/i18n/config"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params

  if (locale === "fr") {
    return {
      title: "Complexe Scolaire Bilingue et Technique Amasia - Éducation de Qualité à Yaoundé",
      description:
        "École bilingue à Yaoundé offrant enseignement maternel, primaire, secondaire général et technique depuis 1994. Programmes francophones et anglophones. Inscriptions ouvertes.",
      keywords: [
        "école bilingue Yaoundé",
        "enseignement technique Cameroun",
        "école francophone anglophone",
        "Amasia Ekounou",
        "meilleure école Yaoundé",
      ],
      openGraph: {
        title: "Amasia - Excellence Bilingue Depuis 1994",
        description: "Éducation de qualité en français et anglais à Yaoundé",
        type: "website",
        locale: "fr_CM",
      },
    }
  }

  return {
    title: "Complexe Scolaire Bilingue et Technique Amasia - Quality Education in Yaoundé",
    description:
      "Bilingual school in Yaoundé offering kindergarten, primary, general and technical secondary education since 1994. Francophone and Anglophone programs. Enrollment open.",
    keywords: [
      "bilingual school Yaoundé",
      "technical education Cameroon",
      "Francophone Anglophone school",
      "Amasia Ekounou",
      "best school Yaoundé",
    ],
    openGraph: {
      title: "Amasia - Bilingual Excellence Since 1994",
      description: "Quality education in French and English in Yaoundé",
      type: "website",
      locale: "en_CM",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}