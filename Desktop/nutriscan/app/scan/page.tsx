"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ScanPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: { ideal: 1280 },
            height: { ideal: 720 }
          } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsStreaming(true);
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
        alert("Unable to access webcam. Please ensure you have granted camera permissions.");
      }
    };

    startWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL('image/png');
        setCapturedImage(imageDataUrl);
        localStorage.setItem('capturedSelfie', imageDataUrl);
        
        if (video.srcObject) {
          const stream = video.srcObject as MediaStream;
          stream.getTracks().forEach(track => track.stop());
          setIsStreaming(false);
        }
      }
    }
  };

  const retakeImage = () => {
    setCapturedImage(null);
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: { ideal: 1280 },
            height: { ideal: 720 }
          } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsStreaming(true);
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };
    startWebcam();
  };

  const handleNext = () => {
    if (capturedImage) {
      router.push('/diagnosis');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-health-cyan)] to-[var(--color-health-teal)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--color-darker-bg)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <CardTitle className="text-3xl">
                Bio-Spectral Capture
              </CardTitle>
            </div>
            <p className="text-center text-[var(--color-muted-foreground)] text-sm mt-2">
              Position your face in the frame for optimal analysis
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div 
              className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-[var(--color-health-cyan)]/30 bg-[var(--color-darker-bg)]"
              style={{
                boxShadow: `0 0 30px rgba(0, 217, 255, 0.1), inset 0 0 30px rgba(0, 217, 255, 0.05)`
              }}
            >
              {!capturedImage ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {isStreaming && (
                    <>
                      {/* Scanning Line */}
                      <div className="scanning-line" />
                      
                      {/* Corner Markers */}
                      <div className="absolute inset-0 pointer-events-none p-6">
                        <div className="absolute top-6 left-6 w-12 h-12 border-l-3 border-t-3 border-[var(--color-health-cyan)] rounded-tl-lg" />
                        <div className="absolute top-6 right-6 w-12 h-12 border-r-3 border-t-3 border-[var(--color-health-cyan)] rounded-tr-lg" />
                        <div className="absolute bottom-6 left-6 w-12 h-12 border-l-3 border-b-3 border-[var(--color-health-teal)] rounded-bl-lg" />
                        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-3 border-b-3 border-[var(--color-health-teal)] rounded-br-lg" />
                      </div>
                      
                      {/* Center Guide */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="w-48 h-64 border-2 border-[var(--color-health-cyan)]/30 rounded-full ripple" />
                      </div>
                    </>
                  )}
                </>
              ) : (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={capturedImage}
                  alt="Captured scan"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <canvas ref={canvasRef} className="hidden" />

            <div className="flex gap-4 justify-center">
              {!capturedImage ? (
                <Button 
                  size="lg"
                  className="text-lg px-12 py-6 h-auto font-semibold"
                  onClick={captureImage}
                  disabled={!isStreaming}
                >
                  Capture
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={retakeImage}
                    className="px-8"
                  >
                    Retake
                  </Button>
                  <Button 
                    size="lg"
                    className="text-lg px-12 py-6 h-auto font-semibold"
                    onClick={handleNext}
                  >
                    Analyze
                  </Button>
                </>
              )}
            </div>

            <div className="text-center">
              {!capturedImage ? (
                <div className="flex items-center justify-center gap-2 text-[var(--color-health-cyan)] text-sm">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-health-cyan)] health-pulse" />
                  <span>Camera {isStreaming ? 'Active' : 'Initializing...'}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-[var(--color-health-teal)] text-sm">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-health-teal)] health-pulse" />
                  <span>Image Captured - Ready for Analysis</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/intro">
            <Button variant="ghost" className="text-[var(--color-muted-foreground)]">
              ← Back
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
