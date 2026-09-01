'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Coins, HeartPulse, Cpu, Sun, Sprout, Search, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import SevaHeader from '@/components/SevaHeader';

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
    agency: 'Ministry of MSME, Govt of India / KVIC',
    benefit: 'Subsidy for setting up new micro-enterprises. Manufacturing units eligible up to ₹50 Lakhs; Service units eligible up to ₹20 Lakhs.',
    subsidyRate: 'Urban Area: 15% (Gen) / 25% (Special). Rural Area: 25% (Gen) / 35% (Special). Margin money is back-ended.',
    eligibility: 'Individuals above 18 years. Min VIII standard pass for projects >₹10L (mfg) or >₹5L (srv). Only new units eligible. Bank credit-link is mandatory.',
    details: 'A credit-linked subsidy scheme promoting rural and urban entrepreneurship. Promoter contribution: 10% (General), 5% (Special). Requires compulsory EDP training.',
    docs: ['Aadhaar Card', 'Detailed Project Report (DPR)', 'VIII Pass Education Certificate', 'Caste/Special Category Certificate', 'Rural Area Certificate from Gram Panchayat']
  },
  {
    id: 'cgtmse',
    name: 'Credit Guarantee Fund Trust for Micro & Small Enterprises (CGTMSE)',
    category: 'business',
    agency: 'SIDBI & Ministry of MSME, Govt of India',
    benefit: 'Collateral-free business credit (working capital and term loans) up to ₹5 Crores.',
    subsidyRate: 'Guarantees 75% to 85% of credit risk. Annual Guarantee Fee (AGF) starts at 0.37% depending on loan slab.',
    eligibility: 'New and existing Micro & Small Enterprises (MSEs) in manufacturing or service. Borrower must not have default history on banking credits.',
    details: 'Enables financial institutions to lend to entrepreneurs without requiring collateral security or third-party guarantees. Covers up to 85% for women-owned units.',
    docs: ['Udyam Registration Certificate', 'GSTIN Details', 'Income Tax Returns (Past 2 Years)', 'Project Cost Reports & Bank Sanction Letter']
  },
  {
    id: 'startup-seed-fund',
    name: 'Startup India Seed Fund Scheme (SISFS)',
    category: 'business',
    agency: 'DPIIT, Ministry of Commerce & Industry',
    benefit: 'Grants up to ₹20 Lakhs for validation/prototype development; Debt/convertible debentures up to ₹50 Lakhs for market entry.',
    subsidyRate: '100% direct seed funding disbursed via selected Incubator channels.',
    eligibility: 'DPIIT-recognized startup incorporated less than 2 years ago. Must have a viable prototype or business plan. Shareholding of Indian promoters must be min 51%.',
    details: 'Financial assistance for startups for proof of concept, prototype development, product trials, market entry, and commercialization. Excludes units receiving >₹10L external gov grants.',
    docs: ['DPIIT Recognition Certificate', 'Incubator Nomination Form', 'Detailed Prototype Pitch Deck', 'Incorporation Certificate & PAN Card']
  },
  {
    id: 'zed-certification',
    name: 'MSME Sustainable (ZED) Certification Scheme',
    category: 'business',
    agency: 'Ministry of MSME, Govt of India',
    benefit: 'Financial subsidy on certification costs to encourage Zero Defect Zero Effect environmental practices.',
    subsidyRate: 'Subsidy rate: 80% for Micro, 60% for Small, and 50% for Medium enterprises. Additional 10% for women/SC/ST owned units.',
    eligibility: 'Any enterprise registered under Udyam. Covers certification assessments on 20 key parameters including quality control and waste management.',
    details: 'Provides a structured roadmap to guide MSMEs to reduce waste, increase productivity, save energy, and obtain global standards recognition.',
    docs: ['Udyam Registration Certificate', 'PAN and GST Certificates', 'Plant Layout Photographs', 'ZED Assessment Checklists']
  },
  {
    id: 'pm-surya-ghar',
    name: 'PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar)',
    category: 'energy',
    agency: 'Ministry of New & Renewable Energy (MNRE)',
    benefit: 'Cash subsidies for residential solar grid installations, supplying up to 300 units of free power monthly.',
    subsidyRate: '₹30,000 per kW for systems up to 2 kW; ₹18,000 for additional kW. Maximum total subsidy capped at ₹78,000.',
    eligibility: 'Residential households with adequate roof space. Domestic Content Requirement (DCR) rules apply: solar modules must be manufactured in India.',
    details: 'Supports local clean energy production. Net-metering setup with utility boards allows consumers to export surplus energy to the grid.',
    docs: ['Recent Electricity Connection Bill', 'Land Registry Copy', 'Aadhaar Card', 'Rooftop Structural Stability Certificate']
  },
  {
    id: 'pm-kusum',
    name: 'PM-KUSUM (Agricultural Solar Pumps Component-B)',
    category: 'energy',
    agency: 'MNRE & State Nodal Renewable Agencies',
    benefit: 'Financial subsidies to install standalone solar water pumps up to 7.5 HP capacity to replace diesel farming pumps.',
    subsidyRate: 'Central Subsidy: 30%, State Subsidy: 30%, Bank Loan: 30%. Farmer contribution: 10%. (Central Subsidy is 50% in Hilly/NE States).',
    eligibility: 'Individual farmers, farmer groups, cooperatives, and water user associations owning cultivable land with water sources.',
    details: 'Secures irrigation facilities for farmers while reducing agricultural carbon footprints and dependence on state grid subsidies.',
    docs: ['Land Khasra Jamabandi (Farad)', 'Aadhaar Card', 'Bank Passbook Details', 'Groundwater Depth Feasibility Report']
  },
  {
    id: 'pmjay',
    name: 'Ayushman Bharat PM-JAY (Pradhan Mantri Jan Arogya Yojana)',
    category: 'health',
    agency: 'National Health Authority (NHA)',
    benefit: 'Free health coverage up to ₹5 Lakhs per family per year for secondary and tertiary care hospitalization.',
    subsidyRate: '100% cashless treatment at all empaneled public and private hospitals nationwide.',
    eligibility: 'Families identified based on deprivation and occupational criteria in SECC 2011 database. No limits on family size or age.',
    details: 'Covers over 1,900 medical procedures including surgery, oncologist therapies, and medications from day one with no pre-existing conditions exclusion.',
    docs: ['Aadhaar Card', 'Ration Card (showing family listing)', 'PM-JAY Golden Card / Letter', 'Active Mobile Number']
  },
  {
    id: 'pmjay-senior-cover',
    name: 'Ayushman Bharat Senior Citizen Health Cover (70+)',
    category: 'health',
    agency: 'Ministry of Health & Family Welfare',
    benefit: 'Distinct healthcare top-up card providing up to ₹5 Lakhs per year exclusively for elderly care.',
    subsidyRate: '100% cashless health insurance cover with no premium cost.',
    eligibility: 'All Indian citizens aged 70 years and above. Provided irrespective of family income or economic deprivation criteria.',
    details: 'Special top-up cover for seniors. If the family is already covered under PM-JAY, an additional ₹5L top-up is credited specifically for the elder.',
    docs: ['Aadhaar Card (containing verified birth date)', 'Age Verification Certificate', 'Mobile Number']
  },
  {
    id: 'cold-storage-nhb',
    name: 'NHB Subsidy for Cold Storage & Horticulture (MIDH)',
    category: 'agriculture',
    agency: 'National Horticulture Board (NHB)',
    benefit: 'Financial subsidies for building or modernizing cold storage facilities for horticultural produce.',
    subsidyRate: 'Back-ended capital subsidy: 35% of project cost (50% in case of hilly areas, NE states, and Scheduled Areas).',
    eligibility: 'Individual promoters, FPOs, cooperatives, and corporations. Project must be linked with a commercial bank term loan.',
    details: 'Supports preservation infrastructure. Minimum cold storage chamber capacity must be 5,000 MT (relaxable in hilly regions).',
    docs: ['Bank Term Loan Sanction Letter', 'Registered Land Ownership Title (min 15 year lease)', 'Detailed Project Report (DPR)', 'Basic Engineering Design Report']
  },
  {
    id: 'pmfme-food',
    name: 'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
    category: 'agriculture',
    agency: 'Ministry of Food Processing Industries (MoFPI)',
    benefit: 'Credit-linked capital subsidy for setting up or upgrading micro food processing units.',
    subsidyRate: 'Subsidy rate: 35% of eligible project cost. Maximum subsidy capped at ₹10 Lakhs per enterprise.',
    eligibility: 'Micro-units with plant machinery investment under ₹1 Crore. Individual entrepreneurs, SHGs, FPOs, and cooperatives are eligible.',
    details: 'Supports food processing units with technology upgrades, packaging, and marketing resources, emphasizing One District One Product (ODOP).',
    docs: ['Udyam Registration Certificate', 'FSSAI License', 'Income Statements & PAN Card', 'Land Ownership or Registered Lease Deeds']
  }
];

export default function SevaPortal() {
  const [selectedCat, setSelectedCat] = useState<'all' | 'business' | 'health' | 'energy' | 'agriculture'>('all');
  const [query, setQuery] = useState('');
  
  const filteredSchemes = governmentSchemes.filter((sc) => {
    const matchesCat = selectedCat === 'all' || sc.category === selectedCat;
    const matchesQuery = sc.name.toLowerCase().includes(query.toLowerCase()) || 
                         sc.agency.toLowerCase().includes(query.toLowerCase()) ||
                         sc.details.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });


  return (
    <div className="bg-[#fafafa] min-h-screen text-black antialiased">
      {/* 1. Custom Seva Header Matching Main Site */}
      <SevaHeader />

      <main className="max-w-[1200px] mx-auto px-6 pt-28 md:pt-32 pb-16 md:pb-24">
        {/* 2. Editorial Header */}
        <div className="max-w-[800px] mb-16 flex flex-col gap-6">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">PUBLIC WELFARE SERVICE</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black uppercase leading-tight">
            GOVERNMENT SCHEMES DIRECTORY.
          </h1>
          <p className="sub-editorial text-color-text-secondary leading-relaxed font-semibold">
            Helping small businesses, farmers, and residential communities locate central and state subsidies to optimize operational capital and health coverage.
          </p>
        </div>

        {/* Unified Application Portal Callout Box */}
        <div className="mb-16 border border-border-light bg-white rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-center shadow-sm">
          <div className="max-w-[700px] flex flex-col gap-2">
            <span className="text-[9px] font-bold tracking-wider text-neutral-400 uppercase">Official Portal</span>
            <h2 className="text-lg font-extrabold text-black uppercase tracking-tight">
              Unified National Application Hub
            </h2>
            <p className="text-xs text-color-text-secondary leading-relaxed">
              All welfare, health, and business subsidy programs listed in this directory can be verified and directly applied for online via the central government platform.
            </p>
          </div>
          <a 
            href="https://www.myscheme.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors px-6 py-4 rounded whitespace-nowrap"
          >
            Apply on National Portal (myScheme.gov.in)
          </a>
        </div>


        {/* 4. Schemes Index directory */}
        <section id="schemes-directory" className="border-t border-border-light pt-16 scroll-mt-28">
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

                {/* Right side checklists */}
                <div className="flex-[2] bg-neutral-50/50 border border-neutral-100 rounded-lg p-6 flex flex-col justify-center">
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
            <a 
              href="https://sochyeah.com/contact" 
              className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-6 py-3 rounded mt-2 inline-block"
            >
              Consult Our Systems Partners
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-light bg-white py-8 px-6 text-center text-[10px] text-color-text-muted">
        <p>© 2026 SOCHYEAH Seva Portal. Under direct distribution license. This page serves public government records directory parameters.</p>
      </footer>
    </div>
  );
}
