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
            className="fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-2xl border bg-background p-6 shadow-lg"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              {project.subtitle && (
                <p className="text-muted-foreground">{project.subtitle}</p>
              )}
              <p className="text-foreground/80">{project.description}</p>
              
              {/* We'll add more content here later */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 