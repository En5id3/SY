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
      metric: 'Fast Indexing & Index Budget Savings',
      icon: <Settings className="w-4 h-4 text-black" />
    },
    {
      id: 'content',
      name: 'Commercial Content',
      desc: 'Mapping search intent to commercial landing templates. Writing clear, authoritative answers rather than generic advice pages.',
      metric: 'High Conversion Potential',
      icon: <FileText className="w-4 h-4 text-black" />
    },
    {
      id: 'authority',
      name: 'Domain Authority',
      desc: 'Building quality organic citation links and mention graphs across industry journals and developer directories.',
      metric: 'Surges Crawler Crawl Frequencies',
      icon: <Share2 className="w-4 h-4 text-black" />
    },
    {
      id: 'entity',
      name: 'Entity Signals',
      desc: 'Connecting brand metadata to verified schema graphs, making sure semantic associations map clearly for LLM answers.',
      metric: 'AI Engine Search Visibility',
      icon: <Layers className="w-4 h-4 text-black" />
    },
    {
      id: 'linking',
      name: 'Internal Linking',
      desc: 'Automating page link graphs using database indexes to distribute crawl weight to high-value pages.',
      metric: 'Decreases Page Crawl Latencies',
      icon: <LinkIcon className="w-4 h-4 text-black" />
    },
    {
      id: 'structure',
      name: 'Structured Data',
      desc: 'Injecting comprehensive JSON-LD schemas (Service, FAQ, Product) to capture rich snippets on search results pages.',
      metric: 'Boosts Search Click-Through Rate',
      icon: <Database className="w-4 h-4 text-black" />
    },
    {
      id: 'cro',
      name: 'Conversion Optimization',
      desc: 'Removing form friction, placing clear value CTAs, and running analytics telemetry to turn searchers into clients.',
      metric: 'Translates Traffic into Inbound leads',
      icon: <CheckSquare className="w-4 h-4 text-black" />
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">ORGANIC DISTRIBUTION</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          GET DISCOVERED.<br />
          GET TRUSTED.<br />
          GET CHOSEN.
        </h1>
        <p className="text-lg text-color-text-secondary leading-relaxed font-semibold">
          "Search visibility is an engineering, content and authority problem."
        </p>
        <p className="sub-editorial">
          We reject old marketing tricks like keyword stuffing. Instead, we engineer technical programmatic landing directories, optimize Core Web Vitals to boost index speed, and structure schemas so your platform stands out in both Google searches and AI search answers.
        </p>
      </div>

      {/* 2. Interactive Compounder Section */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-10 flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">COMPOUND GROWTH FORMULA</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-tight">
            SEO THAT COMPOUNDS.
          </h2>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            Hover over the structural blocks below to see how each growth parameter multiplies into a unified distribution funnel.
          </p>
        </div>

        {/* Compound Block Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Blocks array list */}
          <div className="flex-grow flex flex-col gap-2 justify-center">
            {factors.map((fact) => (
              <button
                key={fact.id}
                onMouseEnter={() => setActiveFactor(fact.id)}
                className={`text-left text-xs font-semibold px-4 py-3 border rounded transition-all duration-150 flex items-center justify-between ${
                  activeFactor === fact.id 
                    ? 'bg-black text-white border-black shadow-sm' 
                    : 'bg-white border-border-light text-color-text-secondary hover:border-black hover:text-black'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`p-1 rounded ${activeFactor === fact.id ? 'bg-neutral-800' : 'bg-neutral-50'}`}>
                    {fact.icon}
                  </span>
                  {fact.name}
                </span>
                <Plus size={14} className="text-neutral-400" />
              </button>
            ))}
          </div>

          {/* Details Output Box */}
          <div className="w-full lg:w-[420px] bg-white border border-border-light rounded-lg p-6 flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[220px]">
            <span className="absolute top-2 right-2 text-[8px] font-mono text-neutral-300">COMPOUNDING_MULTIPLIER</span>
            
            <div className="my-auto">
              <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">HIGHLIGHT PARAMETER</span>
              <h3 className="text-lg font-bold text-black mt-2 mb-3">
                {factors.find(f => f.id === activeFactor)?.name}
              </h3>
              <p className="text-xs text-color-text-secondary leading-relaxed mb-6">
                {factors.find(f => f.id === activeFactor)?.desc}
              </p>
            </div>

            <div className="border-t border-border-light pt-4 flex justify-between items-center text-[10px] font-mono">
              <span className="text-neutral-400 uppercase">Primary Value:</span>
              <span className="text-black font-bold uppercase">{factors.find(f => f.id === activeFactor)?.metric}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capabilities Checklist Directory */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-light pt-20">
        <div>
          <h3 className="text-lg font-bold text-black mb-6 uppercase tracking-wider">SEO Capabilities</h3>
          <p className="text-xs text-color-text-secondary leading-relaxed mb-4">
            We focus on technical crawl optimization, schema injections, and conversion rate optimizations to deliver measurable, commercial lead outcomes.
          </p>
          <p className="text-xs text-color-text-muted leading-relaxed">
            * We do not provide guaranteed keyword rankings or use fake metrics. Organic growth relies on technical foundation and indexing quality.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((svc, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-color-text-secondary font-medium">
              <span className="text-black font-bold">•</span>
              <span>{svc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-black text-white rounded-lg p-10 md:p-16 text-center mt-24">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter">
            Build My Growth Engine
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-[450px]">
            Ready to design a custom programmatic SEO system, optimize database index crawl times, or perform technical entity markup? Let's connect.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-8 py-4 rounded mt-4"
          >
            START A TECHNICAL GROWTH SPRINT
          </Link>
        </div>
      </section>
    </div>
  );
}
