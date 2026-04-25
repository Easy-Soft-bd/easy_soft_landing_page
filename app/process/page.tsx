import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Process } from '@/components/process';
import { Contact } from '@/components/contact';

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <div className="pt-24 md:pt-40">
        <div className="container mx-auto px-6 md:px-12 mb-24">
          <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Our Engineering Method</span>
          <h1 className="text-6xl md:text-8xl font-black text-brand-text tracking-tight mb-8 leading-[0.9]">
            The <br /><span className="text-gradient">Process</span>
          </h1>
          <p className="text-xl text-brand-text-muted max-w-2xl leading-relaxed font-medium">
            A battle-tested methodology designed to move projects from strategy to deployment with surgical precision and maximum efficiency.
          </p>
        </div>
        <Process />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
