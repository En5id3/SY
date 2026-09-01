'use client';

import React, { useState } from 'react';
import SevaHeader from '@/components/SevaHeader';
import { Search, CheckCircle2 } from 'lucide-react';

interface Scheme {
  id: string;
  name: string;
  category: 'business' | 'health' | 'energy' | 'agriculture';
  agency: string;
  benefit: string;
  eligibility: string;
  docs: string[];
  details: string;
}

const schemes: Scheme[] = [
  {
    id: 'pmegp',
    name: 'Prime Minister Employment Generation Programme (PMEGP)',
    category: 'business',
    agency: 'Ministry of MSME & KVIC',
    benefit: '15% to 35% Capital Subsidy on project costs up to ₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Service)',
    eligibility: 'Individuals above 18 years, min 8th pass for projects above ₹10L (Mfg) / ₹5L (Service), SHGs, Cooperatives',
    docs: ['Aadhaar Card', 'PAN Card', 'Detailed Project Report (DPR)', 'Caste/Category Certificate', 'Educational Qualification Marksheet'],
    details: 'Credit-linked subsidy program to generate self-employment ventures in non-farm rural and urban sectors through institutional finance.'
  },
  {
    id: 'cgtmse',
    name: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
    category: 'business',
    agency: 'Ministry of MSME & SIDBI',
    benefit: 'Collateral-free credit facility up to ₹500 Lakhs (₹5 Crore) with guarantee cover up to 85%',
    eligibility: 'New and existing Micro and Small Enterprises engaged in manufacturing or service activities',
    docs: ['Udyam Registration Certificate', 'Audited Financial Statements (Last 2-3 Yrs)', 'ITR Acknowledgements', 'KYC Documents of Promoters', 'Project Feasibility Report'],
    details: 'Enables third-party collateral-free loan disbursement by banks and NBFCs to viable MSME units by providing government-backed credit guarantees.'
  },
  {
    id: 'sisfs',
    name: 'Startup India Seed Fund Scheme (SISFS)',
    category: 'business',
    agency: 'DPIIT, Ministry of Commerce',
    benefit: 'Up to ₹20 Lakhs as grant for PoC/prototype; Up to ₹50 Lakhs via convertible debentures/debt for market entry',
    eligibility: 'DPIIT-recognized startup incorporated ≤ 2 years prior, with business idea to develop product/service with market fit',
    docs: ['DPIIT Recognition Certificate', 'Incorporation Certificate', 'Pitch Deck & Proof of Concept Outline', 'Founder KYC & Bank Details'],
    details: 'Provides financial assistance to early-stage startups for proof of concept, prototype development, product trials, and commercialization.'
  },
  {
    id: 'zed',
    name: 'MSME Sustainable (ZED) Certification Scheme',
    category: 'business',
    agency: 'Ministry of MSME',
    benefit: 'Up to 80% subsidy on certification cost (Bronze, Silver, Gold) + financial support up to ₹5 Lakhs for handholding',
    eligibility: 'All manufacturing Micro, Small, and Medium Enterprises with valid Udyam Registration',
    docs: ['Udyam Certificate', 'Factory/Unit Location Proof', 'Self-Assessment Quality Checklist', 'Bank Account Details'],
    details: 'Incentivizes MSMEs to adopt Zero Defect Zero Effect manufacturing practices, enhancing global competitiveness and environmental compliance.'
  },
  {
    id: 'pm-surya-ghar',
    name: 'PM Surya Ghar: Muft Bijli Yojana',
    category: 'energy',
    agency: 'Ministry of New & Renewable Energy (MNRE)',
    benefit: '₹30,000 subsidy for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW+ residential rooftop solar installations',
    eligibility: 'Indian citizens owning residential roof property with valid domestic grid electricity connection',
    docs: ['Electricity Consumer Bill (Recent)', 'Aadhaar Card', 'Rooftop Ownership Proof / Property Tax Receipt', 'Bank Passbook / Cancelled Cheque'],
    details: 'National initiative providing direct capital subsidy into bank accounts to power 1 crore households with up to 300 units of free monthly solar electricity.'
  },
  {
    id: 'pm-kusum',
    name: 'PM-KUSUM (Component B & C: Solar Agricultural Pumps)',
    category: 'energy',
    agency: 'Ministry of New & Renewable Energy (MNRE)',
    benefit: '60% overall subsidy (30% Central + 30% State Govt) on standalone solar pumps and solarization of grid-connected agricultural pumps',
    eligibility: 'Individual farmers, Farmer Producer Organizations (FPOs), Cooperatives, Water User Associations',
    docs: ['Land Ownership Record (7/12, Jamabandi/Khasra)', 'Aadhaar Card', 'Bank Account Details', 'Existing Electricity Connection Bill (if applicable)'],
    details: 'De-dieselizes irrigation across rural India by providing subsidized standalone solar agricultural pumps and solar feeder installations.'
  },
  {
    id: 'pmjay',
    name: 'Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    category: 'health',
    agency: 'National Health Authority (NHA), MoHFW',
    benefit: 'Cashless, paperless secondary and tertiary hospitalization health cover of ₹5,00,000 per family per year',
    eligibility: 'Deprived rural and occupational urban families identified in SECC 2011 database; verified through PM-JAY portal',
    docs: ['Aadhaar Card', 'Ration Card (NFSA)', 'PMJAY Beneficiary Family ID / Letter', 'Active Mobile Number'],
    details: 'World’s largest government-funded healthcare assurance scheme covering over 1,900 surgical and medical procedures across empanelled public and private hospitals.'
  },
  {
    id: 'pmjay-senior-70',
    name: 'AB-PMJAY Senior Citizen Universal Healthcare (70+ Years)',
    category: 'health',
    agency: 'National Health Authority (NHA)',
    benefit: 'Distinct ₹5,00,000 annual health cover for all seniors aged 70+, irrespective of household income tier',
    eligibility: 'All Indian citizens aged 70 years and above (as verified strictly by Aadhaar birth date)',
    docs: ['Aadhaar Card (Mandatory age and e-KYC proof)', 'Active Mobile Number linked with Aadhaar'],
    details: 'Universal health coverage tier ensuring all senior citizens aged 70 and above receive distinct cashless hospitalization coverage with zero family income restrictions.'
  },
  {
    id: 'midh-cold-chain',
    name: 'Mission for Integrated Development of Horticulture (MIDH) – Cold Storage & Post-Harvest',
    category: 'agriculture',
    agency: 'Ministry of Agriculture & Farmers Welfare',
    benefit: '35% to 50% capital subsidy on integrated packhouses, cold rooms, and cold chain infrastructure up to ₹3.5 Crore',
    eligibility: 'Farmers, Grower Associations, FPOs, Self Help Groups, and Private Agri-Enterprises',
    docs: ['Land Title / Long-term Lease Agreement', 'Detailed Techno-Economic Feasibility Report (TEFR)', 'Bank In-Principle Loan Sanction', 'Udyam / Company Registration'],
    details: 'Funds post-harvest management infrastructure to reduce post-harvest crop losses and improve cold chain logistics across fruit and vegetable clusters.'
  },
  {
    id: 'pmfme',
    name: 'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
    category: 'agriculture',
    agency: 'Ministry of Food Processing Industries (MoFPI)',
    benefit: 'Credit-linked capital subsidy at 35% of eligible project cost with a ceiling of ₹10 Lakhs per micro food processing unit',
    eligibility: 'Individual micro food processing entrepreneurs, FPOs, SHGs, and Producer Cooperatives with existing operations',
    docs: ['Aadhaar & PAN', 'Udyam Certificate', 'FSSAI License / Basic Registration', 'Bank Statement (Last 6 Months)', 'Quotation for Machinery/Equipment'],
    details: 'Upgrades unorganized micro food processing units with technology, quality testing, and branding under the One District One Product (ODOP) framework.'
  }
];

export default function SevaDirectory() {
  const [selectedCat, setSelectedCat] = useState<'all' | 'business' | 'health' | 'energy' | 'agriculture'>('all');
  const [query, setQuery] = useState('');

  const filteredSchemes = schemes.filter(sc => {
    const matchesCat = selectedCat === 'all' || sc.category === selectedCat;
    const matchesQuery = sc.name.toLowerCase().includes(query.toLowerCase()) ||
                          sc.benefit.toLowerCase().includes(query.toLowerCase()) ||
                          sc.agency.toLowerCase().includes(query.toLowerCase()) ||
                          sc.details.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'business':
        return 'bg-blue-50 text-blue-800 border-blue-200/50';
      case 'energy':
        return 'bg-sky-50 text-sky-800 border-sky-200/50';
      case 'health':
        return 'bg-purple-50 text-purple-800 border-purple-200/50';
      case 'agriculture':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200/50';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200/50';
    }
  };

  return (
    <div className="bg-[#fafafc] min-h-screen text-slate-900 antialiased">
      {/* 1. Custom Seva Header Matching Main Site */}
      <SevaHeader />

      <main className="max-w-[1200px] mx-auto px-6 pt-28 md:pt-32 pb-16 md:pb-24">
        {/* 2. Editorial Header */}
        <div className="max-w-[800px] mb-14 flex flex-col gap-5">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start">
            PUBLIC WELFARE DIRECTORY
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
            GOVERNMENT SCHEMES DIRECTORY.
          </h1>
          <p className="sub-editorial text-slate-600 leading-relaxed font-medium">
            Helping small businesses, farmers, and residential communities locate central and state subsidies to optimize operational capital and health coverage.
          </p>
        </div>

        {/* Unified Application Portal Callout Box (Dual Gradient) */}
        <div className="mb-14 bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 justify-between items-center shadow-xl shadow-indigo-950/15 relative overflow-hidden">
          <div className="max-w-[700px] flex flex-col gap-2 relative z-10">
            <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-300 uppercase">
              OFFICIAL CENTRAL PORTAL
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-tight">
              Unified National Application Hub
            </h2>
            <p className="text-xs text-indigo-200 leading-relaxed">
              All welfare, health, and business subsidy programs listed in this directory can be verified and directly applied for online via the official national platform.
            </p>
          </div>
          <a 
            href="https://www.myscheme.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-4 rounded-full shadow-md whitespace-nowrap relative z-10 hover:scale-[1.02]"
          >
            Apply on National Portal (myScheme.gov.in)
          </a>
        </div>

        {/* 4. Schemes Index directory */}
        <section id="schemes-directory" className="border-t border-indigo-100/70 pt-12 scroll-mt-28">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-10 pb-6 border-b border-indigo-100/70">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {['all', 'business', 'health', 'energy', 'agriculture'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat as any)}
                  className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-150 ${
                    selectedCat === cat 
                      ? 'bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white shadow-sm shadow-indigo-950/20 font-bold' 
                      : 'bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-950 border border-indigo-100'
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
                className="w-full border border-indigo-200 bg-white rounded-full px-4 py-2.5 pl-10 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all shadow-xs text-slate-900"
              />
              <Search size={14} className="absolute left-3.5 top-3.5 text-indigo-600" />
            </div>
          </div>

          {/* Scheme cards grid */}
          <div className="flex flex-col gap-6">
            {filteredSchemes.map((sc) => (
              <div 
                key={sc.id} 
                className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between hover:border-indigo-300 transition-all duration-300 shadow-sm shadow-indigo-900/5 card-hover-effect"
              >
                {/* Left side detail texts */}
                <div className="flex-[3] flex flex-col gap-4 justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(sc.category)}`}>
                        {sc.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{sc.agency}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{sc.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{sc.details}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                      <div className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3.5">
                        <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold mb-1">Financial Benefit</span>
                        <span className="text-slate-900 font-semibold leading-relaxed">{sc.benefit}</span>
                      </div>
                      <div className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3.5">
                        <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold mb-1">Eligibility Criteria</span>
                        <span className="text-slate-900 font-semibold leading-relaxed">{sc.eligibility}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side checklists */}
                <div className="flex-[2] bg-gradient-to-br from-purple-50/20 via-indigo-50/20 to-blue-50/25 border border-indigo-100/60 rounded-xl p-6 flex flex-col justify-center">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-indigo-800 uppercase tracking-wider block mb-3">
                      Required Documents Checklist
                    </span>
                    <ul className="flex flex-col gap-2">
                      {sc.docs.map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 size={13} className="text-indigo-600 flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Support CTA Banner */}
        <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 md:p-12 text-center mt-20 shadow-xl shadow-indigo-950/15 relative overflow-hidden">
          <div className="max-w-[500px] mx-auto flex flex-col gap-5 items-center relative z-10">
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">Need Help Navigating Subsidies?</h3>
            <p className="text-xs text-indigo-200 leading-relaxed">
              We compile and structure project reports for banking audits, setup Udyam micro registrations, and optimize government applications for corporate client units.
            </p>
            <a 
              href="https://sochyeah.com/contact" 
              className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-3.5 rounded-full shadow-md hover:scale-[1.02] mt-2 inline-block"
            >
              Consult Our Systems Partners
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-indigo-100/70 bg-white py-8 px-6 text-center text-xs text-slate-400">
        <p>© 2026 SOCHYEAH Seva Portal. Under direct distribution license. This page serves public government records directory parameters.</p>
      </footer>
    </div>
  );
}
