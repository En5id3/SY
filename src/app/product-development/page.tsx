'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Search, Eye, Rocket, Play, Activity } from 'lucide-react';

export default function ProductDevelopment() {
  const serviceList = [
    'Product Strategy', 'UX/UI Design', 'MVP Development', 
    'SaaS Development', 'Mobile Apps', 'AI Product Development', 
    'API Development', 'Cloud Deployment', 'Analytics', 'Product Optimization'
  ];

  const steps = [
    { step: 'IDEA', desc: 'Identify target user opportunities and formulate hypotheses.', icon: <Lightbulb className="w-5 h-5 text-purple-700" /> },
    { step: 'DISCOVERY', desc: 'Perform competitor analysis, check user stories, and map DB models.', icon: <Search className="w-5 h-5 text-purple-700" /> },
    { step: 'PROTOTYPE', desc: 'Create interactive click-through layout wires for feedback loops.', icon: <Eye className="w-5 h-5 text-purple-700" /> },
    { step: 'MVP', desc: 'Execute a tight, 6-week engineering sprint for core value functions.', icon: <Play className="w-5 h-5 text-purple-700" /> },
    { step: 'LAUNCH', desc: 'Configure cloud server auto-scaling and deploy production code.', icon: <Rocket className="w-5 h-5 text-purple-700" /> },
    { step: 'SCALE', desc: 'Integrate usage event analytics and execute iterative sprints.', icon: <Activity className="w-5 h-5 text-purple-700" /> }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 self-start">
          VENTURE & PRODUCT ENGINEERING
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          FROM IDEA TO PRODUCT.
        </h1>
        <p className="sub-editorial text-purple-950 font-medium">
          "Turn raw requirements into production-ready SaaS platforms in 6-week structured sprints."
        </p>
        <p className="sub-editorial">
          We help ambitious teams turn ideas and business requirements into structured web applications, SaaS platforms, and mobile layouts. We prioritize validation and clean user stories over multi-month bloated schedules.
        </p>
      </div>

      {/* 2. Process Timeline Grid */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
            01 // DEVELOPMENT BLUEPRINT
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            THE VENTURE FRAMEWORK.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            A step-by-step roadmap designed to validate concepts quickly and scale systems safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5">
          {steps.map((item, idx) => (
            <div key={idx} className="border border-purple-100/80 bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm shadow-purple-900/5 min-h-[170px] card-hover-effect">
              <div>
                <div className="p-2.5 bg-purple-50/60 rounded-xl border border-purple-100 self-start mb-4 w-max">
                  {item.icon}
                </div>
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">{item.step}</div>
              </div>
              <p className="text-[10px] text-slate-500 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Capabilities Checklist Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-purple-100/70 pt-20">
        <div className="border border-purple-100/80 bg-white rounded-2xl p-8 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider">Product Scope Directory</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            By avoiding custom code structures for standard features (like checkout tiers or user logins), we focus all coding sprints on your core, high-leverage product values.
          </p>
        </div>

        <div className="bg-purple-50/25 border border-purple-100/60 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-3.5">
            {serviceList.map((svc, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <span className="text-purple-600 font-bold">•</span>
                <span>{svc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white rounded-3xl p-10 md:p-16 text-center mt-24 shadow-xl shadow-purple-950/15 relative overflow-hidden">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Build My Product
          </h2>
          <p className="text-xs text-purple-200 leading-relaxed max-w-[450px]">
            Ready to structure user stories, click layout wires, or start a 6-week MVP engineering cycle? Let's plan your roadmap.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-purple-950 hover:bg-purple-50 transition-all px-8 py-4 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            START AN MVP SCOPING
          </Link>
        </div>
      </section>
    </div>
  );
}
