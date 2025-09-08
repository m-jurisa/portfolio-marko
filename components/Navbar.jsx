"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

function getNav(locale) {
  if (locale === 'de') {
    return [
      { name: 'Start', href: '/de' },
      { name: 'Vollzeit', href: '/de/vollzeit' },
      { name: 'Freiberuflich', href: '/de/freiberuflich' },
      { name: 'Projekte', href: '/de/projekte' },
      { name: 'Angebot', href: '/de/angebot' },
      { name: 'Kontakt', href: '#contact' },
    ];
  }
  return [
    { name: 'Home', href: '/en' },
    { name: 'Projects', href: '/en/projects' },
    { name: 'Offerings', href: '/en/offerings' },
    { name: 'Contact', href: '#contact' },
  ];
}

const NavItems = ({ locale }) => {
  const pathname = usePathname();
  const items = getNav(locale);
  const homeHref = locale === 'de' ? '/de' : '/en';
  return (
    <ul className="nav-ul">
      {items.map(({ href, name }) => {
        const isHome = href === homeHref;
        const isActive = pathname === href || (!isHome && pathname.startsWith(href + '/'));
        return (
          <li key={href} className="nav-li">
            <a href={href} className={`nav-li_a nav-link ${isActive ? 'is-active' : ''}`}>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Navbar = ({ locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5">
          <img className="logo w-10 ml-4" src="/assets/logo.webp" alt="Marko logo" />

          <button onClick={toggleMenu} className="sm:hidden hover:text-blue-500 focus:outline-none flex">
            <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="hidden md:flex space-x-4 items-center gap-4">
            <NavItems locale={locale} />
            <a href={locale === 'de' ? '/en' : '/de'} className="px-3 py-1 rounded bg-black/30 text-white hover:bg-black/50">
              {locale === 'de' ? 'EN' : 'DE'}
            </a>
          </nav>
        </div>

        {isOpen && (
          <nav className="nav-sidebar max-h-screen ">
            <NavItems locale={locale} />
            <div className="p-4">
              <a href={locale === 'de' ? '/en' : '/de'} className="px-3 py-1 rounded bg-black/30 text-white hover:bg-black/50">
                {locale === 'de' ? 'EN' : 'DE'}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
