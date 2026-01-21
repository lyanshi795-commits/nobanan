import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "Terms of Service - AI Image Editor",
    description: "Terms of Service for AI Image Editor. Please read these terms carefully before using our service.",
}

export default function TermsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                    <p className="text-muted-foreground mb-8">Last updated: January 11, 2026</p>

                    <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing or using AI Image Editor ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service. We reserve the right to modify these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                AI Image Editor is an AI-powered image editing platform that allows users to transform and edit images using natural language commands. Our Service includes features such as:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                                <li>AI-powered image generation and editing</li>
                                <li>Background removal and replacement</li>
                                <li>Image enhancement and filters</li>
                                <li>Natural language image manipulation</li>
                                <li>Image analysis and description</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                To access certain features of the Service, you must create an account. You agree to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Provide accurate, current, and complete information during registration</li>
                                <li>Maintain and promptly update your account information</li>
                                <li>Keep your password secure and confidential</li>
                                <li>Accept responsibility for all activities that occur under your account</li>
                                <li>Notify us immediately of any unauthorized access or security breach</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. User Content and Rights</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Your Content:</strong> You retain all ownership rights to the images and content you upload to our Service. By uploading content, you grant us a limited license to process, store, and display your content solely for the purpose of providing the Service.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Generated Content:</strong> You own the rights to images generated or edited using our Service, subject to these Terms and any applicable third-party licenses.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong>Restrictions:</strong> You agree not to upload content that:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                                <li>Infringes on intellectual property rights of others</li>
                                <li>Contains illegal, harmful, or offensive material</li>
                                <li>Violates the privacy or publicity rights of any person</li>
                                <li>Contains malware or harmful code</li>
                                <li>Is fraudulent, deceptive, or misleading</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use Policy</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You agree to use the Service only for lawful purposes. You must not:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Use the Service to create deepfakes, non-consensual intimate images, or fraudulent content</li>
                                <li>Attempt to bypass any security measures or access restrictions</li>
                                <li>Use automated systems or bots to access the Service without permission</li>
                                <li>Interfere with or disrupt the Service or connected networks</li>
                                <li>Resell or redistribute access to the Service without authorization</li>
                                <li>Use the Service to harm, harass, or defame others</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Payment and Subscription</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Pricing:</strong> Some features of the Service require payment. Prices are displayed in the applicable currency and may be subject to change.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Billing:</strong> By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis until you cancel.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Refunds:</strong> We will respond to all refund requests within 3 business days. Refund eligibility is determined on a case-by-case basis. To request a refund, please contact our support team at leo@nobanan.online.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong>Cancellation:</strong> You may cancel your subscription at any time through your account dashboard or by contacting our support team. Access to paid features will continue until the end of your current billing period. No partial refunds will be issued for unused portions of a billing period.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Service, including its original content, features, and functionality, is owned by AI Image Editor and is protected by international copyright, trademark, and other intellectual property laws. Our trademarks and trade dress may not be used without our prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. AI-Generated Content Disclaimer</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our Service uses artificial intelligence to generate and edit images. While we strive for high-quality results, AI-generated content may occasionally produce unexpected or imperfect outputs. You acknowledge that:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                                <li>AI outputs may vary and are not guaranteed to meet specific expectations</li>
                                <li>You are responsible for reviewing generated content before use</li>
                                <li>We are not liable for how you use AI-generated content</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI IMAGE EDITOR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">10. Disclaimer of Warranties</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree to indemnify, defend, and hold harmless AI Image Editor and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from your use of the Service, violation of these Terms, or infringement of any rights of a third party.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the Service will immediately cease.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration or in the courts of competent jurisdiction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <p className="text-muted-foreground mt-4">
                                <strong>Email:</strong> <a href="mailto:leo@nobanan.online" className="hover:underline">leo@nobanan.online</a><br />
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
