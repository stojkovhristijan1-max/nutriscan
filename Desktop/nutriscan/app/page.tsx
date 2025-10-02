"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UnoHeader } from "@/components/uno-header";

export default function Home() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="min-h-[85vh] px-4">
      {/* Floating Particles */}
      {particles.map((i) => (
        <div
          key={i}
          className="particle hidden md:block"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto">
        {/* UNO Official Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <UnoHeader />
        </motion.div>

        <div className="text-center space-y-6 md:space-y-10">
          {/* Main Logo with Health Pulse */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative inline-block">
              {/* Pulsing Background Circle */}
              <motion.div
                className="absolute inset-0 -m-8 md:-m-12 rounded-full bg-gradient-to-r from-[var(--color-uno-primary)]/10 to-[var(--color-uno-secondary)]/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider relative">
                <span className="bg-gradient-to-r from-[var(--color-uno-secondary)] via-[var(--color-uno-accent)] to-[var(--color-uno-secondary)] bg-clip-text text-transparent glow-text">
                  NUTRISCAN™
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-uno-primary)] mt-2 font-medium">
                Official Citizen Health Monitoring System
              </p>
            </div>
          </motion.div>

          {/* Government Authorization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs md:text-sm text-[var(--color-muted-foreground)] space-y-1 font-mono"
          >
            <p>Authorized by Unified Nation Order // Ministry of Health & Welfare</p>
            <p>Directive 2077 // Mandatory Wellness Compliance</p>
          </motion.div>

          {/* Propaganda Tagline */}
          <motion.p
            className="text-sm md:text-base text-[var(--color-uno-secondary)] italic max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            "Protecting citizens through preventive health monitoring"
          </motion.p>

          {/* Health Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8 items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-uno-secondary)] heartbeat"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span className="text-xs md:text-sm text-[var(--color-uno-secondary)]">Bio-Spectral</span>
            </div>

            <div className="w-px h-6 md:h-8 bg-[var(--color-uno-secondary)]/20" />

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-uno-accent)] dna-strand"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs md:text-sm text-[var(--color-uno-accent)]">UNO Certified</span>
            </div>

            <div className="w-px h-6 md:h-8 bg-[var(--color-uno-secondary)]/20 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 md:w-6 md:h-6">
                <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-[var(--color-uno-secondary)] transform -translate-x-1/2 health-pulse" />
                <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-[var(--color-uno-accent)] health-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[var(--color-uno-secondary)] health-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <span className="text-xs md:text-sm text-[var(--color-uno-secondary)]">Nano-Tech</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="px-4 pt-4"
          >
            <Link href="/questionnaire">
              <Button 
                size="lg" 
                className="text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 h-auto font-bold tracking-wider shadow-2xl shadow-[var(--color-uno-secondary)]/20 hover:shadow-[var(--color-uno-secondary)]/40 w-full sm:w-auto"
              >
                INITIALIZE SCAN
              </Button>
            </Link>
          </motion.div>

          {/* Propaganda Messages */}
          <motion.div
            className="text-xs md:text-sm text-[var(--color-muted-foreground)] italic space-y-1 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="text-[var(--color-uno-primary)]">Your wellness is our priority</p>
            <p>Together we build a healthier nation</p>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            className="flex items-center justify-center gap-2 text-[var(--color-muted-foreground)] text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-uno-accent)] health-pulse" />
            <span>UNO System Online</span>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-12 md:mt-16 pt-6 border-t border-[var(--color-uno-secondary)]/20 text-xs text-[var(--color-muted-foreground)]"
        >
          <p>A service of the Unified Nation Order | For your protection | Compliance is wellness</p>
        </motion.div>
      </div>
    </div>
  );
}
