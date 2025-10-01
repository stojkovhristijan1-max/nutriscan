"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const DEFICIENCIES = [
  "NeuroCalcium",
  "Cyber-Vitamin D13",
  "Nano-Iron Particulates",
  "Synaptic Omega-X",
  "Quantum Zinc",
];

export default function DiagnosisPage() {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [deficiencies, setDeficiencies] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedImage = localStorage.getItem('capturedSelfie');
    if (!storedImage) {
      router.push('/scan');
      return;
    }
    setCapturedImage(storedImage);

    const numberOfDeficiencies = Math.floor(Math.random() * 3) + 3;
    const shuffled = [...DEFICIENCIES].sort(() => Math.random() - 0.5);
    setDeficiencies(shuffled.slice(0, numberOfDeficiencies));
  }, [router]);

  if (!capturedImage) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[var(--color-health-cyan)] health-pulse" />
          <p className="text-[var(--color-health-cyan)]">Loading diagnosis...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-health-cyan)] to-[var(--color-health-teal)] flex items-center justify-center health-pulse">
                <svg className="w-7 h-7 text-[var(--color-darker-bg)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <CardTitle className="text-3xl">
                Diagnosis Report
              </CardTitle>
            </div>
            <div className="text-center text-sm text-[var(--color-muted-foreground)] space-y-1">
              <p className="flex items-center justify-center gap-2">
                <span className="text-[var(--color-health-teal)]">✓</span>
                Bio-Spectral Analysis Complete
              </p>
              <p>Subject ID: NS-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}</p>
              <p>{new Date().toLocaleDateString()} • {new Date().toLocaleTimeString()}</p>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Captured Image */}
              <div className="space-y-4">
                <div 
                  className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-[var(--color-health-cyan)]/30"
                  style={{
                    boxShadow: `0 0 30px rgba(0, 217, 255, 0.15)`
                  }}
                >
                  <img
                    src={capturedImage}
                    alt="Patient scan"
                    className="w-full h-full object-cover"
                  />
                  {/* Corner Markers */}
                  <div className="absolute top-3 left-3 w-10 h-10 border-l-3 border-t-3 border-[var(--color-health-cyan)] rounded-tl-lg" />
                  <div className="absolute top-3 right-3 w-10 h-10 border-r-3 border-t-3 border-[var(--color-health-cyan)] rounded-tr-lg" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 border-l-3 border-b-3 border-[var(--color-health-teal)] rounded-bl-lg" />
                  <div className="absolute bottom-3 right-3 w-10 h-10 border-r-3 border-b-3 border-[var(--color-health-teal)] rounded-br-lg" />
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Facial Biometric Scan</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-health-teal)] health-pulse" />
                    <span className="text-xs text-[var(--color-health-teal)]">Verified</span>
                  </div>
                </div>
              </div>

              {/* Right: Deficiencies */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-health-cyan)] mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Detected Deficiencies
                  </h3>
                  
                  <div className="space-y-3">
                    {deficiencies.map((deficiency, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[var(--color-health-cyan)]/5 to-transparent border-l-4 border-[var(--color-health-cyan)] hover:from-[var(--color-health-cyan)]/10 transition-all"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-health-cyan)]/10 flex items-center justify-center">
                          <span className="text-[var(--color-health-cyan)] font-mono text-sm font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[var(--color-foreground)]">
                            {deficiency}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            Critical level detected
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <div className="text-sm font-mono text-[var(--color-health-cyan)]">
                            {Math.floor(Math.random() * 30 + 10)}%
                          </div>
                          <div className="text-xs text-muted-foreground">deficient</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Recommendation Box */}
                <div 
                  className="rounded-xl p-5 bg-gradient-to-br from-[var(--color-health-teal)]/10 to-[var(--color-health-cyan)]/5 border border-[var(--color-health-teal)]/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-health-teal)]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-health-teal)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[var(--color-health-teal)] font-semibold text-sm mb-2">System Recommendation</p>
                      <p className="text-sm text-[var(--color-foreground)]/80 leading-relaxed">
                        Immediate supplementation required. Custom nano-pill formula recommended for optimal cyber-biological restoration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link href="/final">
                <Button 
                  size="lg"
                  className="text-xl px-16 py-8 h-auto font-bold tracking-wide shadow-xl shadow-[var(--color-health-cyan)]/20"
                >
                  Generate Pill
                </Button>
              </Link>
              
              <Link href="/scan">
                <Button variant="ghost" className="text-[var(--color-muted-foreground)]">
                  ← Rescan
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
