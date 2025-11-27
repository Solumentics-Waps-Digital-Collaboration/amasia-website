import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Dictionary } from "@/i18n/get-dictionary"

interface FAQSectionProps {
  dict: Dictionary
}

export function FAQSection({ dict }: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{dict.faq.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{dict.faq.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {dict.faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-md border-0 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
