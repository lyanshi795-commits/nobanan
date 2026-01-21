"use client"

import Link from "next/link";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/support";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Contact Support</h1>
                        <p className="text-muted-foreground">
                            We're here to help. Reach out to us for any questions or assistance.
                        </p>
                    </div>

                    <div className="rounded-lg border p-6 space-y-6">
                        <div>
                            <h3 className="font-semibold mb-2">Email Support</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                                For general inquiries, billing, and technical support.
                            </p>
                            <a href={SUPPORT_MAILTO} className="text-primary hover:underline font-medium">
                                {SUPPORT_EMAIL}
                            </a>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Response Time</h3>
                            <p className="text-sm text-muted-foreground">
                                We usually reply within 24–72 hours.
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
