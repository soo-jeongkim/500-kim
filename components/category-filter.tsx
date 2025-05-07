"use client"

import { useState } from "react"

type Category = "research" | "bio" | "ai" | "impact" | "education" | "events"

interface CategoryFilterProps {
  onCategoriesChange: (categories: Category[]) => void
}

export function CategoryFilter({ onCategoriesChange }: CategoryFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [showAll, setShowAll] = useState(true)

  const handleCategoryToggle = (category: Category) => {
    // Check if the category is already selected
    const isSelected = selectedCategories.includes(category)

    let newSelectedCategories: Category[]

    if (isSelected) {
      // If already selected, remove it
      newSelectedCategories = selectedCategories.filter((c) => c !== category)
    } else {
      // If not selected, add it
      newSelectedCategories = [...selectedCategories, category]
    }

    // Update the selected categories
    setSelectedCategories(newSelectedCategories)

    // Update the "All" state - it's active only when no categories are selected
    setShowAll(newSelectedCategories.length === 0)

    // Notify parent component
    onCategoriesChange(newSelectedCategories)
  }

  const handleAllClick = () => {
    // Clear all selected categories
    setSelectedCategories([])
    setShowAll(true)
    onCategoriesChange([])
  }

  // Define category colors that work in both light and dark modes
  const categoryColors: Record<string, { bg: string; border: string; activeBg: string }> = {
    all: { bg: "bg-gray-100/30", border: "border-gray-300/50", activeBg: "bg-gray-100/50" },
    research: { bg: "bg-blue-100/30", border: "border-blue-300/60", activeBg: "bg-blue-100/50" },
    bio: { bg: "bg-green-100/30", border: "border-green-300/60", activeBg: "bg-green-100/50" },
    ai: { bg: "bg-purple-100/30", border: "border-purple-300/60", activeBg: "bg-purple-100/50" },
    impact: { bg: "bg-teal-100/30", border: "border-teal-300/60", activeBg: "bg-teal-100/50" },
    education: { bg: "bg-amber-100/30", border: "border-amber-300/60", activeBg: "bg-amber-100/50" },
    events: { bg: "bg-pink-100/30", border: "border-pink-300/60", activeBg: "bg-pink-100/50" },
  }

  return (
    <div className="md:flex md:items-center md:justify-center md:space-x-3
                    overflow-x-auto md:overflow-visible 
                    pb-2 -mb-2 md:pb-0 md:mb-0">
      <div className="flex items-center space-x-3 min-w-max px-4 md:px-0 md:min-w-0">
        <button
          onClick={handleAllClick}
          className={`relative px-5 py-1.5 rounded-full transition-all duration-200 border-[2px]
            ${
              showAll
                ? `font-medium ${categoryColors.all.activeBg} shadow-sm border-gray-300/50 text-foreground`
                : "bg-gray-100/10 border-gray-200/30 text-gray-400 hover:text-muted-foreground hover:shadow-sm"
            }`}
        >
          All
        </button>

        <div className="text-muted-foreground/50 font-light">|</div>

        {[
          { id: "research", label: "💻 Research" },
          { id: "bio", label: "🧬 Bio" },
          { id: "ai", label: "🤖 AI" },
          { id: "impact", label: "🌐 Impact" },
          { id: "education", label: "🎓 Education" },
          { id: "events", label: "🪩 Events" },
        ].map((category) => {
          const colors = categoryColors[category.id]
          const isActive = selectedCategories.includes(category.id as Category)

          return (
            <button
              key={category.id}
              onClick={() => handleCategoryToggle(category.id as Category)}
              className={`relative px-5 py-1.5 rounded-full transition-all duration-200 border-[2px]
                ${
                  isActive
                    ? `text-foreground font-medium ${colors.activeBg} ${colors.border} shadow-sm transform scale-105`
                    : "bg-gray-100/10 border-gray-200/30 text-gray-400 hover:text-muted-foreground hover:shadow-sm hover:scale-105"
                }`}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

