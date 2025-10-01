"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IntroPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Card className="max-w-4xl mx-auto relative overflow-hidden">
          {/* Animated Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-health-cyan)]/10 to-[var(--color-health-teal)]/10 opacity-50" />
          
          <CardHeader className="relative">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-health-cyan)] to-[var(--color-health-teal)] flex items-center justify-center health-pulse">
                <svg className="w-7 h-7 text-[var(--color-darker-bg)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <CardTitle className="text-4xl text-center">
                NutriScan
              </CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 relative">
            <div className="prose prose-invert max-w-none space-y-5 text-[var(--color-foreground)]/80 leading-relaxed">
              <p className="text-lg">
                Welcome to <span className="text-[var(--color-health-cyan)] font-semibold">NutriScan 2</span>, the frontier of post-human wellness.
              </p>
              
              <p>
                Our proprietary <span className="text-[var(--color-health-teal)]">bio-spectral analysis</span> decodes hidden imbalances in your system using nothing more than a simple facial capture. Within milliseconds, NutriScan detects micro-deficiencies, synthetic nutrient gaps, and quantum mineral shortages invisible to outdated medical diagnostics.
              </p>
              
              <p>
                Your scan will reveal the essential compounds you lack to maintain peak <span className="text-[var(--color-health-cyan)]">neural efficiency</span>, <span className="text-[var(--color-health-teal)]">metabolic stability</span>, and cybernetic harmony.
              </p>
              
              <p>
                Once analyzed, NutriScan will formulate a personalized nano-pill, engineered to restore your system to its optimal cyber-biological state.
              </p>
            </div>

            {/* Health Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 pb-4">
              <div className="text-center p-4 rounded-xl bg-[var(--color-health-cyan)]/5 border border-[var(--color-health-cyan)]/10">
                <div className="text-2xl font-bold text-[var(--color-health-cyan)]">99.9%</div>
                <div className="text-xs text-muted-foreground mt-1">Accuracy</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-[var(--color-health-teal)]/5 border border-[var(--color-health-teal)]/10">
                <div className="text-2xl font-bold text-[var(--color-health-teal)]">{'<'}1ms</div>
                <div className="text-xs text-muted-foreground mt-1">Analysis</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-[var(--color-health-cyan)]/5 border border-[var(--color-health-cyan)]/10">
                <div className="text-2xl font-bold text-[var(--color-health-cyan)]">50K+</div>
                <div className="text-xs text-muted-foreground mt-1">Compounds</div>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Link href="/scan">
                <Button 
                  size="lg"
                  className="text-lg px-12 py-6 h-auto font-semibold tracking-wide"
                >
                  Begin Scan
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
