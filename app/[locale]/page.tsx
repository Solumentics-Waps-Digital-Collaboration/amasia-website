import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { ProgramsSection } from "@/components/programs-section"
import { WhyUsSection } from "@/components/why-us-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { ActivitiesSection } from "@/components/activities-section"
import { StatsSection } from "@/components/stats-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WelcomeVideoModal } from "@/components/welcome-video-modal"

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <main className="min-h-screen">
      <WelcomeVideoModal />
      <Header dict={dict} locale={locale} />
      <HeroSection dict={dict} />
      <AboutSection dict={dict} />
      <MissionSection dict={dict} />
      <ProgramsSection dict={dict} />
      <WhyUsSection dict={dict} />
      <FacilitiesSection dict={dict} />
      <ActivitiesSection dict={dict} />
      <StatsSection dict={dict} />
      <FAQSection dict={dict} />
      <CTASection dict={dict} />
      <ContactSection dict={dict} />
      <Footer dict={dict} locale={locale} />
      <WhatsAppButton dict={dict} />
    </main>
  )
}
