import Hero from '../../components/Hero'
import Offerings from '../../components/Offerings'
import ServicesPackages from '../../components/ServicesPackages'
import Process from '../../components/Process'
import PricingSignals from '../../components/PricingSignals'
import Testimonials from '../../components/Testimonials'
import CTABar from '../../components/CTABar'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
import { enFreelanceServices, enProcess, enPricingSignals, enCTAs, enTestimonials } from '../../lib/content'

export const dynamic = 'error'
export const revalidate = false

export default function EnHome() {
  return (
    <>
      <Hero locale="en" />
      <main className="max-w-7xl mx-auto overflow-x-hidden c-space py-8">
        <Offerings locale="en" />
        <ServicesPackages services={enFreelanceServices} locale="en" />
        <Process steps={enProcess} locale="en" />
        <PricingSignals items={enPricingSignals} locale="en" />
        <Testimonials items={enTestimonials} locale="en" />
        <CTABar
          items={[
            { label: enCTAs[0], href: '#contact', beam: true },
            { label: enCTAs[1], href: '#contact' },
            { label: enCTAs[2], href: 'mailto:info@portfolio-marko.com' },
          ]}
        />
        <Skills />
        <Contact locale="en"/>
      </main>
    </>
  )
}
