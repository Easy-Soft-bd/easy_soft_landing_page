'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { GlowCard } from '@/components/ui/glow-card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

const teamMembers = [
  {
    name: "Nahid Hasan",
    role: "Lead Architect",
    image: "/teams/nahdi_hasan.jpeg",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Mahfuzur Rahman",
    role: "Development Lead",
    image: "/teams/mahfuzur_rahman.jpeg",
    social: { linkedin: "#", github: "#" }
  },

  {
    name: "Imam Hosain",
    role: "Cybersecurity Analyst",
    image: "/teams/imam_hosain.jpeg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Ahmed Islam",
    role: "Client Relations Officer",
    image: "/teams/ahmed_islam.jpeg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Joni",
    role: "Designer",
    image: "/teams/Joni.jpeg",
    social: { linkedin: "#", twitter: "#" }
  }
] satisfies TeamMember[];

const ZigZag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={className} preserveAspectRatio="none">
    <path
      d="M0,10 L10,0 L30,20 L50,0 L70,20 L90,0 L100,10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TeamPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <main className="min-h-screen bg-brand-dark text-brand-text pt-32 pb-24 relative overflow-hidden selection:bg-brand-primary/30">
      <Navbar />

      {/* Abstract Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <ZigZag className="absolute top-[10%] -left-[10%] w-[120%] h-40 text-brand-primary opacity-[0.03] blur-sm rotate-6" />
        <ZigZag className="absolute top-[40%] -right-[20%] w-[150%] h-64 text-brand-secondary opacity-[0.02] blur-md -rotate-12" />
        <ZigZag className="absolute top-[70%] -left-[30%] w-[180%] h-96 text-brand-primary opacity-[0.02] blur-xl rotate-3" />

        {/* Glowing Orbs */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 font-sans">
        {/* Hero Section */}
        <div className="mb-20 md:mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-text mb-6 uppercase tracking-tighter italic leading-none ">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#8A83FB] to-brand-secondary px-5">Architects</span>
            </h1>
            <p className="text-base md:text-lg text-brand-text-muted font-medium tracking-wide uppercase">
              The people behind digital innovation.
            </p>
            <div className="mt-8 md:mt-12 flex justify-center">
              <ZigZag className="w-24 md:w-32 h-4 md:h-6 text-brand-primary/30" />
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-48 mb-16 md:mb-24 p-8 md:p-20 glass rounded-[2rem] md:rounded-[3rem] border border-brand-primary/10 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand-primary/10 blur-[80px] md:blur-[120px] -mr-32 md:-mr-48 -mt-32 md:-mt-48 transition-all duration-1000 group-hover:bg-brand-primary/20" />

          <h2 className="text-3xl md:text-6xl font-black text-brand-text mb-6 md:mb-8 uppercase tracking-tighter italic relative z-10">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Core.</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-text-muted mb-8 md:mb-12 max-w-2xl mx-auto font-medium relative z-10">
            We are always scouting for top-tier talent. If you are elite, we want to talk.
          </p>
          <a
            href="mailto:careers@easysoft.com"
            className="inline-flex items-center gap-3 md:gap-4 px-8 md:px-10 py-4 md:py-5 bg-brand-primary text-white rounded-xl md:rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand-primary/40 relative z-10 group/btn"
          >
            Submit Credentials
            <Mail size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative">
      <GlowCard className="p-0 overflow-hidden bg-brand-surface/70 border-brand-primary/10 backdrop-blur-3xl rounded-[24px] group-hover:bg-brand-surface/90 transition-all duration-500">
        {/* Profile Image Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[800ms]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Subtle purple overlay */}
          <div className="absolute inset-0 bg-brand-primary/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

          {/* Zig-Zag Watermark */}
          <ZigZag className="absolute bottom-6 right-6 w-12 h-3 text-brand-text/10 group-hover:text-brand-primary/30 transition-colors duration-500" />

          {/* Social Reveal */}
          {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            )}
            {member.social.github && (
              <a href={member.social.github} className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-all">
                <Github size={18} />
              </a>
            )}
          </div> */}
        </div>

        {/* Content */}
        <div className="p-8 text-center relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0" />
          <h3 className="text-2xl font-bold text-brand-text mb-2 uppercase tracking-tight italic">{member.name}</h3>
          <p className="text-brand-primary/60 text-[10px] font-black uppercase tracking-[0.3em]">{member.role}</p>
        </div>
      </GlowCard>

      {/* Outer Glow Effect on Hover */}
      <div className="absolute -inset-4 bg-brand-primary/5 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </div>
  );
}
