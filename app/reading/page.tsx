"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReadingPage() {
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
      <div className="flex flex-col items-start pt-16 px-16 pb-32 md:pb-16 max-w-7xl mx-auto">
        {/* Heading at the top */}
        <h1 className="text-2xl font-medium mb-12 mt-8 w-full text-center">what i've been reading</h1>

        {/* Content section */}
        <div className="w-full px-8">
          <div className="space-y-4 mb-8">
            <p className="text-lg font-medium mb-4">why i read:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <p className="text-lg">to see the world through the lens of writers who widen my aperture for the beauty in this world</p>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <p className="text-lg">to learn the language of vulnerability and raw honesty</p>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <p className="text-lg">to gain clarity in my lived experiences</p>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <p className="text-lg">to search for courage</p>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <p className="text-lg">to challenge my perspective and nurture my cultural dialogue/empathy</p>
              </div>
            </div>
          </div>
          <p className="text-lg">
            ... or check out my{" "}
            <a 
              href="https://www.goodreads.com/user/show/147037822-soo-kim" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              goodreads
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  )
} 