"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FinalPage() {
  const [stage, setStage] = useState<'synthesizing' | 'complete'>('synthesizing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('complete');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[var(--color-darker-bg)] overflow-hidden flex items-center justify-center">
      {stage === 'synthesizing' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-12"
        >
          {/* Pill Synthesis Animation */}
          <div className="relative w-80 h-80 mx-auto">
            {/* Rotating Rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[var(--color-health-cyan)]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-8 rounded-full border-2 border-[var(--color-health-teal)]/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-16 rounded-full border-2 border-[var(--color-health-cyan)]/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Center Pill */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div 
                className="w-24 h-36 rounded-full bg-gradient-to-br from-[var(--color-health-cyan)] via-[var(--color-health-teal)] to-[var(--color-health-cyan)]"
                style={{
                  boxShadow: `
                    0 0 40px rgba(0, 217, 255, 0.6),
                    0 0 80px rgba(0, 255, 200, 0.4),
                    inset 0 0 30px rgba(255, 255, 255, 0.3)
                  `
                }}
              >
                <div 
                  className="absolute top-1/2 left-0 right-0 h-2 bg-[var(--color-darker-bg)]"
                  style={{
                    transform: 'translateY(-50%)',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                  }}
                />
              </div>
            </motion.div>

            {/* Orbiting Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[var(--color-health-cyan)]"
                style={{
                  boxShadow: '0 0 10px var(--color-health-cyan)'
                }}
                animate={{
                  x: [0, Math.cos((i * 30 * Math.PI) / 180) * 150],
                  y: [0, Math.sin((i * 30 * Math.PI) / 180) * 150],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Status Text */}
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl font-bold text-[var(--color-health-cyan)] glow-text"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Synthesizing
            </motion.h1>
            <div className="flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[var(--color-health-cyan)]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
            <p className="text-[var(--color-muted-foreground)] text-sm">
              Generating personalized nano-formula...
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-12 max-w-2xl mx-auto px-4"
        >
          {/* Completed Pill */}
          <motion.div
            className="relative w-64 h-64 mx-auto"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div 
              className="w-32 h-48 mx-auto rounded-full bg-gradient-to-br from-[var(--color-health-cyan)] via-[var(--color-health-teal)] to-[var(--color-health-cyan)]"
              style={{
                boxShadow: `
                  0 0 60px rgba(0, 217, 255, 0.8),
                  0 0 120px rgba(0, 255, 200, 0.6),
                  inset 0 0 40px rgba(255, 255, 255, 0.3)
                `
              }}
            >
              <div 
                className="absolute top-1/2 left-0 right-0 h-2.5 bg-[var(--color-darker-bg)]"
                style={{
                  transform: 'translateY(-50%)',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                }}
              />
            </div>

            {/* Success Circle */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[var(--color-health-teal)]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                boxShadow: '0 0 30px rgba(0, 255, 200, 0.5)'
              }}
            />
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold text-[var(--color-health-teal)] glow-text">
              Synthesis Complete
            </h1>
            
            <div 
              className="rounded-2xl p-8 bg-gradient-to-br from-[var(--color-card-bg)] to-[var(--color-darker-bg)] border border-[var(--color-health-cyan)]/20"
              style={{
                boxShadow: '0 0 40px rgba(0, 217, 255, 0.1)'
              }}
            >
              <p className="text-lg text-[var(--color-foreground)] mb-3">
                Your personalized pill has been generated.
              </p>
              <p className="text-base text-[var(--color-health-cyan)] font-semibold">
                Remember: Compliance is mandatory.
              </p>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Link href="/">
                <Button size="lg" variant="outline" className="px-8">
                  Return Home
                </Button>
              </Link>
              <Link href="/scan">
                <Button size="lg" className="px-8">
                  New Scan
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
