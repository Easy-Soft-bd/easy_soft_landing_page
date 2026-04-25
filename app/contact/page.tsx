import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <div className="pt-24 md:pt-32 pb-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
