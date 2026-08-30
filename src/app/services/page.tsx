import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code, Cpu, Activity, Search, ShieldCheck } from 'lucide-react';

export default function Services() {
  const serviceDirectory = [
    {
      num: '01',
      title: 'AI & Automation',
      desc: 'Build AI assistants, custom AI agents, RAG systems, document parsing automation, and telephony AI receptionists.',
      href: '/ai-automation',
      features: ['Retrieval-Augmented Generation (RAG)', 'Autonomous AI Agents', 'Voice AI Receptionists', 'Document OCR Intelligence'],
      icon: <Sparkles className="w-5 h-5 text-black" />
    },
    {
      num: '02',
      title: 'Software Engineering',
      desc: 'High-performance web applications, custom SaaS platforms, secure internal portals, and REST/GraphQL APIs.',
      href: '/software-development',
      features: ['React & Next.js Frontends', 'FastAPI & Node Backends', 'PostgreSQL Database Design', 'Cloud Deployments (AWS/GCP)'],
      icon: <Code className="w-5 h-5 text-black" />
    },
    {
      num: '03',
      title: 'Machine Learning',
      desc: 'Custom classification models, time-series forecasting, recommendations, anomalies extraction, and computer vision tools.',
      href: '/machine-learning',
      features: ['Predictive Forecasting Models', 'Personalization Algorithms', 'Image & Object Classification', 'MLOps Model Pipelines'],
      icon: <Cpu className="w-5 h-5 text-black" />
    },
    {
      num: '04',
      title: 'SEO & Growth Systems',
      desc: 'Database programmatic SEO engines, technical crawl auditing, entity JSON-LD schema layouts, and conversion triggers.',
      href: '/seo-growth',
      features: ['Programmatic Page Generators', 'Core Web Vitals Tuning', 'Structured Microdata Layouts', 'Conversion Rate Audits'],
      icon: <Search className="w-5 h-5 text-black" />
    },
    {
      num: '05',
      title: 'Product Development',
      desc: 'Design validation loops, high-fidelity clickable UX diagrams, core MVP engineering, and user behavior analysis setups.',
      href: '/product-development',
      features: ['UX/UI Interactive Prototyping', '6-Week Rapid MVP Sprints', 'User Behavior Telemetry', 'Agile Feedback Loops'],
      icon: <ShieldCheck className="w-5 h-5 text-black" />
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">CAPABILITIES</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          OUR SYSTEM DESIGN DOMAINS.
        </h1>
        <p className="sub-editorial">
          We combine strategy ("soch") and execution ("yeah") to build cohesive platforms. We do not sell isolated hourly labor. We partner to deploy high-leverage products that automate operations and accelerate growth.
        </p>
      </div>

      {/* Services List Stack */}
      <div className="flex flex-col gap-8">
        {serviceDirectory.map((svc) => (
          <div 
            key={svc.num} 
            className="border border-border-light bg-white rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between hover:border-black transition-all duration-300 shadow-sm"
          >
            {/* Title Block */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-neutral-300">{svc.num}</span>
                <span className="p-1.5 bg-neutral-50 rounded border border-neutral-100">{svc.icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-black">{svc.title}</h2>
              <p className="text-xs text-color-text-secondary leading-relaxed max-w-[450px]">
                {svc.desc}
              </p>
              <Link 
                href={svc.href} 
                className="inline-flex items-center text-xs font-bold text-black hover:gap-2 transition-all duration-200 mt-2 self-start"
              >
                EXPLORE DOMAIN DETAIL <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Bullet Highlights Grid */}
            <div className="flex-1 bg-neutral-50/50 border border-neutral-100 rounded-lg p-6 flex flex-col justify-center gap-3">
              <span className="text-[8px] font-bold tracking-wider text-neutral-400 uppercase">Core Capabilities</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-color-text-secondary font-medium">
                {svc.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-neutral-400 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
