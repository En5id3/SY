import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Manifesto Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col leading-[0.8] select-none outline-none self-start">
              <span className="font-sans font-light text-2xl tracking-tighter text-black lowercase">soch</span>
              <span className="font-sans font-extrabold text-2xl tracking-tighter text-black lowercase pl-7">yeah</span>
            </Link>
            <p className="text-sm uppercase tracking-widest font-bold text-neutral-400">
              THINK IT.<br />BUILD IT.<br />SCALE IT.
            </p>
            <p className="text-xs text-color-text-secondary leading-relaxed">
              We turn ideas, data and business problems into intelligent digital systems.
            </p>
          </div>

          {/* Capabilities Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-6">Services</h4>
            <ul className="flex flex-col gap-3 text-xs text-color-text-secondary">
              <li><Link href="/ai-automation" className="hover:text-black transition-colors">AI & Automation</Link></li>
              <li><Link href="/software-development" className="hover:text-black transition-colors">Software Engineering</Link></li>
              <li><Link href="/machine-learning" className="hover:text-black transition-colors">Machine Learning</Link></li>
              <li><Link href="/seo-growth" className="hover:text-black transition-colors">SEO & Growth</Link></li>
              <li><Link href="/product-development" className="hover:text-black transition-colors">Product Development</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-xs text-color-text-secondary">
              <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/process" className="hover:text-black transition-colors">Our Process</Link></li>
              <li><Link href="/case-studies" className="hover:text-black transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-color-text-muted">
          <p>© 2026 SOCHYEAH. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
