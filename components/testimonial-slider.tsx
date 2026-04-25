'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GlowCard } from '@/components/ui/glow-card';

const testimonials = [
  {
    quote: "Easy Soft didn't just build us a website; they architected a solution that scaled our operations by 400% in six months. Their precision is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO @ TechFlow Systems",
    avatar: "SJ"
  },
  {
    quote: "The AI automation workflow they implemented eliminated 60% of our manual tasks. It's like adding 10 invisible workers to our team.",
    author: "Michael Chen",
    role: "Director of Ops @ Global Logistics",
    avatar: "MC"
  },
  {
    quote: "Surgical precision in every line of code. They understood our complex business logic immediately and transformed it into a scalable digital asset.",
    author: "Elena Rodriguez",
    role: "Founder @ FinScale",
    avatar: "ER"
  }
];

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Logic Validation</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-text leading-tight mb-8">
            Client <span className="text-gradient">Signals</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard className="p-10 md:p-16 relative">
                <Quote className="absolute top-8 right-12 w-20 h-20 text-brand-primary/5 -rotate-12 pointer-events-none" />
                
                <div className="relative z-10">
                  <p className="text-2xl md:text-3xl font-black text-brand-text mb-10 leading-snug italic">
                    &quot;{testimonials[activeIndex].quote}&quot;
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl glass-glow border border-brand-primary/20 flex items-center justify-center text-xl font-black text-brand-primary">
                      {testimonials[activeIndex].avatar}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-brand-text uppercase tracking-tight italic">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-sm font-bold text-brand-text-muted uppercase tracking-[0.1em]">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl glass border border-brand-primary/10 flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === activeIndex ? 'w-10 bg-brand-primary' : 'w-2 bg-brand-primary/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl glass border border-brand-primary/10 flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all group"
            >
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
