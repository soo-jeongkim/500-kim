"use client"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

type Language = "EN" | "KR"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  return (
    <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-lg border border-border/40 p-1 shadow-sm">
      <Button
        variant={language === "KR" ? "default" : "ghost"}
        size="sm"
        onClick={() => toggleLanguage("KR")}
        className={`text-xs px-2 py-1 h-auto transition-all duration-300 ${
          language === "KR" ? "font-medium" : "text-muted-foreground font-normal"
        }`}
      >
        KR
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant={language === "EN" ? "default" : "ghost"}
        size="sm"
        onClick={() => toggleLanguage("EN")}
        className={`text-xs px-2 py-1 h-auto transition-all duration-300 ${
          language === "EN" ? "font-medium" : "text-muted-foreground font-normal"
        }`}
      >
        EN
      </Button>
    </div>
  )
}

