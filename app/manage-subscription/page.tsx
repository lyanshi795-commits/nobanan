"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, ExternalLink, Mail } from "lucide-react"

export default function ManageSubscriptionPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Manage Subscription</h1>
                        <p className="text-muted-foreground">
                            View and manage your subscription, billing, and payment details.
                        </p>
                    </div>

                    <Card className="mb-6">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <CreditCard className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>Subscription Management</CardTitle>
                                    <CardDescription>
                                        Access the customer portal to manage your subscription
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                From the customer portal, you can:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                <li>View your current subscription plan</li>
                                <li>Update payment method</li>
                                <li>View billing history and invoices</li>
                                <li>Cancel your subscription</li>
                            </ul>
                            <Button asChild className="w-full mt-4">
                                <a
                                    href="https://www.creem.io/customer-portal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Customer Portal
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>Need Help?</CardTitle>
                                    <CardDescription>
                                        Contact our support team for assistance
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                If you have any questions about your subscription or need assistance with billing,
                                please reach out to our support team.
                            </p>
                            <Button variant="outline" asChild className="w-full">
                                <a href="mailto:leo@nobanan.online">
                                    Contact Support
                                    <Mail className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="mt-8 text-center p-4 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                            <strong>Independent product.</strong> Powered by third-party AI models. Not affiliated with or sponsored by any AI provider.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
