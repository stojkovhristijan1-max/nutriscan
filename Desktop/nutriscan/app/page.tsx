"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="min-h-[90vh] px-2 sm:px-4 flex items-center justify-center overflow-x-hidden">
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

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          {/* HUGE UNO Logo - N Letter Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex justify-center items-center mb-4 md:mb-8"
          >
            <div className="relative flex justify-center items-center w-full">
              {/* Glow effect behind logo */}
              <div 
                className="absolute blur-3xl opacity-50 w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
                style={{
                  background: "var(--color-cyber-cyan)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              />
              
              {/* Logo with N centered - adjusted positioning */}
              <div className="relative" style={{
                // Shift logo slightly left so the N letter is at page center
                transform: "translateX(-8%)"
              }}>
                <Image 
                  src="/uno-logo.png" 
                  alt="Unified Nation Order" 
                  width={600}
                  height={200}
                  className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[650px] h-auto object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Official Government Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-2 md:space-y-3 w-full px-4"
          >
            <p className="text-xs sm:text-sm md:text-base text-[var(--color-cyber-cyan)] font-mono uppercase tracking-widest text-center">
              Ministry of Health & Welfare
            </p>
            <div className="h-px w-24 md:w-32 bg-[var(--color-cyber-cyan)] mx-auto opacity-50"></div>
          </motion.div>

          {/* Main Title - Clear and Sharp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-3 md:space-y-4 w-full px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-[var(--color-cyber-cyan)] neon-glow uppercase text-center leading-tight">
              NUTRISCAN
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-[var(--color-cyber-teal)] font-mono uppercase tracking-wide text-center px-2">
              Official Citizen Health Monitoring System
            </p>
          </motion.div>

          {/* Simple Authorization Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-[10px] sm:text-xs md:text-sm text-[var(--color-cyber-teal)]/70 font-mono text-center px-4"
          >
            <p>Authorized by Unified Nation Order // Directive 2040</p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-2 md:pt-6 w-full px-4 flex justify-center"
          >
            <Link href="/questionnaire" className="w-full max-w-md">
              <Button 
                size="lg" 
                className="w-full text-base sm:text-xl md:text-2xl px-8 sm:px-16 md:px-24 py-6 sm:py-8 md:py-10 h-auto font-bold tracking-widest box-glow hover:scale-105 transition-transform"
              >
                INITIALIZE SCAN
              </Button>
            </Link>
          </motion.div>

          {/* Status */}
          <motion.div
            className="flex items-center justify-center gap-2 md:gap-3 text-[var(--color-cyber-cyan)] text-xs sm:text-sm pt-4 md:pt-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-cyber-cyan)] health-pulse" />
            <span className="font-mono uppercase tracking-wider">System Online</span>
          </motion.div>

          {/* Simple Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-center mt-12 md:mt-20 pt-6 md:pt-8 border-t border-[var(--color-cyber-cyan)]/20 text-[10px] sm:text-xs text-[var(--color-cyber-teal)]/50 font-mono w-full px-4"
          >
            <p className="leading-relaxed">Unified Nation Order | For your protection | Compliance is wellness</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
