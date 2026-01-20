"use client"

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LogIn, Loader2 } from 'lucide-react'
import type { User } from '@supabase/supabase-js'

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        if (!supabase) {
            setLoading(false)
            return
        }

        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
            setLoading(false)

            // If user is logged in, redirect to editor
            if (user) {
                window.location.href = '/#editor'
            }
        }
        getUser()

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
            if (session?.user) {
                window.location.href = '/#editor'
            }
        })

        return () => subscription.unsubscribe()
    }, [supabase])

    // Show loading state
    if (loading) {
        return (
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <span>Loading...</span>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    // Show login prompt for unauthenticated users
    if (!user) {
        return (
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center px-4">
                    <Card className="w-full max-w-md">
                        <CardHeader className="text-center">
                            <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                                <LogIn className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">Login Required</CardTitle>
                            <CardDescription>
                                Please login with Google to access the dashboard and start editing images.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button asChild className="w-full" size="lg">
                                <a href="/login">
                                    Login with Google
                                </a>
                            </Button>
                            <p className="text-xs text-muted-foreground text-center">
                                Don&apos;t have an account? You&apos;ll be able to create one during the login process.
                            </p>
                        </CardContent>
                    </Card>
                </main>
                <Footer />
            </div>
        )
    }

    // This should not render as user will be redirected
    return null
}
