import { Palette, Music, Theater, Dumbbell, BookOpen, PenTool, Music2, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Dictionary } from "@/i18n/get-dictionary"

interface ActivitiesSectionProps {
  dict: Dictionary
}

export function ActivitiesSection({ dict }: ActivitiesSectionProps) {
  const icons = [Palette, Music, Theater, Dumbbell, BookOpen, PenTool, Music2, Plane]

  return (
    <section id="activities" className="py-20 sm:py-28 bg-gradient-to-b from-[#fbc338] to-[#e7a010] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{dict.activities.title}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">{dict.activities.subtitle}</p>
          <p className="text-white/80 max-w-3xl mx-auto">{dict.activities.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.activities.items.map((activity, index) => {
            const Icon = icons[index]
            return (
              <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 text-white mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                  <p className="text-sm text-white/90">{activity.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}