'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartPulse, Building2, ShoppingBag, Truck, Cpu } from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  problems: string;
  aiOpps: string;
  softwareOpps: string;
  automationOpps: string;
  growthOpps: string;
  caseStudy: string;
  icon: React.ReactNode;
}

export default function Industries() {
  const [activeInd, setActiveInd] = useState<string>('saas');

  const industries: IndustryItem[] = [
    {
      id: 'saas',
      name: 'SaaS & Startups',
      problems: 'High client churn, rising acquisition costs, and slow feature engineering velocity.',
      aiOpps: 'Build embedded AI copilots and RAG knowledge assistants within the main app.',
      softwareOpps: 'Rapid MVP engineering cycles, modular frontends, and API developer tools.',
      automationOpps: 'Automate billing logs, tier checks, and onboarding workflows.',
      growthOpps: 'Technical and programmatic SEO page routing networks.',
      caseStudy: 'SEO Growth Engine / SaaS MVP Blueprint',
      icon: <Cpu className="w-5 h-5" />
    },
    {
      id: 'finance',
      name: 'Finance & Compliance',
      problems: 'Manual audit checks, compliance document analysis, and data entry human errors.',
      aiOpps: 'Secure document retrieval-augmented generation (RAG) indices.',
      softwareOpps: 'Portals for customer onboarding documents, secure database queries.',
      automationOpps: 'Automate risk alerts, verify uploaded certificates.',
      growthOpps: 'Search visibility for commercial compliance intent terms.',
      caseStudy: 'AI Document Assistant / Compliance Copilot',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      id: 'healthcare',
      name: 'Healthcare Systems',
      problems: 'Scheduling bottlenecks, repetitive patient queries, and complex report logging.',
      aiOpps: 'Voice AI receptionists and multi-lingual FAQ triage agents.',
      softwareOpps: 'Patient management consoles, schedule database grids.',
      automationOpps: 'Automate call logs, sync calendar entries to EHR systems.',
      growthOpps: 'Local patient intent SEO and service indexing.',
      caseStudy: 'AI Receptionist for Service Business',
      icon: <HeartPulse className="w-5 h-5" />
    },
    {
      id: 'realestate',
      name: 'Real Estate & Services',
      problems: 'Slow lead screening response, disjointed listings tracking, and high ad spend.',
      aiOpps: 'Autonomous qualifying sales agents.',
      softwareOpps: 'Property CRM boards, custom listing directories.',
      automationOpps: 'Automate lead score alerts, dispatch text response workflows.',
      growthOpps: 'Local area and city directory programmatic indexing.',
      caseStudy: 'AI Sales Lead Automation',
      icon: <Building2 className="w-5 h-5" />
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Retail',
      problems: 'Low shopping checkout values, under-optimized product grids, and manual inventory updates.',
      aiOpps: 'Product recommendation models, visual similarity search.',
      softwareOpps: 'Custom Stripe checkout platforms, client panels.',
      automationOpps: 'Automate stock reorders, sync catalog data updates.',
      growthOpps: 'Technical crawling optimizations and schema rich snippet markups.',
      caseStudy: 'Personalized Product Recommendations',
      icon: <ShoppingBag className="w-5 h-5" />
    },
    {
      id: 'logistics',
      name: 'Logistics & Operations',
      problems: 'Unpredictable cargo queues, manual scheduling, and spreadsheet reporting layout shifts.',
      aiOpps: 'Predictive analytics algorithms, anomaly detection blocks.',
      softwareOpps: 'Control center scheduler dashboards, API trackers.',
      automationOpps: 'Automate driver route logs, sync shipment tables.',
      growthOpps: 'Organic visibility targeting industry supply-chain queries.',
      caseStudy: 'Business Analytics Platform / ML Anomaly Detector',
      icon: <Truck className="w-5 h-5" />
    }
  ];

  const current = industries.find(ind => ind.id === activeInd) || industries[0];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start">
          INDUSTRY SOLUTIONS
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          SECTOR CAPABILITIES.
        </h1>
        <p className="sub-editorial">
          We configure AI, software systems, and technical organic traffic funnels across core business verticals. Verify how we align high-leverage opportunities.
        </p>
      </div>

      {/* Main Grid: Selector tabs and details */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Side: Selectors */}
        <div className="w-full lg:w-1/3 flex flex-col gap-2 bg-gradient-to-b from-purple-50/20 via-indigo-50/20 to-blue-50/20 border border-indigo-100/70 rounded-2xl p-5">
          <span className="text-[9px] font-mono font-bold tracking-wider text-indigo-800 uppercase mb-3">
            01 // Select Business Sector
          </span>
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveInd(ind.id)}
              className={`text-left text-xs font-semibold px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                activeInd === ind.id 
                  ? 'bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white shadow-sm shadow-indigo-950/20 font-bold' 
                  : 'text-slate-600 hover:bg-white/80 hover:text-indigo-950'
              }`}
            >
              <span className={activeInd === ind.id ? 'text-indigo-200' : 'text-indigo-600'}>
                {ind.icon}
              </span>
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Right Side: Details Card */}
        <div className="w-full lg:w-2/3 bg-white border border-indigo-100/80 rounded-2xl p-8 flex flex-col justify-between shadow-sm shadow-indigo-900/5 relative overflow-hidden">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200/50">
                INDUSTRY PARAMETERS
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{current.name}</h2>
            
            {/* Split layout: Problems & Ops (Color-coded) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="border border-slate-100 bg-slate-50/50 rounded-xl p-4">
                <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">Common Problems</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{current.problems}</p>
              </div>
              <div className="border border-purple-100/80 bg-purple-50/30 rounded-xl p-4">
                <h4 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-2">AI Opportunities (Soch)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{current.aiOpps}</p>
              </div>
              <div className="border border-blue-100/80 bg-blue-50/30 rounded-xl p-4">
                <h4 className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider mb-2">Software Systems (Yeah)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{current.softwareOpps}</p>
              </div>
              <div className="border border-indigo-100/80 bg-indigo-50/30 rounded-xl p-4">
                <h4 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Crawl & Growth</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{current.growthOpps}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-indigo-100/70 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
            <div>
              <span className="text-[9px] font-mono text-slate-400 block uppercase">Reference Architecture Case</span>
              <span className="text-slate-900 font-bold uppercase">{current.caseStudy}</span>
            </div>
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white px-6 py-3 rounded-full hover:opacity-95 transition-all shadow-sm shadow-indigo-950/15 w-full sm:w-auto"
            >
              Start Sector Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
