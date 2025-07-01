"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function My10Page() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Back button in top left corner */}
      <div className="absolute md:fixed top-8 left-8 z-20">
        <Link
          href="/"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 shadow-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Theme toggle in top right corner */}
      <div className="absolute md:fixed top-8 right-8 z-20">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 px-16 pb-32 md:pb-16 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-9xl font-bold mb-8 text-center" style={{ color: 'rgb(215, 92, 20)' }}>my 10</h1>

        {/* Description */}
        <p className="text-lg leading-relaxed text-left mb-12 max-w-2xl">
          Back in undergrad, a lecturer once said that one of the simplest yet the most earnest form of self-introduction is by sharing your top 10 favorite things in a subject you deeply care about. I have a deep interest in 20th century modernist korean painting, and here are my top 10.
        </p>

        {/* Content area for the top 10 items will go here */}
        <div className="w-full">
          {/* Top 10 items will be added here */}
        </div>
      </div>

      {/* Bottom arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-6xl font-black text-black">V</div>
      </div>
    </div>
  )
} 