"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingCard } from "@/components/pricing-card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Basic",
    description: "Perfect for starters",
    price: 9.90,
    yearlyPrice: 99,
    credits: 200,
    images: "100+",
    features: [
      "Standard generation speed",
      "Basic customer support",
      "Commercial Use License",
      "No rollover of unused credits"
    ],
    productId: "prod_basic",
    popular: false,
  },
  {
    name: "Plus",
    description: "Best for creators",
    price: 19.00,
    yearlyPrice: 190,
    credits: 450,
    images: "200+",
    features: [
      "Priority generation",
      "Priority support",
      "Commercial Use License",
      "Access to new features first",
      "No rollover of unused credits"
    ],
    productId: "prod_plus",
    popular: true,
  },
  {
    name: "Max",
    description: "For power users",
    price: 49,
    yearlyPrice: 490,
    credits: 1500,
    images: "750+",
    features: [
      "Fastest generation speed",
      "Dedicated support",
      "Commercial Use License",
      "Batch processing",
      "No rollover of unused credits"
    ],
    productId: "prod_max",
    popular: false,
  },
]

const faqs = [
  {
    question: "How do credits work?",
    answer: "Credits are used to generate images. 1 credit = 1 standard generation. HD costs +1 credit per image. Credits refresh monthly on your billing date."
  },
  {
    question: "Do unused credits roll over?",
    answer: "No, unused credits do not roll over to the next month using the monthly plan. We recommend choosing a plan that fits your usage."
  },
  {
    question: "What happens if I run out of credits?",
    answer: "If you exceed your monthly credit limit, you will need to upgrade your plan or wait for the next billing cycle to continue generating images."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time from your account dashboard. Your access will continue until the end of your billing period."
  },
  {
    question: "Refund Policy",
    answer: "We offer refunds within 3 days of purchase if you haven't used more than 10% of your credits. Contact support for assistance."
  }
]

export default function PricingPage() {
  // ✅ 固定为 yearly，隐藏 toggle 避免审核问题
  const billingPeriod = "yearly" as const

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            🍌 Annual Plans - Best Value
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional AI image editing for everyone
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Have more questions? We're here to help</p>
            <p className="text-sm text-muted-foreground">
              Independent product. Not affiliated with Google or AI model providers.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
