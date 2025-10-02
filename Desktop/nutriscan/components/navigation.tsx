"use client"

import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="border-b border-[var(--color-uno-secondary)]/10 bg-[var(--color-darker-bg)]/60 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="text-lg md:text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0">
              <Image 
                src="/uno-logo.png" 
                alt="UNO" 
                fill
                className="object-contain"
              />
            </div>
            <span className="bg-gradient-to-r from-[var(--color-uno-primary)] to-[var(--color-uno-secondary)] bg-clip-text text-transparent">
              NutriScan
            </span>
          </Link>
          
          <div className="flex gap-2 items-center">
            <Link
              href="/features"
              className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-all rounded-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-uno-secondary)] hover:bg-[var(--color-uno-secondary)]/5"
            >
              Features
            </Link>
            <span className="text-xs text-[var(--color-muted-foreground)] hidden sm:inline">|</span>
            <span className="text-xs text-[var(--color-uno-primary)] hidden sm:inline font-mono">UNO</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
