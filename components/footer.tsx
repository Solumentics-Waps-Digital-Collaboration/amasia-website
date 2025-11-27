import Link from "next/link"
import { GraduationCap, Youtube, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Globe } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

interface FooterProps {
  dict: Dictionary
  locale: Locale
}

export function Footer({ dict, locale }: FooterProps) {
  const navLinks = [
    { href: "#home", label: dict.nav.home },
    { href: "#about", label: dict.nav.about },
    { href: "#programs", label: dict.nav.programs },
    { href: "#facilities", label: dict.nav.facilities },
    { href: "#activities", label: dict.nav.activities },
    { href: "#faq", label: dict.nav.faq },
    { href: "#contact", label: dict.nav.contact },
  ]

  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-500">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <span className="font-bold text-xl">AMASIA</span>
            </Link>
            <p className="text-lime-400 font-medium mb-3">{dict.footer.tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{dict.footer.desc}</p>

            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-lime-500 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-6">{dict.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6">{dict.footer.contactUs}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-lime-400 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>BP 13963</p>
                  <p>Ekounou, Yaoundé</p>
                  <p>Cameroun</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-lime-400 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>+237 6 55 58 30 30</p>
                  <p>+237 6 77 56 35 15</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-lime-400 mt-0.5" />
                <p className="text-sm text-gray-400">complexescolaire@amasia.cm</p>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-lime-400 mt-0.5" />
                <p className="text-sm text-gray-400">complexescolaire.amasia.cm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>{dict.footer.copyright}</p>
            <p>{dict.footer.madeWith}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
