// app/de/freiberuflich/page.jsx
import ServicesPackages from '../../../components/ServicesPackages'
import Process from '../../../components/Process'
import PricingSignals from '../../../components/PricingSignals'
import FAQs from '../../../components/FAQs'
import Testimonials from '../../../components/Testimonials'
import CTABar from '../../../components/CTABar'
import Projects from '../../../components/Projects'
import { deFreelanceServices, deProcess, dePricingSignals, deFaqs, deTestimonials } from '../../../lib/content'
import PageIntro from '../../../components/PageIntro'
import Skills from '../../../components/Skills'
import Contact from '../../../components/Contact'

export const dynamic = 'error'
export const revalidate = false

export default function Freiberuflich() {
  return (
    <>
      <PageIntro
        kicker="Freiberuflich"
        title={(<><span>Ich bin offen für </span><span className="accent-text">kurzfristige</span><span> und </span><span className="accent-text">langfristige</span><span> Projekte</span></>)}
        subtitle="Leistungen, Konditionen und ausgewählte Referenzen."
      />
      <main className="max-w-7xl mx-auto c-space py-16 space-y-12">
        <ServicesPackages services={deFreelanceServices} />
        <Process steps={deProcess} />
        <PricingSignals items={dePricingSignals} />
        <Projects />
        <Testimonials items={deTestimonials} />
        <FAQs items={deFaqs} />
        <CTABar items={[
          { label: 'Projekt anfragen', href: '#contact', beam: true },
          { label: 'Briefing-Vorlage laden', href: '/briefing.pdf' },
        ]} />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
