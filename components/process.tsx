'use client';

import { motion } from 'motion/react';

import { GlowCard } from '@/components/ui/glow-card';
import { ArrowRight } from 'lucide-react';

const steps = [
  { num: "01", title: "Discovery & Architecture", detail: "We deep dive into your business operations and map out the technical strategy that will drive your specific growth goals." },
  { num: "02", title: "Iterative Development", detail: "Our agile sprint-based approach ensures you see live progress every week, allowing for rapid feedback and adjustment." },
  { num: "03", title: "Surgical Deployment", detail: "We handle the full move to production, ensuring zero downtime and a seamless transition for your users and teams." },
  { num: "04", title: "Continuous Scaling", detail: "Post-launch, we monitor, optimize, and scale your system to handle increasing demand and evolving business needs." }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-brand-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 justify-between mb-20">
          <div>
            <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] block mb-6">Our Workflow</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
              Built with <br /><span className="text-gradient">Surgical Precision</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-text-muted leading-relaxed font-medium">
            Our methodology is designed to minimize risk and maximize output, moving from strategy to scale at record speed.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <GlowCard 
              key={i} 
              delay={i * 0.15} 
              className="bg-brand-surface/40!"
            >
              <div className="relative mb-12">
                 <div className="w-16 h-16 rounded-full glass-glow flex items-center justify-center border border-brand-primary/20 group-hover:border-brand-primary/50 transition-all shadow-xl shadow-brand-primary/10">
                   <span className="text-2xl font-black text-brand-text">{step.num}</span>
                 </div>
              </div>
              <h3 className="text-2xl font-black text-brand-text mb-6 uppercase tracking-tight italic group-hover:text-brand-primary transition-colors">{step.title}</h3>
              <p className="text-brand-text-muted leading-relaxed font-medium">{step.detail}</p>
              
              <div className="mt-10 pt-6 border-t border-brand-primary/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Phase {step.num} Complete</span>
                <ArrowRight size={14} className="text-brand-primary" />
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
