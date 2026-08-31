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
    <div className="max-w-[800px] mx-auto px-6 py-12 md:py-20">
      {/* Inject Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-color-text-secondary hover:text-black mb-10 transition-colors"
      >
        <ArrowLeft size={14} className="mr-1.5" /> Back to Journal
      </Link>

      {/* Article Header */}
      <div className="flex flex-col gap-4 mb-8 border-b border-border-light pb-6">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
          {post.category} // ENGINEER JOURNAL
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-black leading-tight">
          {post.title}
        </h1>
        <div className="flex gap-6 text-xs text-color-text-muted font-mono mt-2">
          <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
        </div>
      </div>

      {/* Large Banner Image */}
      {post.image && (
        <div className="w-full aspect-[21/9] mb-10 bg-neutral-50 border border-border-light rounded-lg overflow-hidden relative shadow-sm">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover filter grayscale contrast-[1.02] hover:grayscale-0 transition-all duration-300" 
          />
        </div>
      )}

      {/* Article Metrics Benchmarks Panel */}
      {post.metrics && (
        <div className="mb-10 border border-border-light bg-white rounded-lg p-5 shadow-sm">
          <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">System Benchmarks & Data Points</span>
          <div className="grid grid-cols-3 gap-6 mt-3">
            {post.metrics.map((m, idx) => (
              <div key={idx} className="border-r border-neutral-100 last:border-r-0 pr-4">
                <span className="text-[9px] text-color-text-muted uppercase font-mono block leading-none">{m.label}</span>
                <span className="text-base font-extrabold text-black block mt-1.5">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Article Contents (Structured Editorial) */}
      <div className="flex flex-col gap-10 text-xs text-color-text-secondary leading-relaxed">
        {/* Summary block */}
        <p className="text-sm font-semibold text-black leading-relaxed">
          {post.summary}
        </p>

        {/* 1. Problem */}
        <div>
          <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3">01 // The Problem</h3>
          <p>{post.problem}</p>
        </div>

        {/* 2. Context */}
        <div>
          <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3">02 // The Context</h3>
          <p>{post.context}</p>
        </div>

        {/* 3. Solution */}
        <div>
          <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3">03 // The Solution</h3>
          <p>{post.solution}</p>
        </div>

        {/* 4. Architecture Blueprint */}
        <div>
          <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-4">04 // System Architecture</h3>
          <div className="bg-neutral-50 border border-border-light rounded-lg p-5 flex flex-col gap-2 font-mono text-[10px]">
            {post.architecture.map((arch, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight size={12} className="text-neutral-400" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Implementation details */}
        <div>
          <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-3">05 // The Implementation</h3>
          <p>{post.implementation}</p>
        </div>

        {/* 6. Lessons */}
        <div>
          <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-4">06 // Key Engineering Lessons</h3>
          <ul className="flex flex-col gap-3 list-decimal pl-4">
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
            <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-4">07 // Technical Code Implementation</h3>
            <pre className="bg-neutral-900 text-neutral-100 p-5 rounded-lg overflow-x-auto font-mono text-[10px] leading-relaxed border border-neutral-800">
              <code>{post.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* 8. Developer FAQs */}
        {post.faqs && (
          <div className="border-t border-border-light pt-8">
            <h3 className="text-xs font-bold text-black uppercase tracking-wider mb-6">08 // Developer Q&A</h3>
            <div className="flex flex-col gap-6">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-black uppercase">Q: {faq.q}</span>
                  <p className="text-xs text-color-text-secondary leading-relaxed pl-4 border-l border-neutral-200">
                    A: {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Box */}
      <section className="bg-black text-white rounded-lg p-8 md:p-12 text-center mt-20">
        <div className="max-w-[500px] mx-auto flex flex-col gap-6 items-center">
          <h3 className="text-lg font-bold uppercase tracking-tighter">Build this architecture</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Need similar AI integrations, API streaming pipelines, or database architectures configured for your business operations?
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-6 py-3 rounded mt-2"
          >
            START AN ENGINEERING ROADMAP
          </Link>
        </div>
      </section>
    </div>
  );
}
