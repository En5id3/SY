'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the business constraints and problem.',
      desc: 'We audit operational workflows, check existing databases, locate process drag and pipeline leaks, and align on clear target outcome metrics.'
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      subtitle: 'Define the right technical and systems solution.',
      desc: 'We structure DB schemas, map API endpoints, outline LLM agents, choose cloud servers, and compile the 6-week MVP specifications list.'
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'Design, engineer and integrate.',
      desc: 'Our developer partners write clean TypeScript code, configure vector databases, inject schema markups, and build responsive client pages.'
    },
    {
      num: '04',
      title: 'LAUNCH',
      subtitle: 'Deploy into the real world.',
      desc: 'We publish layouts to Edge hosting, confirm data security permissions, check Core Web Vitals parameters, and ensure error alerting is live.'
    },
    {
      num: '05',
      title: 'OPTIMIZE',
      subtitle: 'Measure, improve and scale.',
      desc: 'We analyze event maps, optimize page conversions, scale search index signals, and continuously iterate features based on usage.'
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 self-start">
          PIPELINE METHODOLOGY
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          FROM FIRST CALL TO PRODUCTION.
        </h1>
        <p className="sub-editorial">
          We maintain a tight, structured execution roadmap to keep projects moving forward without meeting bloat or scope creep.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-purple-200/80 pl-8 ml-4 md:ml-8 flex flex-col gap-10 max-w-[840px] mx-auto py-4">
        {steps.map((item) => (
          <div key={item.num} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[41px] top-4 w-4 h-4 rounded-full bg-white border-2 border-purple-900 group-hover:bg-purple-900 group-hover:scale-125 transition-all duration-200 shadow-xs" />
            
            {/* Content Card */}
            <div className="border border-purple-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-sm shadow-purple-900/5 card-hover-effect">
              <span className="text-[10px] font-mono font-bold text-purple-800 uppercase tracking-widest bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/40">
                STAGE {item.num}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-1">{item.title}</h3>
              <p className="text-xs font-semibold text-purple-900 mb-3">{item.subtitle}</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white rounded-3xl p-10 md:p-16 text-center mt-24 shadow-xl shadow-purple-950/15 relative overflow-hidden">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Let's Start Building
          </h2>
          <p className="text-xs text-purple-200 leading-relaxed max-w-[450px]">
            Have a clear operational problem or a new SaaS product concept? Get direct alignment with our engineering partners.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-purple-950 hover:bg-purple-50 transition-all px-8 py-4 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            START AN MVP ROADMAP
          </Link>
        </div>
      </section>
    </div>
  );
}
