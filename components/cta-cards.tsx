'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Code2, Headphones, ShieldCheck, Wand2 } from 'lucide-react';
import { GeometricAnimatedBackground } from './ui/geometric-animated-background';

const floatingIcons = [
  { icon: Code2, label: 'Build', className: 'top-[50%] right-[5%]' },
  { icon: Wand2, label: 'AI', className: 'top-[38%] left-8 lg:left-[20%]' },
  { icon: ShieldCheck, label: 'Secure', className: 'bottom-28 right-8 lg:right-12' },
  { icon: Headphones, label: 'Support', className: 'bottom-12 left-[28%] lg:left-[34%]' },
];

const benefits = [
  'Custom software built around your workflow',
  'Fast delivery with clear milestones',
  'Support after launch, not just handoff',
];

export function CTACards() {
  return (
    <section className="py-16 sm:py-20 md:py-32 overflow-hidden">
      <GeometricAnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] border border-white/10 bg-[#090A10] bg-[radial-gradient(circle_at_top,rgba(109,99,246,0.25),transparent_35%),linear-gradient(180deg,#0B0D14_0%,#08090F_100%)] text-white">

            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-5 sm:mb-6 text-balance">
                    Your next client
                    <span className="block text-gradient">is one call away.</span>
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10">
                    We design software that makes your business feel effortless. Show us the problem, and we’ll turn it into a clear solution with strategy, design, and engineering.
                  </p>

                  <div className="space-y-4 mb-8 sm:mb-10">
                    {benefits.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-brand-text-muted">
                        <CheckCircle2 size={18} className="mt-1 text-slate-300 shrink-0" />
                        <span className="text-sm md:text-base font-medium text-slate-300 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-6 md:px-8 py-4 rounded-full bg-brand-primary text-white font-black uppercase tracking-[0.18em] text-xs md:text-sm shadow-2xl shadow-brand-primary/25 hover:scale-[1.02] transition-transform"
                    >
                      Get Free Consultation
                      <ArrowRight size={18} />
                    </Link>
                    <Link
                      href="/work"
                      className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-6 md:px-8 py-4 rounded-full border border-white/10 bg-white/5 font-black uppercase tracking-[0.18em] text-xs md:text-sm text-slate-300 hover:border-brand-primary/30 hover:text-slate-200 transition-colors"
                    >
                      See Results
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[680px] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_28%,rgba(255,255,255,0.02)_70%,transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.06),transparent_26%)]" />

                <div className="absolute inset-x-0 bottom-0 mx-auto w-[88%] sm:w-[82%] lg:w-[92%] max-w-[520px] h-[92%] pointer-events-none">
                  <div className="absolute inset-x-0 bottom-0 mx-auto w-full h-full drop-shadow-[0_30px_90px_rgba(0,0,0,0.7)] saturate-0">
                    <Image
                      src="/model/model-1.webp"
                      alt="Easy Soft client portrait"
                      fill
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 82vw, 520px"
                      className="object-contain object-bottom"
                      priority
                    />
                  </div>
                </div>

                <div className="absolute inset-0 z-10 hidden sm:block">
                  {floatingIcons.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        animate={{
                          y: [0, -12, 0],
                          x: [0, index % 2 === 0 ? 6 : -6, 0],
                          rotate: [0, index % 2 === 0 ? 6 : -6, 0],
                        }}
                        transition={{
                          duration: 4.8 + index * 0.45,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.25,
                        }}
                        className={`absolute ${item.className} scale-90 lg:scale-100`}
                      >
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-2xl shadow-black/30">
                          <div className="w-11 h-11 rounded-xl bg-brand-primary/15 border border-brand-primary/20 flex items-center justify-center text-slate-300">
                            <Icon size={20} />
                          </div>
                          <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-white/40">{item.label}</div>
                            <div className="text-sm font-black text-white">Live</div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="absolute right-4 sm:right-6 lg:right-8 bottom-4 sm:bottom-8 lg:bottom-10 z-30">
                  <div className="rounded-2xl border border-brand-primary/20 bg-brand-primary/10 backdrop-blur-xl px-4 py-3 shadow-[0_20px_60px_rgba(109,99,246,0.25)]">
                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-300/50 mb-1">Solution</div>
                    <div className="text-sm font-black text-white">Built for conversion</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-t from-[#07080C] to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
