// app/en/projects/page.jsx
import Projects from '../../../components/Projects'
import PageIntro from '../../../components/PageIntro'
import Contact from '../../../components/Contact'

export const dynamic = 'error'
export const revalidate = false

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
       locale="en"
        kicker="Projects"
        title={(<><span>Welcome — a small </span><span className="accent-text">preview</span><span> of my work</span></>)}
        subtitle="If interested, I can provide a deeper portfolio and GitHub access."
      />
      <main className="max-w-7xl mx-auto c-space py-16 space-y-12">
        <Projects locale="en" />
        <Contact locale="en" />
      </main>
    </>
  )
}
