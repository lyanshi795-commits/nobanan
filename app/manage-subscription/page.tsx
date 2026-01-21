"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Mail, FileText, HelpCircle } from "lucide-react"

export default function ManageSubscriptionPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Manage Your Subscription</h1>
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
                                    <CardTitle>Access Customer Portal</CardTitle>
                                    <CardDescription>
                                        Manage your subscription through the Creem Customer Portal
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                                <div className="flex items-start gap-3">
                                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium mb-1">How to Access Your Customer Portal</h4>
                                        <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2 ml-1">
                                            <li>Check your email for the <strong>purchase receipt</strong> from Creem</li>
                                            <li>Open the receipt email and click on <strong>Manage Subscription</strong></li>
                                            <li>You&apos;ll be taken to your personalized Customer Portal</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                From the Customer Portal, you can:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li>View your current subscription plan</li>
                                <li>Update your payment method</li>
                                <li>View billing history and download invoices</li>
                                <li>Cancel your subscription</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <HelpCircle className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>Can&apos;t Find Your Receipt?</CardTitle>
                                    <CardDescription>
                                        Don&apos;t worry, we can help
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>• Check your spam or junk folder for emails from Creem</li>
                                <li>• Search your inbox for &quot;Creem&quot; or &quot;AI Image Editor&quot;</li>
                                <li>• The receipt was sent to the email you used during purchase</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>Need Additional Help?</CardTitle>
                                    <CardDescription>
                                        Our support team is here to assist you
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                If you have any questions about your subscription, need help locating your Customer Portal link,
                                or require assistance with billing, please contact our support team.
                            </p>
                            <div className="bg-muted/50 rounded-lg p-4">
                                <p className="text-sm">
                                    <strong>Email:</strong>{" "}
                                    <a href="mailto:leo@nobanan.online" className="text-primary hover:underline">
                                        leo@nobanan.online
                                    </a>
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Please include your purchase email address when contacting support.
                                </p>
                            </div>
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
