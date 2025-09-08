import Projects from '../../../components/Projects';
import PageIntro from '../../../components/PageIntro';
import Contact from '../../../components/Contact';

export default function Projekte() {
  return (
    <>
      <PageIntro
        kicker="Projekte"
        title={(<><span>Willkommen – eine kleine </span><span className="accent-text">Vorschau</span><span> meiner bisherigen Arbeit</span></>)}
        subtitle="Bei Interesse reiche ich ein tieferes Portfolio und GitHub‑Zugang nach."
      />
      <main className="max-w-7xl mx-auto c-space py-16 space-y-12">
        <Projects />
        <Contact />
      </main>
    </>
  );
}
