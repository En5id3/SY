import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostById } from '@/data/blog';
import { servicesData } from '@/data/services';
import { Clock, Calendar, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);
  
  if (!post) {
    return {
      title: 'Article Not Found | SOCHYEAH',
    };
  }

  const canonicalUrl = `https://www.sochyeah.com/blog/${post.id}`;

  return {
    title: `${post.title} | SOCHYEAH Journal`,
    description: post.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: canonicalUrl,
      siteName: 'SOCHYEAH',
      type: 'article',
      publishedTime: post.date,
      authors: ['SOCHYEAH Systems Unit'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  const isAi = post.category.toLowerCase().includes('ai');
  const relatedServices = servicesData.filter(s => post.relatedServiceSlugs?.includes(s.slug));

  // Schema Org Article metadata
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `https://www.sochyeah.com/blog/${post.id}#article`,
        'headline': post.title,
        'description': post.summary,
        'datePublished': post.date,
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
        '@id': `https://www.sochyeah.com/blog/${post.id}#breadcrumb`,
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
            'name': 'Technical Journal',
            'item': 'https://www.sochyeah.com/blog'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': post.title,
            'item': `https://www.sochyeah.com/blog/${post.id}`
          }
        ]
      },
      ...(post.faqs && post.faqs.length > 0 ? [{
        '@type': 'FAQPage',
        '@id': `https://www.sochyeah.com/blog/${post.id}#faq`,
        'mainEntity': post.faqs.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }] : [])
    ]
  };

  return (
    <div className="max-w-[840px] mx-auto px-6 py-12 md:py-20">
      {/* Inject Schema.org markup */}
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
            <Link href="/blog" className="hover:text-indigo-900 transition-colors">Journal</Link>
          </li>
          <ChevronRight size={12} className="text-slate-400" />
          <li className="text-slate-900 font-semibold truncate" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <div className="flex flex-col gap-4 mb-8 border-b border-indigo-100/80 pb-6">
        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border self-start ${
          isAi ? 'text-purple-800 bg-purple-50 border-purple-200/50' : 'text-blue-800 bg-blue-50 border-blue-200/50'
        }`}>
          {post.category} {'//'} ENGINEER JOURNAL
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
          {post.title}
        </h1>
        <div className="flex gap-6 text-xs text-slate-400 font-mono mt-2">
          <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-purple-50/40 via-indigo-50/40 to-blue-50/40 border border-indigo-100/80 rounded-2xl p-6 md:p-8 mb-10 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
        <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase block mb-2">Technical Abstract</span>
        {post.summary}
      </div>

      {/* Main Technical Content Blocks */}
      <div className="flex flex-col gap-10 text-xs md:text-sm text-slate-600 leading-relaxed mb-16">
        {/* The Problem */}
        <div>
          <h2 className="text-base md:text-lg font-mono font-bold text-purple-900 uppercase tracking-wider mb-3">
            01 // The Technical Problem
          </h2>
          <p>{post.problem}</p>
        </div>

        {/* Business Context */}
        <div>
          <h2 className="text-base md:text-lg font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
            02 // Background &amp; Engineering Constraints
          </h2>
          <p>{post.context}</p>
        </div>

        {/* The Solution */}
        <div>
          <h2 className="text-base md:text-lg font-mono font-bold text-blue-900 uppercase tracking-wider mb-3">
            03 // Architecture Solution
          </h2>
          <p className="mb-4">{post.solution}</p>
          <p>{post.implementation}</p>
        </div>

        {/* Architecture Pipeline */}
        {post.architecture && (
          <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-4">
              Data Flow Pipeline
            </h3>
            <ol className="flex flex-col gap-3 font-mono text-xs text-slate-700">
              {post.architecture.map((step, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[10px] flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Code Snippet */}
        {post.codeSnippet && (
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Implementation Snippet ({post.codeLanguage})
            </h3>
            <pre className="bg-slate-950 text-slate-100 p-6 rounded-2xl overflow-x-auto text-xs font-mono border border-slate-800 shadow-sm leading-relaxed">
              <code>{post.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Lessons Learned */}
        {post.lessons && (
          <div className="border border-indigo-100/80 bg-slate-50/50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-4">
              Engineering Takeaways &amp; Pitfalls
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-slate-600">
              {post.lessons.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <div>
            <h2 className="text-base md:text-lg font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">
              Frequently Asked Technical Questions
            </h2>
            <div className="flex flex-col gap-4">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="border border-indigo-100/80 bg-white rounded-2xl p-5 shadow-xs">
                  <h3 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <HelpCircle size={14} className="text-indigo-600 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contextual Commercial Services Cross-Linking (Phase 6 Content Cluster) */}
      {relatedServices.length > 0 && (
        <section className="mb-14 border-t border-indigo-100/80 pt-10">
          <span className="text-[10px] font-mono font-bold text-indigo-800 uppercase tracking-wider block mb-2">
            COMMERCIAL ENGINEERING SERVICES
          </span>
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Build This Architecture With SOCHYEAH
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="p-4 rounded-xl border border-indigo-100 bg-white hover:border-indigo-300 transition-all flex items-center justify-between shadow-xs group"
              >
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">{svc.category}</span>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-900">{svc.title}</span>
                </div>
                <ArrowRight size={14} className="text-slate-400 group-hover:text-indigo-900 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Conversion Box */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 text-white rounded-2xl p-8 text-center shadow-lg">
        <h3 className="text-lg md:text-xl font-extrabold uppercase mb-2">Need Help Designing Production Systems?</h3>
        <p className="text-xs text-indigo-200 mb-6 max-w-[450px] mx-auto leading-relaxed">
          Schedule a technical architecture call with our lead engineering team to review system requirements and deployment roadmaps.
        </p>
        <Link 
          href="/contact" 
          className="text-xs font-bold uppercase tracking-wider bg-white text-slate-950 hover:bg-slate-100 transition-all px-8 py-3.5 rounded-full inline-block shadow-md hover:scale-[1.01]"
        >
          CONTACT OUR LEAD ENGINEERS
        </Link>
      </section>
    </div>
  );
}
