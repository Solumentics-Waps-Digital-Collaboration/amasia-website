import { Baby, BookOpen, GraduationCap, Wrench, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Dictionary } from "@/i18n/get-dictionary"

interface ProgramsSectionProps {
  dict: Dictionary
}

export function ProgramsSection({ dict }: ProgramsSectionProps) {
  const programs = [
    {
      icon: Baby,
      data: dict.programs.kindergarten,
      color: "bg-[#e7a010]",
      bgColor: "bg-[#e7a010]/10",
    },
    {
      icon: BookOpen,
      data: dict.programs.primary,
      color: "bg-[#fbc338]",
      bgColor: "bg-[#fbc338]/10",
    },
    {
      icon: GraduationCap,
      data: dict.programs.secondary,
      color: "bg-[#fbc338]",
      bgColor: "bg-[#fbc338]/10",
    },
    {
      icon: Wrench,
      data: dict.programs.technical,
      color: "bg-[#fbc338]",
      bgColor: "bg-[#fbc338]/10",
    },
  ]

  return (
    <section id="programs" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{dict.programs.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{dict.programs.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardHeader className={`${program.bgColor} p-6`}>
                <div className="flex items-center gap-4">
                  <div
                    className={`${program.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform`}
                  >
                    <program.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{program.data.title}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {program.data.age}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{program.data.desc}</p>
                <ul className="space-y-2">
                  {program.data.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-[#fbc338] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}