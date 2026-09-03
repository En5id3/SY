import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Engineering Process & Roadmap",
  description: "Explore SOCHYEAH's 5-stage development roadmap: from discovery (soch) to rapid engineering and edge deployment (yeah) in 6-week production sprints.",
  alternates: {
    canonical: "https://www.sochyeah.com/process",
  },
  openGraph: {
    title: "Our Engineering Process & Roadmap | SOCHYEAH",
    description: "Explore SOCHYEAH's 5-stage development roadmap: from discovery (soch) to rapid engineering and edge deployment (yeah) in 6-week production sprints.",
    url: "https://www.sochyeah.com/process",
    siteName: "SOCHYEAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Engineering Process & Roadmap | SOCHYEAH",
    description: "Explore SOCHYEAH's 5-stage development roadmap: from discovery (soch) to rapid engineering and edge deployment (yeah) in 6-week production sprints.",
  }
};

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the business constraints and problem.',
      theme: 'purple',
      badgeClass: 'text-purple-800 bg-purple-50 border-purple-200/40',
      dotClass: 'border-purple-700 group-hover:bg-purple-700',
      desc: 'We audit operational workflows, check existing databases, locate process drag and pipeline leaks, and align on clear target outcome metrics.'
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      subtitle: 'Define the right technical and systems solution.',
      theme: 'purple',
      badgeClass: 'text-purple-800 bg-purple-50 border-purple-200/40',
      dotClass: 'border-purple-600 group-hover:bg-purple-600',
      desc: 'We structure DB schemas, map API endpoints, outline LLM agents, choose cloud servers, and compile the 6-week MVP specifications list.'
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'Design, engineer and integrate.',
      theme: 'indigo',
      badgeClass: 'text-indigo-800 bg-indigo-50 border-indigo-200/40',
      dotClass: 'border-indigo-600 group-hover:bg-indigo-600',
      desc: 'Our developer partners write clean TypeScript code, configure vector databases, inject schema markups, and build responsive client pages.'
    },
    {
      num: '04',
      title: 'LAUNCH',
      subtitle: 'Deploy into the real world.',
      theme: 'blue',
      badgeClass: 'text-blue-800 bg-blue-50 border-blue-200/40',
      dotClass: 'border-blue-600 group-hover:bg-blue-600',
      desc: 'We publish layouts to Edge hosting, confirm data security permissions, check Core Web Vitals parameters, and ensure error alerting is live.'
    },
    {
      num: '05',
      title: 'OPTIMIZE',
      subtitle: 'Measure, improve and scale.',
      theme: 'blue',
      badgeClass: 'text-blue-800 bg-blue-50 border-blue-200/40',
      dotClass: 'border-blue-700 group-hover:bg-blue-700',
      desc: 'We analyze event maps, optimize page conversions, scale search index signals, and continuously iterate features based on usage.'
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start">
          PIPELINE METHODOLOGY
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          FROM FIRST CALL TO PRODUCTION.
        </h1>
        <p className="sub-editorial">
          We maintain a tight, structured execution roadmap transitioning from strategic analysis (&quot;soch&quot;) to rapid engineering shipping (&quot;yeah&quot;).
        </p>
      </div>

      {/* Vertical Timeline with Dual Gradient Line */}
      <div className="relative border-l-2 border-indigo-200/80 pl-8 ml-4 md:ml-8 flex flex-col gap-10 max-w-[840px] mx-auto py-4">
        {steps.map((item) => (
          <div key={item.num} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className={`absolute -left-[41px] top-4 w-4 h-4 rounded-full bg-white border-2 ${item.dotClass} group-hover:scale-125 transition-all duration-200 shadow-xs`} />
            
            {/* Content Card */}
            <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-sm shadow-indigo-900/5 card-hover-effect">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${item.badgeClass}`}>
                STAGE {item.num}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-1">{item.title}</h3>
              <p className="text-xs font-semibold text-slate-700 mb-3">{item.subtitle}</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-10 md:p-16 text-center mt-24 shadow-xl shadow-indigo-950/15 relative overflow-hidden">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Let&apos;s Start Building
          </h2>
          <p className="text-xs text-indigo-200 leading-relaxed max-w-[450px]">
            Have a clear operational problem or a new SaaS product concept? Get direct alignment with our engineering partners.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-4 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            START AN MVP ROADMAP
          </Link>
        </div>
      </section>
    </div>
  );
}
