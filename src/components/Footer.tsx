'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-indigo-100/70 pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Manifesto Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col leading-[0.8] select-none outline-none self-start group">
              <span className="font-sans font-light text-2xl tracking-tighter text-slate-900 lowercase group-hover:text-purple-700 transition-colors">
                soch
              </span>
              <span className="font-sans font-extrabold text-2xl tracking-tighter text-slate-900 lowercase pl-7 group-hover:text-blue-600 transition-colors">
                yeah
              </span>
            </Link>
            
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
              <p className="text-xs uppercase tracking-widest font-bold text-slate-900">
                THINK IT. BUILD IT. SCALE IT.
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-[340px]">
              We turn strategic ideas ("soch") and engineering velocity ("yeah") into intelligent, production-ready software systems.
            </p>
          </div>

          {/* Capabilities Column (Blue Accent for Engineering) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600 font-mono text-[10px]">01 //</span> Services
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-600">
              <li><Link href="/ai-automation" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">AI & Automation</Link></li>
              <li><Link href="/software-development" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Software Engineering</Link></li>
              <li><Link href="/machine-learning" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">Machine Learning</Link></li>
              <li><Link href="/seo-growth" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">SEO & Growth Systems</Link></li>
              <li><Link href="/product-development" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Product Development</Link></li>
            </ul>
          </div>

          {/* Company Column (Purple Accent for Philosophy & Creed) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-purple-600 font-mono text-[10px]">02 //</span> Company
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-600">
              <li><Link href="/about" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">About Us</Link></li>
              <li><Link href="/process" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Our Process</Link></li>
              <li><Link href="/case-studies" className="hover:text-indigo-700 hover:translate-x-0.5 transition-all inline-block">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">Technical Journal</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Contact & Inquiries</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 SOCHYEAH. Built for ambitious enterprises and growing teams.</p>
          <div className="flex gap-6">
            <span className="text-[11px] text-slate-400">HQ: Hamirpur, HP & NCR, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
