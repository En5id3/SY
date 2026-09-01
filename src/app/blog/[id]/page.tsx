import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostById } from '@/data/blog';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';
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
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | SOCHYEAH Journal`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: ['SOCHYEAH Systems Unit'],
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

  // Schema Org Article metadata
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': post.title,
    'description': post.summary,
    'datePublished': post.date,
    'author': {
      '@type': 'Organization',
      'name': 'SOCHYEAH Systems Unit'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'SOCHYEAH',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://sochyeah.com/logo.png'
      }
    }
  };

  return (
    <div className="max-w-[840px] mx-auto px-6 py-12 md:py-20">
      {/* Inject Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700 mb-10 transition-colors"
      >
        <ArrowLeft size={14} className="mr-1.5" /> Back to Journal
      </Link>

      {/* Article Header */}
      <div className="flex flex-col gap-4 mb-8 border-b border-indigo-100/80 pb-6">
        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border self-start ${
          isAi ? 'text-purple-800 bg-purple-50 border-purple-200/50' : 'text-blue-800 bg-blue-50 border-blue-200/50'
        }`}>
          {post.category} // ENGINEER JOURNAL
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
          {post.title}
        </h1>
        <div className="flex gap-6 text-xs text-slate-400 font-mono mt-2">
          <span className="flex items-center gap-1.5"><Calendar size={13} className="text-indigo-600" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} className="text-indigo-600" /> {post.readTime}</span>
        </div>
      </div>

      {/* Large Banner Image */}
      {post.image && (
        <div className="w-full aspect-[21/9] mb-10 bg-indigo-50/20 border border-indigo-100/80 rounded-2xl overflow-hidden relative shadow-sm shadow-indigo-900/5">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}

      {/* Article Metrics Benchmarks Panel */}
      {post.metrics && (
        <div className="mb-10 border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-sm shadow-indigo-900/5">
          <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-800 uppercase">
            System Benchmarks & Target Telemetry
          </span>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {post.metrics.map((m, idx) => (
              <div key={idx} className="border-r border-indigo-100 last:border-r-0 pr-4">
                <span className="text-[9px] text-slate-400 uppercase font-mono block leading-none">{m.label}</span>
                <span className="text-lg md:text-xl font-extrabold text-slate-900 block mt-1.5">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Article Contents (Structured Editorial) */}
      <div className="flex flex-col gap-8 text-xs text-slate-600 leading-relaxed">
        {/* Summary block with Dual Tone Left Border */}
        <p className="text-sm font-semibold text-slate-900 leading-relaxed border-l-3 border-indigo-600 pl-4 py-0.5">
          {post.summary}
        </p>

        {/* 1. Problem */}
        <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
          <h3 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-3">01 // The Problem</h3>
          <p className="text-slate-700 leading-relaxed">{post.problem}</p>
        </div>

        {/* 2. Context */}
        <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
          <h3 className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider mb-3">02 // The Context</h3>
          <p className="text-slate-700 leading-relaxed">{post.context}</p>
        </div>

        {/* 3. Solution */}
        <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
          <h3 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-3">03 // The Solution</h3>
          <p className="text-slate-700 leading-relaxed">{post.solution}</p>
        </div>

        {/* 4. Architecture Blueprint */}
        <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
          <h3 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-4">04 // System Architecture</h3>
          <div className="bg-gradient-to-r from-purple-50/20 via-indigo-50/20 to-blue-50/25 border border-indigo-100/60 rounded-xl p-5 flex flex-col gap-2.5 font-mono text-[10px]">
            {post.architecture.map((arch, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-slate-700">
                <ChevronRight size={12} className="text-indigo-600" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Implementation details */}
        <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
          <h3 className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider mb-3">05 // The Implementation</h3>
          <p className="text-slate-700 leading-relaxed">{post.implementation}</p>
        </div>

        {/* 6. Lessons */}
        <div className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs">
          <h3 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-4">06 // Key Engineering Lessons</h3>
          <ul className="flex flex-col gap-3 list-decimal pl-4 text-slate-700">
            {post.lessons.map((less, idx) => (
              <li key={idx}>
                {less}
              </li>
            ))}
          </ul>
        </div>

        {/* 7. Code Implementation Snippet */}
        {post.codeSnippet && (
          <div>
            <h3 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-4">07 // Technical Code Implementation</h3>
            <pre className="bg-slate-950 text-slate-100 p-6 rounded-2xl overflow-x-auto font-mono text-[10px] leading-relaxed border border-indigo-950/60 shadow-md">
              <code>{post.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* 8. Developer FAQs */}
        {post.faqs && (
          <div className="border-t border-indigo-100/80 pt-8">
            <h3 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-6">08 // Developer Q&A</h3>
            <div className="flex flex-col gap-5">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="flex flex-col gap-2 border border-indigo-100/80 bg-white rounded-xl p-5 shadow-xs">
                  <span className="text-xs font-bold text-slate-900 uppercase">Q: {faq.q}</span>
                  <p className="text-xs text-slate-600 leading-relaxed pl-3.5 border-l-2 border-indigo-600">
                    A: {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 md:p-14 text-center mt-20 shadow-xl shadow-indigo-950/15 relative overflow-hidden">
        <div className="max-w-[500px] mx-auto flex flex-col gap-5 items-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
            Build this architecture
          </h3>
          <p className="text-xs text-indigo-200 leading-relaxed">
            Need similar AI integrations, API streaming pipelines, or database architectures configured for your business operations?
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-3.5 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            START AN ENGINEERING ROADMAP
          </Link>
        </div>
      </section>
    </div>
  );
}
