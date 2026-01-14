import { Card } from "@/components/ui/card"
import { Sparkles, Shield, Zap, Globe } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    title: "AI-Powered Editing",
    description: "Transform your images with natural language commands. Simply describe what you want, and watch it happen.",
    color: "text-purple-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get professional results in seconds, not hours. Our optimized pipeline ensures rapid processing.",
    color: "text-amber-500",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your images are processed securely and never stored without permission. Full data protection guaranteed.",
    color: "text-green-500",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Access from any device, any browser. No software installation required - just start editing.",
    color: "text-blue-500",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Decorative banana */}
      <div className="absolute bottom-10 right-10 text-8xl opacity-5">🍌</div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">Why Choose AI Image Editor</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Powerful features designed for modern creators
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card key={index} className="border-border/50 bg-card/50 p-6 backdrop-blur-sm hover:border-accent/50 transition-colors">
                <div className={`mb-4 ${highlight.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 font-semibold text-lg">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
