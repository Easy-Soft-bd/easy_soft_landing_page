'use client';

import { Shield, Zap, Code2, Users } from 'lucide-react';
import { GlowCard } from '@/components/ui/glow-card';

const reasons = [
  {
    icon: <Code2 className="text-brand-primary" />,
    title: "Logic-First Engineering",
    description: "We use the latest, most stable tech stacks to ensure your system is fast and future-proof."
  },
  {
    icon: <Zap className="text-brand-primary" />,
    title: "Record Delivery Velocity",
    description: "Our iterative process means you see progress in days, not months."
  },
  {
    icon: <Shield className="text-brand-primary" />,
    title: "Surgical Security",
    description: "Every line of code is written with security best practices to protect your business data."
  },
  {
    icon: <Users className="text-brand-primary" />,
    title: "Strategic Scale Partners",
    description: "You're working with senior developers and strategists, not junior accounts."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Why Us</span>
          <h2 className="text-5xl md:text-6xl font-black text-brand-text leading-tight mb-8">
            Engineered for <br /><span className="text-gradient">Maximum Precision</span>
          </h2>
          <p className="text-brand-text-muted max-w-2xl text-lg leading-relaxed">
            We don&apos;t just build, we architect. Every component we create is designed to handle scale and drive efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <GlowCard key={index} delay={index * 0.1}>
              <div className="w-14 h-14 rounded-2xl glass-glow flex items-center justify-center text-brand-primary mb-8 shadow-lg shadow-brand-primary/5">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-4 tracking-tight">{reason.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">{reason.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
