"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map((i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="text-center space-y-12 z-10">
        {/* Main Logo with Health Pulse */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            {/* Pulsing Background Circle */}
            <motion.div
              className="absolute inset-0 -m-12 rounded-full bg-gradient-to-r from-[var(--color-health-cyan)]/10 to-[var(--color-health-teal)]/10 blur-3xl"
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
            
            <h1 className="text-7xl md:text-8xl font-bold tracking-wider relative">
              <span className="bg-gradient-to-r from-[var(--color-health-cyan)] via-[var(--color-health-teal)] to-[var(--color-health-cyan)] bg-clip-text text-transparent glow-text">
                NUTRISCAN
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Subtitle with Animation */}
        <motion.p
          className="text-xl md:text-2xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          The frontier of post-human wellness
        </motion.p>

        {/* Health Indicators */}
        <motion.div
          className="flex justify-center gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Heartbeat Icon */}
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[var(--color-health-cyan)] heartbeat"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            <span className="text-sm text-[var(--color-health-cyan)]">Bio-Spectral</span>
          </div>

          <div className="w-px h-8 bg-[var(--color-health-cyan)]/20" />

          {/* DNA Icon */}
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[var(--color-health-teal)] dna-strand"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="text-sm text-[var(--color-health-teal)]">AI-Powered</span>
          </div>

          <div className="w-px h-8 bg-[var(--color-health-cyan)]/20" />

          {/* Molecule Icon */}
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-[var(--color-health-cyan)] transform -translate-x-1/2 health-pulse" />
              <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-[var(--color-health-teal)] health-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[var(--color-health-cyan)] health-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <span className="text-sm text-[var(--color-health-cyan)]">Nano-Tech</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link href="/intro">
            <Button 
              size="lg" 
              className="text-xl px-16 py-8 h-auto font-bold tracking-wider shadow-2xl shadow-[var(--color-health-cyan)]/20 hover:shadow-[var(--color-health-cyan)]/40"
            >
              START SCAN
            </Button>
          </Link>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          className="flex items-center justify-center gap-2 text-[var(--color-muted-foreground)] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-2 h-2 rounded-full bg-[var(--color-health-teal)] health-pulse" />
          <span>System Online</span>
        </motion.div>
      </div>
    </div>
  );
}
