import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    content:
      "This editor completely transformed my workflow. The character consistency is incredible - miles ahead of anything else I've used!",
    avatar: "🎨",
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    content:
      "Creating consistent content has never been easier. It maintains perfect details across edits. Absolutely game-changing.",
    avatar: "📸",
  },
  {
    name: "Emily Watson",
    role: "Professional Editor",
    content: "The scene blending is so natural and realistic. One-shot editing is practically solved with this tool!",
    avatar: "✨",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    content:
      "Lightning-fast processing without compromising quality. This has become essential for our team's creative work.",
    avatar: "🚀",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Decorative banana */}
      <div className="absolute bottom-10 right-10 text-8xl opacity-5">🍌</div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">What Creators Are Saying</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Trusted by professionals worldwide
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-foreground">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
