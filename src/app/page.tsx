'use client';

import React from 'react';
import Link from 'next/link';
import HeroFlow from '@/components/HeroFlow';
import Ticker from '@/components/Ticker';
import AIDemo from '@/components/AIDemo';
import { caseStudies } from '@/data/case-studies';
import { ArrowRight, Sparkles, Code, Cpu, Activity, Search, ShieldCheck, Zap, Server, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const featuredCases = caseStudies.slice(0, 3);

  return (
    <div className="flex flex-col select-none">
      {/* 1. THE EXECUTIVE HERO */}
      <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-16 md:pt-24 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Micro-badge */}
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-900 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 px-3.5 py-1.5 rounded-full border border-indigo-200/70 self-start shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse" />
            <span>✦ ENTERPRISE INTELLIGENCE & SYSTEMS</span>
          </div>

          {/* High-Status Headline */}
          <h1 className="hero-title text-slate-900">
            INTELLIGENCE<br />
            ENGINEERED<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600">
              FOR SCALE.
            </span>
          </h1>

          {/* Minimalist High-Conviction Subtitle */}
          <p className="sub-editorial max-w-[480px]">
            We design cognitive AI architectures, mission-critical software, and compounding distribution engines for enterprises that define their category.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white hover:from-purple-950 hover:via-indigo-950 hover:to-blue-950 transition-all px-8 py-4 rounded-full shadow-md shadow-indigo-950/20 hover:shadow-xl hover:scale-[1.02]"
            >
              START A PROJECT
            </Link>
            <Link 
              href="/case-studies" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-slate-900 border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all px-8 py-4 rounded-full shadow-xs"
            >
              EXPLORE ARCHITECTURES
            </Link>
          </div>
        </div>

        {/* Live Topology Visualizer */}
        <div className="lg:col-span-6">
          <HeroFlow />
        </div>
      </section>

      {/* 2. CAPABILITIES MARQUEE */}
      <Ticker />

      {/* 3. HIGH-STATUS METRICS RIBBON */}
      <section className="border-b border-indigo-100/70 bg-gradient-to-r from-purple-50/20 via-indigo-50/20 to-blue-50/20 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                &lt;180ms
              </span>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                Cognitive & Voice Latency
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                99.98%
              </span>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                Autonomous Execution Precision
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                6 Weeks
              </span>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                Concept to Production Velocity
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                100%
              </span>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                Client IP & System Ownership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ENTERPRISE BENTO GRID */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-[650px] mb-16 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
            01 // ARCHITECTURAL SUITE
          </span>
          <h2 className="section-title text-slate-900">
            CAPABILITIES BUILT FOR COMPOUNDING SCALE.
          </h2>
          <p className="sub-editorial">
            Modular, high-leverage systems engineered with zero technical debt.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Autonomous AI (Span 2) */}
          <div className="md:col-span-2 bento-card p-8 md:p-10 flex flex-col justify-between min-h-[380px] bg-gradient-to-br from-white via-white to-purple-50/30">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 text-purple-700">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200/50">
                  AUTONOMOUS AGENTS & RAG
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                Cognitive Multi-Agent Systems
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-[540px] mb-6">
                Deploy context-aware autonomous agents equipped with custom API tools, vector embeddings, and real-time telephony pipelines to eliminate operational latency.
              </p>
            </div>

            {/* Micro Telemetry Visual */}
            <div className="bg-slate-950 rounded-xl p-4 text-[11px] font-mono text-slate-300 flex items-center justify-between border border-purple-950/40">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-purple-300">router.dispatch(&quot;vector_rag&quot;)</span>
              </div>
              <span className="text-[10px] text-slate-400">LATENCY: 142ms</span>
            </div>
          </div>

          {/* Card 2: Mission Critical Software (Span 1) */}
          <div className="bento-card p-8 flex flex-col justify-between min-h-[380px] bg-gradient-to-br from-white via-white to-blue-50/30">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 text-blue-600">
                  <Code className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/50">
                  FULL-STACK
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Mission-Critical Software
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Next.js interfaces, PostgreSQL data layers, and secure microservices engineered for high concurrency.
              </p>
            </div>

            <div className="border border-blue-100 bg-blue-50/50 rounded-xl p-3.5 flex justify-between items-center text-xs font-mono">
              <span className="text-blue-900 font-bold">EDGE LATENCY</span>
              <span className="text-blue-700 font-extrabold">&lt; 40ms</span>
            </div>
          </div>

          {/* Card 3: Machine Learning (Span 1) */}
          <div className="bento-card p-8 flex flex-col justify-between min-h-[380px] bg-gradient-to-br from-white via-white to-purple-50/30">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 text-purple-700">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200/50">
                  PREDICTIVE
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Predictive Machine Learning
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom classification, revenue demand forecasting, and recommendation algorithms trained on telemetry.
              </p>
            </div>

            <div className="border border-purple-100 bg-purple-50/50 rounded-xl p-3.5 flex justify-between items-center text-xs font-mono">
              <span className="text-purple-900 font-bold">MODEL ACCURACY</span>
              <span className="text-purple-700 font-extrabold">99.4%</span>
            </div>
          </div>

          {/* Card 4: Programmatic Growth & Distribution (Span 2) */}
          <div className="md:col-span-2 bento-card p-8 md:p-10 flex flex-col justify-between min-h-[380px] bg-gradient-to-br from-white via-white to-indigo-50/30">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 text-indigo-600">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/50">
                  PROGRAMMATIC SCALE
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                Organic Growth &amp; Distribution Engines
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-[540px] mb-6">
                Automated programmatic search routing and entity JSON-LD networks that capture high-intent commercial demand autonomously.
              </p>
            </div>

            {/* Visual Bar */}
            <div className="bg-slate-950 rounded-xl p-4 text-[11px] font-mono text-slate-300 flex items-center justify-between border border-indigo-950/40">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-indigo-300">crawl_index.stream(&quot;dynamic_routes&quot;)</span>
              </div>
              <span className="text-[10px] text-slate-400">ORGANIC VELOCITY: 14.2x</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COGNITIVE CORE RUNTIME DEMO */}
      <section className="bg-gradient-to-b from-purple-50/20 via-indigo-50/20 to-blue-50/20 border-y border-indigo-100/70 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-[650px] mb-12 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
              02 // LIVE RUNTIME
            </span>
            <h2 className="section-title text-slate-900">
              EXPERIENCE THE COGNITIVE ENGINE.
            </h2>
            <p className="sub-editorial">
              Test simulated agent routing, real-time vector search, and tool execution in action.
            </p>
          </div>
          <AIDemo />
        </div>
      </section>

      {/* 6. CURATED ENTERPRISE DEPLOYMENTS */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-[600px] flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
              03 // PROVEN IMPACT
            </span>
            <h2 className="section-title text-slate-900">
              SELECTED DEPLOYMENTS.
            </h2>
            <p className="sub-editorial">
              Real systems. Measurable metrics. Zero fluff.
            </p>
          </div>
          <Link 
            href="/case-studies" 
            className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 to-blue-900 text-white px-7 py-3.5 rounded-full hover:opacity-95 transition-all shadow-md shadow-indigo-950/15"
          >
            VIEW ALL CASE STUDIES
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
                className="border border-indigo-100/80 bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[380px] shadow-sm shadow-indigo-900/5 card-hover-effect group"
              >
                <div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${badgeClass}`}>
                    {cs.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-5 mb-2 group-hover:text-indigo-950 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {cs.challenge}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 border-t border-indigo-100/60 pt-5 mb-5">
                    {cs.keyMetrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <div className="text-2xl font-extrabold text-slate-900">{m.value}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={`/case-studies`}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700 transition-colors"
                  >
                    <span>Inspect Blueprint</span>
                    <ArrowRight size={13} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. THE OPERATING CREED (SOCH & YEAH) */}
      <section className="bg-gradient-to-b from-blue-50/20 via-indigo-50/20 to-purple-50/20 border-y border-indigo-100/70 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[650px] mb-16 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-700">
              04 // THE PHILOSOPHY
            </span>
            <h2 className="section-title text-slate-900">
              WHY CATEGORY LEADERS PARTNER WITH US.
            </h2>
            <p className="sub-editorial">
              Two disciplined forces working in harmonic unison.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SOCH Pillar */}
            <div className="border border-purple-100/90 bg-white rounded-3xl p-8 md:p-10 shadow-sm shadow-purple-950/5 card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 uppercase">
                  01 // SOCH (STRATEGY &amp; COGNITION)
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Strategy before syntax.
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                We audit unit economics, database schemas, and user journeys before writing a single line of code. We ensure every technical decision creates an unfair operational advantage.
              </p>
            </div>

            {/* YEAH Pillar */}
            <div className="border border-blue-100/90 bg-white rounded-3xl p-8 md:p-10 shadow-sm shadow-blue-950/5 card-hover-effect">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 uppercase">
                  02 // YEAH (VELOCITY &amp; EXECUTION)
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Velocity without technical debt.
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                We engineer modular Next.js interfaces, resilient serverless APIs, and real-time event telemetry that ship in 6-week sprints and scale seamlessly to millions of requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CINEMATIC FINAL INVITATION */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-36">
        <div className="bg-gradient-to-br from-purple-950 via-slate-950 to-blue-950 text-white rounded-3xl p-10 md:p-24 text-center shadow-2xl shadow-indigo-950/30 relative overflow-hidden border border-indigo-500/20">
          
          {/* Ambient Glow Center */}
          <div className="absolute inset-0 bg-radial from-indigo-500/15 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-[640px] mx-auto flex flex-col gap-6 items-center relative z-10">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-300 bg-indigo-900/60 px-4 py-1.5 rounded-full border border-indigo-700/50">
              READY TO DEFINE YOUR CATEGORY
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.96] text-white">
              HAVE AN AMBITIOUS VISION?<br />LET&apos;S ENGINEER IT.
            </h2>

            <p className="text-xs md:text-sm text-indigo-200 leading-relaxed max-w-[480px]">
              Direct technical alignment with our lead systems architects. No junior intermediaries, no sales pressure.
            </p>

            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-slate-950 hover:bg-slate-100 transition-all px-10 py-4 rounded-full shadow-xl hover:scale-[1.02] mt-2"
            >
              INITIATE ARCHITECTURE AUDIT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
