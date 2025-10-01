import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "NutriScan - The Frontier of Post-Human Wellness",
  description: "Bio-spectral analysis for optimal health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <footer className="border-t border-[var(--color-health-cyan)]/10 mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-health-teal)] health-pulse" />
              <p>NutriScan - Bio-Spectral Analysis System</p>
            </div>
            <p className="text-xs">© All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
