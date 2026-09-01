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
      type: 'purple',
      badgeClass: 'text-purple-700 bg-purple-50/80 border-purple-100',
      iconBoxClass: 'bg-purple-50/60 border-purple-100 group-hover:bg-purple-900',
      icon: <Sparkles className="w-5 h-5 text-purple-700 group-hover:text-white transition-colors" />
    },
    {
      num: '02',
      title: 'Software Engineering',
      desc: 'Build scalable web applications, mobile applications, SaaS platforms, custom operations dashboards, and secure backend APIs.',
      href: '/software-development',
      type: 'blue',
      badgeClass: 'text-blue-700 bg-blue-50/80 border-blue-100',
      iconBoxClass: 'bg-blue-50/60 border-blue-100 group-hover:bg-blue-900',
      icon: <Code className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      num: '03',
      title: 'Machine Learning',
      desc: 'Build predictive analytics models, recommendation engines, forecasting systems, classification models, and custom ML APIs.',
      href: '/machine-learning',
      type: 'purple',
      badgeClass: 'text-purple-700 bg-purple-50/80 border-purple-100',
      iconBoxClass: 'bg-purple-50/60 border-purple-100 group-hover:bg-purple-900',
      icon: <Cpu className="w-5 h-5 text-purple-700 group-hover:text-white transition-colors" />
    },
    {
      num: '04',
      title: 'AI Automation',
      desc: 'Automate repetitive workflows, connect fragmented application layers, and coordinate active digital agents across platforms.',
      href: '/ai-automation',
      type: 'indigo',
      badgeClass: 'text-indigo-700 bg-indigo-50/80 border-indigo-100',
      iconBoxClass: 'bg-indigo-50/60 border-indigo-100 group-hover:bg-indigo-900',
      icon: <Activity className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
    },
    {
      num: '05',
      title: 'SEO & Digital Growth',
      desc: 'Technical SEO, topic clusters, database-driven programmatic SEO systems, conversion audits, and AI engine search visibility.',
      href: '/seo-growth',
      type: 'blue',
      badgeClass: 'text-blue-700 bg-blue-50/80 border-blue-100',
      iconBoxClass: 'bg-blue-50/60 border-blue-100 group-hover:bg-blue-900',
      icon: <Search className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      num: '06',
      title: 'Product Development',
      desc: 'Turn a raw idea into a validated click prototype, build a minimum viable product (MVP), launch, gather analytics, and scale.',
      href: '/product-development',
      type: 'indigo',
      badgeClass: 'text-indigo-700 bg-indigo-50/80 border-indigo-100',
      iconBoxClass: 'bg-indigo-50/60 border-indigo-100 group-hover:bg-indigo-900',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-indigo-900 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 px-3.5 py-1.5 rounded-full border border-indigo-200/60 self-start shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse" />
            <span>AI Strategy & Engineering Systems</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.92] uppercase">
            THINK IT.<br />
            BUILD IT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600">
              SCALE IT.
            </span>
          </h1>

          <p className="sub-editorial max-w-[500px]">
            We turn strategic ideas ("soch") and engineering execution ("yeah") into intelligent digital systems that help ambitious enterprises operate faster and scale compounding value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white hover:from-purple-950 hover:via-indigo-950 hover:to-blue-950 transition-all px-8 py-4 rounded-full shadow-sm shadow-indigo-950/20 hover:shadow-md hover:scale-[1.02]"
            >
              START A PROJECT
            </Link>
            <Link 
              href="/case-studies" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 border border-indigo-200 hover:bg-indigo-50/70 transition-all px-8 py-4 rounded-full shadow-xs"
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
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
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
              className="border border-indigo-100/80 bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[300px] shadow-sm shadow-indigo-900/5 card-hover-effect group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${svc.badgeClass}`}>
                    {svc.num}
                  </span>
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 ${svc.iconBoxClass}`}>
                    {svc.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-950 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>
              <Link 
                href={svc.href} 
                className="inline-flex items-center text-xs font-bold text-indigo-900 group-hover:text-indigo-700 transition-colors mt-auto"
              >
                <span>EXPLORE DOMAIN</span>
                <ArrowRight size={13} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY SOCHYEAH (CONVICTION) */}
      <section className="bg-gradient-to-b from-purple-50/20 via-indigo-50/20 to-blue-50/20 border-y border-indigo-100/70 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[600px] mb-16 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
              02 // OUR CONVICTION
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              WE UNDERSTAND THE PROBLEM BEFORE WE BUILD.
            </h2>
            <p className="sub-editorial">
              Isolated coding is overhead. Strategic alignment ("soch") and software leverage ("yeah") make technology work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', stage: 'THINK', tagColor: 'text-purple-700', desc: 'We audit operational bottlenecks and database schemas to isolate highest-leverage opportunities before drafting blueprints.' },
              { num: '02', stage: 'BUILD', tagColor: 'text-blue-600', desc: 'We engineer modular Next.js frontends, API microservices, and clean data layers with zero bloat or technical debt.' },
              { num: '03', stage: 'AUTOMATE', tagColor: 'text-indigo-600', desc: 'We deploy autonomous cognitive workflows and API connectors to eliminate manual process overhead and human latency.' },
              { num: '04', stage: 'SCALE', tagColor: 'text-blue-700', desc: 'We build programmatic indexing networks and technical growth engines to capture high-intent search traffic and scale revenue.' }
            ].map((pillar) => (
              <div 
                key={pillar.num}
                className="border border-indigo-100/80 bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-xs card-hover-effect"
              >
                <span className={`text-xs font-mono font-bold ${pillar.tagColor}`}>
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
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
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
      <section className="bg-gradient-to-b from-blue-50/20 via-indigo-50/20 to-purple-50/20 border-y border-indigo-100/70 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-[600px] flex flex-col gap-3">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
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
              className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 to-blue-900 text-white px-6 py-3 rounded-full hover:opacity-95 transition-all shadow-sm shadow-indigo-950/15"
            >
              ALL CASE STUDIES
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((cs) => {
              const isAi = cs.category.toLowerCase().includes('ai');
              const badgeClass = isAi 
                ? 'text-purple-800 bg-purple-50 border-purple-200/50' 
                : 'text-blue-800 bg-blue-50 border-blue-200/50';

              return (
                <div 
                  key={cs.id}
                  className="border border-indigo-100/80 bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[360px] shadow-sm shadow-indigo-900/5 card-hover-effect group"
                >
                  <div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeClass}`}>
                      {cs.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2 group-hover:text-indigo-950 transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-3 border-t border-indigo-100/60 pt-4 mb-4">
                      {cs.keyMetrics.slice(0, 2).map((m, i) => (
                        <div key={i}>
                          <div className="text-lg font-extrabold text-slate-900">{m.value}</div>
                          <div className="text-[9px] text-slate-400 leading-tight uppercase font-mono">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link 
                      href={`/case-studies`}
                      className="inline-flex items-center text-xs font-bold text-indigo-900 hover:text-indigo-700 transition-colors"
                    >
                      <span>View Concept Metrics</span>
                      <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (ROADMAP) */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <div className="max-w-[600px] mb-16 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
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
            { step: '01', title: 'DISCOVER', color: 'text-purple-700', desc: 'Identify bottlenecks, audit database models, and establish quantifiable ROI benchmarks.' },
            { step: '02', title: 'STRATEGIZE', color: 'text-purple-600', desc: 'Map microservice architectures, model schemas, and state coordination graphs.' },
            { step: '03', title: 'BUILD', color: 'text-indigo-600', desc: 'Engineer clean Next.js interfaces, vector pipelines, and secure API webhooks.' },
            { step: '04', title: 'LAUNCH', color: 'text-blue-600', desc: 'Deploy edge caches, run accessibility audits, and establish real-time error telemetry.' },
            { step: '05', title: 'SCALE', color: 'text-blue-700', desc: 'Optimize conversion flows, scale programmatic distribution, and refine latency.' }
          ].map((item) => (
            <div 
              key={item.step} 
              className="border border-indigo-100/80 bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-xs card-hover-effect"
            >
              <span className={`text-xs font-mono font-bold ${item.color}`}>
                {item.step} // {item.title}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA DUAL-TONE BANNER */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24 md:pb-36">
        <div className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-10 md:p-20 text-center shadow-xl shadow-indigo-950/20 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-300 bg-indigo-900/60 px-3.5 py-1 rounded-full border border-indigo-700/50">
              READY TO BUILD
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-white">
              HAVE AN IDEA?<br />LET'S MAKE IT HAPPEN.
            </h2>
            <p className="text-xs md:text-sm text-indigo-200 leading-relaxed max-w-[480px]">
              Partner with our systems team. No generic sales pressure, just a direct technical review of your vision and architecture.
            </p>
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-10 py-4 rounded-full shadow-lg hover:scale-[1.02] mt-2"
            >
              START THE CONVERSATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
