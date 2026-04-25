'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services-data';
import { GlowCard } from '@/components/ui/glow-card';

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.3em] block mb-6">Our Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-text leading-[1] mb-8">
            Next-Gen <br /><span className="text-gradient">Business Infrastructure</span>
          </h2>
          <p className="text-brand-text-muted text-lg md:text-xl font-medium max-w-xl">
            We provide specialized technology solutions designed to help businesses automate and scale with surgical precision.
          </p>
        </div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <GlowCard delay={index * 0.1} className="p-0!">
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-12 gap-10 items-start relative z-10">
                    {/* Number & Icon */}
                    <div className="md:col-span-2 flex flex-col gap-8">
                      <span className="text-5xl text-white/5 font-black group-hover:text-brand-primary/10 transition-colors">
                        {service.id}
                      </span>
                      <div className="w-16 h-16 rounded-2xl glass-glow flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform shadow-xl shadow-brand-primary/5">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10 flex flex-col md:flex-row gap-12 items-center">
                      <div className="flex-1">
                        <h3 className="text-3xl font-black text-brand-text mb-4 flex items-center gap-4 group-hover:text-brand-primary transition-colors tracking-tight">
                          {service.title}
                          <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
                        </h3>
                        <p className="text-brand-text-muted text-lg leading-relaxed mb-8 md:mb-0 max-w-lg font-medium">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex-1 md:pl-12 md:border-l border-brand-primary/10">
                        <h4 className="text-[10px] font-black text-brand-text/20 uppercase tracking-[0.2em] mb-6">Functional Range</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.includes.map((item, i) => (
                            <li key={i} className="text-brand-text-muted flex items-center gap-3 group/item">
                              <span className="w-2 h-2 rounded-full bg-brand-primary/20 group-hover/item:bg-brand-primary transition-colors shrink-0" />
                              <span className="text-sm font-bold group-hover/item:text-brand-text transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
