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
      <div className="flex flex-col items-start pt-16 px-8 pb-32 md:pb-16 max-w-7xl mx-auto">
        {/* Heading at the top */}
        <h1 className="text-2xl font-medium mb-12 mt-8 w-full text-center">what i've been reading</h1>

        {/* Content section */}
        <div className="w-full px-4">
          <p className="text-lg mb-4">
            these are some of my favourite books :)
          </p>
          <p className="text-lg">
            check out my{" "}
            <a 
              href="https://www.goodreads.com/user/show/147037822-soo-kim" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              goodreads
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 