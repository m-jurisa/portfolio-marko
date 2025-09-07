import PageIntro from '../../../components/PageIntro';
import Contact from '../../../components/Contact';

export default function Offerings() {
  return (
    <>
      <PageIntro
        title={(<><span>My </span><span className="accent-text">Offerings</span><span> — tailored for creators & businesses</span></>)}
        subtitle="Pick the areas that fit your needs. Clear process, on‑time delivery."
      />
      <main className="max-w-7xl mx-auto c-space py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <details className="grid-container">
            <summary className="text-white font-semibold cursor-pointer">For YouTubers & Creators</summary>
            <ul className="grid-subtext list-disc ml-5 mt-3">
              <li>Intro/outro clips, lower thirds, social assets</li>
              <li>Showreels, editing & color grading</li>
              <li>Thumbnails & branding kits</li>
            </ul>
          </details>
          <details className="grid-container">
            <summary className="text-white font-semibold cursor-pointer">For Businesses</summary>
            <ul className="grid-subtext list-disc ml-5 mt-3">
              <li>Landing pages & microsites (Next.js, Tailwind)</li>
              <li>Product mockups & 3D assets</li>
              <li>Presentations & campaign assets</li>
            </ul>
          </details>
          <details className="grid-container">
            <summary className="text-white font-semibold cursor-pointer">For Startups & Teams</summary>
            <ul className="grid-subtext list-disc ml-5 mt-3">
              <li>Light design systems, UI prototyping</li>
              <li>MVP frontends, API integration</li>
              <li>Brand starter & social kit</li>
            </ul>
          </details>
          <details className="grid-container">
            <summary className="text-white font-semibold cursor-pointer">Custom Packages</summary>
            <ul className="grid-subtext list-disc ml-5 mt-3">
              <li>Mix of web, video, 3D & branding</li>
              <li>Workshops & content sprints</li>
              <li>Flexible billing (daily/fixed)</li>
            </ul>
          </details>
        </div>
        <Contact />
      </main>
    </>
  );
}

