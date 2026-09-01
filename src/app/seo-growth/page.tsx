'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Settings, FileText, Share2, Layers, Link as LinkIcon, Database, CheckSquare, Plus } from 'lucide-react';

interface GrowthFactor {
  id: string;
  name: string;
  desc: string;
  metric: string;
  icon: React.ReactNode;
}

export default function SEOGrowth() {
  const [activeFactor, setActiveFactor] = useState<string>('tech');

  const services = [
    'Technical SEO', 'On-Page SEO', 'Programmatic SEO', 'Local SEO', 
    'E-commerce SEO', 'Content Strategy', 'Keyword Research', 'Entity SEO', 
    'Structured Data', 'Internal Linking', 'Conversion Optimization', 'Analytics', 
    'AI Search Visibility'
  ];

  const factors: GrowthFactor[] = [
    {
      id: 'tech',
      name: 'Technical Foundation',
      desc: 'Eliminating render-blocking assets, achieving sub-400ms server response, configuring clean edge redirects, and optimizing Lighthouse crawl criteria.',
      metric: 'Fast Indexing & Crawl Budget Savings',
      icon: <Settings className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'content',
      name: 'Commercial Content',
      desc: 'Mapping search intent to commercial landing templates. Writing clear, authoritative answers rather than generic advice pages.',
      metric: 'High Conversion Potential',
      icon: <FileText className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'authority',
      name: 'Domain Authority',
      desc: 'Building quality organic citation links and mention graphs across industry journals and developer directories.',
      metric: 'Surges Crawler Frequencies',
      icon: <Share2 className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'entity',
      name: 'Entity Signals',
      desc: 'Connecting brand metadata to verified schema graphs, making sure semantic associations map clearly for LLM answers.',
      metric: 'AI Engine Search Visibility',
      icon: <Layers className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'linking',
      name: 'Internal Linking',
      desc: 'Automating page link graphs using database indexes to distribute crawl weight to high-value pages.',
      metric: 'Decreases Page Crawl Latencies',
      icon: <LinkIcon className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'structure',
      name: 'Structured Data',
      desc: 'Injecting comprehensive JSON-LD schemas (Service, FAQ, Product) to capture rich snippets on search results pages.',
      metric: 'Boosts Search Click-Through Rate',
      icon: <Database className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'cro',
      name: 'Conversion Optimization',
      desc: 'Removing form friction, placing clear value CTAs, and running analytics telemetry to turn searchers into clients.',
      metric: 'Translates Traffic into Inbound leads',
      icon: <CheckSquare className="w-4 h-4 text-purple-700" />
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 self-start">
          ORGANIC DISTRIBUTION & SEARCH
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          GET DISCOVERED.<br />
          GET TRUSTED.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600">
            GET CHOSEN.
          </span>
        </h1>
        <p className="sub-editorial text-purple-950 font-medium">
          "Search visibility is an engineering, content architecture, and authority problem."
        </p>
        <p className="sub-editorial">
          We reject old marketing tricks like keyword stuffing. Instead, we engineer technical programmatic landing directories, optimize Core Web Vitals to boost index speed, and structure schemas so your platform stands out in both Google searches and AI search answers.
        </p>
      </div>

      {/* 2. Interactive Compounder Section */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-10 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
            01 // COMPOUND GROWTH FORMULA
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            SEO THAT COMPOUNDS.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Hover over the structural blocks below to see how each growth parameter multiplies into a unified distribution funnel.
          </p>
        </div>

        {/* Compound Block Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Blocks array list */}
          <div className="flex-grow flex flex-col gap-2.5 justify-center">
            {factors.map((fact) => (
              <button
                key={fact.id}
                onMouseEnter={() => setActiveFactor(fact.id)}
                className={`text-left text-xs font-semibold px-4 py-3.5 border rounded-2xl transition-all duration-200 flex items-center justify-between ${
                  activeFactor === fact.id 
                    ? 'bg-purple-900 text-white border-purple-900 shadow-sm shadow-purple-950/20' 
                    : 'bg-white border-purple-100 text-slate-600 hover:border-purple-300 hover:text-purple-950'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`p-1.5 rounded-xl ${activeFactor === fact.id ? 'bg-purple-800 text-white' : 'bg-purple-50'}`}>
                    {fact.icon}
                  </span>
                  <span>{fact.name}</span>
                </span>
                <Plus size={14} className={activeFactor === fact.id ? 'text-purple-300' : 'text-slate-400'} />
              </button>
            ))}
          </div>

          {/* Details Output Box */}
          <div className="w-full lg:w-[440px] bg-white border border-purple-100/80 rounded-2xl p-7 flex flex-col justify-between shadow-sm shadow-purple-900/5 relative overflow-hidden min-h-[220px]">
            <div className="my-auto">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full">
                HIGHLIGHT PARAMETER
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-3">
                {factors.find(f => f.id === activeFactor)?.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {factors.find(f => f.id === activeFactor)?.desc}
              </p>
            </div>

            <div className="border-t border-purple-100/70 pt-4 flex justify-between items-center text-[10px] font-mono">
              <span className="text-slate-400 uppercase">Primary Value:</span>
              <span className="text-purple-950 font-bold uppercase">{factors.find(f => f.id === activeFactor)?.metric}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capabilities Checklist Directory */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-purple-100/70 pt-20">
        <div className="border border-purple-100/80 bg-white rounded-2xl p-8 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider">SEO Capabilities</h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            We focus on technical crawl optimization, schema injections, and conversion rate optimizations to deliver measurable, commercial lead outcomes.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            * We do not provide guaranteed keyword rankings or use fake metrics. Organic growth relies on technical foundation and indexing quality.
          </p>
        </div>

        <div className="bg-purple-50/25 border border-purple-100/60 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-3.5">
            {services.map((svc, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <span className="text-purple-600 font-bold">•</span>
                <span>{svc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-10 md:p-16 text-center mt-24 shadow-xl shadow-indigo-950/15 relative overflow-hidden">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Build My Growth Engine
          </h2>
          <p className="text-xs text-indigo-200 leading-relaxed max-w-[450px]">
            Ready to design a custom programmatic SEO system, optimize database index crawl times, or perform technical entity markup? Let's connect.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-4 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            START A TECHNICAL GROWTH SPRINT
          </Link>
        </div>
      </section>
    </div>
  );
}
