'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';

export function Hero() {
  return (
    <section className="relative isolate min-h-screen flex items-center pt-24 overflow-hidden bg-brand-dark text-brand-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(109,99,246,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(109,99,246,0.14),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(109,99,246,0.08),transparent_28%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(109,99,246,0.10),transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-full lg:w-[58%]"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-brand-dark via-brand-dark/55 to-transparent dark:from-brand-dark/20 dark:via-brand-dark/45 dark:to-transparent" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[50%] contrast-50 saturate-100 mix-blend-multiply opacity-100 dark:brightness-[110%] dark:contrast-[110%] dark:saturate-100 dark:mix-blend-screen dark:opacity-100"
        >
          <source src="/video/logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

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
      </div>
    </section>
  );
}
