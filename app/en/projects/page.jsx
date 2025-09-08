import Projects from '../../../components/Projects';
import PageIntro from '../../../components/PageIntro';
import Contact from '../../../components/Contact';

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        kicker="Projects"
        title={(<><span>Welcome — a small </span><span className="accent-text">preview</span><span> of my work</span></>)}
        subtitle="If interested, I can provide a deeper portfolio and GitHub access."
      />
      <main className="max-w-7xl mx-auto c-space py-16 space-y-12">
        <Projects />
        <Contact />
      </main>
    </>
  );
}
