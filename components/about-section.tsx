import { Calendar, GraduationCap, Building2, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/african-students-in-classroom-studying-together-bi.jpg" alt="Students at Amasia" className="w-full h-full object-cover" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lime-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-2xl -z-10" />
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-lime-100 text-lime-600 mb-4">
                  <stat.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
