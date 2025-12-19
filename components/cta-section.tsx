import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"

interface CTASectionProps {
  dict: Dictionary
}

export function CTASection({ dict }: CTASectionProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/happy-african-students-graduating-celebrating-succ.jpg')`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">{dict.cta.title}</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto text-pretty">{dict.cta.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-[#fbc338] hover:bg-[#e7a010] text-white font-semibold px-10 py-6 text-lg rounded-full shadow-lg shadow-[#fbc338]/30 transition-all hover:scale-105"
            asChild
          >
            <a href="#contact">{dict.cta.enroll}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-6 text-lg rounded-full bg-transparent"
            asChild
          >
            <a href="#contact">{dict.cta.visit}</a>
          </Button>
        </div>

        <p className="flex items-center justify-center gap-2 text-gray-300">
          <Phone className="h-5 w-5" />
          {dict.cta.call}
        </p>
      </div>
    </section>
  )
}