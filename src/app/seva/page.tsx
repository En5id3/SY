'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Coins, HeartPulse, Cpu, Sun, Sprout, Search, ArrowRight, Info, CheckCircle2 } from 'lucide-react';

interface Scheme {
  id: string;
  name: string;
  category: 'business' | 'health' | 'energy' | 'agriculture';
  agency: string;
  benefit: string;
  subsidyRate: string;
  eligibility: string;
  details: string;
  docs: string[];
}

const governmentSchemes: Scheme[] = [
  {
    id: 'pmegp',
    name: 'Prime Minister Employment Generation Programme (PMEGP)',
    category: 'business',
    agency: 'Ministry of MSME, Govt of India',
    benefit: 'Funding up to ₹50 Lakhs for manufacturing units and ₹20 Lakhs for service units.',
    subsidyRate: '15% to 35% based on rural/urban location and category.',
    eligibility: 'Individuals above 18 years, at least VIII standard pass for projects above ₹10 Lakhs.',
    details: 'A credit-linked subsidy scheme for setting up new micro-enterprises to generate rural and urban employment.',
    docs: ['Aadhaar Card', 'Project Report Summary', 'Educational Certificates', 'Special Category Certificate (if applicable)']
  },
  {
    id: 'cgtmse',
    name: 'Credit Guarantee Fund Trust for Micro & Small Enterprises (CGTMSE)',
    category: 'business',
    agency: 'SIDBI & Ministry of MSME',
    benefit: 'Collateral-free business credit up to ₹5 Crores for eligible micro and small businesses.',
    subsidyRate: 'Credit guarantee cover of up to 75% to 85% of the loan amount.',
    eligibility: 'New and existing Micro and Small Enterprises engaged in manufacturing or service activities.',
    details: 'Enables financial institutions to lend to first-generation entrepreneurs without demanding collateral or third-party guarantees.',
    docs: ['Udyam Registration', 'GSTIN Details', 'Income Tax Returns (Past 2 Years)', 'Business Project Report']
  },
  {
    id: 'pmjay',
    name: 'Ayushman Bharat PM-JAY (Pradhan Mantri Jan Arogya Yojana)',
    category: 'health',
    agency: 'National Health Authority (NHA)',
    benefit: 'Free health coverage up to ₹5 Lakhs per family per year for secondary and tertiary care hospitalization.',
    subsidyRate: '100% cashless treatment at all empaneled public and private hospitals.',
    eligibility: 'Families identified based on deprivation and occupational criteria in SECC 2011 database.',
    details: 'The largest public health insurance scheme in the world, providing access to major surgeries and medical therapies.',
    docs: ['Aadhaar Card', 'Ration Card', 'PM-JAY Letter / E-Card', 'Mobile Number linked to Aadhaar']
  },
  {
    id: 'solar-rooftop',
    name: 'National Grid Connected Rooftop Solar Scheme',
    category: 'energy',
    agency: 'Ministry of New & Renewable Energy (MNRE)',
    benefit: 'Subsidy support for installing solar panel grids on residential roofs or corporate buildings.',
    subsidyRate: 'Direct subsidy of ₹30,000 to ₹78,000 depending on kW system capacity (up to 3kW).',
    eligibility: 'Residential households, housing societies, and small commercial establishments.',
    details: 'Encourages solar generation at source to reduce grid load, with net-metering options to sell excess power back to utility boards.',
    docs: ['Electricity Connection Bill', 'Land Registry Copy', 'Aadhaar Card', 'Rooftop Photo Layout']
  },
  {
    id: 'pm-kisan-man-dhan',
    name: 'PM Kisan Maan-Dhan Yojana (PM-KMY)',
    category: 'agriculture',
    agency: 'Ministry of Agriculture & Farmers Welfare',
    benefit: 'Assured pension of ₹3,000 per month after reaching 60 years of age.',
    subsidyRate: '50% contribution matching by the Central Government.',
    eligibility: 'Small and marginal farmers owning cultivable land up to 2 hectares, aged 18 to 40 years.',
    details: 'A voluntary and contributory pension scheme to provide social security to farmers during their old age.',
    docs: ['Aadhaar Card', 'Bank Passbook Details', 'Land Possession Document', 'Mobile Number']
  }
];

export default function SevaPortal() {
  const [selectedCat, setSelectedCat] = useState<'all' | 'business' | 'health' | 'energy' | 'agriculture'>('all');
  const [query, setQuery] = useState('');
  
  // Calculator States
  const [calcType, setCalcType] = useState<'machinery' | 'solar'>('machinery');
  const [investment, setInvestment] = useState<number>(500000);

  const filteredSchemes = governmentSchemes.filter((sc) => {
    const matchesCat = selectedCat === 'all' || sc.category === selectedCat;
    const matchesQuery = sc.name.toLowerCase().includes(query.toLowerCase()) || 
                         sc.agency.toLowerCase().includes(query.toLowerCase()) ||
                         sc.details.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  // Calculate Subsidy
  const getEstimatedSubsidy = () => {
    if (calcType === 'solar') {
      // Solar rates flat caps
      if (investment <= 100000) return 30000;
      if (investment <= 200000) return 60000;
      return 78000;
    } else {
      // Machinery: PMEGP rates (approx 25% avg)
      return Math.round(investment * 0.25);
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen text-black antialiased">
      {/* 1. Custom Seva Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-light/80 py-4 px-6">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-[0.8] select-none font-bold">
              <span className="font-sans font-light text-xl tracking-tighter text-black lowercase">soch</span>
              <span className="font-sans font-extrabold text-xl tracking-tighter text-black lowercase pl-5">yeah</span>
            </div>
            <span className="text-xs font-mono bg-black text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">SEVA</span>
          </div>

          <div className="text-[10px] font-mono text-color-text-muted hidden sm:block uppercase">
            PUBLIC INFORMATION HUB // GOVERNMENT SCHEMES
          </div>
          
          <Link 
            href="/contact" 
            className="text-[10px] font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors px-4 py-2 rounded"
          >
            Request Assistance
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        {/* 2. Editorial Header */}
        <div className="max-w-[800px] mb-16 flex flex-col gap-6">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">PUBLIC WELFARE SERVICE</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black uppercase leading-tight">
            SCHEME DIRECTORY & SUBSIDY CALCULATOR.
          </h1>
          <p className="sub-editorial text-color-text-secondary leading-relaxed font-semibold">
            Helping small businesses, farmers, and residential communities locate central and state subsidies to optimize operational capital and health coverage.
          </p>
        </div>

        {/* 3. Interactive Subsidy Estimator Panel */}
        <section className="mb-20 border border-border-light bg-white rounded-lg p-6 md:p-8 shadow-sm">
          <div className="max-w-[600px] mb-8">
            <span className="text-[9px] font-bold tracking-wider text-neutral-400 uppercase">Interactive Calculator</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-black uppercase tracking-tight mt-1 mb-2">
              Subsidy Estimator
            </h2>
            <p className="text-xs text-color-text-secondary leading-relaxed">
              Drag the slider representing your planned capital expenditure to estimate government subsidy allocations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Control Column */}
            <div className="flex flex-col gap-6 bg-neutral-50 border border-neutral-100 rounded-lg p-5">
              <div className="flex gap-2">
                <button
                  onClick={() => { setCalcType('machinery'); setInvestment(500000); }}
                  className={`flex-1 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded border transition-colors ${
                    calcType === 'machinery' ? 'bg-black text-white border-black' : 'bg-white border-neutral-200 text-color-text-secondary hover:border-black'
                  }`}
                >
                  Machinery (MSME)
                </button>
                <button
                  onClick={() => { setCalcType('solar'); setInvestment(150000); }}
                  className={`flex-1 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded border transition-colors ${
                    calcType === 'solar' ? 'bg-black text-white border-black' : 'bg-white border-neutral-200 text-color-text-secondary hover:border-black'
                  }`}
                >
                  Residential Solar
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400 uppercase">Capital Investment:</span>
                  <span className="text-black font-bold">₹{investment.toLocaleString()}</span>
                </div>
                <input 
                  type="range"
                  min={calcType === 'solar' ? 50000 : 100000}
                  max={calcType === 'solar' ? 500000 : 2500000}
                  step={10000}
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer h-1 bg-neutral-200 rounded-lg appearance-none"
                />
              </div>
            </div>

            {/* Calculations Outcome Output */}
            <div className="border border-border-light rounded-lg p-6 bg-white flex flex-col justify-between min-h-[160px] relative overflow-hidden">
              <span className="absolute top-2 right-2 text-[8px] font-mono text-neutral-300">ESTIMATED_SUPPORT_OUTPUT</span>
              <div>
                <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider block">Estimated Gov Subsidy</span>
                <div className="text-3xl md:text-4xl font-extrabold text-black mt-2">
                  ₹{getEstimatedSubsidy().toLocaleString()}
                </div>
              </div>
              <div className="border-t border-neutral-100 pt-4 flex justify-between items-center text-[10px] font-mono mt-4">
                <span className="text-neutral-400 uppercase">Estimated Subsidy Rate:</span>
                <span className="text-black font-bold">{calcType === 'solar' ? 'Slab-Based' : 'Avg ~25%'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Schemes Index directory */}
        <section className="border-t border-border-light pt-16">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-10 pb-6 border-b border-border-light">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {['all', 'business', 'health', 'energy', 'agriculture'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat as any)}
                  className={`text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded transition-colors ${
                    selectedCat === cat 
                      ? 'bg-black text-white' 
                      : 'bg-white text-color-text-secondary hover:bg-neutral-100 hover:text-black border border-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search filter input */}
            <div className="relative w-full md:w-[280px]">
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search schemes..."
                className="w-full border border-border-light bg-white rounded px-4 py-2.5 pl-10 text-xs outline-none focus:border-black transition-colors"
              />
              <Search size={14} className="absolute left-3.5 top-3.5 text-neutral-400" />
            </div>
          </div>

          {/* Scheme cards grid */}
          <div className="flex flex-col gap-6">
            {filteredSchemes.map((sc) => (
              <div 
                key={sc.id} 
                className="border border-border-light bg-white rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between hover:border-black transition-all duration-200 shadow-sm"
              >
                {/* Left side detail texts */}
                <div className="flex-[3] flex flex-col gap-4 justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[8px] font-bold uppercase tracking-wider bg-neutral-100 text-color-text-secondary border border-neutral-200/50 px-2 py-0.5 rounded">
                        {sc.category}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400">{sc.agency}</span>
                    </div>
                    <h3 className="text-base font-bold text-black mb-2">{sc.name}</h3>
                    <p className="text-xs text-color-text-secondary leading-relaxed mb-4">{sc.details}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                      <div>
                        <span className="text-[8px] font-mono text-neutral-400 block uppercase">Benefit</span>
                        <span className="text-black font-semibold">{sc.benefit}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-neutral-400 block uppercase">Eligibility Criteria</span>
                        <span className="text-black font-semibold">{sc.eligibility}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side checklists and ctas */}
                <div className="flex-[2] bg-neutral-50/50 border border-neutral-100 rounded-lg p-6 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider block mb-3">Required Documents Checklist</span>
                    <ul className="flex flex-col gap-2">
                      {sc.docs.map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[10px] text-color-text-secondary font-medium">
                          <CheckCircle2 size={12} className="text-black flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="https://www.myscheme.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors py-3 rounded mt-6 inline-block"
                  >
                    View Official Application
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Support CTA Banner */}
        <section className="bg-black text-white rounded-lg p-8 md:p-12 text-center mt-20">
          <div className="max-w-[500px] mx-auto flex flex-col gap-5 items-center">
            <h3 className="text-lg font-bold uppercase tracking-tighter">Need Help Navigating Subsidies?</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We compile and structure project reports for banking audits, setup Udyam micro registrations, and optimize government applications for corporate client units.
            </p>
            <Link 
              href="/contact" 
              className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-6 py-3 rounded mt-2"
            >
              Consult Our Systems Partners
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-light bg-white py-8 px-6 text-center text-[10px] text-color-text-muted">
        <p>© 2026 SOCHYEAH Seva Portal. Under direct distribution license. This page serves public government records directory parameters.</p>
      </footer>
    </div>
  );
}
