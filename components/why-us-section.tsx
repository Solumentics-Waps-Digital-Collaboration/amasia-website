import {
  MapPin,
  Users,
  Monitor,
  Flag as Flask,
  BookMarked,
  UserCheck,
  Globe,
  TrendingUp,
  Bus,
  Laptop,
  Users2,
  Shield,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Dictionary } from "@/i18n/get-dictionary"

interface WhyUsSectionProps {
  dict: Dictionary
}

export function WhyUsSection({ dict }: WhyUsSectionProps) {
  const icons = [MapPin, Users, Monitor, Flask, BookMarked, UserCheck, Globe, TrendingUp, Bus, Laptop, Users2, Shield]

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-gradient-to-b from-[#e7a010]/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{dict.whyUs.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{dict.whyUs.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dict.whyUs.advantages.map((advantage, index) => {
            const Icon = icons[index]
            return (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#fbc338]/20 text-[#fbc338] mb-4 group-hover:bg-[#fbc338] group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{advantage.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}