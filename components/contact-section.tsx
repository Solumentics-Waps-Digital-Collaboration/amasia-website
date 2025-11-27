"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink, Loader2 } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"

interface ContactSectionProps {
  dict: Dictionary
}

export function ContactSection({ dict }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => setIsSuccess(false), 3000)
  }

  const contactCards = [
    {
      icon: MapPin,
      title: dict.contact.address,
      content: dict.contact.addressValue,
      action: dict.contact.viewMap,
      href: "https://maps.google.com/?q=Ekounou+Yaounde+Cameroon",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone,
      title: dict.contact.phoneTitle,
      content: dict.contact.phoneValue,
      action: dict.contact.callNow,
      href: "tel:+237655583030",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MessageCircle,
      title: dict.contact.whatsapp,
      content: "+237 6 55 58 30 30",
      action: dict.contact.chatWhatsapp,
      href: "https://wa.me/237655583030",
      color: "bg-lime-100 text-lime-600",
    },
    {
      icon: Mail,
      title: dict.contact.email,
      content: "complexescolaire@amasia.cm",
      action: dict.contact.sendEmail,
      href: "mailto:complexescolaire@amasia.cm",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Clock,
      title: dict.contact.hours,
      content: dict.contact.hoursValue,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{dict.contact.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{dict.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{dict.contact.form.name} *</Label>
                  <Input id="name" required className="mt-1.5" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">{dict.contact.form.email} *</Label>
                    <Input id="email" type="email" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">{dict.contact.form.phone} *</Label>
                    <Input id="phone" type="tel" required className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="type">{dict.contact.form.type} *</Label>
                  <Select required>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder={dict.contact.form.type} />
                    </SelectTrigger>
                    <SelectContent>
                      {dict.contact.form.types.map((type, index) => (
                        <SelectItem key={index} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">{dict.contact.form.message} *</Label>
                  <Textarea id="message" required rows={4} className="mt-1.5" />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 py-6 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    dict.contact.form.submit
                  )}
                </Button>
                {isSuccess && <p className="text-green-600 text-center font-medium">{dict.contact.form.success}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactCards.map((card, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className={`${card.color} p-3 rounded-xl`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{card.content}</p>
                    {card.action && card.href && (
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-lime-600 hover:text-lime-700 text-sm font-medium mt-2"
                      >
                        {card.action}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7844619845386!2d11.527686!3d3.850716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0000000001%3A0x1234567890abcdef!2sEkounou%2C%20Yaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
