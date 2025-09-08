"use client";

import { useState } from 'react';

export default function PageIntro({ kicker, title, subtitle, showMeta = true, email = 'marko.jurisa@proton.me' }) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 1600);
  };

  return (
    <section className="page-intro">
      <div className="page-intro_inner">
        {kicker ? <div className="page-intro_kicker">{kicker}</div> : null}
        <h1 className="page-intro_title">{title}</h1>
        {subtitle ? <p className="muted-text subline mt-3">{subtitle}</p> : null}

        {showMeta && (
          <div className="mt-5 flex flex-col items-center gap-3">
            <div className="trust-strip marquee">
              <div className="marquee__inner">
                <img src="/assets/icons/ps.svg" alt="Photoshop" />
                <img src="/assets/icons/pr.svg" alt="Premiere Pro" />
                <img src="/assets/aftereffects.png" alt="After Effects" />
                <img src="/assets/figma.svg" alt="Figma" />
                <img src="/assets/cards/card-img-blender.webp" alt="Blender" />
                <img src="/assets/icons/go.svg" alt="Go" />
                <img src="/assets/icons/htmx.svg" alt="htmx" />
              </div>
              <div className="marquee__inner" aria-hidden="true">
                <img src="/assets/icons/ps.svg" alt="" />
                <img src="/assets/icons/pr.svg" alt="" />
                <img src="/assets/aftereffects.png" alt="" />
                <img src="/assets/figma.svg" alt="" />
                <img src="/assets/cards/card-img-blender.webp" alt="" />
                <img src="/assets/icons/go.svg" alt="" />
                <img src="/assets/icons/htmx.svg" alt="" />
              </div>
            </div>

            <div className="badge mt-1">
              <span className="relative inline-flex h-3 w-3">
                <span className="btn-ping"></span>
                <span className="btn-ping_dot"></span>
              </span>
              Verfügbar: DE vor Ort und Hybrid / weltweit Remote 
            </div>

            {/* Email with mailto + copy button */}
            <div className="inline-flex items-center gap-2">
              <a 
                href={`mailto:${email}`} 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {email}
              </a>
              
              <button
                type="button"
                onClick={handleCopy}
                className="p-1 text-white/70 hover:text-white transition-colors duration-200 group"
                title={hasCopied ? "E-Mail kopiert!" : "E-Mail kopieren"}
                aria-live="polite"
              >
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt={hasCopied ? "E-Mail kopiert" : "E-Mail kopieren"}
                  className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
