import React from 'react';
import Link from 'next/link';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the business and problem.',
      desc: 'We audit operational workflows, check existing databases, locate process drag and pipeline leaks, and align on clear target outcome metrics.'
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      subtitle: 'Define the right technical and business solution.',
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
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">OUR PIPELINE METHOD</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          FROM FIRST CONVERSATION TO PRODUCTION.
        </h1>
        <p className="sub-editorial">
          We maintain a tight, structured execution roadmap to keep projects moving forward without meeting bloat or scope creep.
        </p>
      </div>

      {/* Vertical/Horizontal Process Timeline */}
      <div className="relative border-l border-black pl-8 ml-4 flex flex-col gap-12 max-w-[800px] mx-auto py-4">
        {steps.map((item) => (
          <div key={item.num} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-black group-hover:bg-black transition-colors duration-150" />
            
            {/* Content Card */}
            <div className="border border-border-light bg-white rounded-lg p-6 shadow-sm hover:border-black transition-colors duration-300">
              <span className="text-[10px] font-bold text-neutral-400 tracking-wider">STEP {item.num}</span>
              <h3 className="text-lg font-bold text-black mt-2 mb-1">{item.title}</h3>
              <p className="text-xs font-semibold text-color-text-secondary mb-3">{item.subtitle}</p>
              <p className="text-xs text-color-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <section className="bg-black text-white rounded-lg p-10 md:p-16 text-center mt-24">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter">
            Let's Start Building
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-[450px]">
            Have a clear operational problem or a new SaaS product concept? Get direct alignment with our engineering partners.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-8 py-4 rounded mt-4"
          >
            START AN MVP ROADMAP
          </Link>
        </div>
      </section>
    </div>
  );
}
