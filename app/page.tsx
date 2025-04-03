import { MenuBar } from "@/components/menu-bar"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { LanguageProvider } from "@/contexts/language-context"
import { TypingAnimation } from "@/components/typing-animation"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background relative">
        {/* Controls in top right corner */}
        <div className="absolute top-8 right-8 flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Content centered on page with more space */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-16">
          <TypingAnimation />
          <MenuBar />
        </div>
      </div>
    </LanguageProvider>
  )
}

