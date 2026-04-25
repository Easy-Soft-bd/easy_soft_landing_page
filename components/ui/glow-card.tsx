'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = '', delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`glass-glow rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:border-brand-primary/30 ${className}`}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>

      {/* Decorative Zig-Zag Shape (low opacity) */}
      <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors duration-500 pointer-events-none -rotate-12" viewBox="0 0 100 100">
        <path 
          d="M0 20 L40 20 L20 50 L80 50 L60 80 L100 80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round" 
        />
      </svg>
    </motion.div>
  );
}
