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
      <div className="absolute top-8 left-8">
        <Link
          href="/"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 shadow-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Only theme toggle in top right corner */}
      <div className="absolute top-8 right-8">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center pt-16 px-4 pb-16 max-w-7xl mx-auto">
        {/* Heading at the top - updated text without emoji */}
        <h1 className="text-2xl font-medium mb-12 mt-8">what i've been doing</h1>

        {/* Category filter */}
        <div className="mb-12">
          <CategoryFilter onCategoriesChange={setSelectedCategories} />
        </div>

        {/* Projects grid */}
        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  )
}

