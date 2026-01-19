"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/auth/UserNav"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"

export function Header() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  const handleStartEditing = () => {
    if (!user && !loading) {
      // Redirect unauthenticated users to login
      window.location.href = '/login'
      return
    }
    // Scroll to editor for authenticated users
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
            <a href="/#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="/#showcase" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Showcase
            </a>
            <a href="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </a>
            <a href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </a>
            <a href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button onClick={handleStartEditing} className="font-medium hidden sm:inline-flex">
              Start Editing
            </Button>
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <a href="/manage-subscription">
                Manage Subscription
              </a>
            </Button>
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  )
}

