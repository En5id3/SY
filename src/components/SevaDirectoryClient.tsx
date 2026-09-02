'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { schemesData, schemeCategories } from '@/data/schemes';
import { 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink, 
  BookOpen, 
  AlertCircle, 
  Building2, 
  Sun, 
  HeartPulse, 
  Sprout,
  HelpCircle,
  X
} from 'lucide-react';

export default function SevaDirectoryClient() {
  const [selectedCat, setSelectedCat] = useState<'all' | 'business' | 'health' | 'energy' | 'agriculture'>('all');
  const [query, setQuery] = useState('');

  const normalize = (str: string) => str.toLowerCase().replace(/[\s\-_]/g, '');

  const filteredSchemes = schemesData.filter(sc => {
    const matchesCat = selectedCat === 'all' || sc.category === selectedCat;
    
    if (!query.trim()) return matchesCat;

    const q = query.toLowerCase().trim();
    const qNorm = normalize(query);

    const matchesName = sc.name.toLowerCase().includes(q) || normalize(sc.name).includes(qNorm);
    const matchesShortName = sc.shortName.toLowerCase().includes(q) || normalize(sc.shortName).includes(qNorm);
    const matchesSlug = sc.slug.toLowerCase().includes(q) || normalize(sc.slug).includes(qNorm);
    const matchesBenefit = sc.benefit.toLowerCase().includes(q);
    const matchesAgency = sc.agency.toLowerCase().includes(q) || sc.ministry.toLowerCase().includes(q);
    const matchesOverview = sc.overview.toLowerCase().includes(q);
    const matchesKeywords = sc.searchKeywords.some(k => k.toLowerCase().includes(q) || normalize(k).includes(qNorm));
    const matchesBeneficiaries = sc.beneficiaryTypes.some(b => b.toLowerCase().includes(q));

    return matchesCat && (matchesName || matchesShortName || matchesSlug || matchesBenefit || matchesAgency || matchesOverview || matchesKeywords || matchesBeneficiaries);
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

  const getCategoryIcon = (catKey: string) => {
    switch (catKey) {
      case 'business':
        return <Building2 size={16} className="text-blue-600" />;
      case 'energy':
        return <Sun size={16} className="text-sky-600" />;
      case 'health':
        return <HeartPulse size={16} className="text-purple-600" />;
      case 'agriculture':
        return <Sprout size={16} className="text-indigo-600" />;
      default:
        return null;
    }
  };

  const homepageFaqs = [
    {
      q: 'What are government schemes and subsidies in India?',
      a: 'Government schemes are public assistance initiatives launched by the Central Government of India or State Governments to deliver financial subsidies, credit guarantees, welfare benefits, healthcare coverage, and technical support to individuals, small businesses, farmers, and marginalized communities.'
    },
    {
      q: 'How do I find government schemes I am eligible for?',
      a: 'Use the SEVA search tool to filter schemes by sector (MSME, Agriculture, Energy, Healthcare), beneficiary category (Women, Unemployed Youth, Farmers, Senior Citizens), or specific benefit type. Review the eligibility criteria and required documents on each scheme page before applying.'
    },
    {
      q: 'Where should I verify scheme information before applying?',
      a: 'Always verify guidelines, eligibility criteria, and application forms directly through the designated official government portal (such as kviconline.gov.in for PMEGP, pmsuryaghar.gov.in for solar, or myscheme.gov.in) linked on every SEVA scheme page.'
    },
    {
      q: 'Is SEVA an official Government of India website?',
      a: 'No. SEVA is an independent public information directory. We are not affiliated with or operated by any government ministry. We compile verified guidelines from official gazettes and link users directly to authorized government portals.'
    },
    {
      q: 'How often is the scheme information on SEVA reviewed?',
      a: 'Our editorial team audits scheme parameters periodically against updated ministerial gazettes and notifications. Each scheme page displays an explicit "Information last reviewed" date to maintain transparency.'
    }
  ];

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-28 md:pt-32 pb-16 md:pb-24">
      {/* 1. Primary Editorial Header with Exact H1 */}
      <div className="max-w-[840px] mb-12 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3.5 py-1 rounded-full border border-indigo-200/60 self-start">
          INDEPENDENT PUBLIC INFORMATION PORTAL
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          Government Schemes Directory
        </h1>
        <p className="sub-editorial text-slate-600 leading-relaxed font-medium">
          Find central and state government schemes, subsidies, and welfare programs in India for businesses, MSMEs, farmers, healthcare, energy, and residential communities. Explore structured eligibility requirements, financial assistance summaries, and direct links to official application portals.
        </p>
      </div>

      {/* 2. Mandatory Independent Trust Notice */}
      <div className="mb-12 border border-amber-200/80 bg-amber-50/40 rounded-2xl p-5 md:p-6 flex items-start gap-4 text-xs text-amber-950 shadow-xs">
        <AlertCircle size={20} className="text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="font-bold uppercase tracking-wider text-[10px] text-amber-800 font-mono">
            Independent Directory Notice
          </span>
          <p className="leading-relaxed">
            SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source (<a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-amber-900">myScheme.gov.in</a>) before applying.
          </p>
        </div>
      </div>

      {/* 3. Browse Scheme Categories Hub */}
      <section className="mb-14">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider block mb-1">
              EXPLORE WELFARE DOMAINS
            </span>
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
              Government Scheme Categories
            </h2>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">4 Core Domains</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(schemeCategories).map(([key, cat]) => (
            <Link
              key={key}
              href={`/schemes/${cat.slug}`}
              className="border border-indigo-100/80 bg-white rounded-2xl p-5 hover:border-indigo-300 transition-all card-hover-effect flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(key)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold">
                    {cat.schemeIds.length} Schemes
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-900 transition-colors mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="inline-flex items-center text-xs font-bold text-indigo-900 group-hover:text-indigo-700 pt-2 border-t border-slate-50">
                <span>Explore {cat.name}</span>
                <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Unified Central Portal Callout Banner */}
      <div className="mb-14 bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 justify-between items-center shadow-xl shadow-indigo-950/15 relative overflow-hidden">
        <div className="max-w-[700px] flex flex-col gap-2 relative z-10">
          <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-300 uppercase">
            OFFICIAL CENTRAL APPLICATION HUB
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-tight">
            Apply on the Unified National Portal
          </h2>
          <p className="text-xs text-indigo-200 leading-relaxed">
            All welfare, health, solar, and MSME subsidy programs listed in this directory can be verified and directly applied for online via the official Government of India platform.
          </p>
        </div>
        <a 
          href="https://www.myscheme.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto text-center text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-4 rounded-full shadow-md whitespace-nowrap relative z-10 hover:scale-[1.02]"
        >
          Visit the official myScheme portal (myScheme.gov.in)
        </a>
      </div>

      {/* 5. Schemes Directory Filter & Search (Interactive & Accessible) */}
      <section id="schemes-directory" className="border-t border-indigo-100/70 pt-12 scroll-mt-28 mb-16">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8 pb-6 border-b border-indigo-100/70">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Schemes' },
              { id: 'business', label: 'MSME & Business' },
              { id: 'health', label: 'Healthcare' },
              { id: 'energy', label: 'Solar & Energy' },
              { id: 'agriculture', label: 'Agriculture & Food' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id as 'all' | 'business' | 'health' | 'energy' | 'agriculture')}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-150 cursor-pointer ${
                  selectedCat === cat.id 
                    ? 'bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white shadow-sm shadow-indigo-950/20 font-bold' 
                    : 'bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-950 border border-indigo-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full md:w-[320px]">
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by scheme name, acronym (e.g. PMEGP), solar, farmer, health..."
              aria-label="Search government schemes"
              className="w-full border border-indigo-200 bg-white rounded-full px-4 py-2.5 pl-10 pr-9 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all shadow-xs text-slate-900"
            />
            <Search size={14} className="absolute left-3.5 top-3.5 text-indigo-600" />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-700"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Scheme Count Status */}
        <div className="flex justify-between items-center mb-6 text-xs text-slate-500 font-mono">
          <span>Showing <strong>{filteredSchemes.length}</strong> {filteredSchemes.length === 1 ? 'Scheme' : 'Schemes'}</span>
          {query && (
            <span>Filtered by: &ldquo;<strong className="text-slate-800">{query}</strong>&rdquo;</span>
          )}
        </div>

        {/* Scheme Cards Grid */}
        <div className="flex flex-col gap-6">
          {filteredSchemes.length === 0 ? (
            <div className="p-12 text-center bg-white border border-indigo-100 rounded-2xl">
              <p className="text-sm font-bold text-slate-800 mb-2">No government schemes matched your search.</p>
              <p className="text-xs text-slate-500 mb-4">Try searching for terms like &ldquo;solar&rdquo;, &ldquo;PMEGP&rdquo;, &ldquo;farmer&rdquo;, &ldquo;MSME&rdquo;, or &ldquo;health&rdquo;.</p>
              <button 
                onClick={() => { setQuery(''); setSelectedCat('all'); }}
                className="text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-900 px-4 py-2 rounded-full hover:bg-indigo-100 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredSchemes.map((sc) => (
              <article 
                key={sc.id} 
                className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between hover:border-indigo-300 transition-all duration-300 shadow-sm shadow-indigo-900/5 card-hover-effect"
              >
                {/* Left Side Details */}
                <div className="flex-[3] flex flex-col gap-4 justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(sc.category)}`}>
                        {sc.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{sc.ministry}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-slate-900 mb-2">
                      <Link href={`/schemes/${sc.slug}`} className="hover:text-indigo-900 transition-colors">
                        {sc.name}
                      </Link>
                    </h2>
                    
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {sc.overview}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium mb-4">
                      <div className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3.5">
                        <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold mb-1">Financial Assistance</span>
                        <span className="text-slate-900 font-semibold leading-relaxed">{sc.benefit}</span>
                      </div>
                      <div className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3.5">
                        <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold mb-1">Eligible Entities</span>
                        <span className="text-slate-900 font-semibold leading-relaxed">{sc.beneficiaryTypes.slice(0, 3).join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href={`/schemes/${sc.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 to-indigo-900 text-white px-5 py-2.5 rounded-full shadow-xs hover:opacity-95 transition-all"
                    >
                      <span>View full scheme guide and eligibility requirements</span>
                      <ArrowRight size={13} className="ml-1.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Side Documents & Verification */}
                <div className="flex-[2] bg-gradient-to-br from-purple-50/20 via-indigo-50/20 to-blue-50/25 border border-indigo-100/60 rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-indigo-800 uppercase tracking-wider block mb-3">
                      Required Documents Checklist
                    </span>
                    <ul className="flex flex-col gap-2 mb-6">
                      {sc.docs.slice(0, 4).map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 size={13} className="text-indigo-600 flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[10px] font-mono text-slate-400 border-t border-indigo-100/60 pt-3 flex justify-between items-center">
                    <span>Information last reviewed:</span>
                    <span className="text-slate-700 font-semibold">{sc.lastVerifiedDate}</span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* 6. How SEVA Works (Visual 3-Step Process) */}
      <section className="mb-20 border-t border-indigo-100/70 pt-16">
        <div className="max-w-[700px] mb-10">
          <span className="text-[10px] font-mono font-bold text-indigo-800 uppercase tracking-wider block mb-1">
            HOW SEVA HELPS YOU
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">
            How to Discover &amp; Apply for Government Schemes
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Navigating government welfare programs should not require complex legal consulting. Follow these 3 simple steps to find your benefits:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 font-mono text-xs font-bold flex items-center justify-center mb-4">
                01
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Search &amp; Filter Schemes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filter by your business category, farming sector, residential energy need, or healthcare requirement to find programs you qualify for.
              </p>
            </div>
          </div>

          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 font-mono text-xs font-bold flex items-center justify-center mb-4">
                02
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Check Eligibility &amp; Documents</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review verified checklists for mandatory documents, beneficiary criteria, and disqualification rules before submitting paperwork.
              </p>
            </div>
          </div>

          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <span className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 font-mono text-xs font-bold flex items-center justify-center mb-4">
                03
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Apply on Official Portals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Click direct links to authorized Government of India portals (<code className="text-slate-800 font-mono">.gov.in</code> / <code className="text-slate-800 font-mono">.nic.in</code>) to complete your application safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. E-E-A-T Editorial Standards & Trust Section */}
      <section className="mb-20 border-t border-indigo-100/70 pt-16">
        <div className="max-w-[800px] mb-8">
          <span className="text-[10px] font-mono font-bold text-indigo-800 uppercase tracking-wider block mb-2">
            EDITORIAL STANDARDS &amp; TRUST SIGNALS
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight mb-3">
            Why Verify Scheme Information With Official Sources?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Government circulars and fiscal outlays evolve across fiscal years. SEVA is designed to simplify discovery, but we strongly advise all applicants to verify final submission rules on the parent ministry portal:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs">
            <BookOpen size={18} className="text-indigo-600 mb-3" />
            <h3 className="text-sm font-bold text-slate-900 mb-2">Official Ministry Gazettes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Financial allocations, subsidy percentages, and target quotas are cross-referenced against published Ministry gazettes.
            </p>
          </div>

          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs">
            <ShieldCheck size={18} className="text-indigo-600 mb-3" />
            <h3 className="text-sm font-bold text-slate-900 mb-2">Periodic Review Cycles</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every scheme entry is audited on a periodic cycle. We display explicit &ldquo;Information last reviewed&rdquo; timestamps on every record.
            </p>
          </div>

          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs">
            <ExternalLink size={18} className="text-indigo-600 mb-3" />
            <h3 className="text-sm font-bold text-slate-900 mb-2">Zero Intermediary Fees</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never charge fees or act as intermediaries. We route users directly to verified Government of India portals for official submissions.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Homepage Frequently Asked Questions */}
      <section className="mb-20 border-t border-indigo-100/70 pt-16">
        <div className="max-w-[700px] mb-8">
          <span className="text-[10px] font-mono font-bold text-indigo-800 uppercase tracking-wider block mb-1">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
            Common Questions About Government Schemes
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {homepageFaqs.map((faq, idx) => (
            <div key={idx} className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <HelpCircle size={15} className="text-indigo-600 flex-shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Advisory Support CTA Banner */}
      <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-indigo-950/15 relative overflow-hidden">
        <div className="max-w-[550px] mx-auto flex flex-col gap-4 items-center relative z-10">
          <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white">Need Technical Feasibility Reports or Systems Support?</h3>
          <p className="text-xs text-indigo-200 leading-relaxed">
            Our engineering team compiles techno-economic feasibility reports (TEFR), builds automated data capture pipelines, and designs enterprise systems.
          </p>
          <a 
            href="https://www.sochyeah.com/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-3.5 rounded-full shadow-md hover:scale-[1.02] mt-2 inline-block"
          >
            Consult Our Engineering Advisors
          </a>
        </div>
      </section>
    </main>
  );
}
