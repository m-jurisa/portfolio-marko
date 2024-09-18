import React, { useState } from 'react';
import logo from '../images/logo.webp';
import { navLinks } from "../constants/index.js"; 

const NavItems = () => (
  <ul className="nav-ul">
    {navLinks.map(({ id, href, name }) => (
      <li key={id} className="nav-li">
        <a href={href} className="nav-li_a">
          {name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5">
          <img className="logo w-10 ml-4" src={logo} alt="Marko logo" />

          <button onClick={toggleMenu} className="sm:hidden hover:text-blue focus:outline-none flex">
            <img src={isOpen ? "assets/close.svg" : "/assets/menu.svg"} alt="Menu" className="w-6 h-6 m-4" />
          </button>

          <nav className="hidden md:flex space-x-4">
            <NavItems />
          </nav>
        </div>

        {isOpen && (
          <nav className="nav-sidebar max-h-screen ">
            <NavItems />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
