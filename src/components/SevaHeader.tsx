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
        ? 'bg-white/85 backdrop-blur-md border-indigo-100/70 shadow-xs py-3.5' 
        : 'bg-white/60 backdrop-blur-sm border-transparent py-5'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Typographic Stacked Logo & Subdomain Badge */}
        <div className="flex items-center gap-3.5">
          <a 
            href="https://www.sochyeah.com" 
            className="flex flex-col leading-[0.8] select-none outline-none group" 
            onClick={() => setIsOpen(false)}
          >
            <span className="font-sans font-light text-2xl tracking-tighter text-slate-900 lowercase group-hover:text-purple-700 transition-colors">
              soch
            </span>
            <span className="font-sans font-extrabold text-2xl tracking-tighter text-slate-900 lowercase pl-7 group-hover:text-blue-600 transition-colors">
              yeah
            </span>
          </a>

          <div className="h-5 w-px bg-indigo-200/80 hidden sm:block mx-0.5" />

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gradient-to-r from-purple-900 to-blue-900 text-white tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SEVA
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 text-slate-600 hover:text-indigo-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Start Project Dual-Tone CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="https://www.sochyeah.com/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white hover:from-purple-950 hover:via-indigo-950 hover:to-blue-950 transition-all px-6 py-2.5 rounded-full shadow-sm shadow-indigo-950/20 hover:shadow-md hover:scale-[1.02]"
          >
            START A PROJECT
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-slate-900 outline-none p-1.5 rounded-lg hover:bg-indigo-50 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} className="text-indigo-900" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] bg-white/95 backdrop-blur-lg z-40 md:hidden flex flex-col px-6 py-8 border-t border-indigo-100/70">
          <nav className="flex flex-col gap-5 text-lg font-medium mb-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors py-2.5 border-b border-indigo-50/80 text-slate-600 hover:text-indigo-900"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a 
            href="https://www.sochyeah.com/contact" 
            className="w-full text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-3.5 rounded-full shadow-sm shadow-indigo-950/20"
            onClick={() => setIsOpen(false)}
          >
            START A PROJECT
          </a>
        </div>
      )}
    </header>
  );
}
