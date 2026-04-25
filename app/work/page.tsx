import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Portfolio } from '@/components/portfolio';
import { Contact } from '@/components/contact';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <div className="pt-24 md:pt-40">
        <div className="container mx-auto px-6 md:px-12 mb-24">
          <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Our Track Record</span>
          <h1 className="text-6xl md:text-8xl font-black text-brand-text tracking-tight mb-8 leading-[0.9]">
            Our <br /><span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-brand-text-muted max-w-2xl leading-relaxed font-medium">
            Take a look at some of the systems we&apos;ve built and the problems we&apos;ve solved for our global partners.
          </p>
        </div>
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
