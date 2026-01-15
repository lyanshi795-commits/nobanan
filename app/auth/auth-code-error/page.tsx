import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const dynamic = "force-dynamic";

export default function AuthCodeError() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] text-center">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-destructive">
                            Authentication Error
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            There was a problem signing you in. Please try again.
                            <br /><br />
                            If the issue persists, please contact <a href="mailto:leo@nobanban.online" className="underline">leo@nobanban.online</a>
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/login">Try Again</Link>
                    </Button>
                </div>
            </main>
            <Footer />
        </div>
    )
}
