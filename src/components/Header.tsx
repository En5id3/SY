'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Process', href: '/process' },
    { label: 'Industries', href: '/industries' },
    { label: 'About', href: '/about' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white/85 backdrop-blur-md border-indigo-100/70 shadow-xs py-3.5' 
        : 'bg-white/60 backdrop-blur-sm border-transparent py-5'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Typographic Stacked Logo with Purple (Soch) & Blue (Yeah) Dual Accents */}
        <Link href="/" className="flex flex-col leading-[0.8] select-none outline-none group" onClick={() => setIsOpen(false)}>
          <span className="font-sans font-light text-2xl tracking-tighter text-slate-900 lowercase group-hover:text-purple-700 transition-colors">
            soch
          </span>
          <span className="font-sans font-extrabold text-2xl tracking-tighter text-slate-900 lowercase pl-7 group-hover:text-blue-600 transition-colors">
            yeah
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.href) 
                  ? 'text-indigo-900 font-bold' 
                  : 'text-slate-600 hover:text-indigo-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Start Project Dual-Tone CTA Button */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white hover:from-purple-950 hover:via-indigo-950 hover:to-blue-950 transition-all px-6 py-2.5 rounded-full shadow-sm shadow-indigo-950/20 hover:shadow-md hover:scale-[1.02]"
          >
            START A PROJECT
          </Link>
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
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-2.5 border-b border-indigo-50/80 flex items-center justify-between ${
                  isActive(link.href) 
                    ? 'text-indigo-900 font-bold' 
                    : 'text-slate-600 hover:text-indigo-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />}
              </Link>
            ))}
          </nav>
          <Link 
            href="/contact" 
            className="w-full text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-3.5 rounded-full shadow-sm shadow-indigo-950/20"
            onClick={() => setIsOpen(false)}
          >
            START A PROJECT
          </Link>
        </div>
      )}
    </header>
  );
}
