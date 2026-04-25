import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { services } from '@/lib/services-data';
import { Contact } from '@/components/contact';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Back Link */}
          <Link href="/services" className="inline-flex items-center gap-2 text-brand-text/40 hover:text-brand-primary transition-colors mb-12 font-bold uppercase tracking-widest text-[10px]">
            <ArrowLeft size={14} />
            Mission Brief Overview
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] block mb-6">Service Detail</span>
              <h1 className="text-5xl md:text-7xl font-black text-brand-text leading-tight mb-8">
                {service.title}
              </h1>
              <p className="text-xl text-brand-text-muted leading-relaxed mb-10 max-w-lg font-medium">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-6">
                 <Link href="/contact">
                   <GradientButton className="px-10 py-5">Initiate Sequence</GradientButton>
                 </Link>
                 <Link href="/work" className="px-8 py-4 glass border border-brand-primary/10 text-brand-text font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-brand-primary/5 transition-all">
                   System Outcomes
                 </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full aspect-square glass-glow rounded-[40px] border border-brand-primary/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-50" />
                <div className="p-16 glass rounded-3xl shadow-2xl border border-brand-primary/20 relative z-10 text-brand-primary group-hover:scale-110 transition-transform duration-700">
                  {service.icon}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-secondary/15 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>

          {/* Deep Dive Section */}
          <div className="grid md:grid-cols-2 gap-16 py-24 border-t border-brand-primary/10">
            <div>
              <h2 className="text-4xl font-black text-brand-text mb-8 uppercase tracking-tight italic">Technical Scope</h2>
              <p className="text-brand-text-muted leading-relaxed mb-10 font-medium">
                Our approach to {service.title.toLowerCase()} is centered around your specific business goals. We don&apos;t just deliver a product; we build a strategic asset that scales with you.
              </p>
              <ul className="space-y-6">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-brand-primary transition-colors">
                      <CheckCircle2 className="text-brand-primary group-hover:text-white transition-colors" size={16} />
                    </div>
                    <div>
                      <span className="font-black text-brand-text block uppercase text-sm tracking-tight mb-1 italic">{item}</span>
                      <span className="text-sm text-brand-text-muted leading-relaxed font-medium">Full lifecycle support from design to deployment and ongoing maintenance.</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-glow rounded-[40px] p-12 border border-brand-primary/20 flex flex-col justify-between relative overflow-hidden bg-brand-surface/40!">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div>
                <h3 className="text-3xl font-black mb-8 italic text-brand-primary uppercase tracking-tight">Logic Invariant</h3>
                <p className="text-brand-text-muted leading-relaxed mb-10 font-medium">
                  We combine deep technical expertise with a keen understanding of business strategy. Our solutions aren&apos;t just functional—they&apos;re transformative.
                </p>
              </div>
              <div className="pt-10 border-t border-brand-primary/10 space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl glass-glow flex items-center justify-center font-black text-2xl text-brand-primary border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl shadow-brand-primary/5">10+</div>
                  <div className="text-sm font-bold text-brand-text-muted leading-tight">Years of collective senior-level engineering experience in {service.title.toLowerCase()}</div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl glass-glow flex items-center justify-center font-black text-2xl text-brand-primary border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl shadow-brand-primary/5">100%</div>
                  <div className="text-sm font-bold text-brand-text-muted leading-tight">System reliability guaranteed through our surgical iterative process</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Contact />
      <Footer />
    </main>
  );
}
