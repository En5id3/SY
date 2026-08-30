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
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Industries', href: '/industries' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
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
        ? 'bg-white/80 backdrop-blur-md border-border-light/80 py-4' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Typographic Stacked Logo */}
        <Link href="/" className="flex flex-col leading-[0.8] select-none outline-none" onClick={() => setIsOpen(false)}>
          <span className="font-sans font-light text-2xl tracking-tighter text-black lowercase">soch</span>
          <span className="font-sans font-extrabold text-2xl tracking-tighter text-black lowercase pl-7">yeah</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-black ${
                isActive(link.href) ? 'text-black font-semibold' : 'text-color-text-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Start Project CTA Button */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors px-6 py-3 rounded"
          >
            START A PROJECT
          </Link>
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
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-2 border-b border-neutral-100 ${
                  isActive(link.href) ? 'text-black font-semibold' : 'text-color-text-secondary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link 
            href="/contact" 
            className="w-full text-center text-sm font-bold uppercase tracking-wider bg-black text-white py-4 rounded"
            onClick={() => setIsOpen(false)}
          >
            START A PROJECT
          </Link>
        </div>
      )}
    </header>
  );
}
