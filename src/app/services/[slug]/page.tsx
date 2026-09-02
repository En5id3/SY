import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData, getServiceBySlug } from '@/data/services';
import { caseStudies } from '@/data/case-studies';
import { blogPosts } from '@/data/blog';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  HelpCircle,
  ShieldAlert
} from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);

  if (!svc) {
    return {
      title: 'Service Not Found | SOCHYEAH',
    };
  }

  const canonicalUrl = `https://www.sochyeah.com/services/${svc.slug}`;

  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: svc.metaTitle,
      description: svc.metaDescription,
      url: canonicalUrl,
      siteName: 'SOCHYEAH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: svc.metaTitle,
      description: svc.metaDescription,
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);

  if (!svc) {
    notFound();
  }

  // Related Case Studies
  const matchedCaseStudies = caseStudies.filter(cs => svc.caseStudyIds.includes(cs.id));
  
  // Related Blog Articles
  const matchedArticles = blogPosts.filter(bp => svc.relatedArticleIds.includes(bp.id));

  // Related Services
  const relatedServices = servicesData.filter(s => svc.relatedServiceSlugs.includes(s.slug));

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://www.sochyeah.com/services/${svc.slug}#service`,
        'name': svc.title,
        'description': svc.metaDescription,
        'provider': {
          '@type': 'Organization',
          'name': 'SOCHYEAH',
          'url': 'https://www.sochyeah.com'
        },
        'serviceType': svc.category,
        'areaServed': 'Worldwide',
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': `${svc.title} Capabilities`,
          'itemListElement': svc.featuresIncluded.map((feat) => ({
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': feat
            }
          }))
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.sochyeah.com/services/${svc.slug}#breadcrumb`,
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
            'name': 'Services',
            'item': 'https://www.sochyeah.com/services'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': svc.title,
            'item': `https://www.sochyeah.com/services/${svc.slug}`
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `https://www.sochyeah.com/services/${svc.slug}#faq`,
        'mainEntity': svc.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
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
            <Link href="/services" className="hover:text-indigo-900 transition-colors">Services</Link>
          </li>
          <ChevronRight size={12} className="text-slate-400" />
          <li className="text-slate-900 font-semibold truncate" aria-current="page">
            {svc.title}
          </li>
        </ol>
      </nav>

      {/* 2. Hero Section */}
      <section className="mb-20 border-b border-indigo-100/80 pb-16">
        <div className="max-w-[850px] flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3.5 py-1 rounded-full border border-indigo-200/60 self-start">
              {svc.badge}
            </span>
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
              {svc.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 leading-tight uppercase">
            {svc.title}
          </h1>

          <p className="text-lg md:text-xl text-indigo-950 font-medium leading-relaxed">
            {svc.heroTitle}
          </p>

          <p className="sub-editorial text-slate-600 leading-relaxed font-normal">
            {svc.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link 
              href="/contact" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white hover:opacity-95 transition-all px-8 py-3.5 rounded-full shadow-md shadow-indigo-950/20 hover:scale-[1.01]"
            >
              Consult On This Architecture
            </Link>
            <Link 
              href="/case-studies" 
              className="text-center text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all px-7 py-3.5 rounded-full shadow-2xs"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 3. What is [Service] Deep-Dive */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
              01 {'//'} DEEP DIVE ARCHITECTURE
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              {svc.whatIs.title}
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              {svc.whatIs.content}
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-purple-50/40 via-indigo-50/40 to-blue-50/40 border border-indigo-100/80 rounded-2xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xs font-mono font-bold text-indigo-950 uppercase tracking-wider mb-4">
              Core Architectural Pillars
            </h3>
            <ul className="flex flex-col gap-3">
              {svc.whatIs.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                  <CheckCircle2 size={14} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. How SOCHYEAH Helps */}
      <section className="mb-20 border-t border-indigo-100/80 pt-16">
        <div className="max-w-[700px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
            02 {'//'} OUR METHODOLOGY
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            {svc.howWeHelp.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {svc.howWeHelp.points.map((pt, idx) => (
            <div 
              key={idx}
              className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs hover:border-indigo-300 transition-all card-hover-effect"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-700 block mb-2">
                  STAGE 0{idx + 1} {'//'}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Problems Solved & Features Included */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 border-t border-indigo-100/80 pt-16">
        {/* Problems Solved */}
        <div className="border border-rose-100/90 bg-rose-50/20 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert size={16} className="text-rose-600" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-900">
              Operational Challenges We Solve
            </h3>
          </div>
          <ul className="flex flex-col gap-3">
            {svc.problemsSolved.map((prob, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                <span className="text-rose-500 font-bold font-mono">✕</span>
                <span>{prob}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features / Deliverables */}
        <div className="border border-indigo-100/90 bg-indigo-50/20 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-indigo-600" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-900">
              Features &amp; System Deliverables
            </h3>
          </div>
          <ul className="flex flex-col gap-3">
            {svc.featuresIncluded.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                <CheckCircle2 size={14} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Technology Stack Matrix */}
      <section className="mb-20 border-t border-indigo-100/80 pt-16">
        <div className="max-w-[700px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
            03 {'//'} TECHNOLOGY STACK
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            PRODUCTION-GRADE TOOLS &amp; PROTOCOLS.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We use reliable, modern, well-maintained engineering frameworks designed for high concurrency and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {svc.techStack.map((stack, idx) => (
            <div key={idx} className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-indigo-800 tracking-wider block mb-3">
                {stack.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, iIdx) => (
                  <span key={iIdx} className="text-xs font-semibold bg-slate-50 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. 4-Stage Development Process */}
      <section className="mb-20 border-t border-indigo-100/80 pt-16">
        <div className="max-w-[700px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
            04 {'//'} DEVELOPMENT ROADMAP
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            TRANSPARENT 4-STAGE SPRINT CADENCE.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {svc.process.map((step) => (
            <div key={step.step} className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-[190px]">
              <div>
                <span className="text-lg font-mono font-black text-indigo-900 block mb-2">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Use Cases & Industries */}
      <section className="mb-20 border-t border-indigo-100/80 pt-16">
        <div className="max-w-[700px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
            05 {'//'} USE CASES &amp; VERTICALS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            PROVEN APPLICATIONS &amp; OUTCOMES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {svc.useCases.map((uc, idx) => (
            <div key={idx} className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {uc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {uc.desc}
                </p>
              </div>
              <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-xl p-3 text-[11px] font-semibold text-emerald-800">
                <span className="block text-[9px] uppercase font-mono text-emerald-600">Measured Outcome</span>
                {uc.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Target Industries */}
        <div className="border border-indigo-100/70 bg-gradient-to-r from-purple-50/20 via-indigo-50/20 to-blue-50/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider">
            Target Industries:
          </span>
          <div className="flex flex-wrap gap-2">
            {svc.industries.map((ind, idx) => (
              <span key={idx} className="text-xs bg-white text-slate-700 px-3 py-1 rounded-full border border-indigo-100 font-medium">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Relevant Case Studies */}
      {matchedCaseStudies.length > 0 && (
        <section className="mb-20 border-t border-indigo-100/80 pt-16">
          <div className="flex justify-between items-end mb-10">
            <div className="max-w-[600px] flex flex-col gap-2">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
                06 {'//'} CASE STUDIES
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                VERIFIED CLIENT SYSTEMS.
              </h2>
            </div>
            <Link 
              href="/case-studies"
              className="text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700 transition-colors hidden sm:inline-block"
            >
              View All Case Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matchedCaseStudies.map((cs) => (
              <div key={cs.id} className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs card-hover-effect">
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/50">
                    {cs.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {cs.challenge}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-indigo-50 pt-4">
                  <div className="text-xs font-bold text-slate-900">
                    {cs.keyMetrics[0]?.value} <span className="text-[10px] text-slate-500 font-normal">{cs.keyMetrics[0]?.label}</span>
                  </div>
                  <Link 
                    href={`/case-studies/${cs.id}`}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700"
                  >
                    <span>Read Study</span>
                    <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. Relevant Technical Journal Articles */}
      {matchedArticles.length > 0 && (
        <section className="mb-20 border-t border-indigo-100/80 pt-16">
          <div className="flex justify-between items-end mb-10">
            <div className="max-w-[600px] flex flex-col gap-2">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
                07 {'//'} TECHNICAL JOURNAL
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                ENGINEERING DEEP DIVES.
              </h2>
            </div>
            <Link 
              href="/blog"
              className="text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700 transition-colors hidden sm:inline-block"
            >
              Explore Journal →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedArticles.map((article) => (
              <div key={article.id} className="border border-indigo-100/80 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-xs card-hover-effect">
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200/50">
                    {article.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-3 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {article.summary}
                  </p>
                </div>
                <Link 
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700"
                >
                  <span>Read Article</span>
                  <ArrowRight size={12} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 11. Frequently Asked Questions */}
      <section className="mb-20 border-t border-indigo-100/80 pt-16">
        <div className="max-w-[700px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
            08 {'//'} FAQS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {svc.faqs.map((faq, idx) => (
            <div key={idx} className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <HelpCircle size={16} className="text-indigo-600 flex-shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Related Services Interlinking */}
      {relatedServices.length > 0 && (
        <section className="mb-20 border-t border-indigo-100/80 pt-16">
          <div className="max-w-[700px] mb-8 flex flex-col gap-2">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800">
              09 {'//'} RELATED SYSTEM DOMAINS
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
              COMPLEMENTARY CAPABILITIES.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedServices.map((rel) => (
              <Link 
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="border border-indigo-100/80 bg-white rounded-xl p-5 hover:border-indigo-300 transition-all shadow-xs flex items-center justify-between group"
              >
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase">{rel.category}</span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">{rel.title}</span>
                </div>
                <ArrowRight size={14} className="text-slate-400 group-hover:text-indigo-900 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 13. Strong CTA Banner */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 text-white rounded-3xl p-8 md:p-14 text-center shadow-xl shadow-indigo-950/20 relative overflow-hidden border border-indigo-500/20">
        <div className="max-w-[550px] mx-auto flex flex-col gap-4 items-center relative z-10">
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-300 bg-indigo-900/60 px-3.5 py-1 rounded-full border border-indigo-700/50">
            START YOUR BUILD
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
            Ready to Build Your {svc.title}?
          </h3>
          <p className="text-xs text-indigo-200 leading-relaxed">
            Schedule a technical consultation with our engineering leads to review architecture, timeline estimates, and deliverables.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-slate-950 hover:bg-slate-100 transition-all px-8 py-3.5 rounded-full shadow-lg hover:scale-[1.01] mt-2"
          >
            START A PROJECT CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
