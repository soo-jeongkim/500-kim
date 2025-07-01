"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { books } from "@/data/books"

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
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 px-16 pb-32 md:pb-16 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-9xl font-bold mb-8 text-center" style={{ color: 'rgb(215, 92, 20)' }}>Bookshelf</h1>

        {/* Description */}
        <p className="text-xl leading-relaxed text-left mb-12 max-w-4xl" style={{ fontFamily: 'GaramondUS, serif' }}>
          These are some of my favourite books. Here's my{" "}
          <a 
            href="https://www.goodreads.com/user/show/147037822-soo-kim" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            goodreads
          </a>
          .
        </p>

        {/* Scroll down arrow */}
        <div className="text-6xl font-black text-black">⌄</div>
      </div>

      {/* Books section */}
      <div className="min-h-screen flex items-center relative">
        {/* Books grid */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto px-8">
            {books.map((book) => (
              <img
                key={book.id}
                src={book.image}
                alt={`${book.title} by ${book.author}`}
                className="w-full aspect-[2/3] object-cover shadow-md hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 