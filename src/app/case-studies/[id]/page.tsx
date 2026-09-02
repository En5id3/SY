import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import { servicesData } from '@/data/services';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
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
      title: 'Case Study Not Found | SOCHYEAH',
    };
  }

  const canonicalUrl = `https://www.sochyeah.com/case-studies/${cs.id}`;

  return {
    title: `${cs.title} | SOCHYEAH Case Study`,
    description: cs.challenge,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: cs.title,
      description: cs.challenge,
      url: canonicalUrl,
      siteName: 'SOCHYEAH',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: cs.title,
      description: cs.challenge,
    }
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const cs = caseStudies.find(c => c.id === id);

  if (!cs) {
    notFound();
  }

  const isAi = cs.category.toLowerCase().includes('ai') || cs.category.toLowerCase().includes('learning');

  const relatedServices = servicesData.filter(s => cs.relatedServiceSlugs?.includes(s.slug));

  // CaseStudy schema injection
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://www.sochyeah.com/case-studies/${cs.id}#article`,
        'headline': cs.title,
        'description': cs.challenge,
        'about': cs.category,
        'author': {
          '@type': 'Organization',
          'name': 'SOCHYEAH Systems Unit',
          'url': 'https://www.sochyeah.com'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'SOCHYEAH',
          'url': 'https://www.sochyeah.com',
          'logo': 'https://www.sochyeah.com/logo.png'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.sochyeah.com/case-studies/${cs.id}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.sochyeah.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Case Studies',
            'item': 'https://www.sochyeah.com/case-studies'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': cs.title,
            'item': `https://www.sochyeah.com/case-studies/${cs.id}`
          }
        ]
      }
    ]
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <li>
            <Link href="/" className="hover:text-indigo-900 transition-colors">Home</Link>
          </li>
          <ChevronRight size={12} className="text-slate-400" />
          <li>
            <Link href="/case-studies" className="hover:text-indigo-900 transition-colors">Case Studies</Link>
          </li>
          <ChevronRight size={12} className="text-slate-400" />
          <li className="text-slate-900 font-semibold truncate" aria-current="page">
            {cs.title}
          </li>
        </ol>
      </nav>

      {/* 2. Header */}
      <div className="flex flex-col gap-4 mb-10 border-b border-indigo-100/80 pb-8">
        <div className="flex items-center gap-3">
          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
            isAi ? 'text-purple-800 bg-purple-50 border-purple-200/50' : 'text-blue-800 bg-blue-50 border-blue-200/50'
          }`}>
            {cs.category}
          </span>
          <span className="text-[9px] font-mono font-bold tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
            PRODUCTION SYSTEM
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
          {cs.title}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column: Challenge / Solution */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8 text-xs text-slate-600 leading-relaxed">
          {/* Challenge */}
          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
            <h2 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-3">
              01 // The Business Challenge
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
            <h2 className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider mb-3">
              02 // The Engineering Solution
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {cs.solution}
            </p>

            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              What We Engineered:
            </h3>
            <ul className="flex flex-col gap-2.5">
              {cs.whatWeBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 size={14} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Impact & Lessons */}
          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
            <h2 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-3">
              03 // Business Impact &amp; Engineering Takeaways
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {cs.businessImpact}
            </p>

            <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-5">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-2">
                Lessons Learned in Production
              </span>
              <ul className="flex flex-col gap-2 text-xs text-slate-600">
                {cs.lessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Commercial Services */}
          {relatedServices.length > 0 && (
            <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
              <h2 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-4">
                04 // Related Commercial Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="p-3.5 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 block uppercase">{svc.category}</span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-900">{svc.title}</span>
                    </div>
                    <ArrowRight size={13} className="text-slate-400 group-hover:text-indigo-900 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Key Metrics & Technology Stack */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 sticky top-28">
          {/* Metrics */}
          <div className="border border-indigo-100/80 bg-gradient-to-br from-purple-50/30 via-indigo-50/30 to-blue-50/30 rounded-2xl p-6 md:p-8 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider block mb-4">
              Verified Production Results
            </span>
            <div className="flex flex-col gap-4">
              {cs.keyMetrics.map((m, idx) => (
                <div key={idx} className="border-b border-indigo-100/60 pb-3 last:border-0 last:pb-0">
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{m.value}</div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Technologies Utilized
            </span>
            <div className="flex flex-wrap gap-2">
              {cs.technology.map((tech, idx) => (
                <span key={idx} className="text-xs font-semibold bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 text-white rounded-2xl p-6 shadow-md text-center">
            <p className="text-xs font-bold text-indigo-200 mb-3">{cs.message}</p>
            <Link 
              href="/contact" 
              className="text-xs font-bold uppercase tracking-wider bg-white text-slate-950 hover:bg-slate-100 transition-all px-6 py-3 rounded-full inline-block w-full"
            >
              {cs.ctaText || 'START YOUR PROJECT'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
