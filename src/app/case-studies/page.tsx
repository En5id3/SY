'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';
import { ArrowRight, Filter } from 'lucide-react';

const categories = ['All', 'AI', 'Generative AI', 'Machine Learning', 'SEO', 'Automation'];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStudies = caseStudies.filter((cs) => {
    if (selectedCategory === 'All') return true;
    return cs.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-16 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">CONCEPT PROJECTS</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          CASE STUDIES.
        </h1>
        <p className="sub-editorial">
          Verify our system building capabilities. These cases illustrate concrete technology implementations and business metrics. Marked as illustrative validations.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-border-light pb-6">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mr-4 flex items-center gap-1.5">
          <Filter size={12} /> Filter by Area:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-semibold px-4 py-2 rounded transition-all duration-150 ${
              selectedCategory === cat 
                ? 'bg-black text-white' 
                : 'bg-neutral-50 text-color-text-secondary hover:bg-neutral-100 hover:text-black border border-neutral-200/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies Stacker */}
      <div className="flex flex-col gap-12">
        {filteredStudies.map((cs) => (
          <div 
            key={cs.id} 
            className="border border-border-light bg-white rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between hover:border-black transition-all duration-300 shadow-sm"
          >
            {/* Left Column: Challenge & Tech */}
            <div className="flex-[3] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-50 border border-neutral-100 px-2 py-0.5 rounded">
                    {cs.category}
                  </span>
                  <span className="text-[8px] font-bold tracking-wider text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded">
                    ILLUSTRATIVE CASE STUDY
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-black mb-3">{cs.title}</h2>
                <p className="text-xs text-color-text-secondary leading-relaxed mb-6">
                  <strong>Challenge:</strong> {cs.challenge}
                </p>
                <p className="text-xs text-color-text-secondary leading-relaxed mb-6">
                  <strong>Solution:</strong> {cs.solution}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                {cs.technology.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] font-mono bg-neutral-50 border border-neutral-100 text-color-text-secondary px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Outcomes Metrics */}
            <div className="flex-[2] bg-neutral-50 border border-neutral-100 rounded-lg p-6 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[8px] font-bold tracking-wider text-neutral-400 uppercase">Operational Outcome</span>
                <p className="text-xs text-black font-semibold mt-2 mb-6">
                  "{cs.businessImpact}"
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 border-t border-border-light pt-4 mb-4">
                {cs.keyMetrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-2xl font-extrabold text-black">{m.value}</div>
                    <div className="text-[9px] text-color-text-muted leading-tight uppercase font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact" 
                className="text-center text-xs font-bold uppercase tracking-wider bg-black text-white py-3 rounded hover:bg-neutral-800 transition-colors"
              >
                {cs.ctaText || 'BUILD THIS SYSTEM'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
