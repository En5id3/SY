import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Our Studio & Engineering Creed",
  description: "Learn about SOCHYEAH: combining deep strategic thinking (soch) and rapid engineering velocity (yeah) to build production AI and software systems.",
  alternates: {
    canonical: "https://www.sochyeah.com/about",
  },
  openGraph: {
    title: "About Our Studio & Engineering Creed | SOCHYEAH",
    description: "Learn about SOCHYEAH: combining deep strategic thinking (soch) and rapid engineering velocity (yeah) to build production AI and software systems.",
    url: "https://www.sochyeah.com/about",
    siteName: "SOCHYEAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Studio & Engineering Creed | SOCHYEAH",
    description: "Learn about SOCHYEAH: combining deep strategic thinking (soch) and rapid engineering velocity (yeah) to build production AI and software systems.",
  }
};

export default function About() {
  const principles = [
    {
      num: '01',
      title: 'THINK DEEPLY',
      color: 'text-purple-700',
      badgeClass: 'text-purple-800 bg-purple-50 border-purple-200/50',
      desc: 'Understand the business problem, target audience constraints, and data structure parameters before writing any code.'
    },
    {
      num: '02',
      title: 'BUILD SIMPLY',
      color: 'text-blue-600',
      badgeClass: 'text-blue-800 bg-blue-50 border-blue-200/50',
      desc: 'Keep code modular, avoid technical debt, and ensure that complex technical backend pipelines feel intuitive and simple to use.'
    },
    {
      num: '03',
      title: 'MEASURE EVERYTHING',
      color: 'text-indigo-600',
      badgeClass: 'text-indigo-800 bg-indigo-50 border-indigo-200/50',
      desc: 'Verify success by tracking tangible outcomes: operational hours saved, database latency reduced, and qualified leads scaled.'
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start">
          OUR CREED &amp; PHILOSOPHY
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          WE BUILD TECHNOLOGY WITH PURPOSE.
        </h1>
        <p className="sub-editorial text-slate-900 font-medium">
          &quot;We are a software and AI technology company helping ambitious businesses turn ideas, operational data, and complex challenges into intelligent digital systems.&quot;
        </p>
      </div>

      {/* 2. Three Principles Grid */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-12">
          <span className="text-[10px] font-mono font-bold text-indigo-800 uppercase tracking-wider block mb-1">
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
              className="border border-indigo-100/80 bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-xs card-hover-effect"
            >
              <span className={`text-xs font-mono font-bold ${pr.color}`}>
                {pr.num} {'//'} {pr.title}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pr.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Deep-Dive Story and Approach: SOCH (Purple) + YEAH (Blue) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-indigo-100/70 pt-20">
        <div className="border border-indigo-100/80 bg-white rounded-2xl p-8 md:p-10 shadow-sm shadow-indigo-900/5 flex flex-col gap-5">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-light text-purple-700 lowercase">soch</span>
            <span className="text-2xl font-extrabold text-blue-600 lowercase pl-2">+ yeah</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our company is built on two disciplines that work in unison to transform ideas into live production infrastructure:
          </p>
          
          {/* Purple Block for SOCH */}
          <div className="border-l-3 border-purple-600 pl-4 py-1 flex flex-col gap-1 bg-purple-50/20 rounded-r-xl p-3">
            <strong className="text-xs font-bold text-purple-950">SOCH (Thinking, Strategy &amp; Cognition):</strong>
            <p className="text-xs text-slate-600 leading-relaxed">Strategic analysis, schema modeling, opportunity mapping, and user UX pathways. We audit value chains first.</p>
          </div>

          {/* Blue Block for YEAH */}
          <div className="border-l-3 border-blue-600 pl-4 py-1 flex flex-col gap-1 bg-blue-50/20 rounded-r-xl p-3">
            <strong className="text-xs font-bold text-blue-950">YEAH (Execution, Engineering &amp; Velocity):</strong>
            <p className="text-xs text-slate-600 leading-relaxed">Modular frontend development, API microservices, model tuning, and edge deployment. We build with velocity and verify metrics.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50/25 via-indigo-50/25 to-blue-50/30 border border-indigo-100/60 rounded-2xl p-8 md:p-10 flex flex-col justify-center gap-4">
          <h4 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider">Our Delivery Standard</h4>
          <p className="text-xs text-slate-700 leading-relaxed">
            We reject the traditional low-cost IT outsourcing model. We do not build bloated specifications blindly. We partner with ambitious organizations to discover strategic opportunities, execute cleanly, and build sustainable growth loops.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700 inline-flex items-center gap-1.5 transition-colors mt-2"
          >
            <span>Start a project with our team</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* 4. Enterprise Credentials & Udyam Registration */}
      <section className="mt-20 border-t border-indigo-100/70 pt-16">
        <div className="border border-indigo-100/90 bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/20 rounded-3xl p-8 md:p-10 shadow-sm shadow-indigo-900/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-700 flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-900 bg-indigo-100/60 px-2.5 py-0.5 rounded-full border border-indigo-200">
                  Government Registered Enterprise
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified MSME
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Ministry of Micro, Small &amp; Medium Enterprises (MSME), Govt. of India
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-[620px]">
                SOCHYEAH is officially registered under the Udyam Registration portal, affirming our commitment to structured governance, engineering reliability, and transparent business operations.
              </p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-xs border border-indigo-100/90 rounded-2xl px-6 py-5 flex flex-col gap-1.5 shadow-xs flex-shrink-0 w-full lg:w-auto">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              Udyam Registration Number
            </span>
            <span className="font-mono text-base md:text-lg font-bold text-indigo-950 tracking-wider select-all">
              UDYAM-HP-03-0017605
            </span>
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>Himachal Pradesh, India</span>
              <span className="text-emerald-600 font-medium font-mono text-[10px]">Active &amp; Valid</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
