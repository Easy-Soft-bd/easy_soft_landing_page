'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="border-t border-brand-primary/10 bg-brand-darker pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image 
                  src="/easysoftlogo.png" 
                  alt="Easy Soft Logo" 
                  fill 
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-brand-text italic uppercase">
                Easy<span className="text-brand-primary">Soft</span>
              </span>
            </Link>
            <p className="text-brand-text-muted max-w-sm mb-8 leading-relaxed font-medium">
              Building powerful digital systems, optimizing operations, and scaling businesses with custom technology and AI automation.
            </p>
            <div className="flex gap-4">
               <motion.a 
                 href="#" 
                 whileHover={{ scale: 1.1, backgroundColor: "var(--brand-primary)", color: "white" }}
                 whileTap={{ scale: 0.95 }}
                 className="w-10 h-10 rounded-xl glass border border-brand-primary/10 flex items-center justify-center text-brand-text transition-all duration-200 shadow-xl shadow-brand-primary/5"
               >
                 <Linkedin size={18} />
               </motion.a>
               <motion.a 
                 href="#" 
                 whileHover={{ scale: 1.1, backgroundColor: "var(--brand-primary)", color: "white" }}
                 whileTap={{ scale: 0.95 }}
                 className="w-10 h-10 rounded-xl glass border border-brand-primary/10 flex items-center justify-center text-brand-text transition-all duration-200 shadow-xl shadow-brand-primary/5"
               >
                 <Twitter size={18} />
               </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-text/30 mb-8">Engineering</h4>
            <ul className="space-y-4">
              <li><Link href="/services/web-development" className="text-brand-text-muted hover:text-brand-primary font-bold text-sm transition-colors block">Web Systems</Link></li>
              <li><Link href="/services/ai-automation" className="text-brand-text-muted hover:text-brand-primary font-bold text-sm transition-colors block">AI Workflows</Link></li>
              <li><Link href="/services/business-solutions" className="text-brand-text-muted hover:text-brand-primary font-bold text-sm transition-colors block">Legacy Refactor</Link></li>
              <li><Link href="/services/system-integration" className="text-brand-text-muted hover:text-brand-primary font-bold text-sm transition-colors block">API Fabric</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-text/30 mb-8">Roadmap</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-brand-text-muted hover:text-brand-primary font-bold text-sm transition-colors block">The Vision</Link></li>
              <li><Link href="/work" className="text-brand-text-muted hover:text-brand-primary font-bold text-sm transition-colors block">Logistics</Link></li>
              <li><Link href="/process" className="text-brand-text-muted hover:text-brand-primary font-bold text-sm transition-colors block">Methodology</Link></li>
              <li><Link href="/contact" className="text-brand-text-muted hover:text-brand-primary font-bold text-sm transition-colors flex items-center gap-2 group">Contact Sequence <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" /></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-text/30">
           <p>&copy; {new Date().getFullYear()} Easy Soft Engineering. [STATUS: ACTIVE]</p>
           <div className="flex gap-8">
             <Link href="#" className="hover:text-brand-primary transition-colors">Privacy Protocol</Link>
             <Link href="#" className="hover:text-brand-primary transition-colors">Service Terms</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
