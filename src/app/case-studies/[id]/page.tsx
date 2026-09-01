import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    id: cs.id,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { id } = await params;
  const cs = caseStudies.find(c => c.id === id);
  
  if (!cs) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${cs.title} | SOCHYEAH Case Study`,
    description: cs.challenge,
    openGraph: {
      title: cs.title,
      description: cs.challenge,
      type: 'article',
    }
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const cs = caseStudies.find(c => c.id === id);

  if (!cs) {
    notFound();
  }

  // CaseStudy schema injection
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    'name': cs.title,
    'description': cs.challenge,
    'about': cs.category,
    'publisher': {
      '@type': 'Organization',
      'name': 'SOCHYEAH'
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back link */}
      <Link 
        href="/case-studies" 
        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-purple-900 hover:text-purple-700 mb-10 transition-colors"
      >
        <ArrowLeft size={14} className="mr-1.5" /> Back to Case Studies
      </Link>

      <div className="flex flex-col gap-4 mb-10 border-b border-purple-100/80 pb-8">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 border border-purple-200/50 px-2.5 py-1 rounded-full">
            {cs.category}
          </span>
          <span className="text-[9px] font-mono font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
            CONCEPT VALIDATION
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
          {cs.title}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column: Challenge / Solution */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10 text-xs text-slate-600 leading-relaxed">
          <div className="border border-purple-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-3">
              01 // The Business Challenge
            </h3>
            <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
          </div>

          <div className="border border-purple-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-3">
              02 // The Engineering Solution
            </h3>
            <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
          </div>

          <div className="border border-purple-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-4">
              03 // What We Engineered
            </h3>
            <div className="bg-purple-50/25 border border-purple-100/60 rounded-xl p-5 flex flex-col gap-3 font-mono text-[10px]">
              {cs.whatWeBuilt.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-slate-700">
                  <ChevronRight size={12} className="text-purple-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-purple-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-4">
              04 // Core Engineering Lessons
            </h3>
            <ul className="flex flex-col gap-3 list-decimal pl-4 text-slate-700">
              {cs.lessons.map((less, idx) => (
                <li key={idx}>
                  {less}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Outcomes & Tech */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {/* Outcome Sidebar Card */}
          <div className="border border-purple-100/80 rounded-2xl p-6 bg-white shadow-sm shadow-purple-900/5 flex flex-col gap-6">
            <div>
              <span className="text-[9px] font-mono font-bold text-purple-800 uppercase tracking-wider block mb-2">
                Business Impact
              </span>
              <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                "{cs.businessImpact}"
              </p>
            </div>

            {/* Metrics */}
            <div className="border-t border-purple-100/70 pt-6">
              <span className="text-[9px] font-mono font-bold text-purple-800 uppercase tracking-wider block mb-4">
                Quantified Metrics
              </span>
              <div className="flex flex-col gap-3">
                {cs.keyMetrics.map((m, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs border-b border-purple-50 pb-2 last:border-b-0">
                    <span className="text-slate-500">{m.label}</span>
                    <span className="font-extrabold text-purple-950 text-base">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent message */}
            <div className="border-t border-purple-100/70 pt-5 text-[10px] font-mono text-center italic text-slate-400">
              "{cs.message}"
            </div>

            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-purple-900 text-white hover:bg-purple-950 transition-all py-3.5 rounded-full shadow-sm shadow-purple-950/15"
            >
              {cs.ctaText || 'BUILD MY SYSTEM'}
            </Link>
          </div>

          {/* Technology ecosystem widget */}
          <div className="border border-purple-100/80 rounded-2xl p-6 bg-white shadow-xs flex flex-col gap-4">
            <span className="text-[9px] font-mono font-bold text-purple-800 uppercase tracking-wider block">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cs.technology.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] font-mono bg-purple-50/50 border border-purple-100 text-purple-900 px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
