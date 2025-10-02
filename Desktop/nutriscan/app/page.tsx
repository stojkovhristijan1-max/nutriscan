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
    <div className="min-h-[90vh] px-4 flex items-center justify-center">
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
        <div className="text-center space-y-12">
          {/* HUGE UNO Logo - Main Focus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 blur-3xl opacity-50">
                <div className="w-full h-full bg-[var(--color-cyber-cyan)]"></div>
              </div>
              <Image 
                src="/uno-logo.png" 
                alt="Unified Nation Order" 
                width={600}
                height={200}
                className="w-[300px] md:w-[500px] lg:w-[600px] h-auto object-contain relative z-10"
                priority
              />
            </div>
          </motion.div>

          {/* Official Government Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-3"
          >
            <p className="text-sm md:text-base text-[var(--color-cyber-cyan)] font-mono uppercase tracking-widest">
              Ministry of Health & Welfare
            </p>
            <div className="h-px w-32 bg-[var(--color-cyber-cyan)] mx-auto opacity-50"></div>
          </motion.div>

          {/* Main Title - Clear and Sharp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-[var(--color-cyber-cyan)] neon-glow uppercase">
              NUTRISCAN
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-cyber-teal)] font-mono uppercase tracking-wide">
              Official Citizen Health Monitoring System
            </p>
          </motion.div>

          {/* Simple Authorization Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xs md:text-sm text-[var(--color-cyber-teal)]/70 font-mono"
          >
            <p>Authorized by Unified Nation Order // Directive 2040</p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-6"
          >
            <Link href="/questionnaire">
              <Button 
                size="lg" 
                className="text-xl md:text-2xl px-16 md:px-24 py-8 md:py-10 h-auto font-bold tracking-widest box-glow hover:scale-110"
              >
                INITIALIZE SCAN
              </Button>
            </Link>
          </motion.div>

          {/* Status */}
          <motion.div
            className="flex items-center justify-center gap-3 text-[var(--color-cyber-cyan)] text-sm pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-cyber-cyan)] health-pulse" />
            <span className="font-mono uppercase tracking-wider">System Online</span>
          </motion.div>
        </div>

        {/* Simple Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-[var(--color-cyber-cyan)]/20 text-xs text-[var(--color-cyber-teal)]/50 font-mono"
        >
          <p>Unified Nation Order | For your protection | Compliance is wellness</p>
        </motion.div>
      </div>
    </div>
  );
}
