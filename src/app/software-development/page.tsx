'use client';

import React from 'react';
import Link from 'next/link';
import { Layers, Database, ShieldAlert, Cpu, Cloud, Terminal, ArrowRight } from 'lucide-react';

export default function SoftwareDevelopment() {
  const serviceList = [
    'Custom Web Applications', 'SaaS Platforms', 'Mobile Apps', 
    'Dashboards', 'Internal Tools', 'CRM Systems', 'ERP Integrations', 
    'APIs', 'Backend Systems', 'Cloud Applications', 'Database Architecture', 
    'Legacy Modernization'
  ];

  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: <Layers className="w-5 h-5 text-purple-700" />
    },
    {
      category: 'Backend',
      techs: ['Python', 'FastAPI', 'Node.js', 'NestJS'],
      icon: <Terminal className="w-5 h-5 text-purple-700" />
    },
    {
      category: 'Data & Databases',
      techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      icon: <Database className="w-5 h-5 text-purple-700" />
    },
    {
      category: 'AI Ecosystem',
      techs: ['OpenAI', 'Gemini / Claude', 'Vector Databases', 'LangGraph'],
      icon: <Cpu className="w-5 h-5 text-purple-700" />
    },
    {
      category: 'Cloud & Deployments',
      techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
      icon: <Cloud className="w-5 h-5 text-purple-700" />
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 self-start">
          CUSTOM SOFTWARE ENGINEERING
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          SOFTWARE BUILT AROUND YOUR BUSINESS.
        </h1>
        <p className="sub-editorial text-purple-950 font-medium">
          "Technology is the toolbox. The solution is the scalable product."
        </p>
        <p className="sub-editorial">
          We don't write code for coding's sake. We build tailored platforms designed to solve operational friction, accelerate client booking, and automate manual updates. Clean, fast, and structured on modern components.
        </p>
      </div>

      {/* 2. Core Service Capabilities List */}
      <section className="mb-24">
        <h3 className="text-base font-bold text-slate-900 mb-8 uppercase tracking-wider">Engineering Disciplines</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {serviceList.map((svc, idx) => (
            <div 
              key={idx} 
              className="border border-purple-100/80 bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm shadow-purple-900/5 card-hover-effect"
            >
              <div className="text-xs font-semibold text-slate-900">{svc}</div>
              <div className="text-[8px] font-mono text-purple-700 mt-3 leading-tight uppercase font-bold">Verified System Layer</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Tech Stack Matrix Section */}
      <section className="mb-24 border-t border-purple-100/70 pt-20">
        <div className="max-w-[600px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
            01 // ENGINEERING STACK
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            THE TOOLBOX ACCELERATOR.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We use modern, lightweight modular languages to bypass system lag and secure long-term operability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {technologies.map((t, i) => (
            <div key={i} className="border border-purple-100/80 bg-white rounded-2xl p-6 shadow-sm shadow-purple-900/5 flex flex-col justify-between card-hover-effect">
              <div>
                <div className="p-2.5 bg-purple-50/60 rounded-xl border border-purple-100 self-start mb-4 w-max">
                  {t.icon}
                </div>
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-4">{t.category}</h4>
                <ul className="flex flex-col gap-2.5 text-xs text-slate-600 font-medium">
                  {t.techs.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-xl shadow-purple-950/15 relative overflow-hidden">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Start My Software Project
          </h2>
          <p className="text-xs text-purple-200 leading-relaxed max-w-[450px]">
            Ready to design a custom SaaS platform, operations portal, or database index connection? Send us your technical parameters.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-purple-950 hover:bg-purple-50 transition-all px-8 py-4 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            START ROADMAP CONVERSATION
          </Link>
        </div>
      </section>
    </div>
  );
}
