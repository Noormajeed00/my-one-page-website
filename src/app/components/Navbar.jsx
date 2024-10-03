"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full h-16 flex items-center justify-between px-6 md:px-24 z-50 bg-gradient-to-r from-blue-900 to-blue-700 bg-opacity-80">
      {/* Logo */}
      <div className="text-white text-2xl font-bold cursor-pointer">
        Navbar
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-white">
        <li><Link href="/home" className="hover:text-orange-400 transition duration-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-orange-400 transition duration-300">About</Link></li>
        <li><Link href="/services" className="hover:text-orange-400 transition duration-300">Services</Link></li>
        <li><Link href="/contact" className="hover:text-orange-400 transition duration-300">Contact</Link></li>
      </ul>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Mobile Menu */}
      <ul className={`absolute top-16 right-0 w-full bg-blue-900 text-white text-center space-y-6 py-8 md:hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <li><Link href="/home" className="hover:text-orange-400 transition duration-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-orange-400 transition duration-300">About</Link></li>
        <li><Link href="/services" className="hover:text-orange-400 transition duration-300">Services</Link></li>
        <li><Link href="/contact" className="hover:text-orange-400 transition duration-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
