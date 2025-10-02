"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sun, Cpu, Brain, Shield, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import { UnoSmallLogo } from "@/components/uno-header";
import Image from "next/image";

export default function QuestionnairePage() {
  const router = useRouter();
  const [sunHours, setSunHours] = useState<number>(1.5);
  const [implantsGlitch, setImplantsGlitch] = useState<boolean | null>(null);
  const [moodShifts, setMoodShifts] = useState<boolean | null>(null);
  const [compliance, setCompliance] = useState<boolean | null>(null);

  const allAnswered = 
    sunHours !== null && 
    implantsGlitch !== null && 
    moodShifts !== null && 
    compliance !== null;

  const canProceed = allAnswered && compliance === true;
  const showNonComplianceWarning = compliance === false;

  const handleProceed = () => {
    if (canProceed) {
      // Store answers if needed
      localStorage.setItem('questionnaireData', JSON.stringify({
        sunHours,
        implantsGlitch,
        moodShifts,
        compliance
      }));
      router.push('/scan');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-4 md:py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <Card className="relative overflow-hidden border-2 border-[var(--color-uno-secondary)]/30">
          {/* UNO Logo Watermark */}
          <div className="absolute top-4 right-4 opacity-10">
            <Image src="/uno-logo.png" alt="UNO" width={80} height={80} />
          </div>
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-uno-secondary)]/5 to-transparent pointer-events-none" />
          
          <CardHeader className="relative p-4 md:p-8 pb-4 md:pb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <UnoSmallLogo size={36} />
              <div className="text-center space-y-2">
                <CardTitle className="text-3xl md:text-4xl font-bold tracking-wider">
                  PRE-SCAN COMPLIANCE CHECK
                </CardTitle>
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[var(--color-uno-accent)] font-mono">
                  <span>UNO PROTOCOL v2.077</span>
                  <span className="text-[var(--color-uno-secondary)]">//</span>
                  <span>MANDATORY SCREENING</span>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-[var(--color-uno-primary)] italic mt-2">
              "Compliance ensures collective wellness"
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6 p-4 md:p-8 relative">
            {/* Context Description */}
            <div 
              className="p-4 md:p-5 rounded-xl border-2 border-[var(--color-uno-secondary)]/30 bg-[var(--color-darker-bg)]/80 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 20px rgba(0, 201, 184, 0.1), inset 0 0 20px rgba(0, 201, 184, 0.05)'
              }}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-uno-secondary)] flex-shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm text-[var(--color-foreground)]/80 leading-relaxed space-y-2">
                  <p>
                    Following Protocol 2040 amendments and the atmospheric recalibration initiatives, all citizens must complete mandatory wellness verification. Current environmental parameters require enhanced nutrient monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 1: Sun Exposure */}
            <div className="p-4 md:p-5 rounded-xl border border-[var(--color-uno-secondary)]/20 bg-[var(--color-card-bg)]/50 hover:border-[var(--color-uno-secondary)]/40 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <Sun className="w-5 h-5 text-[var(--color-uno-secondary)] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[var(--color-uno-accent)] font-mono text-sm">Q1:</span>
                    <label className="text-sm md:text-base font-medium">
                      Daily solar exposure duration (hours)
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pl-8">
                <div className="flex items-center gap-4">
                  <span className="text-2xl md:text-3xl font-bold text-[var(--color-uno-secondary)] min-w-[80px] text-center">
                    {sunHours.toFixed(1)}h
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="0.1"
                    value={sunHours}
                    onChange={(e) => setSunHours(parseFloat(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, 
                        var(--color-uno-secondary) 0%, 
                        var(--color-uno-accent) ${(sunHours / 3) * 100}%, 
                        rgba(30, 39, 57, 0.5) ${(sunHours / 3) * 100}%, 
                        rgba(30, 39, 57, 0.5) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>0h</span>
                    <span>1.5h</span>
                    <span>3h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2: Implants */}
            <div className="p-4 md:p-5 rounded-xl border border-[var(--color-uno-secondary)]/20 bg-[var(--color-card-bg)]/50 hover:border-[var(--color-uno-secondary)]/40 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <Cpu className="w-5 h-5 text-[var(--color-uno-secondary)] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[var(--color-uno-accent)] font-mono text-sm">Q2:</span>
                    <label className="text-sm md:text-base font-medium">
                      Do your implants ever glitch during high-stress moments?
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 pl-8">
                <button
                  onClick={() => setImplantsGlitch(true)}
                  className={`flex-1 px-4 md:px-6 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition-all ${
                    implantsGlitch === true
                      ? 'border-[var(--color-uno-secondary)] bg-[var(--color-uno-secondary)]/10 text-[var(--color-uno-secondary)] shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                      : 'border-[var(--color-uno-secondary)]/20 text-muted-foreground hover:border-[var(--color-uno-secondary)]/40'
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => setImplantsGlitch(false)}
                  className={`flex-1 px-4 md:px-6 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition-all ${
                    implantsGlitch === false
                      ? 'border-[var(--color-uno-secondary)] bg-[var(--color-uno-secondary)]/10 text-[var(--color-uno-secondary)] shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                      : 'border-[var(--color-uno-secondary)]/20 text-muted-foreground hover:border-[var(--color-uno-secondary)]/40'
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            {/* Question 3: Mood Shifts */}
            <div className="p-4 md:p-5 rounded-xl border border-[var(--color-uno-secondary)]/20 bg-[var(--color-card-bg)]/50 hover:border-[var(--color-uno-secondary)]/40 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <Brain className="w-5 h-5 text-[var(--color-uno-secondary)] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[var(--color-uno-accent)] font-mono text-sm">Q3:</span>
                    <label className="text-sm md:text-base font-medium">
                      Have you experienced unauthorized mood shifts in the past 72 hours?
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 pl-8">
                <button
                  onClick={() => setMoodShifts(true)}
                  className={`flex-1 px-4 md:px-6 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition-all ${
                    moodShifts === true
                      ? 'border-[var(--color-uno-secondary)] bg-[var(--color-uno-secondary)]/10 text-[var(--color-uno-secondary)] shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                      : 'border-[var(--color-uno-secondary)]/20 text-muted-foreground hover:border-[var(--color-uno-secondary)]/40'
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => setMoodShifts(false)}
                  className={`flex-1 px-4 md:px-6 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition-all ${
                    moodShifts === false
                      ? 'border-[var(--color-uno-secondary)] bg-[var(--color-uno-secondary)]/10 text-[var(--color-uno-secondary)] shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                      : 'border-[var(--color-uno-secondary)]/20 text-muted-foreground hover:border-[var(--color-uno-secondary)]/40'
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            {/* Question 4: Compliance (CRITICAL) */}
            <div className="p-4 md:p-5 rounded-xl border-2 border-[var(--color-uno-accent)]/40 bg-[var(--color-card-bg)]/50 hover:border-[var(--color-uno-accent)]/60 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-5 h-5 text-[var(--color-uno-accent)] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[var(--color-uno-accent)] font-mono text-sm">Q4:</span>
                    <label className="text-sm md:text-base font-medium">
                      Are you currently in compliance with your government's daily wellness directive?
                    </label>
                  </div>
                  <span className="text-xs text-[var(--color-uno-accent)]">CRITICAL AUTHORIZATION</span>
                </div>
              </div>
              
              <div className="flex gap-3 pl-8">
                <button
                  onClick={() => setCompliance(true)}
                  className={`flex-1 px-4 md:px-6 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition-all ${
                    compliance === true
                      ? 'border-[var(--color-uno-accent)] bg-[var(--color-uno-accent)]/10 text-[var(--color-uno-accent)] shadow-[0_0_20px_rgba(0,255,200,0.3)]'
                      : 'border-[var(--color-uno-secondary)]/20 text-muted-foreground hover:border-[var(--color-uno-secondary)]/40'
                  }`}
                >
                  YES
                </button>
                <button
                  onClick={() => setCompliance(false)}
                  className={`flex-1 px-4 md:px-6 py-3 rounded-lg border-2 font-semibold text-sm md:text-base transition-all ${
                    compliance === false
                      ? 'border-red-500 bg-red-500/10 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                      : 'border-[var(--color-uno-secondary)]/20 text-muted-foreground hover:border-[var(--color-uno-secondary)]/40'
                  }`}
                >
                  NO
                </button>
              </div>
            </div>

            {/* Non-Compliance Warning */}
            {showNonComplianceWarning && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 md:p-5 rounded-xl border-2 border-red-500/50 bg-red-500/10"
                style={{
                  boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)'
                }}
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <p className="text-sm md:text-base font-semibold text-red-400">
                    ⚠️ NON-COMPLIANCE DETECTED - SCAN AUTHORIZATION DENIED
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/" className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full"
                >
                  ← Back
                </Button>
              </Link>
              <Button 
                disabled={!canProceed}
                onClick={handleProceed}
                className={`flex-1 text-base md:text-lg px-8 py-6 h-auto font-semibold ${
                  !canProceed ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {!allAnswered ? 'Complete All Questions' : 'PROCEED TO SCAN'}
              </Button>
            </div>

            {/* UNO Footer Message */}
            <div className="text-center mt-6 pt-4 border-t border-[var(--color-uno-secondary)]/20 text-xs text-[var(--color-muted-foreground)]">
              <p className="text-[var(--color-uno-primary)] italic mb-1">"Honest reporting protects everyone"</p>
              <p>Unified Nation Order | Ministry of Health</p>
              <p className="mt-1 font-mono text-[10px]">Document logged at UNO Central Database | {new Date().toISOString()}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Custom slider styling */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-uno-secondary);
          cursor: pointer;
          box-shadow: 0 0 15px var(--color-uno-secondary);
          border: 2px solid var(--color-uno-accent);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-uno-secondary);
          cursor: pointer;
          box-shadow: 0 0 15px var(--color-uno-secondary);
          border: 2px solid var(--color-uno-accent);
        }
        
        .slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 25px var(--color-uno-secondary);
          transform: scale(1.1);
        }
        
        .slider::-moz-range-thumb:hover {
          box-shadow: 0 0 25px var(--color-uno-secondary);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

