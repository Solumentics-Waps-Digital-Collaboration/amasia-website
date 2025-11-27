"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"

interface HeaderProps {
  dict: Dictionary
  locale: Locale
}

export function Header({ dict, locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: dict.nav.home },
    { href: "#about", label: dict.nav.about },
    { href: "#mission", label: dict.nav.mission },
    { href: "#programs", label: dict.nav.programs },
    { href: "#why-us", label: dict.nav.whyUs },
    { href: "#facilities", label: dict.nav.facilities },
    { href: "#activities", label: dict.nav.activities },
    { href: "#faq", label: dict.nav.faq },
    { href: "#contact", label: dict.nav.contact },
  ]

  const otherLocale = locale === "fr" ? "en" : "fr"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg",
                isScrolled ? "bg-lime-500" : "bg-white/20 backdrop-blur",
              )}
            >
              <GraduationCap className={cn("h-6 w-6", isScrolled ? "text-white" : "text-white")} />
            </div>
            <span className={cn("font-bold text-lg hidden sm:block", isScrolled ? "text-gray-900" : "text-white")}>
              AMASIA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  isScrolled
                    ? "text-gray-700 hover:text-lime-600 hover:bg-lime-50"
                    : "text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link href={`/${otherLocale}`}>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "font-semibold",
                  isScrolled
                    ? "border-lime-500 text-lime-600 hover:bg-lime-50"
                    : "border-white/50 text-white hover:bg-white/10 bg-transparent",
                )}
              >
                {otherLocale.toUpperCase()}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn("lg:hidden", isScrolled ? "text-gray-700" : "text-white")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:text-lime-600 hover:bg-lime-50 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
