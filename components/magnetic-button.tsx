"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  isActive?: boolean
  onClick?: () => void
}

export function MagneticButton({ children, className = "", isActive = false, onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Scale down the movement for a more subtle effect
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.button
      ref={buttonRef}
      className={`relative px-4 py-2 rounded-full transition-colors ${
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      } ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-full border border-foreground/20"
          layoutId="activeCategoryIndicator"
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
      )}
      {isHovered && !isActive && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-full border border-foreground/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )
}

