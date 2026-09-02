'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';
import { Filter } from 'lucide-react';

const categories = ['All', 'AI', 'Generative AI', 'Machine Learning', 'SEO', 'Automation'];

export default function CaseStudiesClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStudies = caseStudies.filter((cs) => {
    if (selectedCategory === 'All') return true;
    return cs.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-16 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start">
          PROOF OF EXECUTION
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          SYSTEM CASE STUDIES.
        </h1>
        <p className="sub-editorial">
          Verify our system building capabilities. These cases illustrate concrete technology implementations and business metrics across artificial intelligence, custom software, and search infrastructure.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-indigo-100/70 pb-6">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-800 mr-3 flex items-center gap-1.5">
          <Filter size={12} className="text-indigo-600" /> Filter Area:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-150 ${
              selectedCategory === cat 
                ? 'bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white shadow-sm shadow-indigo-950/20 font-bold' 
                : 'bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-950 border border-indigo-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies Stacker */}
      <div className="flex flex-col gap-8">
        {filteredStudies.map((cs) => {
          const isAi = cs.category.toLowerCase().includes('ai') || cs.category.toLowerCase().includes('learning');
          const badgeClass = isAi 
            ? 'text-purple-800 bg-purple-50 border-purple-200/50' 
            : 'text-blue-800 bg-blue-50 border-blue-200/50';

          return (
            <div 
              key={cs.id} 
              className="border border-indigo-100/80 bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between hover:border-indigo-300 transition-all duration-300 shadow-sm shadow-indigo-900/5 card-hover-effect"
            >
              {/* Left Column: Challenge & Tech */}
              <div className="flex-[3] flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeClass}`}>
                      {cs.category}
                    </span>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
                      PRODUCTION SYSTEM
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{cs.title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    <strong className="text-slate-900">Challenge:</strong> {cs.challenge}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    <strong className="text-slate-900">Solution:</strong> {cs.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {cs.technology.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono bg-slate-50 border border-slate-200/70 text-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Outcomes Metrics */}
              <div className="flex-[2] bg-gradient-to-br from-purple-50/20 via-indigo-50/20 to-blue-50/25 border border-indigo-100/60 rounded-xl p-6 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-indigo-800 uppercase block mb-1">
                    Operational Outcome
                  </span>
                  <p className="text-xs text-slate-900 font-semibold mt-1 mb-6 leading-relaxed">
                    &quot;{cs.businessImpact}&quot;
                  </p>
                </div>

                {/* Key Metrics */}
                <div>
                  <div className="grid grid-cols-3 gap-2 border-t border-indigo-100/60 pt-4 mb-4">
                    {cs.keyMetrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-lg font-extrabold text-slate-900">{m.value}</div>
                        <div className="text-[9px] text-slate-500 leading-tight uppercase font-mono mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/case-studies/${cs.id}`}
                    className="w-full text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 to-blue-900 text-white hover:opacity-95 transition-all py-3 rounded-full shadow-sm shadow-indigo-950/15 inline-block"
                  >
                    Inspect Architecture
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
