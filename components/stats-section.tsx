"use client"

import { useEffect, useState, useRef } from "react"
import { Calendar, GraduationCap, Award, Users } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"

interface StatsSectionProps {
  dict: Dictionary
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-5xl sm:text-6xl font-bold text-[#fbc338]">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection({ dict }: StatsSectionProps) {
  const stats = [
    { icon: Calendar, value: 30, suffix: "+", label: dict.stats.years },
    { icon: GraduationCap, value: 1000, suffix: "+", label: dict.stats.students },
    { icon: Award, value: 85, suffix: "%+", label: dict.stats.success },
    { icon: Users, value: 100, suffix: "+", label: dict.stats.teachers },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{dict.stats.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{dict.stats.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fbc338]/20 text-[#fbc338] mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12 max-w-2xl mx-auto">{dict.stats.intro}</p>
      </div>
    </section>
  )
}