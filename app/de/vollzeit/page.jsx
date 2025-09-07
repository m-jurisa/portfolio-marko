import Skills from '../../../components/Skills';
import PageIntro from '../../../components/PageIntro';
import Contact from '../../../components/Contact';
import CaseStudies from '../../../components/CaseStudies';
import ResumeSnapshot from '../../../components/ResumeSnapshot';
import Preferences from '../../../components/Preferences';
import Testimonials from '../../../components/Testimonials';
import CTABar from '../../../components/CTABar';
import { deProfileIntro, deCaseStudies, deResumeSnapshots, dePreferences, deTestimonials } from '../../../lib/content';

export default function Vollzeit() {
  return (
    <>
      <PageIntro
        title={(<><span>Ich suche eine stabile </span><span className="accent-text">langfristige</span><span> Stelle als </span><span className="accent-text">Junior Fullstack‑Entwickler</span></>)}
        subtitle={deProfileIntro}
      />
      <main className="max-w-7xl mx-auto c-space py-16">
        <CaseStudies items={deCaseStudies} />
        <ResumeSnapshot data={deResumeSnapshots} />
        <Preferences data={dePreferences} />
        <Testimonials items={deTestimonials} />
        <CTABar items={[
          { label: 'CV herunterladen', href: '/resume.pdf' },
          { label: 'Bewerbungsgespräch anfragen', href: '/de/kontakt?typ=bewerbung', beam: true },
          { label: 'E-Mail senden', href: 'mailto:marko.jurisa@proton.me' },
        ]} />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
