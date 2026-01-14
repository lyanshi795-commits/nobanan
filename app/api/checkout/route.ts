import { NextRequest, NextResponse } from "next/server"

// GET handler for testing route availability
export async function GET() {
    console.log("=== Checkout API GET called ===")
    return NextResponse.json({
        message: "Checkout API is working",
        env: {
            hasApiKey: !!process.env.CREEM_API_KEY,
            testMode: process.env.CREEM_TEST_MODE
        }
    })
}

// POST handler for creating checkout sessions programmatically
export async function POST(request: NextRequest) {
    console.log("=== Checkout API POST called ===")
    try {
        const { productId, billingPeriod } = await request.json()
        console.log("Request payload:", { productId, billingPeriod })

        if (!productId) {
            return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
        }

        if (!process.env.CREEM_API_KEY) {
            console.log("WARNING: CREEM_API_KEY not configured")
            return NextResponse.json({ error: "Creem API key not configured" }, { status: 500 })
        }

        const baseUrl = process.env.CREEM_TEST_MODE === "true"
            ? "https://test-api.creem.io"
            : "https://api.creem.io"

        console.log("Calling Creem API at:", baseUrl)

        // Create checkout session via Creem API
        const response = await fetch(`${baseUrl}/v1/checkouts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.CREEM_API_KEY,
            },
            body: JSON.stringify({
                product_id: productId,
                success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"}/pricing/success?product=${productId}`,
                metadata: {
                    billing_period: billingPeriod,
                },
            }),
        })

        console.log("Creem API response status:", response.status)

        if (!response.ok) {
            const error = await response.text()
            console.error("Creem API error status:", response.status)
            console.error("Creem API error body:", error)
            return NextResponse.json(
                { error: "Failed to create checkout session", details: error },
                { status: response.status }
            )
        }

        const data = await response.json()
        console.log("Checkout session created successfully")

        return NextResponse.json({
            checkoutUrl: data.checkout_url,
            checkoutId: data.id,
        })
    } catch (error) {
        console.error("Error creating checkout session:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
