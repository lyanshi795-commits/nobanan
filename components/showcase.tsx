import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const showcaseItems = [
  {
    title: "Portrait Enhancement",
    description: "Professional headshot with studio lighting and background blur",
    time: "0.8s",
    image: "/professional-portrait-headshot-studio-lighting.jpg",
  },
  {
    title: "Scene Transformation",
    description: "Changed environment from day to sunset with atmospheric effects",
    time: "1.2s",
    image: "/sunset-landscape-dramatic-sky.jpg",
  },
  {
    title: "Object Addition",
    description: "Seamlessly added objects with perfect lighting and shadows",
    time: "0.9s",
    image: "/product-photography-added-elements.jpg",
  },
  {
    title: "Style Transfer",
    description: "Applied artistic style while maintaining subject recognition",
    time: "1.0s",
    image: "/artistic-style-transfer-painting-effect.jpg",
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-muted/30">
      {/* Decorative flame */}
      <div className="absolute top-20 left-20 text-7xl opacity-5">🔥</div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">Lightning-Fast AI Creations</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            See what our AI generates in milliseconds
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 bg-card">
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  <Zap className="mr-1 h-3 w-3" />
                  {item.time}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Zap({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
