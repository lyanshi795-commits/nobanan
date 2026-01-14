"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Contact Support</h1>
                        <p className="text-muted-foreground">
                            We're here to help. Reach out to us for any questions or assistance.
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Get in Touch</CardTitle>
                            <CardDescription>
                                Our support team is ready to assist you.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email Support</h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        For general inquiries, billing, and technical support.
                                    </p>
                                    <a href="mailto:support@nobanan.online" className="text-primary hover:underline font-medium">
                                        support@nobanan.online
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Response Time</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We aim to respond to all inquiries within <strong>3 business days</strong>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Support Hours</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Monday - Friday<br />
                                        9:00 AM - 5:00 PM (EST)
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-8 text-center p-4 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                            Independent product. Not affiliated with Google, OpenAI, or any AI model providers.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
