import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "Privacy Policy - AI Image Editor",
    description: "Privacy Policy for AI Image Editor. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last updated: January 11, 2026</p>

                    <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Welcome to AI Image Editor ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered image editing service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and authentication information (such as Google account details when using Google Sign-In).</li>
                                <li><strong>Images:</strong> Images you upload for editing purposes. These are processed to provide our services and are handled according to this policy.</li>
                                <li><strong>Usage Data:</strong> Information about how you interact with our service, including features used, editing actions, and preferences.</li>
                                <li><strong>Payment Information:</strong> When you make purchases, payment processing is handled by our third-party payment processor. We do not store your full payment card details.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Provide, maintain, and improve our image editing services</li>
                                <li>Process your transactions and manage your account</li>
                                <li>Send you technical notices, updates, and support messages</li>
                                <li>Respond to your comments, questions, and customer service requests</li>
                                <li>Analyze usage patterns to enhance user experience</li>
                                <li>Protect against fraudulent or illegal activity</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. AI Processing and Image Data</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our service uses artificial intelligence to process and edit your images. When you upload an image:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                                <li>Images are processed using secure AI models to perform the requested edits</li>
                                <li>We do not use your personal images to train our AI models without your explicit consent</li>
                                <li>Uploaded images are temporarily stored during processing and deleted after a reasonable period</li>
                                <li>You retain all rights to your original images</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., payment processing, cloud hosting, analytics)</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                <li><strong>With Your Consent:</strong> When you have given us permission to share your information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, secure authentication mechanisms, and regular security assessments.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Depending on your location, you may have certain rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li><strong>Access:</strong> Request access to your personal data</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                                <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. Some features of our service may not function properly if you disable cookies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <p className="text-muted-foreground mt-4">
                                <strong>Email:</strong> <a href="mailto:leo@nobanban.online" className="hover:underline">leo@nobanban.online</a><br />
                                <strong>Address:</strong> AI Image Editor Team
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
