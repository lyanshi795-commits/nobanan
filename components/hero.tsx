"use client"

import { Button } from "@/components/ui/button"
import { ImageEditor } from "@/components/image-editor"

export function Hero() {
  const scrollToEditor = () => {
    document.getElementById("editor")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 text-6xl opacity-10 animate-float">🍌</div>
      <div className="absolute bottom-20 left-10 text-7xl opacity-10 animate-float-delayed">🦁</div>
      <div className="absolute top-60 left-1/4 text-5xl opacity-10">🔥</div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
            <span className="text-xl">🔥</span>
            <span className="font-medium">Lightning-fast AI image editing</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance">
            Transform Images with
            <br />
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Natural Language
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Professional AI-powered image editor that understands your commands. Edit photos with simple text prompts
            and get perfect results instantly.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToEditor} className="h-12 px-8 text-base font-medium">
              Start Editing Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
              className="h-12 px-8 text-base font-medium"
            >
              View Examples
            </Button>
          </div>
        </div>

        <ImageEditor />
      </div>
    </section>
  )
}
