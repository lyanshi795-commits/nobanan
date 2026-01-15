"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, FileText, Zap, Key, Webhook, CheckCircle } from "lucide-react"

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <Header />

            <div className="container mx-auto px-4 py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                        📚 Documentation
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                        API Documentation
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Integrate AI Image Editor into your applications with our powerful API
                    </p>
                </div>

                {/* Quick Start Section */}
                <section id="quickstart" className="mb-16">
                    <Card className="border-2 border-amber-200 dark:border-amber-800">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
                                    <Zap className="h-6 w-6 text-amber-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">Quick Start</CardTitle>
                                    <CardDescription>Get started in under 5 minutes</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Create an Account</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Sign up for a free account to get your API key. New users receive free trial credits upon registration.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Get Your API Key</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Navigate to your dashboard and copy your unique API key from the Developer section.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Make Your First Request</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Use the example code below to generate your first AI image.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-slate-100">
                                    <code>{`// Example: Generate an image with natural language
const response = await fetch('/api/generate-image', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: "A beautiful sunset over mountains",
    style: "photorealistic"
  })
});

const data = await response.json();
console.log(data.imageUrl);`}</code>
                                </pre>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* API Reference */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">API Reference</h2>

                    <Tabs defaultValue="generate" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-6">
                            <TabsTrigger value="generate">Generate Image</TabsTrigger>
                            <TabsTrigger value="edit">Edit Image</TabsTrigger>
                            <TabsTrigger value="analyze">Analyze Image</TabsTrigger>
                        </TabsList>

                        <TabsContent value="generate">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-green-500">POST</Badge>
                                        <code className="text-sm bg-muted px-2 py-1 rounded">/api/generate-image</code>
                                    </div>
                                    <CardDescription>Generate a new image from a text prompt</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Request Body</h4>
                                        <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <code>prompt</code>
                                                <span className="text-muted-foreground">string, required</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <code>style</code>
                                                <span className="text-muted-foreground">string, optional</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <code>aspectRatio</code>
                                                <span className="text-muted-foreground">string, optional</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Response</h4>
                                        <div className="bg-slate-900 rounded-lg p-4">
                                            <pre className="text-sm text-slate-100">
                                                <code>{`{
  "success": true,
  "imageUrl": "https://...",
  "creditsUsed": 2
}`}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="edit">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-green-500">POST</Badge>
                                        <code className="text-sm bg-muted px-2 py-1 rounded">/api/edit-image</code>
                                    </div>
                                    <CardDescription>Edit an existing image with natural language instructions</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Request Body</h4>
                                        <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <code>imageUrl</code>
                                                <span className="text-muted-foreground">string, required</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <code>instruction</code>
                                                <span className="text-muted-foreground">string, required</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="analyze">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-green-500">POST</Badge>
                                        <code className="text-sm bg-muted px-2 py-1 rounded">/api/analyze-image</code>
                                    </div>
                                    <CardDescription>Analyze an image and get detailed descriptions</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Request Body</h4>
                                        <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <code>imageUrl</code>
                                                <span className="text-muted-foreground">string, required</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* Authentication */}
                <section className="mb-16">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Key className="h-6 w-6 text-primary" />
                                <CardTitle>Authentication</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                All API requests require authentication using a Bearer token in the Authorization header.
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-sm text-slate-100">
                                    <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                                </pre>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Rate Limits */}
                <section className="mb-16">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Zap className="h-6 w-6 text-primary" />
                                <CardTitle>Rate Limits</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-4 bg-muted rounded-lg text-center">
                                    <p className="text-2xl font-bold">100</p>
                                    <p className="text-sm text-muted-foreground">Requests per minute (Basic)</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg text-center">
                                    <p className="text-2xl font-bold">500</p>
                                    <p className="text-sm text-muted-foreground">Requests per minute (Pro)</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg text-center">
                                    <p className="text-2xl font-bold">2000</p>
                                    <p className="text-sm text-muted-foreground">Requests per minute (Max)</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Disclaimer */}
                <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                        <strong>Independent product.</strong> Powered by third-party AI models. Not affiliated with or endorsed by any provider.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    )
}
