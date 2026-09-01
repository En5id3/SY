'use client';

import React from 'react';
import Link from 'next/link';
import HeroFlow from '@/components/HeroFlow';
import Ticker from '@/components/Ticker';
import AIDemo from '@/components/AIDemo';
import { caseStudies } from '@/data/case-studies';
import { ArrowRight, Sparkles, Code, Cpu, Search, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function Home() {
  const featuredCases = caseStudies.slice(0, 3);

  const pillars = [
    {
      num: '01',
      title: 'AI & Automation',
      description: 'Smart AI assistants, custom workflows, and automated voice receptionists that save hours every single day.',
      href: '/ai-automation',
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      tag: 'Smart Workflows'
    },
    {
      num: '02',
      title: 'Web & Mobile Apps',
      description: 'Fast, beautiful, modern web platforms and SaaS products designed to delight your users and grow your business.',
      href: '/software-development',
      icon: <Code className="w-5 h-5 text-violet-600" />,
      tag: 'Modern Software'
    },
    {
      num: '03',
      title: 'Data & Predictive Insights',
      description: 'Turn your everyday business data into clear decisions, smart forecasts, and automated recommendations.',
      href: '/machine-learning',
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      tag: 'Intelligent Data'
    },
    {
      num: '04',
      title: 'Search & Visibility',
      description: 'Targeted search optimization and content systems that help qualified customers discover your business organically.',
      href: '/seo-growth',
      icon: <Search className="w-5 h-5 text-violet-600" />,
      tag: 'Organic Growth'
    }
  ];

  return (
    <div className="flex flex-col select-none">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-16 md:pt-24 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Micro-badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-900 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 px-4 py-1.5 rounded-full border border-indigo-200/70 self-start shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 animate-pulse" />
            <span>AI &amp; DIGITAL PRODUCT STUDIO</span>
          </div>

          {/* Simple, Bold Headline */}
          <h1 className="hero-title text-slate-900">
            WE TURN BOLD IDEAS<br />
            INTO REMARKABLE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
              DIGITAL PRODUCTS.
            </span>
          </h1>

          {/* Smooth, Human Subtitle */}
          <p className="sub-editorial max-w-[480px]">
            We partner with founders and forward-thinking companies to design, build, and launch exceptional AI and software solutions — smoothly and without complexity.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white hover:from-indigo-700 hover:via-indigo-800 hover:to-violet-800 transition-all px-8 py-4 rounded-full shadow-md shadow-indigo-950/15 hover:shadow-xl hover:scale-[1.02]"
            >
              START A PROJECT
            </Link>
            <Link 
              href="/case-studies" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all px-8 py-4 rounded-full shadow-xs"
            >
              EXPLORE OUR WORK
            </Link>
          </div>
        </div>

        {/* Friendly Roadmap Visualizer */}
        <div className="lg:col-span-6">
          <HeroFlow />
        </div>
      </section>

      {/* 2. CAPABILITIES TICKER */}
      <Ticker />

      {/* 3. SIMPLE MILESTONES RIBBON */}
      <section className="border-b border-indigo-100/70 bg-gradient-to-r from-indigo-50/20 via-purple-50/20 to-blue-50/20 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                6 Weeks
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1">
                Typical Time to Launch
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                24 / 7
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1">
                Automated Workflows
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                100%
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1">
                Tailored to Your Business
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Zero
              </span>
              <span className="text-xs text-slate-500 font-medium mt-1">
                Complex Jargon or Headaches
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD (4 CORE PILLARS) */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-[650px] mb-16 flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-700">
            WHAT WE DO
          </span>
          <h2 className="section-title text-slate-900">
            SOLUTIONS CRAFTED FOR YOUR GROWTH.
          </h2>
          <p className="sub-editorial">
            Everything you need to modernize your business and delight your customers.
          </p>
        </div>

        {/* Clean 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p) => (
            <div 
              key={p.num}
              className="border border-indigo-100/90 bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] shadow-sm shadow-indigo-900/5 card-hover-effect group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100/80">
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/50">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-950 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              <Link 
                href={p.href}
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-900 group-hover:text-indigo-700 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight size={13} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE LIVE DEMO */}
      <section className="bg-gradient-to-b from-indigo-50/20 via-purple-50/20 to-blue-50/20 border-y border-indigo-100/70 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-[650px] mb-12 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-700">
              SEE IT IN ACTION
            </span>
            <h2 className="section-title text-slate-900">
              EXPERIENCE AI IN EVERYDAY WORK.
            </h2>
            <p className="sub-editorial">
              Try our simulated assistants to see how automated booking, document lookups, and customer triage work in real life.
            </p>
          </div>
          <AIDemo />
        </div>
      </section>

      {/* 6. SELECTED STORIES (CASE STUDIES) */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-[600px] flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-700">
              REAL RESULTS
            </span>
            <h2 className="section-title text-slate-900">
              PROVEN RESULTS FOR REAL BUSINESSES.
            </h2>
            <p className="sub-editorial">
              Tangible impact, real hours saved, and happy customers.
            </p>
          </div>
          <Link 
            href="/case-studies" 
            className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-7 py-3.5 rounded-full hover:opacity-95 transition-all shadow-md shadow-indigo-950/15"
          >
            VIEW ALL CASE STORIES
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCases.map((cs) => (
            <div 
              key={cs.id}
              className="border border-indigo-100/90 bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[360px] shadow-sm shadow-indigo-900/5 card-hover-effect group"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/50">
                  {cs.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-5 mb-2 group-hover:text-indigo-950 transition-colors">
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
                      <div className="text-xl font-extrabold text-slate-900">{m.value}</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Link 
                  href={`/case-studies`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700 transition-colors"
                >
                  <span>Read story</span>
                  <ArrowRight size={13} className="ml-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HOW WE WORK TOGETHER (3 SIMPLE STEPS) */}
      <section className="bg-gradient-to-b from-blue-50/20 via-purple-50/20 to-indigo-50/20 border-y border-indigo-100/70 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[650px] mb-16 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-700">
              OUR PROCESS
            </span>
            <h2 className="section-title text-slate-900">
              HOW WE BRING YOUR PROJECT TO LIFE.
            </h2>
            <p className="sub-editorial">
              A transparent, collaborative, and stress-free journey from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-indigo-100/90 bg-white rounded-3xl p-8 shadow-sm card-hover-effect flex flex-col gap-3">
              <span className="text-xs font-bold text-indigo-700 uppercase">
                01 // LISTEN &amp; PLAN
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Understand Your Vision
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We sit down with you to understand your customers, goals, and daily bottlenecks, creating a clear plan before building.
              </p>
            </div>

            <div className="border border-indigo-100/90 bg-white rounded-3xl p-8 shadow-sm card-hover-effect flex flex-col gap-3">
              <span className="text-xs font-bold text-violet-700 uppercase">
                02 // DESIGN &amp; BUILD
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Craft With Speed
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We design intuitive layouts and write clean code in fast 6-week sprints, keeping you fully in the loop with weekly demos.
              </p>
            </div>

            <div className="border border-indigo-100/90 bg-white rounded-3xl p-8 shadow-sm card-hover-effect flex flex-col gap-3">
              <span className="text-xs font-bold text-indigo-700 uppercase">
                03 // LAUNCH &amp; GROW
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Scale With Confidence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handle the launch smoothly, ensure everything runs seamlessly, and help your business expand with new features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WARM FINAL INVITATION */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-36">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 text-white rounded-3xl p-10 md:p-20 text-center shadow-2xl shadow-indigo-950/20 relative overflow-hidden border border-indigo-500/20">
          
          {/* Soft Glow */}
          <div className="absolute inset-0 bg-radial from-indigo-500/15 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-300 bg-indigo-900/60 px-4 py-1.5 rounded-full border border-indigo-700/50">
              LET&apos;S WORK TOGETHER
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              HAVE A PROJECT IN MIND?<br />LET&apos;S BRING IT TO LIFE.
            </h2>

            <p className="text-xs md:text-sm text-indigo-200 leading-relaxed max-w-[450px]">
              Speak directly with our founders and lead builders. A friendly, helpful conversation with zero sales pressure.
            </p>

            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-slate-950 hover:bg-slate-100 transition-all px-10 py-4 rounded-full shadow-xl hover:scale-[1.02] mt-2"
            >
              START THE CONVERSATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
