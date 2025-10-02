"use client"

import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b-2 border-[var(--color-cyber-cyan)] bg-black/90 backdrop-blur-xl sticky top-0 z-50 scanlines">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="text-lg md:text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[var(--color-cyber-cyan)] flex items-center justify-center bg-[var(--color-cyber-cyan)]/10 flex-shrink-0">
              <span className="text-[var(--color-cyber-cyan)] font-bold text-xs">UNO</span>
            </div>
            <span className="text-[var(--color-cyber-cyan)] neon-glow uppercase tracking-wider">
              NutriScan
            </span>
          </Link>
          
          <div className="flex gap-2 items-center">
            <Link
              href="/features"
              className="px-3 md:px-4 py-2 text-xs md:text-sm font-bold transition-all text-[var(--color-cyber-teal)] hover:text-[var(--color-cyber-cyan)] hover:bg-[var(--color-cyber-cyan)]/10 border border-transparent hover:border-[var(--color-cyber-cyan)] uppercase"
            >
              Features
            </Link>
            <span className="text-xs text-[var(--color-cyber-cyan)] hidden sm:inline">|</span>
            <span className="text-xs text-[var(--color-cyber-cyan)] hidden sm:inline font-mono uppercase">[UNO]</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
