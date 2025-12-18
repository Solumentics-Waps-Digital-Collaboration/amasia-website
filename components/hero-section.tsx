"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Trophy, GraduationCap, Monitor, Award, MessageCircle, ChevronDown } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"

interface HeroSectionProps {
  dict: Dictionary
}

export function HeroSection({ dict }: HeroSectionProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  
  // Video as first item, then images
  const mediaItems = [
    { type: 'video', src: '/video.mp4' },
    { type: 'image', src: '/nursery.jpg' },
    { type: 'image', src: '/foundator.jpg' },
    { type: 'image', src: '/aerial-view.jpg' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaItems.length)
    }, 8000) // Change every 8 seconds (longer for video)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Media (Video + Images) with Fade Transition */}
      {mediaItems.map((media, index) => {
        if (media.type === 'video') {
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentMediaIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={media.src} type="video/mp4" />
              </video>
            </div>
          )
        } else {
          return (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentMediaIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${media.src}')`,
              }}
            />
          )
        }
      })}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 text-center text-white">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-balance">
          {dict.hero.title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto text-white/90 leading-relaxed text-pretty px-2">
          {dict.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12 px-4">
          <Button
            size="lg"
            className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg shadow-lime-500/30 transition-all hover:scale-105"
            asChild
          >
            <a href="#contact">{dict.hero.cta}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-pink-300 text-pink-200 hover:bg-pink-300/20 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full bg-transparent"
            asChild
          >
            <a href="https://wa.me/237655583030" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {dict.hero.ctaWhatsapp}
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 px-2">
          {[
            { icon: Trophy, text: dict.hero.badge1 },
            { icon: GraduationCap, text: dict.hero.badge2 },
            { icon: Monitor, text: dict.hero.badge3 },
            { icon: Award, text: dict.hero.badge4 },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
              <badge.icon className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Media Indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMediaIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentMediaIndex 
                  ? 'bg-lime-400 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to ${index === 0 ? 'video' : `image ${index}`}`}
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