'use client';

import { motion } from 'motion/react';
import { Target, Lightbulb, Ruler } from 'lucide-react';
import { GlowCard } from '@/components/ui/glow-card';

export function About() {
  const features = [
    {
      icon: <Target className="text-brand-primary" size={24} />,
      title: "Business-focused",
      text: "Understanding your real business goals before writing a single line of code."
    },
    {
      icon: <Ruler className="text-brand-primary" size={24} />,
      title: "Tailored Solutions",
      text: "No one-size-fits-all. Custom systems built exactly for your needs."
    },
    {
      icon: <Lightbulb className="text-brand-primary" size={24} />,
      title: "Problem Solvers",
      text: "We don't just build software, we engineer solutions to real-world problems."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex flex-col mb-10">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-6 block">Our Story</span>
              <h2 className="text-5xl md:text-6xl font-black text-brand-text leading-[1] mb-8">
                Merging <span className="text-gradient">Logic</span> with <span className="text-gradient">Vision</span>
              </h2>
              <div className="w-24 h-1.5 bg-brand-primary rounded-full mb-10" />
            </div>
            
            <p className="text-xl text-brand-text-muted leading-relaxed mb-8">
              Easy Soft is a technology-driven digital agency focused on delivering practical and scalable solutions for modern businesses.
            </p>
            <p className="text-lg text-brand-text/40 leading-relaxed mb-12">
              We create systems that are not only functional but also aligned with real business goals. Our approach ensures technology works for you, rather than the other way around.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
               {features.slice(0, 2).map((feat, i) => (
                 <GlowCard key={i} delay={i * 0.1}>
                   <div className="mb-6 bg-brand-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-primary/5">{feat.icon}</div>
                   <h3 className="text-xl font-bold text-brand-text mb-3 tracking-tight">{feat.title}</h3>
                   <p className="text-sm text-brand-text-muted leading-relaxed">{feat.text}</p>
                 </GlowCard>
               ))}
            </div>
          </div>

          {/* Right: Abstract composition */}
          <div className="relative h-[650px] w-full rounded-[40px] bg-brand-surface/50 border border-white/5 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/placeholders/about-tech.svg')] bg-cover bg-center grayscale opacity-10 group-hover:opacity-20 transition-opacity duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-primary/5" />
            
            {/* Geometric Ribbon Shapes Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100">
               <path d="M0 0 L100 40 L0 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-primary" />
               <path d="M100 100 L0 60 L100 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-primary" />
            </svg>

            <div className="absolute bottom-12 left-12 right-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-10 rounded-[32px] glass-glow border border-brand-primary/10 shadow-2xl"
              >
                 <h3 className="text-2xl md:text-3xl font-black text-brand-text mb-4 leading-tight italic">&quot;We don’t just build software — we solve business problems.&quot;</h3>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-1 bg-brand-primary rounded-full" />
                    <p className="text-brand-primary font-bold text-xs uppercase tracking-widest">Our Core Philosophy</p>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
