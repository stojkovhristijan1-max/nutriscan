import Image from "next/image";

export function UnoHeader() {
  return (
    <div className="border-2 border-[var(--color-cyber-cyan)] bg-black/95 backdrop-blur-xl mb-6 md:mb-8 box-glow scanlines">
      <div className="flex items-center gap-4 p-4 md:p-6 border-b-2 border-[var(--color-cyber-cyan)]/30">
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <Image 
            src="/uno-logo.png" 
            alt="UNO Logo" 
            width={80}
            height={80}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-[var(--color-cyber-cyan)] tracking-wider neon-glow uppercase">
            UNIFIED NATION ORDER
          </h1>
          <p className="text-sm md:text-base text-[var(--color-cyber-teal)] mt-1 font-mono">
            &gt; Ministry of Health & Welfare
          </p>
          <p className="text-xs md:text-sm text-[var(--color-cyber-teal)]/70 font-mono">
            &gt; Citizen Wellness Division
          </p>
        </div>
      </div>
    </div>
  );
}

export function UnoSmallLogo({ size = 40 }: { size?: number }) {
  return (
    <div 
      className="flex items-center justify-center opacity-30"
      style={{ width: size, height: size }}
    >
      <Image 
        src="/uno-logo.png" 
        alt="UNO" 
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
}
