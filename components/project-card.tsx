"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Project } from "@/data/projects"
import { categoryInfo } from "@/lib/category-info"
import { useState } from "react"
import { ProjectModal } from "./project-modal"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  const { title, subtitle, description, categories, link } = project
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="relative rounded-2xl bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg border border-border/40 shadow-lg overflow-hidden h-[250px] flex flex-col w-full
        dark:from-background/90 dark:to-background/70 dark:border-border/30 dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-1 mb-2">
            {categories.map((category) => {
              const info = categoryInfo[category]
              return (
                <span
                  key={category}
                  className={`text-xs font-medium px-2 py-1 rounded-full border-[1.5px] ${info.bg} ${info.border}
                  dark:bg-opacity-20 dark:border-opacity-40`}
                >
                  {info.emoji} {info.displayName}
                </span>
              )
            })}
          </div>
          <h3 className="text-xl font-semibold mb-1 dark:text-foreground/90">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground mb-2 dark:text-foreground/70">{subtitle}</p>}
          <p className="text-muted-foreground text-sm flex-grow line-clamp-3 dark:text-foreground/80">{description}</p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 text-sm font-medium text-primary hover:underline inline-flex items-center
            dark:text-primary/90 dark:hover:text-primary"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <div
          className={`absolute inset-0 -z-10 opacity-0 hover:opacity-10 transition-opacity duration-300 bg-gradient-radial from-transparent ${
            isDarkTheme
              ? "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
              : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
          } to-transparent rounded-2xl pointer-events-none`}
        />
      </motion.div>

      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

