import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Search, Eye, Rocket, Play, Activity } from 'lucide-react';

export default function ProductDevelopment() {
  const serviceList = [
    'Product Strategy', 'UX/UI Design', 'MVP Development', 
    'SaaS Development', 'Mobile Apps', 'AI Product Development', 
    'API Development', 'Cloud Deployment', 'Analytics', 'Product Optimization'
  ];

  const steps = [
    { step: 'IDEA', desc: 'Identify target user opportunities and formulate hypotheses.', icon: <Lightbulb className="w-5 h-5 text-black" /> },
    { step: 'DISCOVERY', desc: 'Perform competitor analysis, check user stories, and map DB models.', icon: <Search className="w-5 h-5 text-black" /> },
    { step: 'PROTOTYPE', desc: 'Create interactive click-through layout wires for feedback loops.', icon: <Eye className="w-5 h-5 text-black" /> },
    { step: 'MVP', desc: 'Execute a tight, 6-week engineering sprint for core value functions.', icon: <Play className="w-5 h-5 text-black" /> },
    { step: 'LAUNCH', desc: 'Configure cloud server auto-scaling and deploy production code.', icon: <Rocket className="w-5 h-5 text-black" /> },
    { step: 'SCALE', desc: 'Integrate usage event analytics and execute iterative sprints.', icon: <Activity className="w-5 h-5 text-black" /> }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">PRODUCT ENGINEERING</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          FROM IDEA TO PRODUCT.
        </h1>
        <p className="sub-editorial">
          We help ambitious teams turn ideas and business requirements into structured web applications, SaaS platforms, and mobile layouts. We prioritize validation and clean user stories over multi-month bloated schedules.
        </p>
      </div>

      {/* 2. Process Timeline Grid */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-12 flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">DEVELOPMENT BLUEPRINT</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-tight">
            THE VENTURE FRAMEWORK.
          </h2>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            A step-by-step roadmap designed to validate concepts quickly and scale systems safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="border border-border-light bg-white rounded-lg p-5 flex flex-col justify-between shadow-sm min-h-[160px]">
              <div>
                <div className="p-2 bg-neutral-50 rounded border border-neutral-100 self-start mb-4 w-max">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-black uppercase tracking-wider mb-2">{item.step}</div>
              </div>
              <p className="text-[10px] text-color-text-secondary leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Capabilities Checklist Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-light pt-20">
        <div>
          <h3 className="text-lg font-bold text-black mb-6 uppercase tracking-wider">Product Scope Directory</h3>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            By avoiding custom code structures for standard features (like checkout tiers or user logins), we focus all coding sprints on your core, high-leverage product values.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {serviceList.map((svc, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-color-text-secondary font-medium">
              <span className="text-black font-bold">•</span>
              <span>{svc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-black text-white rounded-lg p-10 md:p-16 text-center mt-24">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter">
            Build My Product
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-[450px]">
            Ready to structure user stories, click layout wires, or start a 6-week MVP engineering cycle? Let\'s plan your roadmap.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-8 py-4 rounded mt-4"
          >
            START AN MVP SCOPING
          </Link>
        </div>
      </section>
    </div>
  );
}
