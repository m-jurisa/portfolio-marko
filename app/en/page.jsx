import Hero from '../../components/Hero';
import Offerings from '../../components/Offerings';
import ServicesPackages from '../../components/ServicesPackages';
import Process from '../../components/Process';
import PricingSignals from '../../components/PricingSignals';
import Testimonials from '../../components/Testimonials';
import CTABar from '../../components/CTABar';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import { deFreelanceServices, deProcess, dePricingSignals, enPositioning, enCTAs, enTestimonials } from '../../lib/content';
import { myProjects } from '../../lib/constants';

export default function EnHome() {
  return (
    <>
      <Hero locale="en" />
      <main className="max-w-7xl mx-auto overflow-x-hidden c-space py-8">
        <Offerings locale="en" />
        <ServicesPackages services={deFreelanceServices} />
        <Process steps={deProcess} />
        <PricingSignals items={dePricingSignals} />
        <Testimonials items={enTestimonials} title="Testimonials" />
      <CTABar items={[
        { label: enCTAs[0], href: '#contact', beam: true },
        { label: enCTAs[1], href: '#contact' },
        { label: enCTAs[2], href: 'mailto:marko.jurisa@proton.me' },
      ]} />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
