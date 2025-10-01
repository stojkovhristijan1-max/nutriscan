"use client"

import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-[var(--color-health-cyan)]/10 bg-[var(--color-darker-bg)]/60 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-health-cyan)] to-[var(--color-health-teal)] flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--color-darker-bg)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </div>
            <span className="bg-gradient-to-r from-[var(--color-health-cyan)] to-[var(--color-health-teal)] bg-clip-text text-transparent">
              NutriScan
            </span>
          </Link>
          
          <div className="flex gap-2">
            <Link
              href="/features"
              className="px-4 py-2 text-sm font-medium transition-all rounded-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-health-cyan)] hover:bg-[var(--color-health-cyan)]/5"
            >
              Features
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
