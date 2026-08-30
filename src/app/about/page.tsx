import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const principles = [
    {
      num: '01',
      title: 'THINK DEEPLY',
      desc: 'Understand the business problem, target audience constraints, and data structure parameters before writing any code.'
    },
    {
      num: '02',
      title: 'BUILD SIMPLY',
      desc: 'Keep code modular, avoid technical debt, and ensure that complex technical backend pipelines feel intuitive and simple to use.'
    },
    {
      num: '03',
      title: 'MEASURE EVERYTHING',
      desc: 'Verify success by tracking tangible outcomes: operational hours saved, database latency reduced, and qualified leads scaled.'
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">OUR PHILOSOPHY</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          WE BUILD TECHNOLOGY WITH A REASON.
        </h1>
        <p className="text-lg text-color-text-secondary leading-relaxed font-semibold">
          "We are a software and AI company helping businesses turn ideas, data and repetitive processes into intelligent digital systems."
        </p>
      </div>

      {/* 2. Three Principles Grid */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-black uppercase tracking-wider mb-2">Our Operating Creed</h2>
          <p className="text-xs text-color-text-secondary">The core parameters guiding how our strategist-builders map and engineer systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((pr) => (
            <div key={pr.num} className="border-t border-black pt-6 flex flex-col gap-3">
              <span className="text-xs font-bold text-black">{pr.num} // {pr.title}</span>
              <p className="text-xs text-color-text-secondary leading-relaxed">
                {pr.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Deep-Dive Story and Approach */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-light pt-20">
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-black uppercase tracking-wider">soch + yeah</h3>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            Our company is divided into two distinct disciplines that translate strategies into live systems:
          </p>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            <strong>SOCH (Thinking):</strong> Strategic analysis, schema modeling, opportunity mapping, and user UX pathways. We map the value chains first.
          </p>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            <strong>YEAH (Execution):</strong> Modular development, API integrations, model deployments, and Edge speed tuning. We code with speed and verify metrics.
          </p>
        </div>

        <div className="bg-neutral-50 border border-border-light rounded-lg p-8 flex flex-col justify-center">
          <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-4">Our Standard</h4>
          <p className="text-xs text-color-text-secondary leading-relaxed mb-4">
            We reject the traditional low-cost IT outsourcing model. We do not build bloated specifications blindly. We partner with ambitious organizations to discover strategic opportunities, execute cleanly, and build sustainable growth loops.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider text-black flex items-center hover:gap-2 transition-all duration-200"
          >
            Start a project with us <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
