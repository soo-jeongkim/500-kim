"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import type { ProjectCategory } from "@/data/projects"

interface ProjectCardProps {
  title: string
  subtitle?: string
  description: string
  categories: ProjectCategory[]
  link?: string
}

export function ProjectCard({ title, subtitle, description, categories, link }: ProjectCardProps) {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  // Map categories to emoji, display name, and colors
  const categoryInfo: Record<
    ProjectCategory,
    {
      emoji: string
      displayName: string
      bg: string
      border: string
    }
  > = {
    research: {
      emoji: "💻",
      displayName: "Research",
      bg: "bg-blue-100/30",
      border: "border-blue-300/60",
    },
    bio: {
      emoji: "🧬",
      displayName: "Bio",
      bg: "bg-green-100/30",
      border: "border-green-300/60",
    },
    ai: {
      emoji: "🤖",
      displayName: "AI",
      bg: "bg-purple-100/30",
      border: "border-purple-300/60",
    },
    impact: {
      emoji: "🌐",
      displayName: "Impact",
      bg: "bg-teal-100/30",
      border: "border-teal-300/60",
    },
    education: {
      emoji: "🎓",
      displayName: "Education",
      bg: "bg-amber-100/30",
      border: "border-amber-300/60",
    },
    events: {
      emoji: "🪩",
      displayName: "Events",
      bg: "bg-pink-100/30",
      border: "border-pink-300/60",
    },
  }

  return (
    <motion.div
      className="relative rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg overflow-hidden h-[250px] flex flex-col w-full"
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
                className={`text-xs font-medium px-2 py-1 rounded-full border-[1.5px] ${info.bg} ${info.border}`}
              >
                {info.emoji} {info.displayName}
              </span>
            )
          })}
        </div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>}
        <p className="text-muted-foreground text-sm flex-grow line-clamp-3">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-medium text-primary hover:underline inline-flex items-center"
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
          </a>
        )}
      </div>

      <div
        className={`absolute inset-0 -z-10 opacity-0 hover:opacity-10 transition-opacity duration-300 bg-gradient-radial from-transparent ${
          isDarkTheme
            ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
            : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
        } to-transparent rounded-2xl pointer-events-none`}
      />
    </motion.div>
  )
}

