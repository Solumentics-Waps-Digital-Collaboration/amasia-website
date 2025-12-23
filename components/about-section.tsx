import { Calendar, GraduationCap, Building2, CheckCircle, Trophy, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Dictionary } from "@/i18n/get-dictionary"

interface AboutSectionProps {
  dict: Dictionary
}

export function AboutSection({ dict }: AboutSectionProps) {
  const stats = [
    { icon: Calendar, title: dict.about.stat1Title, desc: dict.about.stat1Desc },
    { icon: GraduationCap, title: dict.about.stat2Title, desc: dict.about.stat2Desc },
    { icon: Building2, title: dict.about.stat3Title, desc: dict.about.stat3Desc },
    { icon: CheckCircle, title: dict.about.stat4Title, desc: dict.about.stat4Desc },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/nursery.jpg" alt="Students at Amasia" className="w-full h-full object-cover" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#fbc338]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#fbc338]/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{dict.about.title}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{dict.about.content}</p>
              <p>{dict.about.content2}</p>
              <p>{dict.about.content3}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#fbc338]/20 text-[#fbc338] mb-4">
                  <stat.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* NEW: MMA Announcement Card */}
        {/* This uses the orange brand color as requested */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#fbc338] to-[#e7a010] shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12">
                <div className="text-white z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-bold mb-6 backdrop-blur-sm">
                        <Trophy className="w-4 h-4" />
                        {dict.about.mma_highlight.badge}
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
                        {dict.about.mma_highlight.title}
                    </h3>
                    <div className="space-y-4 text-white/90 text-lg mb-8">
                        <p>{dict.about.mma_highlight.text}</p>
                        <p>{dict.about.mma_highlight.text2}</p>
                    </div>
                    <Button 
                        asChild 
                        variant="secondary" 
                        className="bg-white text-[#e7a010] hover:bg-gray-100 font-bold text-base px-8 py-6 rounded-full"
                    >
                        <a href="#contact">
                            Rejoindre le Programme <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
                
                {/* Image Side */}
                <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <Image 
                        src="/amasia-judo.jpg" 
                        alt="Amasia Champions" 
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
            {/* Background Pattern Decoration */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black/5 rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  )
}