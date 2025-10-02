import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "NutriScan™ - UNO Official Health System",
  description: "Unified Nation Order - Official Citizen Health Monitoring System",
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
        <main className="container mx-auto px-0 md:px-4 py-4 md:py-8">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <footer className="border-t border-[var(--color-uno-secondary)]/10 mt-8 md:mt-16">
          <div className="container mx-auto px-4 py-6 md:py-8 text-center text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-uno-accent)] health-pulse" />
              <p>NutriScan™ - Bio-Spectral Analysis System</p>
            </div>
            <p className="text-[10px] md:text-xs text-[var(--color-uno-primary)]">
              © Unified Nation Order | Ministry of Health & Welfare | For your protection
            </p>
            <p className="text-[10px] md:text-xs mt-1 italic">
              This system is property of Unified Nation Order | Compliance is wellness
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
