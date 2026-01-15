import { Webhook } from "@creem_io/nextjs"
import { createClient } from "@/lib/supabase/server"

// Webhook handler for Creem payment events
export const POST = Webhook({
    webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,

    // Handle successful checkout completion
    onCheckoutCompleted: async ({ customer, product, subscription, metadata }) => {
        if (!customer) return
        console.log(`✅ Checkout completed: ${customer.email} purchased ${product.name}`)

        try {
            const supabase = await createClient()
            if (!supabase) return

            // You can store subscription info in your database here
            // Example: Update user's subscription status
            const { error } = await supabase
                .from("user_subscriptions")
                .upsert({
                    user_email: customer.email,
                    customer_id: customer.id,
                    product_id: product.id,
                    product_name: product.name,
                    subscription_id: subscription?.id,
                    status: "active",
                    billing_period: metadata?.billing_period || "monthly",
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                })

            if (error) {
                console.error("Error updating subscription in database:", error)
            }
        } catch (error) {
            console.error("Error in onCheckoutCompleted:", error)
        }
    },

    // Grant access when subscription becomes active
    onGrantAccess: async ({ customer, metadata }) => {
        if (!customer) return
        console.log(`🔑 Granting access to: ${customer.email}`)

        try {
            const supabase = await createClient()
            if (!supabase) return

            // Update user's access status
            const { error } = await supabase
                .from("user_subscriptions")
                .update({
                    status: "active",
                    updated_at: new Date().toISOString(),
                })
                .eq("customer_id", customer.id)

            if (error) {
                console.error("Error granting access:", error)
            }

            // You could also send a welcome email here
            console.log(`✅ Access granted to ${customer.email}`)
        } catch (error) {
            console.error("Error in onGrantAccess:", error)
        }
    },

    // Revoke access when subscription is canceled or expired
    onRevokeAccess: async ({ customer }) => {
        if (!customer) return
        console.log(`🚫 Revoking access from: ${customer.email}`)

        try {
            const supabase = await createClient()
            if (!supabase) return

            // Update user's access status
            const { error } = await supabase
                .from("user_subscriptions")
                .update({
                    status: "inactive",
                    canceled_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                })
                .eq("customer_id", customer.id)

            if (error) {
                console.error("Error revoking access:", error)
            }

            console.log(`✅ Access revoked from ${customer.email}`)
        } catch (error) {
            console.error("Error in onRevokeAccess:", error)
        }
    },
})
