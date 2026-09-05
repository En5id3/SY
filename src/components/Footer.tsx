'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-indigo-100/70 pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Logo & Manifesto Column */}
          <div className="flex flex-col gap-5 md:col-span-1">
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

            <p className="text-xs text-slate-600 leading-relaxed max-w-[280px]">
              We turn strategic ideas (&quot;soch&quot;) and engineering velocity (&quot;yeah&quot;) into intelligent, production-ready AI and software systems.
            </p>

            <div className="flex flex-col gap-1 text-[11px] text-slate-600 border border-indigo-100/80 bg-slate-50/80 rounded-xl p-3 max-w-[280px]">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Govt. Registered MSME</span>
              </div>
              <p className="font-mono text-[10px] text-indigo-950 font-medium tracking-wide">
                UDYAM-HP-03-0017605
              </p>
            </div>
          </div>

          {/* AI & Cognitive Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-5 flex items-center gap-2">
              <span className="text-purple-600 font-mono text-[10px]">01 //</span> AI &amp; Automation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              <li><Link href="/services/ai-development" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">AI Development</Link></li>
              <li><Link href="/services/ai-agent-development" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">Autonomous AI Agents</Link></li>
              <li><Link href="/services/generative-ai" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">Generative AI Systems</Link></li>
              <li><Link href="/services/rag-development" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">RAG Knowledge Bases</Link></li>
              <li><Link href="/services/ai-chatbot-development" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">AI Chatbots &amp; Voice</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">Workflow Automation</Link></li>
            </ul>
          </div>

          {/* Engineering & Data Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-5 flex items-center gap-2">
              <span className="text-blue-600 font-mono text-[10px]">02 //</span> Engineering &amp; ML
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              <li><Link href="/services/software-development" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Custom Software</Link></li>
              <li><Link href="/services/saas-development" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">SaaS Engineering</Link></li>
              <li><Link href="/services/web-development" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Modern Web Platforms</Link></li>
              <li><Link href="/services/machine-learning" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Applied Machine Learning</Link></li>
              <li><Link href="/services/predictive-analytics" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Predictive Analytics</Link></li>
              <li><Link href="/services/seo" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Technical SEO &amp; Growth</Link></li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-5 flex items-center gap-2">
              <span className="text-indigo-600 font-mono text-[10px]">03 //</span> Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              <li><Link href="/services" className="hover:text-indigo-700 hover:translate-x-0.5 transition-all inline-block font-semibold text-slate-900">All Services Directory</Link></li>
              <li><Link href="/case-studies" className="hover:text-indigo-700 hover:translate-x-0.5 transition-all inline-block">Client Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">Technical Journal</Link></li>
              <li><Link href="/process" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Development Process</Link></li>
              <li><Link href="/industries" className="hover:text-indigo-700 hover:translate-x-0.5 transition-all inline-block">Industry Verticals</Link></li>
              <li><Link href="/about" className="hover:text-purple-700 hover:translate-x-0.5 transition-all inline-block">About SOCHYEAH</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 hover:translate-x-0.5 transition-all inline-block">Contact &amp; Inquiries</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>© 2026 SOCHYEAH. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-300">|</span>
            <p className="text-slate-600">
              Govt. MSME Reg: <span className="font-mono font-medium text-slate-800">UDYAM-HP-03-0017605</span>
            </p>
          </div>
          <div className="flex gap-6">
            <span className="text-[11px] text-slate-400">HQ: Hamirpur, HP &amp; NCR, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
