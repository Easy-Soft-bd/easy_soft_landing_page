import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { About } from '@/components/about';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Contact } from '@/components/contact';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <div className="pt-24 md:pt-40">
        <div className="container mx-auto px-6 md:px-12 mb-24">
          <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-6 block">Our Identity</span>
          <h1 className="text-6xl md:text-8xl font-black text-brand-text tracking-tight mb-8 leading-[0.9]">
            About <br /><span className="text-gradient">Easy Soft</span>
          </h1>
          <p className="text-xl text-brand-text-muted max-w-2xl leading-relaxed font-medium">
            We are a team of dedicated technologists, designers, and strategists committed to building the future of digital business operations.
          </p>
        </div>
        <About />
        <TestimonialSlider />
        <WhyChooseUs />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
