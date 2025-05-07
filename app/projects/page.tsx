"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { CategoryFilter } from "@/components/category-filter"
import { ProjectGrid } from "@/components/project-grid"
import { projects, type ProjectCategory } from "@/data/projects"

// Add import for the ArrowLeft icon and Link component
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<ProjectCategory[]>([])

  // Filter projects based on selected categories
  const filteredProjects =
    selectedCategories.length === 0
      ? projects // Show all projects when no categories are selected
      : projects.filter((project) => {
          // Check if the project has ALL the selected categories
          return selectedCategories.every((category) => project.categories.includes(category))
        })

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
      <div className="flex flex-col items-center pt-16 px-4 pb-32 md:pb-16 max-w-7xl mx-auto">
        {/* Heading at the top - updated text without emoji */}
        <h1 className="text-2xl font-medium mb-12 mt-8">what i've been doing</h1>

        {/* Category filter - sticky only on mobile */}
        <div className="sticky md:static top-0 z-10 w-full md:w-auto 
                      bg-background/80 md:bg-transparent 
                      backdrop-blur-md md:backdrop-blur-none 
                      py-4 -mx-4 px-4 md:mx-0 md:px-0 md:py-0">
          <CategoryFilter onCategoriesChange={setSelectedCategories} />
        </div>

        {/* Projects grid */}
        <ProjectGrid projects={filteredProjects} />

        {/* New CV link */}
        <div className="text-center mt-12 mb-8">
          <a 
            href="/CV_SJK_MAY_2024_.pdf" 
            className="text-gray-600 dark:text-gray-400 hover:underline"
          >
            ...or have a look at my CV
          </a>
        </div>
      </div>
    </div>
  )
}

