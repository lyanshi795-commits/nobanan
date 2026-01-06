"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToEditor = () => {
    document.getElementById("editor")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🍌</div>
            <span className="text-xl font-semibold tracking-tight">AI Image Editor</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#showcase" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Showcase
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Reviews
            </a>
            <a href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>

          <Button onClick={scrollToEditor} className="font-medium">
            Start Editing
          </Button>
        </div>
      </div>
    </header>
  )
}
