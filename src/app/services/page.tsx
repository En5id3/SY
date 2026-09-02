import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ArrowRight, Sparkles, Code, Cpu, Search, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Commercial Services & Technical Capabilities | SOCHYEAH",
  description: "Explore SOCHYEAH's end-to-end engineering capabilities: custom AI development, autonomous agents, RAG knowledge bases, SaaS engineering, machine learning, and technical SEO.",
  alternates: {
    canonical: "https://www.sochyeah.com/services",
  },
  openGraph: {
    title: "Commercial Services & Technical Capabilities | SOCHYEAH",
    description: "Explore SOCHYEAH's end-to-end engineering capabilities: custom AI development, autonomous agents, RAG knowledge bases, SaaS engineering, machine learning, and technical SEO.",
    url: "https://www.sochyeah.com/services",
    siteName: "SOCHYEAH",
    type: "website",
  }
};

export default function Services() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Sparkles className="w-5 h-5 text-purple-700" />;
      case 'Software Engineering':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'Machine Learning':
        return <Cpu className="w-5 h-5 text-purple-700" />;
      case 'SEO & Growth':
        return <Search className="w-5 h-5 text-blue-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': servicesData.map((svc, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Service',
        'name': svc.title,
        'description': svc.shortDesc,
        'url': `https://www.sochyeah.com/services/${svc.slug}`,
        'provider': {
          '@type': 'Organization',
          'name': 'SOCHYEAH',
          'url': 'https://www.sochyeah.com'
        }
      }
    }))
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Editorial Header */}
      <div className="max-w-[800px] mb-16 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start">
          CAPABILITIES &amp; DOMAINS
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          OUR SYSTEM DESIGN DOMAINS.
        </h1>
        <p className="sub-editorial">
          We combine strategy (&quot;soch&quot;) and engineering velocity (&quot;yeah&quot;) to build cohesive, high-leverage digital systems. We partner with ambitious founders and enterprises to deploy production AI, custom software, and organic growth infrastructure.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {servicesData.map((svc, idx) => (
          <div 
            key={svc.slug} 
            className="border border-indigo-100/80 bg-white rounded-2xl p-7 flex flex-col justify-between hover:border-indigo-300 transition-all duration-300 shadow-sm shadow-indigo-900/5 card-hover-effect group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="p-2.5 bg-indigo-50/70 rounded-xl border border-indigo-100/80">
                  {getCategoryIcon(svc.category)}
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/50">
                  {svc.category}
                </span>
              </div>

              <span className="text-[10px] font-mono font-bold text-slate-400 block mb-1">
                {(idx + 1).toString().padStart(2, '0')} {'//'}
              </span>

              <h2 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-indigo-950 transition-colors">
                {svc.title}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                {svc.shortDesc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {svc.featuresIncluded.slice(0, 2).map((feat, fIdx) => (
                  <span key={fIdx} className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/60 font-medium">
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <Link 
              href={`/services/${svc.slug}`}
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-900 group-hover:text-indigo-700 transition-colors pt-3 border-t border-indigo-50"
            >
              <span>Explore service</span>
              <ArrowRight size={13} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-indigo-950/20 relative overflow-hidden border border-indigo-500/20">
        <div className="max-w-[550px] mx-auto flex flex-col gap-4 items-center relative z-10">
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-300 bg-indigo-900/60 px-3.5 py-1 rounded-full border border-indigo-700/50">
            TAILORED ARCHITECTURE
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase">
            Need a Custom Architecture for Your System?
          </h3>
          <p className="text-xs text-indigo-200 leading-relaxed">
            Speak directly with our technical leads to architect a custom AI, software, or data pipeline mapped to your exact operational workflows.
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
