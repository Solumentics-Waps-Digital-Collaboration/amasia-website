import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Dictionary } from "@/i18n/get-dictionary"

interface FacilitiesSectionProps {
  dict: Dictionary
}

export function FacilitiesSection({ dict }: FacilitiesSectionProps) {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {dict.facilities.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.facilities.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {dict.facilities.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center md:text-left">
                  {category.name}
                </h3>
                <div className="mt-2 h-1 w-24 bg-gradient-to-r from-[#fbc338] to-[#e7a010] mx-auto md:mx-0"></div>
              </div>

              {/* Category Items Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((facility, index) => (
                  <Card key={index} className="border-0 shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4 bg-gradient-to-t from-gray-900 to-gray-800 text-white">
                      <h4 className="font-bold text-lg mb-1">{facility.title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{facility.caption}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}