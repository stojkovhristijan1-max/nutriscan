import Image from "next/image";

export function UnoHeader() {
  return (
    <div className="border-2 border-[var(--color-uno-secondary)]/30 bg-[var(--color-darker-bg)]/90 backdrop-blur-xl mb-6 md:mb-8 rounded-xl overflow-hidden">
      <div className="flex items-center gap-4 p-4 md:p-6">
        <div className="flex-shrink-0">
          <Image 
            src="/uno-logo.png" 
            alt="Unified Nation Order" 
            width={70}
            height={70}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-[var(--color-uno-secondary)] tracking-wide">
            UNIFIED NATION ORDER
          </h1>
          <p className="text-sm md:text-base text-[var(--color-uno-primary)] mt-1">
            Ministry of Health & Welfare
          </p>
          <p className="text-xs md:text-sm text-[var(--color-muted-foreground)]">
            Citizen Wellness Division
          </p>
        </div>
      </div>
    </div>
  );
}

export function UnoSmallLogo({ size = 40 }: { size?: number }) {
  return (
    <Image 
      src="/uno-logo.png" 
      alt="UNO" 
      width={size}
      height={size}
      className="object-contain opacity-30"
    />
  );
}

