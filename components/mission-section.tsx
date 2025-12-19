import { Target, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Dictionary } from "@/i18n/get-dictionary"

interface MissionSectionProps {
  dict: Dictionary
}

export function MissionSection({ dict }: MissionSectionProps) {
  return (
    <section id="mission" className="py-20 sm:py-28 bg-gradient-to-b from-[#fbc338]/10 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          {dict.mission.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fbc338] text-white mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.mission.missionTitle}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.mission.missionContent}</p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e7a010] text-white mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.mission.visionTitle}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.mission.visionContent}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}