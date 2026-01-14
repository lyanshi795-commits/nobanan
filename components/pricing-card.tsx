"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
    name: string
    description: string
    price: number
    yearlyPrice: number
    credits: number
    images: number | string
    features: string[]
    popular?: boolean
    productId?: string
    billingPeriod: "monthly" | "yearly"
}

export function PricingCard({
    name,
    description,
    price,
    yearlyPrice,
    credits,
    images,
    features,
    popular = false,
    productId,
    billingPeriod,
}: PricingCardProps) {
    const displayPrice = billingPeriod === "monthly" ? price : yearlyPrice
    const monthlyEquivalent = billingPeriod === "yearly" ? yearlyPrice / 12 : price
    const [isLoading, setIsLoading] = useState(false)

    const handleSubscribe = async () => {
        if (!productId) {
            console.error("Product ID not configured")
            alert("Product ID not configured. Please set up products in Creem dashboard.")
            return
        }

        setIsLoading(true)

        try {
            // Create checkout session via Creem API
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId,
                    billingPeriod,
                }),
            })

            const data = await response.json()
            console.log("Checkout API response:", data)

            if (!response.ok) {
                // API returned an error
                console.error("Checkout API error:", data.error)
                alert(`Checkout error: ${data.error || "Unknown error"}. Make sure products are created in Creem dashboard.`)
                return
            }

            if (data.checkoutUrl || data.checkout_url) {
                // Redirect to Creem checkout page
                window.location.href = data.checkoutUrl || data.checkout_url
            } else {
                console.error("No checkout URL in response:", data)
                alert("Failed to create checkout. Please check console for details.")
            }
        } catch (error) {
            console.error("Error creating checkout session:", error)
            alert("Network error. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card
            className={cn(
                "relative flex flex-col transition-all duration-300 hover:shadow-xl",
                popular
                    ? "border-2 border-amber-500 shadow-lg scale-105"
                    : "border border-border hover:border-amber-300"
            )}
        >
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                        Most Popular
                    </span>
                </div>
            )}

            <CardHeader className="pb-8 pt-6">
                <CardTitle className="text-2xl">{name}</CardTitle>
                <CardDescription className="text-base">{description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 space-y-6">
                <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold tracking-tight">
                            ${monthlyEquivalent.toFixed(2)}
                        </span>
                        <span className="text-muted-foreground">/mo</span>
                    </div>
                    {billingPeriod === "yearly" && (
                        <p className="text-sm text-muted-foreground">
                            Billed annually at ${yearlyPrice.toFixed(2)}/year
                        </p>
                    )}
                    {billingPeriod === "monthly" && (
                        <p className="text-sm text-muted-foreground">Billed monthly</p>
                    )}
                </div>

                <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{credits.toLocaleString()}</span> credits
                        {billingPeriod === "yearly" ? "/year" : "/month"}
                    </p>
                    <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{images}</span> high-quality images/month
                    </p>
                </div>

                <div className="space-y-3 pt-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </div>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="pt-6">
                <Button
                    onClick={handleSubscribe}
                    disabled={isLoading}
                    className={cn(
                        "w-full font-semibold transition-all duration-200",
                        popular
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg"
                            : "bg-primary hover:bg-primary/90"
                    )}
                    size="lg"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        "Get Started"
                    )}
                </Button>
            </CardFooter>
        </Card>
    )
}
