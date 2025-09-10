"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/* --- Data -------------------------------------------------------------- */
function getNav(locale) {
  if (locale === "de") {
    return [
      { name: "Start", href: "/de" },
      { name: "Vollzeit", href: "/de/vollzeit" },
      { name: "Freiberuflich", href: "/de/freiberuflich" },
      { name: "Projekte", href: "/de/projekte" },
      { name: "Angebot", href: "/de/angebot" },
      { name: "Kontakt", href: "#contact" },
    ];
  }
  return [
    { name: "Home", href: "/en" },
    { name: "Projects", href: "/en/projects" },
    { name: "Offerings", href: "/en/offerings" },
    { name: "Contact", href: "#contact" },
  ];
}

/* --- Subcomponents ----------------------------------------------------- */
function NavItems({ locale, mobile = false, onNavigate }) {
  const pathname = usePathname();
  const items = getNav(locale);
  const homeHref = locale === "de" ? "/de" : "/en";

  const listClass = mobile
    ? "flex flex-col gap-5 p-4"
    : "nav-ul"; // your desktop style

  return (
    <ul className={listClass}>
      {items.map(({ href, name }) => {
        const isHome = href === homeHref;
        const isActive =
          pathname === href || (!isHome && pathname?.startsWith(href + "/"));
        const linkClass = mobile
          ? `nav-link ${isActive ? "is-active" : ""} text-white/90`
          : `nav-li_a nav-link ${isActive ? "is-active" : ""}`;

        return (
          <li key={href} className={mobile ? "" : "nav-li"}>
            <a
              href={href}
              className={linkClass}
              onClick={onNavigate}
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* --- Main -------------------------------------------------------------- */
export default function Navbar({ locale = "de" }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  // Close on route change
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close on ESC, lock body scroll while open
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e) => e.key === "Escape" && closeMenu();
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", onKey);
    } else {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const langHref = locale === "de" ? "/en" : "/de";
  const langLabel = locale === "de" ? "EN" : "DE";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex items-center justify-between py-4 px-[max(env(safe-area-inset-left),1rem)]
                      pr-[max(env(safe-area-inset-right),1rem)]"
        >
          {/* Logo */}
          <a href={locale === "de" ? "/de" : "/en"} aria-label="Home" className="flex items-center">
            <img className="logo w-9 sm:w-10" src="/assets/logo.webp" alt="Marko logo" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4">
            <NavItems locale={locale} />
            <a
              href={langHref}
              className="px-3 py-1 rounded bg-black/30 text-white hover:bg-black/50 border border-white/10"
              aria-label={`Switch to ${langLabel}`}
            >
              {langLabel}
            </a>
          </nav>

          {/* Mobile controls: language + burger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={langHref}
              className="px-2.5 py-1 rounded bg-black/40 text-white text-xs border border-white/10"
              aria-label={`Switch to ${langLabel}`}
            >
              {langLabel}
            </a>

        <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="relative inline-flex items-center justify-center w-9 h-9 rounded-md bg-black/30 border border-white/10 md:hidden"
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              
              {/* top bar */}
              <span
                className={`absolute left-2 right-2 h-[2px] rounded bg-white transition-transform duration-200
                  ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-2.5"}
                `}
              />
              {/* middle bar */}
              <span
                className={`absolute left-2 right-2 h-[2px] rounded bg-white transition-opacity duration-200
                  top-1/2 -translate-y-1/2 ${isOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              {/* bottom bar */}
              <span
                className={`absolute left-2 right-2 h-[2px] rounded bg-white transition-transform duration-200
                  ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-2.5"}
                `}
              />
            </button>

          </div>
        </div>
      </div>

      {/* Mobile drawer + backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-[opacity] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <nav
        id="mobile-menu"
        ref={panelRef}
        className={`
          md:hidden fixed top-0 left-0 right-0 z-50
          bg-black/80 backdrop-blur-md border-b border-white/10
          px-[max(env(safe-area-inset-left),1rem)] pr-[max(env(safe-area-inset-right),1rem)]
          pt-16 pb-6
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        <NavItems locale={locale} mobile onNavigate={closeMenu} />
      </nav>
    </header>
  );
}
