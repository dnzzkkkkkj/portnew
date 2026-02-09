"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const ThemeIcon = () => {
    if (!mounted) return <Sun className="h-5 w-5" />
    return theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-primary w-full" />

      <nav className="bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center h-10 w-10 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Alternar tema"
            >
              <ThemeIcon />
            </button>

            {/* Mobile */}
            <div className="flex md:hidden items-center justify-between w-full">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-foreground/10 transition-colors"
                aria-label="Alternar tema"
              >
                <ThemeIcon />
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-border/30 mt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
