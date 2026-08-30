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
      problems: 'High client churn, rising acquisition costs, and slow feature velocity.',
      aiOpps: 'Build AI copilots and knowledge assistants within the main app.',
      softwareOpps: 'Rapid MVP engineering cycles, modular frontends, and API developer tools.',
      automationOpps: 'Automate billing logs, tier checks, and onboarding emails.',
      growthOpps: 'Technical and programmatic SEO page routing grids.',
      caseStudy: 'SEO Growth Engine / SaaS MVP Blueprint',
      icon: <Cpu className="w-5 h-5 text-black" />
    },
    {
      id: 'finance',
      name: 'Finance & Compliance',
      problems: 'Manual audit checks, compliance document audits, and data entry errors.',
      aiOpps: 'Secure document retrieval-augmented generation (RAG) indices.',
      softwareOpps: 'Portals for customer onboarding documents, secure database queries.',
      automationOpps: 'Automate risk alerts, verify uploaded certificates.',
      growthOpps: 'Search visibility for commercial compliance intent terms.',
      caseStudy: 'AI Document Assistant / Compliance Copilot',
      icon: <ShieldCheck className="w-5 h-5 text-black" />
    },
    {
      id: 'healthcare',
      name: 'Healthcare Systems',
      problems: 'Scheduling bottlenecks, repetitive patient queries, and complex report logging.',
      aiOpps: 'AI voice receptionists and FAQs handlers.',
      softwareOpps: 'Patient management consoles, schedule database grids.',
      automationOpps: 'Automate call logs, sync calendar entries to EHR systems.',
      growthOpps: 'Local patient intent SEO and service indexing.',
      caseStudy: 'AI Receptionist for Service Business',
      icon: <HeartPulse className="w-5 h-5 text-black" />
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
      icon: <Building2 className="w-5 h-5 text-black" />
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
      icon: <ShoppingBag className="w-5 h-5 text-black" />
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
      icon: <Truck className="w-5 h-5 text-black" />
    }
  ];

  const current = industries.find(ind => ind.id === activeInd) || industries[0];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">INDUSTRIES ALIGNMENT</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          SECTOR CAPABILITIES.
        </h1>
        <p className="sub-editorial">
          We configure AI, software systems, and technical organic traffic funnels across core business verticals. Verify how we align opportunities.
        </p>
      </div>

      {/* Main Grid: Selector tabs and details */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Side: Selectors */}
        <div className="w-full lg:w-1/3 flex flex-col gap-2 bg-neutral-50/50 border border-border-light rounded-lg p-5">
          <span className="text-[8px] font-bold tracking-wider text-neutral-400 uppercase mb-4">Select Business Sector</span>
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveInd(ind.id)}
              className={`text-left text-xs font-semibold px-4 py-3 rounded transition-all duration-150 flex items-center gap-3 ${
                activeInd === ind.id 
                  ? 'bg-black text-white' 
                  : 'text-color-text-secondary hover:bg-neutral-100 hover:text-black'
              }`}
            >
              {ind.icon}
              {ind.name}
            </button>
          ))}
        </div>

        {/* Right Side: Details Card */}
        <div className="w-full lg:w-2/3 bg-white border border-border-light rounded-lg p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
          <span className="absolute top-2 right-2 text-[8px] font-mono text-neutral-300">SECTOR_OPPORTUNITIES_MAP</span>

          <div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">INDUSTRY PARAMETERS</span>
            <h2 className="text-2xl font-bold text-black mt-2 mb-6">{current.name}</h2>
            
            {/* Split layout: Problems & Ops */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2">Common Problems</h4>
                <p className="text-xs text-color-text-secondary leading-relaxed">{current.problems}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2">AI Opportunities</h4>
                <p className="text-xs text-color-text-secondary leading-relaxed">{current.aiOpps}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2">Software Systems</h4>
                <p className="text-xs text-color-text-secondary leading-relaxed">{current.softwareOpps}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2">Crawl & Growth</h4>
                <p className="text-xs text-color-text-secondary leading-relaxed">{current.growthOpps}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border-light pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
            <div>
              <span className="text-[8px] font-mono text-neutral-400 block uppercase">Reference Case</span>
              <span className="text-black font-semibold uppercase">{current.caseStudy}</span>
            </div>
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition-colors w-full sm:w-auto"
            >
              Start Sector Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
