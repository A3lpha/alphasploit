"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/workshops", label: t("nav.workshops") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b"
          : "bg-background/90 backdrop-blur-sm shadow-md border-b"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/alphasploit-logo-new.png" alt="AlphaSploit Logo" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-foreground">AlphaSploit</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Cybersecurity Training</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button asChild>
                <Link href="/contact">
                  <Zap className="h-4 w-4 mr-2" />
                  {t("nav.getStarted")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 font-medium transition-colors ${
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <Zap className="h-4 w-4 mr-2" />
                    {t("nav.getStarted")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
