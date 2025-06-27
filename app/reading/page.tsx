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
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 px-16 pb-32 md:pb-16 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold mb-20 text-center">
          soo's bookshelf
        </h1>

        {/* Book covers grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {books.map((book) => (
            <img
              key={book.id}
              src={book.image}
              alt={`${book.title} by ${book.author}`}
              className="w-full aspect-[2/3] object-cover shadow-md hover:shadow-lg transition-shadow"
            />
          ))}
        </div>

        {/* Goodreads link */}
        <p className="text-lg font-normal">
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
  )
} 