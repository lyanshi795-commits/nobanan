import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Payment Successful - AI Image Editor",
    description: "Your subscription has been activated successfully.",
}

export default function SuccessPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-md w-full text-center space-y-8">
                    <div className="flex justify-center">
                        <div className="rounded-full bg-green-100 p-6">
                            <CheckCircle2 className="h-16 w-16 text-green-600" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight">Payment Successful!</h1>
                        <p className="text-lg text-muted-foreground">
                            Thank you for subscribing to AI Image Editor. Your account has been activated.
                        </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                        <h2 className="font-semibold text-lg">What's next?</h2>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Your subscription is now active</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>You'll receive a confirmation email shortly</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span>Start creating amazing images right away</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                            <Link href="/">Start Creating</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/pricing">View Plans</Link>
                        </Button>
                    </div>

                    <p className="text-xs text-muted-foreground pt-4">
                        Need help? Contact our support team at{" "}
                        <a href="mailto:leo@nobanban.online" className="text-amber-600 hover:underline">
                            leo@nobanban.online
                        </a>
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    )
}
