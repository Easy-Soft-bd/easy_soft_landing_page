'use client';

function Logo({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-12 px-8 text-brand-text/40 font-black text-xl uppercase tracking-widest shrink-0 transition-colors hover:text-brand-primary italic">
      {children}
    </div>
  );
}

export function TrustLogos() {
  return (
    <section className="py-16 border-y border-brand-primary/10 bg-brand-darker overflow-hidden relative">
      <div className="absolute inset-0 bg-brand-primary/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-10 text-center relative z-10">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-text/20 italic">Global Scale Partners & Tech Innovators</p>
      </div>
      
      {/* Infinite Scroll Logo marquee */}
      <div className="relative flex overflow-x-hidden group select-none py-4">
        <div className="animate-marquee whitespace-nowrap flex items-center shrink-0">
          <Logo>Global Dynamics</Logo>
          <Logo>Nexus AI</Logo>
          <Logo>Verity Cloud</Logo>
          <Logo>Horizon Ops</Logo>
          <Logo>Quantum Scale</Logo>
          <Logo>Apex Digital</Logo>
        </div>
        <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex items-center shrink-0">
          <Logo>Global Dynamics</Logo>
          <Logo>Nexus AI</Logo>
          <Logo>Verity Cloud</Logo>
          <Logo>Horizon Ops</Logo>
          <Logo>Quantum Scale</Logo>
          <Logo>Apex Digital</Logo>
        </div>
      </div>
    </section>
  );
}
