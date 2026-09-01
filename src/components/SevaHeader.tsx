'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface SevaHeaderProps {
  selectedCat?: 'all' | 'business' | 'health' | 'energy' | 'agriculture';
  onSelectCat?: (cat: 'all' | 'business' | 'health' | 'energy' | 'agriculture') => void;
}

export default function SevaHeader({ selectedCat = 'all', onSelectCat }: SevaHeaderProps) {
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

  const navCategories: { label: string; cat: 'all' | 'business' | 'health' | 'energy' | 'agriculture' }[] = [
    { label: 'All Schemes', cat: 'all' },
    { label: 'Business & MSME', cat: 'business' },
    { label: 'Healthcare', cat: 'health' },
    { label: 'Solar & Energy', cat: 'energy' },
    { label: 'Agriculture', cat: 'agriculture' },
  ];

  const handleCategoryClick = (cat: 'all' | 'business' | 'health' | 'energy' | 'agriculture') => {
    if (onSelectCat) {
      onSelectCat(cat);
    }
    const element = document.getElementById('schemes-directory');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-border-light shadow-sm py-3.5' 
        : 'bg-white/70 backdrop-blur-sm border-border-light/60 py-5'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        
        {/* Left: Typographic Stacked Logo & Subdomain Badge */}
        <div className="flex items-center gap-3.5">
          <a 
            href="https://www.sochyeah.com" 
            className="flex flex-col leading-[0.8] select-none outline-none group"
            title="Return to sochyeah.com homepage"
          >
            <span className="font-sans font-light text-2xl tracking-tighter text-black lowercase group-hover:text-neutral-600 transition-colors">
              soch
            </span>
            <span className="font-sans font-extrabold text-2xl tracking-tighter text-black lowercase pl-7 group-hover:text-neutral-600 transition-colors">
              yeah
            </span>
          </a>

          <div className="h-6 w-px bg-neutral-200 hidden sm:block mx-1" />

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black text-white tracking-widest uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SEVA
          </span>
        </div>

        {/* Center: Desktop Scheme Category Filters */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-neutral-100/80 p-1 rounded-lg border border-neutral-200/60">
          {navCategories.map((item) => {
            const isActive = selectedCat === item.cat;
            return (
              <button
                key={item.cat}
                onClick={() => handleCategoryClick(item.cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive 
                    ? 'bg-white text-black shadow-xs font-bold' 
                    : 'text-neutral-500 hover:text-black hover:bg-white/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.sochyeah.com"
            className="text-xs font-medium text-neutral-500 hover:text-black transition-colors flex items-center gap-1 px-3 py-2"
          >
            <span>sochyeah.com</span>
            <ArrowUpRight size={14} />
          </a>

          <a 
            href="https://sochyeah.com/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors px-5 py-2.5 rounded shadow-sm"
          >
            Request Assistance
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-black outline-none p-1.5 rounded hover:bg-neutral-100 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-40 md:hidden flex flex-col px-6 py-6 border-t border-border-light overflow-y-auto">
          <div className="flex flex-col gap-1 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Browse Government Categories
            </span>
            {navCategories.map((item) => (
              <button
                key={item.cat}
                onClick={() => handleCategoryClick(item.cat)}
                className={`text-left text-sm font-semibold py-3 px-3 rounded-md transition-colors flex items-center justify-between ${
                  selectedCat === item.cat 
                    ? 'bg-neutral-100 text-black font-bold' 
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                <span>{item.label}</span>
                {selectedCat === item.cat && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
              </button>
            ))}
          </div>

          <div className="border-t border-neutral-100 pt-6 flex flex-col gap-3 mt-auto">
            <a 
              href="https://sochyeah.com/contact" 
              className="w-full text-center text-xs font-bold uppercase tracking-wider bg-black text-white py-3.5 rounded shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Request Assistance
            </a>
            <a 
              href="https://www.sochyeah.com" 
              className="w-full text-center text-xs font-medium text-neutral-500 hover:text-black py-2.5 flex items-center justify-center gap-1.5"
              onClick={() => setIsOpen(false)}
            >
              <span>Back to sochyeah.com</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
