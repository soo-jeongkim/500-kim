import type { ProjectCategory } from "@/data/projects"

export const categoryInfo: Record<
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