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
      desc: 'Build AI assistants, custom AI agents, RAG systems, copilots, document intelligence and automated reasoning workflows.',
      href: '/ai-automation',
      icon: <Sparkles className="w-5 h-5 text-black" />
    },
    {
      num: '02',
      title: 'Software Engineering',
      desc: 'Build scalable web applications, mobile applications, SaaS platforms, custom operations dashboards, and secure backend APIs.',
      href: '/software-development',
      icon: <Code className="w-5 h-5 text-black" />
    },
    {
      num: '03',
      title: 'Machine Learning',
      desc: 'Build predictive analytics models, recommendation engines, forecasting systems, classification models, and custom ML APIs.',
      href: '/machine-learning',
      icon: <Cpu className="w-5 h-5 text-black" />
    },
    {
      num: '04',
      title: 'AI Automation',
      desc: 'Automate repetitive workflows, connect fragmented application layers, and coordinate active digital agents across platforms.',
      href: '/ai-automation',
      icon: <Activity className="w-5 h-5 text-black" />
    },
    {
      num: '05',
      title: 'SEO & Digital Growth',
      desc: 'Technical SEO, topic clusters, database-driven programmatic SEO systems, conversion audits, and AI engine search visibility.',
      href: '/seo-growth',
      icon: <Search className="w-5 h-5 text-black" />
    },
    {
      num: '06',
      title: 'Product Development',
      desc: 'Turn a raw idea into a validated click prototype, build a minimum viable product (MVP), launch, gather analytics, and scale.',
      href: '/product-development',
      icon: <ShieldCheck className="w-5 h-5 text-black" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black leading-[0.9] uppercase">
            THINK IT.<br />
            BUILD IT.<br />
            SCALE IT.
          </h1>
          <p className="sub-editorial max-w-[500px]">
            We build AI, software, machine learning and growth systems that help businesses operate better, serve customers faster and grow intelligently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors px-8 py-4 rounded"
            >
              START A PROJECT
            </Link>
            <Link 
              href="/case-studies" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-black border border-border-light hover:bg-neutral-50 transition-colors px-8 py-4 rounded"
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
        <div className="max-w-[600px] mb-16 flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">WHAT WE DO</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            FROM THINKING TO SHIPPING.
          </h2>
          <p className="sub-editorial">
            We combine strategy, engineering, AI and growth to build systems that create measurable business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div 
              key={svc.num} 
              className="border border-border-light bg-white rounded-lg p-8 flex flex-col justify-between min-h-[300px] shadow-sm hover:border-black transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-neutral-300">{svc.num}</span>
                  <div className="p-2 bg-neutral-50 border border-neutral-100 rounded group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {svc.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{svc.title}</h3>
                <p className="text-xs text-color-text-secondary leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>
              <Link 
                href={svc.href} 
                className="inline-flex items-center text-xs font-bold text-black group-hover:gap-2 transition-all duration-200 mt-auto"
              >
                EXPLORE <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY SOCHYEAH */}
      <section className="bg-neutral-50 border-t border-b border-border-light py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[600px] mb-16 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">OUR CONVICTION</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
              WE UNDERSTAND THE PROBLEM BEFORE WE BUILD.
            </h2>
            <p className="sub-editorial">
              Isolated coding is overhead. Strategic alignment makes tech leverage work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-black uppercase tracking-wider">01 // THINK</h4>
              <p className="text-xs text-color-text-secondary leading-relaxed">
                We audit operational flows and database models to locate opportunity areas before drafting code blueprints.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-black uppercase tracking-wider">02 // BUILD</h4>
              <p className="text-xs text-color-text-secondary leading-relaxed">
                We engineer scalable, clean Next.js, API microservices, and models with zero bloat or technical debt.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-black uppercase tracking-wider">03 // AUTOMATE</h4>
              <p className="text-xs text-color-text-secondary leading-relaxed">
                We implement reasoning AI workflows and custom API bridges to replace slow, manual process overhead.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-black uppercase tracking-wider">04 // SCALE</h4>
              <p className="text-xs text-color-text-secondary leading-relaxed">
                We build programmatic index routing systems to capture search traffic and scale qualified organic visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI DEMO */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-[600px] mb-12 flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">DEMO LABORATORY</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            SEE AI IN ACTION.
          </h2>
          <p className="sub-editorial">
            Click through our simulated agent personas to inspect context matching and execution flows in real time.
          </p>
        </div>
        <AIDemo />
      </section>

      {/* 6. FEATURED CASE STUDIES */}
      <section className="bg-neutral-50 border-t border-b border-border-light py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-[600px] flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">IMPACT METRICS</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
                SELECTED CASE STUDIES.
              </h2>
              <p className="sub-editorial">
                Review verified technical results from our core client systems. Marked as concept validations.
              </p>
            </div>
            <Link 
              href="/case-studies" 
              className="text-xs font-bold uppercase tracking-wider bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition-colors"
            >
              ALL CASE STUDIES
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((cs) => (
              <div 
                key={cs.id}
                className="border border-border-light bg-white rounded-lg p-6 flex flex-col justify-between min-h-[360px] shadow-sm hover:border-black transition-all duration-300"
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-50 border border-neutral-100 px-2 py-1 rounded">
                    {cs.category}
                  </span>
                  <h3 className="text-lg font-bold text-black mt-4 mb-2">{cs.title}</h3>
                  <p className="text-xs text-color-text-secondary leading-relaxed mb-6 line-clamp-3">
                    {cs.challenge}
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-2 border-t border-border-light pt-4 mb-4">
                    {cs.keyMetrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <div className="text-md font-extrabold text-black">{m.value}</div>
                        <div className="text-[9px] text-color-text-muted leading-tight uppercase font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={`/case-studies`}
                    className="inline-flex items-center text-xs font-bold text-black"
                  >
                    View Details <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (ROADMAP) */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <div className="max-w-[600px] mb-16 flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">METHODOLOGY</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            OUR ROADMAP.
          </h2>
          <p className="sub-editorial">
            We follow a structured 5-step sprint checklist to scale concepts safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: '01', title: 'DISCOVER', desc: 'Identify system gaps, map CRM databases, and calculate operational ROI metrics.' },
            { step: '02', title: 'STRATEGIZE', desc: 'Define API routing patterns, model schemas, and deployment network maps.' },
            { step: '03', title: 'BUILD', desc: 'Write clean code, index vector nodes, and wrap models in secure web endpoints.' },
            { step: '04', title: 'LAUNCH', desc: 'Deploy edge caches, check Core Web Vitals, and configure secure error telemetry.' },
            { step: '05', title: 'OPTIMIZE', desc: 'Optimize conversion click flows, run query tests, and scale distribution paths.' }
          ].map((item) => (
            <div key={item.step} className="border-t border-black pt-6 flex flex-col gap-3">
              <span className="text-xs font-bold text-black">{item.step} // {item.title}</span>
              <p className="text-xs text-color-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="bg-neutral-50 border-t border-border-light py-24 md:py-36 text-center">
        <div className="max-w-[600px] mx-auto px-6 flex flex-col gap-6 items-center">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">READY TO BUILD</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black leading-tight">
            HAVE AN IDEA?<br />LET'S BUILD IT.
          </h2>
          <p className="sub-editorial max-w-[450px]">
            Start a project with our strategic systems team. No high-pressure sales calls, just a direct evaluation of what you are trying to build.
          </p>
          <Link 
            href="/contact" 
            className="text-center text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors px-10 py-4 rounded mt-4"
          >
            START THE CONVERSATION
          </Link>
        </div>
      </section>
    </div>
  );
}
