"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

export function WelcomeVideoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the video before
    const hasSeenVideo = localStorage.getItem("amasia-welcome-video-seen")
    
    if (!hasSeenVideo) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000) // 1 second delay
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Mark as seen so it never shows again
    localStorage.setItem("amasia-welcome-video-seen", "true")
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-black border-none">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="relative aspect-video w-full">
          <video
            className="w-full h-full"
            controls
            autoPlay
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  )
}