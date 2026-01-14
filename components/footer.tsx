export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍌</span>
              <span className="text-lg font-semibold">AI Image Editor</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transform images with natural language. Professional AI-powered editing.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Contact:</strong><br />
              <a href="mailto:support@nobanan.online" className="hover:text-foreground transition-colors">
                support@nobanan.online
              </a>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="transition-colors hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#showcase" className="transition-colors hover:text-foreground">
                  Showcase
                </a>
              </li>
              <li>
                <a href="/pricing" className="transition-colors hover:text-foreground">
                  Pricing
                </a>
              </li>
              {/* <li>
                <a href="/docs" className="transition-colors hover:text-foreground">
                  API
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {/* <li>
                <a href="/docs" className="transition-colors hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/docs#quickstart" className="transition-colors hover:text-foreground">
                  Quick Start
                </a>
              </li> */}
              <li>
                <a href="#faq" className="transition-colors hover:text-foreground">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="transition-colors hover:text-foreground">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/privacy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="transition-colors hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/terms#refunds" className="transition-colors hover:text-foreground">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Independent Product Disclaimer */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border/30">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Independent product.</strong> AI Image Editor provides a user-friendly interface built on top of AI models to enhance usability and provide additional features.
            We are an independent service and not affiliated with Google, OpenAI, or any AI model providers.
          </p>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 AI Image Editor. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

