import ServicesPackages from '../../../components/ServicesPackages';
import Process from '../../../components/Process';
import PricingSignals from '../../../components/PricingSignals';
import ShowreelGallery from '../../../components/ShowreelGallery';
import FAQs from '../../../components/FAQs';
import Testimonials from '../../../components/Testimonials';
import CTABar from '../../../components/CTABar';
import { myProjects } from '../../../lib/constants';
import { deFreelanceServices, deProcess, dePricingSignals, deFaqs, deTestimonials } from '../../../lib/content';
import PageIntro from '../../../components/PageIntro';
import Skills from '../../../components/Skills';
import Contact from '../../../components/Contact';

export default function Freiberuflich() {
  return (
    <>
      <PageIntro
        title={(<><span>Ich bin offen für </span><span className="accent-text">kurzfristige</span><span> und </span><span className="accent-text">langfristige</span><span> Projekte</span></>)}
        subtitle="Leistungen, Konditionen und ausgewählte Referenzen."
      />
      <main className="max-w-7xl mx-auto c-space py-16">
        <ServicesPackages services={deFreelanceServices} />
        <Process steps={deProcess} />
        <PricingSignals items={dePricingSignals} />
        <ShowreelGallery videoSrc={'/textures/project/project1.mp4'} projects={myProjects} />
        <Testimonials items={deTestimonials} />
        <FAQs items={deFaqs} />
        <CTABar items={[
          { label: 'Projekt anfragen', href: '/de/kontakt?typ=projekt', beam: true },
          { label: 'Kennenlern-Call', href: '/de/kontakt?typ=call' },
          { label: 'Briefing-Vorlage laden', href: '/briefing.pdf' },
        ]} />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
