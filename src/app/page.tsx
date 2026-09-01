'use client';

import React from 'react';
import Link from 'next/link';
import HeroFlow from '@/components/HeroFlow';
import Ticker from '@/components/Ticker';
import AIDemo from '@/components/AIDemo';
import { caseStudies } from '@/data/case-studies';
import { ArrowRight, Sparkles, Code, Cpu, Activity, Search, ShieldCheck } from 'lucide-react';

export default function Home() {
  // Pull top 3 case studies for preview
  const featuredCases = caseStudies.slice(0, 3);

  const services = [
    {
      num: '01',
      title: 'AI & Generative AI',
      desc: 'Build AI assistants, custom AI agents, RAG systems, copilots, document intelligence, and automated reasoning workflows.',
      href: '/ai-automation',
      icon: <Sparkles className="w-5 h-5 text-purple-700 group-hover:text-white transition-colors" />
    },
    {
      num: '02',
      title: 'Software Engineering',
      desc: 'Build scalable web applications, mobile applications, SaaS platforms, custom operations dashboards, and secure backend APIs.',
      href: '/software-development',
      icon: <Code className="w-5 h-5 text-purple-700 group-hover:text-white transition-colors" />
    },
    {
      num: '03',
      title: 'Machine Learning',
      desc: 'Build predictive analytics models, recommendation engines, forecasting systems, classification models, and custom ML APIs.',
      href: '/machine-learning',
      icon: <Cpu className="w-5 h-5 text-purple-700 group-hover:text-white transition-colors" />
    },
    {
      num: '04',
      title: 'AI Automation',
      desc: 'Automate repetitive workflows, connect fragmented application layers, and coordinate active digital agents across platforms.',
      href: '/ai-automation',
      icon: <Activity className="w-5 h-5 text-purple-700 group-hover:text-white transition-colors" />
    },
    {
      num: '05',
      title: 'SEO & Digital Growth',
      desc: 'Technical SEO, topic clusters, database-driven programmatic SEO systems, conversion audits, and AI engine search visibility.',
      href: '/seo-growth',
      icon: <Search className="w-5 h-5 text-purple-700 group-hover:text-white transition-colors" />
    },
    {
      num: '06',
      title: 'Product Development',
      desc: 'Turn a raw idea into a validated click prototype, build a minimum viable product (MVP), launch, gather analytics, and scale.',
      href: '/product-development',
      icon: <ShieldCheck className="w-5 h-5 text-purple-700 group-hover:text-white transition-colors" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-purple-800 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200/60 self-start shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            <span>AI, Software & Growth Systems</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.92] uppercase">
            THINK IT.<br />
            BUILD IT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600">
              SCALE IT.
            </span>
          </h1>

          <p className="sub-editorial max-w-[500px]">
            We turn ideas, operational data, and business challenges into intelligent digital systems that help ambitious enterprises operate faster and scale compounding value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-purple-900 text-white hover:bg-purple-950 transition-all px-8 py-4 rounded-full shadow-sm shadow-purple-950/20 hover:shadow-md hover:scale-[1.02]"
            >
              START A PROJECT
            </Link>
            <Link 
              href="/case-studies" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-purple-950 border border-purple-200 hover:bg-purple-50/70 transition-all px-8 py-4 rounded-full shadow-xs"
            >
              SEE WHAT WE BUILD
            </Link>
          </div>
        </div>

        <div className="md:col-span-6">
          <HeroFlow />
        </div>
      </section>

      {/* 2. CAPABILITIES MARQUEE */}
      <Ticker />

      {/* 3. WHAT WE DO */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <div className="max-w-[600px] mb-16 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
            01 // CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            FROM THINKING TO SHIPPING.
          </h2>
          <p className="sub-editorial">
            We combine high-level strategy, robust software engineering, generative AI, and distribution architecture to build systems that deliver compounding ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div 
              key={svc.num} 
              className="border border-purple-100/80 bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[300px] shadow-sm shadow-purple-900/5 card-hover-effect group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50/80 px-2.5 py-1 rounded-md border border-purple-100">
                    {svc.num}
                  </span>
                  <div className="p-2.5 bg-purple-50/60 border border-purple-100 rounded-xl group-hover:bg-purple-900 transition-all duration-300">
                    {svc.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-950 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>
              <Link 
                href={svc.href} 
                className="inline-flex items-center text-xs font-bold text-purple-900 group-hover:text-purple-700 transition-colors mt-auto"
              >
                <span>EXPLORE DOMAIN</span>
                <ArrowRight size={13} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY SOCHYEAH (CONVICTION) */}
      <section className="bg-purple-50/30 border-y border-purple-100/70 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[600px] mb-16 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
              02 // OUR CONVICTION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              WE UNDERSTAND THE PROBLEM BEFORE WE BUILD.
            </h2>
            <p className="sub-editorial">
              Isolated coding is overhead. Strategic alignment and systems architecture make technology leverage work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', stage: 'THINK', desc: 'We audit operational bottlenecks and database schemas to isolate highest-leverage opportunities before drafting blueprints.' },
              { num: '02', stage: 'BUILD', desc: 'We engineer modular Next.js frontends, API microservices, and clean data layers with zero bloat or technical debt.' },
              { num: '03', stage: 'AUTOMATE', desc: 'We deploy autonomous cognitive workflows and API connectors to eliminate manual process overhead and human latency.' },
              { num: '04', stage: 'SCALE', desc: 'We build programmatic indexing networks and technical growth engines to capture high-intent search traffic and scale revenue.' }
            ].map((pillar) => (
              <div 
                key={pillar.num}
                className="border border-purple-100/80 bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-xs card-hover-effect"
              >
                <span className="text-xs font-mono font-bold text-purple-700">
                  {pillar.num} // {pillar.stage}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI DEMO LABORATORY */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-[600px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
            03 // DEMO LABORATORY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            SEE AI IN ACTION.
          </h2>
          <p className="sub-editorial">
            Test our simulated agent personas to inspect context retrieval, query parsing, and autonomous tool execution flows.
          </p>
        </div>
        <AIDemo />
      </section>

      {/* 6. FEATURED CASE STUDIES */}
      <section className="bg-purple-50/30 border-y border-purple-100/70 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-[600px] flex flex-col gap-3">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
                04 // IMPACT & VALIDATION
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                SELECTED CASE STUDIES.
              </h2>
              <p className="sub-editorial">
                Review verified technical results from our core client systems. Marked as concept validations and client deployments.
              </p>
            </div>
            <Link 
              href="/case-studies" 
              className="text-xs font-bold uppercase tracking-wider bg-purple-900 text-white px-6 py-3 rounded-full hover:bg-purple-950 transition-all shadow-sm shadow-purple-950/15"
            >
              ALL CASE STUDIES
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((cs) => (
              <div 
                key={cs.id}
                className="border border-purple-100/80 bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[360px] shadow-sm shadow-purple-900/5 card-hover-effect group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/50">
                    {cs.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2 group-hover:text-purple-950 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {cs.challenge}
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-3 border-t border-purple-100/60 pt-4 mb-4">
                    {cs.keyMetrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <div className="text-lg font-extrabold text-purple-950">{m.value}</div>
                        <div className="text-[9px] text-slate-400 leading-tight uppercase font-mono">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={`/case-studies`}
                    className="inline-flex items-center text-xs font-bold text-purple-900 hover:text-purple-700 transition-colors"
                  >
                    <span>View Concept Metrics</span>
                    <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (ROADMAP) */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <div className="max-w-[600px] mb-16 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
            05 // METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            OUR SPRINT ROADMAP.
          </h2>
          <p className="sub-editorial">
            We follow a structured 5-step sprint methodology to ship and scale production software safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'DISCOVER', desc: 'Identify bottlenecks, audit database models, and establish quantifiable ROI benchmarks.' },
            { step: '02', title: 'STRATEGIZE', desc: 'Map microservice architectures, model schemas, and state coordination graphs.' },
            { step: '03', title: 'BUILD', desc: 'Engineer clean Next.js interfaces, vector pipelines, and secure API webhooks.' },
            { step: '04', title: 'LAUNCH', desc: 'Deploy edge caches, run accessibility audits, and establish real-time error telemetry.' },
            { step: '05', title: 'SCALE', desc: 'Optimize conversion flows, scale programmatic distribution, and refine latency.' }
          ].map((item) => (
            <div 
              key={item.step} 
              className="border border-purple-100/80 bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-xs card-hover-effect"
            >
              <span className="text-xs font-mono font-bold text-purple-700">
                {item.step} // {item.title}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24 md:pb-36">
        <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white rounded-3xl p-10 md:p-20 text-center shadow-xl shadow-purple-950/20 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial from-purple-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-700/50">
              READY TO BUILD
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-white">
              HAVE AN IDEA?<br />LET'S MAKE IT HAPPEN.
            </h2>
            <p className="text-xs md:text-sm text-purple-200 leading-relaxed max-w-[480px]">
              Partner with our systems team. No generic sales pressure, just a direct technical review of your vision and architecture.
            </p>
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-purple-950 hover:bg-purple-50 transition-all px-10 py-4 rounded-full shadow-lg hover:scale-[1.02] mt-2"
            >
              START THE CONVERSATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
