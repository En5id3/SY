'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code, Cpu, Search, ShieldCheck } from 'lucide-react';

export default function Services() {
  const serviceDirectory = [
    {
      num: '01',
      title: 'AI & Automation',
      desc: 'Build AI assistants, custom AI agents, RAG systems, document parsing automation, and telephony AI receptionists.',
      href: '/ai-automation',
      features: ['Retrieval-Augmented Generation (RAG)', 'Autonomous AI Agents', 'Voice AI Receptionists', 'Document OCR Intelligence'],
      icon: <Sparkles className="w-5 h-5 text-purple-700" />,
      theme: 'purple',
      badgeClass: 'text-purple-700 bg-purple-50 border-purple-100',
      iconBoxClass: 'bg-purple-50/60 border-purple-100',
      checkColor: 'text-purple-600',
      boxBg: 'bg-purple-50/25 border-purple-100/60'
    },
    {
      num: '02',
      title: 'Software Engineering',
      desc: 'High-performance web applications, custom SaaS platforms, secure internal portals, and REST/GraphQL APIs.',
      href: '/software-development',
      features: ['React & Next.js Frontends', 'FastAPI & Node Backends', 'PostgreSQL Database Design', 'Cloud Deployments (AWS/GCP)'],
      icon: <Code className="w-5 h-5 text-blue-600" />,
      theme: 'blue',
      badgeClass: 'text-blue-700 bg-blue-50 border-blue-100',
      iconBoxClass: 'bg-blue-50/60 border-blue-100',
      checkColor: 'text-blue-600',
      boxBg: 'bg-blue-50/25 border-blue-100/60'
    },
    {
      num: '03',
      title: 'Machine Learning',
      desc: 'Custom classification models, time-series forecasting, recommendations, anomalies extraction, and computer vision tools.',
      href: '/machine-learning',
      features: ['Predictive Forecasting Models', 'Personalization Algorithms', 'Image & Object Classification', 'MLOps Model Pipelines'],
      icon: <Cpu className="w-5 h-5 text-purple-700" />,
      theme: 'purple',
      badgeClass: 'text-purple-700 bg-purple-50 border-purple-100',
      iconBoxClass: 'bg-purple-50/60 border-purple-100',
      checkColor: 'text-purple-600',
      boxBg: 'bg-purple-50/25 border-purple-100/60'
    },
    {
      num: '04',
      title: 'SEO & Growth Systems',
      desc: 'Database programmatic SEO engines, technical crawl auditing, entity JSON-LD schema layouts, and conversion triggers.',
      href: '/seo-growth',
      features: ['Programmatic Page Generators', 'Core Web Vitals Tuning', 'Structured Microdata Layouts', 'Conversion Rate Audits'],
      icon: <Search className="w-5 h-5 text-blue-600" />,
      theme: 'blue',
      badgeClass: 'text-blue-700 bg-blue-50 border-blue-100',
      iconBoxClass: 'bg-blue-50/60 border-blue-100',
      checkColor: 'text-blue-600',
      boxBg: 'bg-blue-50/25 border-blue-100/60'
    },
    {
      num: '05',
      title: 'Product Development',
      desc: 'Design validation loops, high-fidelity clickable UX diagrams, core MVP engineering, and user behavior analysis setups.',
      href: '/product-development',
      features: ['UX/UI Interactive Prototyping', '6-Week Rapid MVP Sprints', 'User Behavior Telemetry', 'Agile Feedback Loops'],
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      theme: 'indigo',
      badgeClass: 'text-indigo-700 bg-indigo-50 border-indigo-100',
      iconBoxClass: 'bg-indigo-50/60 border-indigo-100',
      checkColor: 'text-indigo-600',
      boxBg: 'bg-indigo-50/25 border-indigo-100/60'
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start">
          CAPABILITIES & DOMAINS
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          OUR SYSTEM DESIGN DOMAINS.
        </h1>
        <p className="sub-editorial">
          We combine strategy ("soch") and execution ("yeah") to build cohesive digital platforms. We do not sell fragmented hourly labor. We partner to deploy high-leverage products that automate operations and accelerate compounding growth.
        </p>
      </div>

      {/* Services List Stack */}
      <div className="flex flex-col gap-8">
        {serviceDirectory.map((svc) => (
          <div 
            key={svc.num} 
            className="border border-indigo-100/80 bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between hover:border-indigo-300 transition-all duration-300 shadow-sm shadow-indigo-900/5 card-hover-effect"
          >
            {/* Title Block */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${svc.badgeClass}`}>
                  {svc.num}
                </span>
                <span className={`p-2 rounded-xl border ${svc.iconBoxClass}`}>{svc.icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{svc.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed max-w-[450px]">
                {svc.desc}
              </p>
              <Link 
                href={svc.href} 
                className="inline-flex items-center text-xs font-bold text-indigo-900 hover:text-indigo-700 transition-colors mt-2 self-start group"
              >
                <span>EXPLORE DOMAIN DETAIL</span>
                <ArrowRight size={13} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bullet Highlights Grid */}
            <div className={`flex-1 ${svc.boxBg} rounded-xl p-6 flex flex-col justify-center gap-3`}>
              <span className={`text-[9px] font-mono font-bold tracking-wider uppercase ${
                svc.theme === 'purple' ? 'text-purple-800' : 'text-blue-800'
              }`}>
                Core Execution Capabilities
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-medium">
                {svc.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`${svc.checkColor} font-bold`}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 md:p-14 text-center mt-24 shadow-xl shadow-indigo-950/15 relative overflow-hidden">
        <div className="max-w-[500px] mx-auto flex flex-col gap-5 items-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
            Need a Custom Architecture?
          </h3>
          <p className="text-xs text-indigo-200 leading-relaxed">
            We review database schemas, API structures, and software requirements with founders and engineering leaders.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-3.5 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
