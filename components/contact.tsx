'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { GlowCard } from '@/components/ui/glow-card';
import { GradientButton } from '@/components/ui/gradient-button';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="mb-12">
              <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Ready to start?</span>
              <h2 className="text-5xl md:text-7xl font-black text-brand-text leading-tight mb-8">
                Let’s build <br /><span className="text-gradient">the future.</span>
              </h2>
              <p className="text-brand-text-muted text-xl font-medium leading-relaxed max-w-md">
                Connect with our team directly via phone, WhatsApp, or our social channels for immediate strategic alignment.
              </p>
            </div>

            <div className="space-y-10">
              <a href="mailto:hello@easysoft.agency" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-glow flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl shadow-brand-primary/5">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/20 mb-1">Direct Email</div>
                  <div className="text-lg font-black text-brand-text group-hover:text-brand-primary transition-colors tracking-tight">hello@easysoft.agency</div>
                </div>
              </a>
              
              <a href="tel:+1234567890" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-glow flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl shadow-brand-primary/5">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/20 mb-1">Global Phone</div>
                  <div className="text-lg font-black text-brand-text group-hover:text-brand-primary transition-colors tracking-tight">+1 (234) 567-890</div>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-glow flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl shadow-brand-primary/5">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/20 mb-1">Professional Network</div>
                  <div className="text-lg font-black text-brand-text group-hover:text-brand-primary transition-colors tracking-tight">LinkedIn Profile</div>
                </div>
              </a>

              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all shadow-xl shadow-brand-primary/10">
                   <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text/20 mb-1">Instant Messaging</div>
                  <div className="text-lg font-black text-brand-text group-hover:text-green-500 transition-colors tracking-tight">WhatsApp Us Now</div>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlowCard className="p-12 md:p-16 flex flex-col items-center text-center">
              
              <h3 className="text-3xl font-black text-brand-text mb-4 uppercase tracking-tight italic">Strategic Consultation</h3>
              <p className="text-brand-text-muted mb-10 font-medium leading-relaxed max-w-sm">
                Schedule a 30-minute deep dive with our lead architects to blueprint your next digital leap.
              </p>
              <Link href="#" className="w-full">
                <GradientButton className="w-full py-6 text-lg rounded-2xl shadow-2xl">
                  Book Appointment Now
                </GradientButton>
              </Link>
              <div className="mt-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-text/40">Next Availability: Today</span>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
