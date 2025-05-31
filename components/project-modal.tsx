"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center py-8"
          >
            <div className="w-[90%] max-w-2xl h-[calc(100%-4rem)] bg-background shadow-lg overflow-hidden flex flex-col rounded-2xl border">
              <div className="p-6 flex-shrink-0 border-b">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    {project.subtitle && (
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    )}
                    <p className="text-foreground/80">{project.description}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors border border-border/40 hover:border-border/60"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                {/* We'll add more content here later */}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 