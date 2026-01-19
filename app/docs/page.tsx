"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, MessageSquare, Sparkles, Download, Lightbulb, CheckCircle } from "lucide-react"

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <Header />

            <div className="container mx-auto px-4 py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                        📚 User Guide
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                        How to Use AI Image Editor
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Transform your images with natural language in just a few simple steps
                    </p>
                </div>

                {/* Getting Started */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <Card className="text-center">
                            <CardHeader>
                                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-2">
                                    <Upload className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>1. Upload Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Drag and drop or click to upload any image. We support JPG, PNG, and WebP formats up to 10MB.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-2">
                                    <MessageSquare className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>2. Describe Your Edit</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Type what you want to change in plain language. Be specific about colors, styles, or modifications.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-2">
                                    <Sparkles className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>3. Generate & Download</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Click generate and watch the AI transform your image. Download when you&apos;re happy with the result.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Tips for Best Results */}
                <section className="mb-16">
                    <Card className="max-w-4xl mx-auto border-2 border-amber-200 dark:border-amber-800">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
                                    <Lightbulb className="h-6 w-6 text-amber-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">Tips for Best Results</CardTitle>
                                    <CardDescription>Get the most out of AI Image Editor</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">Be Specific</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Instead of &quot;make it better&quot;, try &quot;increase brightness and add warm tones&quot;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">Describe Context</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Mention what&apos;s in the image when making edits, e.g., &quot;change the dog&apos;s collar to red&quot;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">Use Reference Styles</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Try &quot;make it look like a watercolor painting&quot; or &quot;apply cinematic color grading&quot;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">Start Simple</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Make one edit at a time for more predictable results
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">High Quality Source</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Better input images lead to better results. Use clear, well-lit photos.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">Iterate</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Not happy? Try rephrasing your prompt or making incremental changes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Credit Usage */}
                <section className="mb-16">
                    <Card className="max-w-4xl mx-auto">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Download className="h-6 w-6 text-primary" />
                                <CardTitle>Understanding Credits</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-4 bg-muted rounded-lg text-center">
                                    <p className="text-2xl font-bold">1 Credit</p>
                                    <p className="text-sm text-muted-foreground">Standard edit</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg text-center">
                                    <p className="text-2xl font-bold">2 Credits</p>
                                    <p className="text-sm text-muted-foreground">HD output</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg text-center">
                                    <p className="text-2xl font-bold">Monthly</p>
                                    <p className="text-sm text-muted-foreground">Credits refresh each billing cycle</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground text-center">
                                Need more credits? <a href="/pricing" className="text-primary hover:underline">View our plans</a>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Disclaimer */}
                <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg max-w-4xl mx-auto">
                    <p className="text-sm text-muted-foreground">
                        <strong>Independent product.</strong> Powered by third-party AI models. Not affiliated with or sponsored by any AI provider.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    )
}
