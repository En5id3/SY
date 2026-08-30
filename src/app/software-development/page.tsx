import React from 'react';
import Link from 'next/link';
import { Layers, Database, ShieldAlert, Cpu, Cloud, Terminal } from 'lucide-react';

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
      icon: <Layers className="w-5 h-5 text-black" />
    },
    {
      category: 'Backend',
      techs: ['Python', 'FastAPI', 'Node.js', 'NestJS'],
      icon: <Terminal className="w-5 h-5 text-black" />
    },
    {
      category: 'Data & Databases',
      techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      icon: <Database className="w-5 h-5 text-black" />
    },
    {
      category: 'AI Ecosystem',
      techs: ['OpenAI', 'Gemini / Claude', 'Vector Databases', 'LangChain / LangGraph'],
      icon: <Cpu className="w-5 h-5 text-black" />
    },
    {
      category: 'Cloud & Deployments',
      techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
      icon: <Cloud className="w-5 h-5 text-black" />
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">CUSTOM DEVELOPMENT</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          SOFTWARE BUILT AROUND YOUR BUSINESS.
        </h1>
        <p className="text-lg text-color-text-secondary leading-relaxed font-semibold">
          "Technology is the toolbox. The solution is the product."
        </p>
        <p className="sub-editorial">
          We don't write code for coding's sake. We build tailored platforms designed to solve operational friction, accelerate client booking, and automate manual updates. Clean, fast, and structured on modern components.
        </p>
      </div>

      {/* 2. Core Service Capabilities List */}
      <section className="mb-24">
        <h3 className="text-lg font-bold text-black mb-8 uppercase tracking-wider">Engineering Disciplines</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceList.map((svc, idx) => (
            <div 
              key={idx} 
              className="border border-border-light bg-white rounded-lg p-5 flex flex-col justify-between shadow-sm hover:border-black transition-colors"
            >
              <div className="text-xs font-semibold text-black">{svc}</div>
              <div className="text-[8px] text-color-text-muted mt-2 leading-tight uppercase font-medium">Verified System Layer</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Tech Stack Matrix Section */}
      <section className="mb-24 border-t border-border-light pt-20">
        <div className="max-w-[600px] mb-12 flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">ENGINEERING STACK</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-tight">
            THE TOOLBOX ACCELERATOR.
          </h2>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            We use modern, lightweight modular languages to bypass system lag and secure long-term operability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {technologies.map((t, i) => (
            <div key={i} className="border border-border-light bg-white rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-2 bg-neutral-50 rounded border border-neutral-100 self-start mb-4 w-max">
                  {t.icon}
                </div>
                <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-4">{t.category}</h4>
                <ul className="flex flex-col gap-2 text-xs text-color-text-secondary font-medium">
                  {t.techs.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-neutral-400">•</span>
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
      <section className="bg-black text-white rounded-lg p-10 md:p-16 text-center">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter">
            Start My Software Project
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-[450px]">
            Ready to design a custom SaaS platform, operations portal, or database index connection? Send us your technical parameters.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-8 py-4 rounded mt-4"
          >
            START ROADMAP CONVERSATION
          </Link>
        </div>
      </section>
    </div>
  );
}
