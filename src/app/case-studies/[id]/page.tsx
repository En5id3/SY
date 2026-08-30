import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import { ArrowLeft, ChevronRight, BarChart } from 'lucide-react';
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
    title: `${cs.title} | SOCHYEAH Impact`,
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
        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-color-text-secondary hover:text-black mb-10 transition-colors"
      >
        <ArrowLeft size={14} className="mr-1.5" /> Back to Case Studies
      </Link>

      <div className="flex flex-col gap-4 mb-10 border-b border-border-light pb-8">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-50 border border-neutral-100 px-2 py-0.5 rounded">
            {cs.category}
          </span>
          <span className="text-[8px] font-bold tracking-wider text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded">
            CONCEPT VALIDATION
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-black leading-tight">
          {cs.title}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column: Challenge / Solution */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10 text-xs text-color-text-secondary leading-relaxed">
          <div>
            <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3">The Challenge</h3>
            <p>{cs.challenge}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3">The Solution</h3>
            <p>{cs.solution}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-4">What We Engineered</h3>
            <div className="bg-neutral-50 border border-border-light rounded-lg p-5 flex flex-col gap-3 font-mono text-[10px]">
              {cs.whatWeBuilt.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <ChevronRight size={12} className="text-neutral-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-4">Core Engineering Lessons</h3>
            <ul className="flex flex-col gap-3 list-decimal pl-4">
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
          <div className="border border-border-light rounded-lg p-6 bg-neutral-50/50 flex flex-col gap-6">
            <div>
              <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Business Impact</span>
              <p className="text-xs font-semibold text-black leading-relaxed">
                "{cs.businessImpact}"
              </p>
            </div>

            {/* Metrics */}
            <div className="border-t border-border-light pt-6">
              <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider block mb-4">Key Metrics</span>
              <div className="flex flex-col gap-4">
                {cs.keyMetrics.map((m, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs border-b border-neutral-100 pb-2">
                    <span className="text-color-text-secondary">{m.label}</span>
                    <span className="font-extrabold text-black">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent message */}
            <div className="border-t border-border-light pt-6 text-[10px] font-mono text-center italic text-color-text-muted">
              "{cs.message}"
            </div>

            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors py-3 rounded mt-2"
            >
              {cs.ctaText || 'BUILD MY SYSTEM'}
            </Link>
          </div>

          {/* Technology ecosystem widget */}
          <div className="border border-border-light rounded-lg p-6 bg-white flex flex-col gap-4">
            <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider block">Technology Stack</span>
            <div className="flex flex-wrap gap-1.5">
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
        </div>
      </div>
    </div>
  );
}
