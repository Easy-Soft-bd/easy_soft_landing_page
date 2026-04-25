'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import React, { useEffect, useState, useMemo } from 'react';

export function GeometricAnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Create a scroll-based parallax value
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const shapes = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      x: (10 + (i * 7) % 80) + "%",
      y: (10 + (i * 13) % 80) + "%",
      scale: 0.5 + ((i * 3) % 10) / 20,
      rotate: i * 45,
      moveY: ((i % 2 === 0 ? 1 : -1) * (50 + (i * 10) % 150)),
      moveX: ((i % 3 === 0 ? 1 : -1) * (30 + (i * 7) % 100)),
      moveRotate: i * 90,
      duration: 12 + (i % 5) * 3,
      delay: i * 0.4,
      width: (50 + (i * 8) % 60) + "px",
      height: (50 + (i * 8) % 60) + "px",
      parallaxFactor: (i % 3 + 1) * 0.2, // Different multiplier for each layer
    }));
  }, []);

  const gridParallax = useTransform(scrollY, [0, 1000], [0, 100]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dynamic Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(109, 99, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(75, 69, 187, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(109, 99, 246, 0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {shapes.map((shape, i) => (
          <ParallaxShape key={i} shape={shape} parallaxY={parallaxY} index={i} />
        ))}
      </div>

      {/* Large Blurred Geometric Accents */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] w-[40%] aspect-square border-[40px] border-brand-primary/5 rounded-[100px] blur-3xl pointer-events-none"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -45, 0],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[0%] right-[-5%] w-[30%] aspect-square flex items-center justify-center opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-brand-secondary fill-current blur-2xl">
           <path d="M40,160 L100,40 L160,160 Z" />
        </svg>
      </motion.div>

      {/* Grid Overlay */}
      <motion.div 
        style={{ y: gridParallax }}
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,var(--brand-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-primary)_1px,transparent_1px)] bg-[size:40px_40px]" 
      />
    </div>
  );
}

function ParallaxShape({ shape, parallaxY, index }: { shape: any, parallaxY: any, index: number }) {
  const yOffset = useTransform(parallaxY, (latest: number) => latest * shape.parallaxFactor);

  return (
    <motion.div
      initial={{
        x: shape.x,
        y: shape.y,
        opacity: 0,
        scale: shape.scale,
        rotate: shape.rotate,
      }}
      animate={{
        y: [null, shape.moveY],
        x: [null, shape.moveX],
        rotate: [null, shape.moveRotate],
        opacity: [0, 0.1, 0.2, 0.1, 0],
      }}
      style={{
        y: yOffset,
        width: shape.width,
        height: shape.height,
      }}
      transition={{
        duration: shape.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: shape.delay,
      }}
      className="absolute"
    >
      {/* Shape rendering logic */}
      {index % 3 === 0 ? (
        <div className="w-full h-full border border-brand-primary/20 rounded-xl" />
      ) : index % 3 === 1 ? (
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-primary/10 fill-current opacity-30">
          <polygon points="50,0 100,100 0,100" />
        </svg>
      ) : (
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-secondary/10 stroke-current fill-none opacity-30" strokeWidth="2">
          <path d="M0 50 L25 25 L50 50 L75 25 L100 50" />
        </svg>
      )}
    </motion.div>
  );
}
