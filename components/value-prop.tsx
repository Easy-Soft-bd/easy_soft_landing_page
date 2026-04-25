'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import { CheckCircle2, Zap } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import Link from 'next/link';

const points = [
  "99.9% System uptime guaranteed",
  "Scalable cloud-native architecture",
  "Automated AI-driven workflows",
  "Dedicated 24/7 technical support"
];

export function ValueProp() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-glow rounded-[48px] p-12 md:p-20 border border-brand-primary/10 relative overflow-hidden bg-gradient-to-br from-brand-surface to-brand-dark">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-brand-text leading-tight mb-8">
                Ready to <span className="text-gradient">Scale Your Business?</span>
              </h2>
              <p className="text-xl text-brand-text-muted leading-relaxed mb-10 max-w-lg">
                Stop struggling with outdated systems. Let us build the infrastructure you need to dominate your market.
              </p>
              
              <ul className="space-y-6 mb-12">
                {points.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                      <CheckCircle2 size={16} className="text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-brand-text font-bold tracking-tight">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-6">
                <Link href="/contact">
                  <GradientButton>Get Started Now</GradientButton>
                </Link>
                <div className="flex items-center gap-4 px-6 py-3 border border-brand-primary/10 rounded-full glass bg-brand-primary/5">
                   <div className="flex -space-x-3">
                     {[1,2,3].map((i) => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-surface bg-slate-700" />
                     ))}
                   </div>
                   <p className="text-sm text-brand-text-muted font-bold">Joined by 500+ businesses</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full aspect-square rounded-[40px] bg-gradient-to-tr from-brand-primary/10 to-transparent border border-white/10 flex items-center justify-center p-8 group">
                <div className="relative w-full h-full glass rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                   <div className="absolute inset-x-0 top-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-primary/30" />
                      <div className="h-1.5 w-20 bg-white/10 rounded-full" />
                   </div>
                   <div className="p-8 pt-16 space-y-6">
                      <div className="h-4 w-1/3 bg-brand-primary/20 rounded-full" />
                      <div className="space-y-3">
                        <div className="h-2 w-full bg-white/5 rounded-full" />
                        <div className="h-2 w-5/6 bg-white/5 rounded-full" />
                        <div className="h-2 w-4/6 bg-white/5 rounded-full" />
                      </div>
                      <div className="h-24 w-full bg-brand-primary/5 rounded-2xl border border-brand-primary/10" />
                   </div>
                </div>
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 glass rounded-2xl border border-brand-primary/20 flex items-center justify-center text-brand-primary shadow-xl"
                >
                   <Zap size={32} />
                </motion.div>
                <motion.div 
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                   className="absolute -bottom-6 -left-6 w-32 h-16 glass rounded-full border border-brand-secondary/20 flex items-center justify-center px-6 gap-3 text-white shadow-xl"
                >
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-xs font-bold uppercase tracking-widest text-brand-text">Active Scale</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
