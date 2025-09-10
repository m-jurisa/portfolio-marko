// app/de/vollzeit/page.jsx
import Skills from '../../../components/Skills'
import PageIntro from '../../../components/PageIntro'
import Contact from '../../../components/Contact'
import CaseStudies from '../../../components/CaseStudies'
import ResumeSnapshot from '../../../components/ResumeSnapshot'
import Preferences from '../../../components/Preferences'
import Testimonials from '../../../components/Testimonials'
import CTABar from '../../../components/CTABar'
import { deProfileIntro, deCaseStudies, deResumeSnapshots, dePreferences, deTestimonials } from '../../../lib/content'

export const dynamic = 'error'
export const revalidate = false

export default function Vollzeit() {
  return (
    <>
      <PageIntro
        kicker="Vollzeit"
        title={(<><span>Ich suche eine stabile </span><span className="accent-text">langfristige</span><span> Stelle als </span><span className="accent-text">Junior Fullstack-Entwickler</span></>)}
        subtitle={deProfileIntro}
      />
      <main className="max-w-7xl mx-auto c-space py-16 space-y-12">
        <CaseStudies items={deCaseStudies} />
        <ResumeSnapshot data={deResumeSnapshots} />
        <Preferences data={dePreferences} />
        <Testimonials items={deTestimonials} />
        <CTABar items={[
          { label: 'Bewerbungsgespräch anfragen', href: '#contact', beam: true },
          { label: 'E-Mail senden', href: 'mailto:info@portfolio-marko.com' },
        ]} />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
