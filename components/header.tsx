"use client"

import Link from "next/link";
import { UserNav } from "@/components/auth/UserNav";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl">🍌</div>
            <span className="text-xl font-semibold tracking-tight">AI Image Editor</span>
          </Link>

          {/* ✅ 过审版：只保留永远不会出错的真实页面链接 */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login?next=/dashboard"
              data-testid="cta-start-editing"
              aria-label="Start Editing"
              className="font-medium hidden sm:inline-flex h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 items-center justify-center"
            >
              Start Editing
            </Link>
            <Link
              href="/manage-subscription"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground hidden sm:inline-flex"
            >
              Manage Subscription
            </Link>
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
}
