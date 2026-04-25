'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Work', href: '/work' },
    { name: 'Team', href: '/team' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'glass py-4 shadow-2xl border-brand-primary/10' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
            <Image 
              src="/easysoftlogo.png" 
              alt="Easy Soft Logo" 
              fill 
              className="object-contain"
              priority
              sizes="(max-width: 768px) 32px, 40px"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-text group-hover:text-brand-primary transition-colors">Easy Soft</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-text/60 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full glass hover:text-brand-primary transition-all border border-brand-primary/10"
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
          </button>

          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-brand-primary text-white text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all"
          >
            Get Free Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-text glass border"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-dark border-b border-white/5 py-8 px-6 md:hidden flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-black text-brand-text hover:text-brand-primary transition-colors uppercase tracking-tight"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
             <span className="text-sm font-bold text-brand-text/40">Switch Appearance</span>
             <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-12 h-12 rounded-full glass flex items-center justify-center border"
              >
                {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
              </button>
          </div>

          <Link
            href="/contact"
            className="px-6 py-4 text-center rounded-2xl bg-brand-primary text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-primary/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Project Sequence
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
