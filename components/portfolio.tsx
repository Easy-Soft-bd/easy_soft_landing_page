'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { GlowCard } from '@/components/ui/glow-card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    image: "/placeholders/case-dashboard.svg",
    client: "Apex Dashboard",
    problem: "Manual order management causing delays and human errors.",
    solution: "Automated inventory & order tracking system.",
    result: "Reduced manual work by 50% and increased order capacity.",
    category: "Digital Solutions",
    stats: "Reduced manual effort by 40%"
  },
  {
    image: "/placeholders/case-shop.svg",
    client: "NexGen E-com",
    problem: "Fragmented patient booking and follow-up process.",
    solution: "AI chatbot appointment scheduling & CRM integration.",
    result: "Improved patient retention by 30% and zero missed bookings.",
    category: "Web Engineering",
    stats: "300% Growth in user acquisition"
  }
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] block mb-6">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
              Transforming <br /><span className="text-gradient">Logic into Scale</span>
            </h2>
          </div>
          <Link href="/work" className="group flex items-center gap-4 text-brand-text font-black uppercase tracking-widest text-xs hover:text-brand-primary transition-colors">
            Explore All Work
            <div className="w-10 h-10 rounded-full border border-brand-primary/10 flex items-center justify-center group-hover:border-brand-primary transition-colors">
               <ArrowRight size={18} />
            </div>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((cs, i) => (
             <Link key={i} href="/work" className="group block h-full">
               <GlowCard delay={i * 0.2} className="p-0! overflow-hidden flex flex-col group/item h-full">
                 <div className="aspect-[16/9] relative overflow-hidden">
                   <Image 
                    src={cs.image} 
                    alt={cs.client} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover/item:scale-110 grayscale group-hover/item:grayscale-0 group-hover:opacity-60"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                   <div className="absolute top-6 right-6 w-12 h-12 glass text-brand-primary shadow-lg shadow-brand-primary/20 rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-300">
                      <ArrowRight size={20} />
                   </div>
                   <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full border border-white/10">
                     <span className="text-[10px] font-black uppercase tracking-widest text-white">{cs.category}</span>
                  </div>
                 </div>
                 
                 <div className="p-10 flex flex-col flex-1">
                   <h3 className="text-3xl font-black text-brand-text mb-6 tracking-tight group-hover/item:text-brand-primary transition-colors">{cs.client}</h3>
                   
                   <div className="flex items-center gap-3 mt-auto pt-6 border-t border-brand-primary/10">
                      <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                      <p className="text-brand-text-muted text-sm font-bold tracking-tight italic">
                        {cs.stats}
                      </p>
                   </div>
                 </div>
               </GlowCard>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
