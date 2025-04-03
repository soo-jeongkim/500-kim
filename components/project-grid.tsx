"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import type { Project } from "@/data/projects"

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 w-full">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              categories={project.categories}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

