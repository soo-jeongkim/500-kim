"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "./project-card"
import type { Project } from "@/data/projects"

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollAmount = 400 // Amount to scroll on button click

  const handleScroll = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current

    // Show left button if we've scrolled to the right
    setShowLeftButton(scrollLeft > 0)

    // Show right button if we haven't reached the end
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      // Check initial state - force it to false initially
      setShowLeftButton(false)
      handleScroll()

      return () => carousel.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full">
      {/* Left scroll button */}
      {showLeftButton && (
        <motion.button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/60 backdrop-blur-sm rounded-full p-2 shadow-md border border-border/30"
          onClick={scrollLeft}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.8, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-6 w-6 text-gray-400" />
        </motion.button>
      )}

      {/* Project carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 pb-4 pt-2 px-2 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <div key={project.id} className="snap-start">
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              categories={project.categories}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          </div>
        ))}
      </div>

      {/* Right scroll button */}
      {showRightButton && (
        <motion.button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/60 backdrop-blur-sm rounded-full p-2 shadow-md border border-border/30"
          onClick={scrollRight}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 0.8, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-6 w-6 text-gray-400" />
        </motion.button>
      )}
    </div>
  )
}

