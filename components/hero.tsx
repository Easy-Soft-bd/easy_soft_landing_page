'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { GradientButton } from '@/components/ui/gradient-button';

import { GeometricAnimatedBackground } from '@/components/ui/geometric-animated-background';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <GeometricAnimatedBackground />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary rounded-full mb-8 relative"
          >
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-ping absolute left-4" />
            <div className="w-2 h-2 bg-brand-primary rounded-full ml-1" />
            <span className="text-xs font-bold uppercase tracking-wider pl-1">Digital Solutions & AI Platform</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black leading-[1] text-brand-text tracking-tight mb-8"
          >
            Smart Digital <br className="hidden md:block" />
            <span className="text-gradient">Solutions for Growth</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-brand-text-muted max-w-xl mb-12 leading-relaxed font-medium"
          >
            We help modern businesses build powerful websites, automate workflows with AI, and create scalable digital ecosystems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link href="/contact">
              <GradientButton>
                Get Started <ArrowRight size={20} />
              </GradientButton>
            </Link>
            <Link href="/work">
              <GradientButton variant="outline">
                View Our Work
              </GradientButton>
            </Link>
          </motion.div>
        </div>

        {/* Visual Element - Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[500px] lg:h-[600px] w-full hidden md:block"
        >
          <div className="absolute inset-0 glass-glow rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(109,99,246,0.15)] ring-1 ring-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/5" />
            
            {/* Minimal Mockup UI */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-white/5 border-b border-white/5 flex items-center justify-between px-6">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400/30" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400/30" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-400/30" />
              </div>
              <div className="relative w-28 h-8 opacity-40">
                <Image 
                  src="/small-bann-logo.png" 
                  alt="App Logo" 
                  fill 
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </div>
            
            <div className="p-10 pt-24 h-full flex flex-col gap-8">
              <motion.div 
                animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-4/5 h-36 glass rounded-2xl p-6 flex gap-6"
              >
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-lg shadow-brand-primary/30">
                     <Sparkles size={32} />
                  </div>
                  <div className="flex-1 space-y-4 py-3">
                    <div className="h-2.5 w-1/3 bg-white/20 rounded-full" />
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                  </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-[90%] self-end h-44 bg-brand-primary/5 rounded-3xl border border-brand-primary/10 p-6 flex flex-col gap-6 shadow-2xl"
              >
                  <div className="flex justify-between items-center px-2">
                    <div className="h-3.5 w-32 bg-brand-primary/40 rounded-full" />
                    <div className="h-8 w-1/4 glass rounded-lg" />
                  </div>
                  <div className="flex-1 rounded-2xl border border-brand-primary/10 flex items-end p-4 gap-3">
                     <div className="w-full flex gap-3 items-end h-full px-2">
                       <div className="w-1/4 h-[35%] bg-white/5 rounded-t-lg transition-transform hover:scale-y-110" />
                       <div className="w-1/4 h-[65%] bg-brand-primary/30 rounded-t-lg" />
                       <div className="w-1/4 h-[50%] bg-brand-secondary/40 rounded-t-lg" />
                       <div className="w-1/4 h-[95%] bg-brand-primary rounded-t-lg shadow-[0_-10px_20px_rgba(109,99,246,0.3)]" />
                     </div>
                  </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
