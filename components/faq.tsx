import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI image editor work?",
    answer:
      "Simply upload an image and describe your desired edits in natural language. Our AI understands complex instructions and generates high-quality edited images. It processes your text prompt and applies professional-grade edits automatically.",
  },
  {
    question: "What types of edits can it handle?",
    answer:
      "Our editor handles complex edits including background changes, object additions, style transfers, character modifications, lighting adjustments, and more. It excels at understanding contextual instructions while maintaining photorealistic quality.",
  },
  {
    question: "How fast is the processing?",
    answer:
      "Most edits are processed in under 2 seconds. Our optimized AI engine delivers fast results without compromising on quality, making it ideal for high-volume workflows.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Yes! It's ideal for creating content for social media, marketing materials, product photography, and professional use. The high-quality outputs are suitable for commercial applications.",
  },
  {
    question: "What makes it better than other editors?",
    answer:
      "Our AI excels in character consistency, scene blending, and high-quality editing. It maintains facial features and seamlessly integrates edits with backgrounds. Plus, it supports multi-image context for creating consistent content series.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support all common image formats including JPG, PNG, WebP, and more. Files up to 10MB are processed with full quality preservation.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 bg-muted/30">
      {/* Decorative lion */}
      <div className="absolute top-20 left-1/4 text-8xl opacity-5">🦁</div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about our AI image editor
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border border-border/50 bg-card px-6 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Independent Product Disclaimer */}
        <div className="mt-12 p-4 bg-muted/50 rounded-lg border border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Independent product.</strong> Powered by third-party AI models. Not affiliated with or sponsored by any AI provider.
          </p>
        </div>
      </div>
    </section>
  )
}

