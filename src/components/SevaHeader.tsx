'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function SevaHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: 'https://www.sochyeah.com/services' },
    { label: 'Case Studies', href: 'https://www.sochyeah.com/case-studies' },
    { label: 'Process', href: 'https://www.sochyeah.com/process' },
    { label: 'Industries', href: 'https://www.sochyeah.com/industries' },
    { label: 'About', href: 'https://www.sochyeah.com/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md border-border-light/80 py-4' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Typographic Stacked Logo & Subdomain Badge */}
        <div className="flex items-center gap-3.5">
          <a 
            href="https://www.sochyeah.com" 
            className="flex flex-col leading-[0.8] select-none outline-none" 
            onClick={() => setIsOpen(false)}
          >
            <span className="font-sans font-light text-2xl tracking-tighter text-black lowercase">soch</span>
            <span className="font-sans font-extrabold text-2xl tracking-tighter text-black lowercase pl-7">yeah</span>
          </a>

          <div className="h-6 w-px bg-neutral-200 hidden sm:block mx-1" />

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black text-white tracking-widest uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SEVA
          </span>
        </div>

        {/* Desktop Links - Matching Homepage */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 text-color-text-secondary hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Start Project CTA Button - Matching Homepage */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://www.sochyeah.com/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors px-6 py-3 rounded"
          >
            START A PROJECT
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-black outline-none p-1" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[76px] bg-white z-40 md:hidden flex flex-col px-6 py-8 border-t border-border-light">
          <nav className="flex flex-col gap-6 text-xl font-medium mb-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors py-2 border-b border-neutral-100 text-color-text-secondary hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a 
            href="https://www.sochyeah.com/contact" 
            className="w-full text-center text-sm font-bold uppercase tracking-wider bg-black text-white py-4 rounded"
            onClick={() => setIsOpen(false)}
          >
            START A PROJECT
          </a>
        </div>
      )}
    </header>
  );
}
