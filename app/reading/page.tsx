"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { books, categories } from "@/data/books"

export default function ReadingPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredBooks = selectedCategories.length > 0
    ? books.filter(book => 
        book.categories.some(category => selectedCategories.includes(category))
      )
    : books;

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
              {categories.map((category) => (
                <div key={category.id} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="mt-1.5 h-4 w-4 rounded border-gray-300 text-white bg-white dark:bg-white checked:bg-black dark:checked:bg-black checked:border-black dark:checked:border-white focus:ring-0 focus:ring-offset-0 focus:border-gray-400 cursor-pointer transition-colors duration-200"
                  />
                  <label htmlFor={category.id} className="text-lg font-normal cursor-pointer">
                    {category.text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg font-normal mb-8">
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

          {/* Book covers grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {filteredBooks.map((book) => (
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