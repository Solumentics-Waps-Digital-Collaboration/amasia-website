"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Trophy, GraduationCap, Monitor, Award, MessageCircle, ChevronDown } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"

interface HeroSectionProps {
  dict: Dictionary
}

export function HeroSection({ dict }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    '/nursery.jpg',
    '/foundator.jpg',
    '/aerial-view.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
          {dict.hero.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-white/90 leading-relaxed text-pretty">
          {dict.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-lime-500/30 transition-all hover:scale-105"
            asChild
          >
            <a href="#contact">{dict.hero.cta}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-pink-300 text-pink-200 hover:bg-pink-300/20 font-semibold px-8 py-6 text-lg rounded-full bg-transparent"
            asChild
          >
            <a href="https://wa.me/237655583030" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {dict.hero.ctaWhatsapp}
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {[
            { icon: Trophy, text: dict.hero.badge1 },
            { icon: GraduationCap, text: dict.hero.badge2 },
            { icon: Monitor, text: dict.hero.badge3 },
            { icon: Award, text: dict.hero.badge4 },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <badge.icon className="h-5 w-5 text-lime-400" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Image Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-lime-400 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </a>
      </div>
    </section>
  )
}