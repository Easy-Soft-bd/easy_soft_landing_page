'use client';

import { motion } from 'motion/react';

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Deep Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Large Glowing Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/15 rounded-full blur-[100px]"
      />

      {/* Zig-Zag SVG Pattern Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="zigzag" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 L25 25 L50 50 L75 25 L100 50" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#zigzag)" className="text-brand-primary" />
        
        {/* Large Decorative Zig-Zags (Framer Motion) */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          d="M100 800 L300 400 L500 800 L700 400 L900 800"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          className="text-brand-primary/20"
        />
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6D63F6" />
          <stop offset="100%" stopColor="#4B45BB" />
        </linearGradient>
      </svg>
    </div>
  );
}
