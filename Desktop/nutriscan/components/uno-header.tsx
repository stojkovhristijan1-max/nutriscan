export function UnoHeader() {
  return (
    <div className="border-2 border-[var(--color-cyber-cyan)] bg-black/95 backdrop-blur-xl mb-6 md:mb-8 box-glow scanlines">
      <div className="flex items-center gap-4 p-4 md:p-6 border-b-2 border-[var(--color-cyber-cyan)]/30">
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 border-[var(--color-cyber-cyan)] flex items-center justify-center bg-[var(--color-cyber-cyan)]/10">
          <svg viewBox="0 0 100 100" className="w-full h-full p-2">
            <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" 
                  className="text-4xl font-bold fill-[var(--color-cyber-cyan)]">
              UNO
            </text>
          </svg>
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
      className="border-2 border-[var(--color-cyber-cyan)] flex items-center justify-center bg-[var(--color-cyber-cyan)]/10"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full p-1">
        <text x="50" y="55" textAnchor="middle" dominantBaseline="middle" 
              className="text-2xl font-bold fill-[var(--color-cyber-cyan)]">
          UNO
        </text>
      </svg>
    </div>
  );
}
