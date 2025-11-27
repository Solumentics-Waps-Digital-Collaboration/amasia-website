"use client"

import { MessageCircle } from "lucide-react"
import type { Dictionary } from "@/i18n/get-dictionary"

interface WhatsAppButtonProps {
  dict: Dictionary
}

export function WhatsAppButton({ dict }: WhatsAppButtonProps) {
  return (
    <a
      href="https://wa.me/237655583030"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={dict.whatsappTooltip}
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />

        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-110">
          <MessageCircle className="h-7 w-7 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {dict.whatsappTooltip}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </div>
      </div>
    </a>
  )
}
