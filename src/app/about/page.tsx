'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 self-start">
          OUR CREED & PHILOSOPHY
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          WE BUILD TECHNOLOGY WITH PURPOSE.
        </h1>
        <p className="sub-editorial text-purple-950 font-medium">
          "We are a software and AI technology company helping ambitious businesses turn ideas, operational data, and complex challenges into intelligent digital systems."
        </p>
      </div>

      {/* 2. Three Principles Grid */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-12">
          <span className="text-[10px] font-mono font-bold text-purple-800 uppercase tracking-wider block mb-1">
            Core Parameters
          </span>
          <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            Our Operating Creed
          </h2>
          <p className="text-xs text-slate-500 mt-1">The principles guiding how our strategist-builders map and engineer systems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((pr) => (
            <div 
              key={pr.num} 
              className="border border-purple-100/80 bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-xs card-hover-effect"
            >
              <span className="text-xs font-mono font-bold text-purple-800">
                {pr.num} // {pr.title}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pr.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Deep-Dive Story and Approach */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-purple-100/70 pt-20">
        <div className="border border-purple-100/80 bg-white rounded-2xl p-8 md:p-10 shadow-sm shadow-purple-900/5 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light text-slate-900 lowercase">soch</span>
            <span className="text-2xl font-extrabold text-slate-900 lowercase">yeah</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our company is built on two disciplines that work in unison to transform ideas into live production infrastructure:
          </p>
          <div className="border-l-2 border-purple-600 pl-4 py-1 flex flex-col gap-1">
            <strong className="text-xs font-bold text-purple-950">SOCH (Thinking & Architecture):</strong>
            <p className="text-xs text-slate-600">Strategic analysis, schema modeling, opportunity mapping, and user UX pathways. We audit value chains first.</p>
          </div>
          <div className="border-l-2 border-purple-900 pl-4 py-1 flex flex-col gap-1">
            <strong className="text-xs font-bold text-purple-950">YEAH (Execution & Shipping):</strong>
            <p className="text-xs text-slate-600">Modular frontend development, API microservices, model tuning, and edge deployment. We build with velocity and verify metrics.</p>
          </div>
        </div>

        <div className="bg-purple-50/25 border border-purple-100/60 rounded-2xl p-8 md:p-10 flex flex-col justify-center gap-4">
          <h4 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider">Our Delivery Standard</h4>
          <p className="text-xs text-slate-700 leading-relaxed">
            We reject the traditional low-cost IT outsourcing model. We do not build bloated specifications blindly. We partner with ambitious organizations to discover strategic opportunities, execute cleanly, and build sustainable growth loops.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider text-purple-900 hover:text-purple-700 inline-flex items-center gap-1.5 transition-colors mt-2"
          >
            <span>Start a project with our team</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
