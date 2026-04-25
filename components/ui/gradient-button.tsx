'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface GradientButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export function GradientButton({ children, variant = 'primary', className = '', ...props }: GradientButtonProps) {
  if (variant === 'primary') {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative px-8 py-4 rounded-full font-bold text-white overflow-hidden group shadow-lg shadow-brand-primary/20 ${className}`}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] group-hover:bg-[length:250%_auto] transition-all" />
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 rounded-full font-bold text-white border border-brand-primary/30 glass hover:bg-brand-primary/10 transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
