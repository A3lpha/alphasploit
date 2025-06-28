"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-text/70" />
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="text-xs px-2 py-1"
      >
        EN
      </Button>
      <Button
        variant={language === "so" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("so")}
        className="text-xs px-2 py-1"
      >
        SO
      </Button>
    </div>
  )
}
