import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { TrustLogos } from '@/components/trust-logos';
import { About } from '@/components/about';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Services } from '@/components/services';
import { Infographic } from '@/components/infographic';
import { ValueProp } from '@/components/value-prop';
import { Process } from '@/components/process';
import { Portfolio } from '@/components/portfolio';
import { GlobalPresence } from '@/components/global-presence';
import { Contact } from '@/components/contact';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { CTACards } from '@/components/cta-cards';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <TrustLogos />
      <About />
      <WhyChooseUs />
      <Services />
      <Infographic />
      <ValueProp />
      <Process />
      <Portfolio />
      <GlobalPresence />
      <TestimonialSlider />
      <CTACards />
      <Footer />
    </main>
  );
}
