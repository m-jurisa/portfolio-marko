import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import ModeSections from '../../components/ModeSections';
import Offerings from '../../components/Offerings';

export const dynamic = 'force-static';

export default function DeHome() {
  const initialMode = 'freiberuflich';
  return (
    <>
      <Hero locale="de" initialMode={initialMode} />
      <main className="max-w-7xl mx-auto overflow-x-hidden">
        {/* Offerings */}
        <Offerings locale="de" />
        <About />
        <ModeSections initialMode={initialMode} />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
