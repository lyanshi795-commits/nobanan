"use client"

import Link from "next/link";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/support";

export default function ManageSubscriptionPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Manage Your Subscription</h1>
                        <p className="text-muted-foreground">
                            View and manage your subscription, billing, and payment details.
                        </p>
                    </div>

                    <div className="rounded-lg border p-6 space-y-6">
                        <div>
                            <h3 className="font-semibold mb-2">Access Customer Portal</h3>
                            <p className="text-sm text-muted-foreground">
                                You can manage your subscription from your <strong>purchase confirmation email</strong> (look for the Creem customer portal link).
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Can't Find Your Receipt?</h3>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Check your spam or junk folder for emails from Creem</li>
                                <li>• Search your inbox for "Creem" or "AI Image Editor"</li>
                                <li>• The receipt was sent to the email you used during purchase</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Need Help?</h3>
                            <p className="text-sm text-muted-foreground">
                                Contact{" "}
                                <a href={SUPPORT_MAILTO} className="text-primary hover:underline">
                                    {SUPPORT_EMAIL}
                                </a>{" "}
                                and include your purchase email address.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center p-4 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                            <strong>Independent product.</strong> Powered by third-party AI models. Not affiliated with or sponsored by any AI provider.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
