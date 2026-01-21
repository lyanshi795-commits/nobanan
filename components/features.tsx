import { Sparkles, Zap, ImageIcon, Users, Layers, Flame } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Sparkles,
    title: "Natural Language Editing",
    description: "Edit images using simple text prompts. Our AI understands complex instructions like a human.",
  },
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Generate professional edits in seconds. Experience the fastest AI image processing available.",
  },
  {
    icon: Users,
    title: "Character Consistency",
    description: "Maintain character details across edits. Exceptional at preserving key subject details.",
  },
  {
    icon: ImageIcon,
    title: "Scene Preservation",
    description: "Seamlessly blend edits with original backgrounds. Superior scene fusion technology.",
  },
  {
    icon: Layers,
    title: "Multi-Image Context",
    description: "Process multiple images simultaneously. Perfect for batch editing and workflows.",
  },
  {
    icon: Flame,
    title: "High-Quality Edits",
    description: "Reliable results with minimal retries. No need for complex prompt engineering.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Decorative lion */}
      <div className="absolute top-10 right-10 text-8xl opacity-5">🦁</div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">Why Choose Our Editor?</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Revolutionize your photo editing with advanced AI that understands natural language
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-card"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Decorative gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
