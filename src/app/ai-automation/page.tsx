import React from 'react';
import Link from 'next/link';
import AIDemo from '@/components/AIDemo';
import { ArrowRight, Activity, Cpu, Database, Server, Smartphone, UserCheck, BarChart } from 'lucide-react';

export default function AIAutomation() {
  const serviceList = [
    'AI Agents', 'Generative AI', 'AI Chatbots', 'AI Voice Agents', 
    'AI Receptionists', 'RAG Applications', 'Knowledge Assistants', 'Document Intelligence', 
    'AI Customer Support', 'AI Sales Assistants', 'AI Workflow Automation', 'LLM Integrations', 
    'AI Copilots', 'AI Content Systems', 'AI Search', 'AI Analytics'
  ];

  const automationTargets = [
    'Answer customer calls', 'Qualify leads', 'Schedule appointments', 'Search company documents',
    'Generate reports', 'Process invoices', 'Extract information from PDFs', 'Respond to customer questions',
    'Update CRM records', 'Generate marketing content', 'Monitor business metrics', 'Route support tickets'
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">AI & COGNITIVE SYSTEMS</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          PUT AI TO WORK.
        </h1>
        <p className="text-lg text-color-text-secondary leading-relaxed font-semibold">
          "Not AI for the sake of AI. Intelligent systems built around your actual business."
        </p>
        <p className="sub-editorial">
          Move past standard ChatGPT prompts. We engineer custom agents capable of analyzing databases, calling APIs, extracting knowledge from corporate document silos, and handling phone operations autonomously.
        </p>
      </div>

      {/* 2. Interactive AI Receptionist Demo Widget */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-tight mb-2">
            Interactive Laboratory
          </h2>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            Click through our simulated agent profiles to see natural conversations and step-by-step reasoning logic outputs.
          </p>
        </div>
        <AIDemo />
      </section>

      {/* 3. Architecture Visualization Flow */}
      <section className="mb-24 border-t border-border-light pt-20">
        <div className="max-w-[600px] mb-12 flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">ARCHITECTURAL BLUEPRINT</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-tight">
            SYSTEM DATA CHAIN.
          </h2>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            How we map cognitive reasoning triggers to raw operations database inputs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 items-center">
          {[
            { step: 'CUSTOMER', desc: 'User trigger', icon: <Smartphone className="w-5 h-5 text-black" /> },
            { step: 'INTERFACE', desc: 'Twilio / Web UI', icon: <Activity className="w-5 h-5 text-black" /> },
            { step: 'AI AGENT', desc: 'LLM Reasoning', icon: <Cpu className="w-5 h-5 text-black" /> },
            { step: 'TOOLS / APIs', desc: 'Tool calling routes', icon: <Server className="w-5 h-5 text-black" /> },
            { step: 'BUSINESS SYSTEMS', desc: 'CRM / Calendar', icon: <UserCheck className="w-5 h-5 text-black" /> },
            { step: 'DATABASE', desc: 'Postgre SQL Vector', icon: <Database className="w-5 h-5 text-black" /> },
            { step: 'ANALYTICS', desc: 'Metrics report', icon: <BarChart className="w-5 h-5 text-black" /> }
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="border border-border-light bg-white rounded-lg p-5 flex flex-col items-center text-center shadow-sm min-h-[140px] justify-between">
                <div className="p-2 bg-neutral-50 rounded border border-neutral-100 mb-2">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[9px] font-extrabold tracking-wider text-black">{item.step}</div>
                  <div className="text-[8px] text-color-text-muted mt-1 leading-tight uppercase font-medium">{item.desc}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 4. Capabilities Grid & What Can We Automate */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-light pt-20">
        {/* Capabilities List */}
        <div>
          <h3 className="text-lg font-bold text-black mb-6 uppercase tracking-wider">AI Capabilities Directory</h3>
          <div className="grid grid-cols-2 gap-4">
            {serviceList.map((svc, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-color-text-secondary font-medium">
                <span className="text-black font-bold">•</span>
                <span>{svc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What Can We Automate */}
        <div className="bg-neutral-50 border border-border-light rounded-lg p-8">
          <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-wider">What Can We Automate?</h3>
          <p className="text-xs text-color-text-secondary leading-relaxed mb-6">
            We map manual bottlenecks inside operations directories, executing automated triggers that eliminate repetitive tasks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {automationTargets.map((tgt, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-color-text-secondary font-medium">
                <span className="text-green-600 font-bold">✓</span>
                <span>{tgt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-black text-white rounded-lg p-10 md:p-16 text-center mt-24">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter">
            Build My AI System
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-[450px]">
            Ready to integrate domain-specific tools, index internal compliance PDFs, or configure voice assistants? Connect with our engineering partners.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-8 py-4 rounded mt-4"
          >
            START AN AUTOMATION SCOPE
          </Link>
        </div>
      </section>
    </div>
  );
}
