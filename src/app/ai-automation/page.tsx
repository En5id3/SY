'use client';

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
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 self-start">
          AI & COGNITIVE SYSTEMS
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          PUT AI TO WORK.
        </h1>
        <p className="sub-editorial text-purple-950 font-medium">
          "Not AI for the sake of AI. Intelligent systems built around your actual business operations."
        </p>
        <p className="sub-editorial">
          Move past standard ChatGPT prompts. We engineer custom agents capable of analyzing databases, calling APIs, extracting knowledge from corporate document silos, and handling phone operations autonomously.
        </p>
      </div>

      {/* 2. Interactive AI Receptionist Demo Widget */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-8">
          <span className="text-[10px] font-mono font-bold text-purple-800 uppercase tracking-wider block mb-1">
            Execution Preview
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">
            Interactive Laboratory
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Click through our simulated agent profiles to see natural conversations and step-by-step reasoning logic outputs.
          </p>
        </div>
        <AIDemo />
      </section>

      {/* 3. Architecture Visualization Flow */}
      <section className="mb-24 border-t border-purple-100/70 pt-20">
        <div className="max-w-[600px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
            01 // ARCHITECTURAL BLUEPRINT
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            SYSTEM DATA CHAIN.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            How we map cognitive reasoning triggers to raw operations database inputs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 items-center">
          {[
            { step: 'CUSTOMER', desc: 'User trigger', icon: <Smartphone className="w-5 h-5 text-purple-700" /> },
            { step: 'INTERFACE', desc: 'Twilio / Web UI', icon: <Activity className="w-5 h-5 text-purple-700" /> },
            { step: 'AI AGENT', desc: 'LLM Reasoning', icon: <Cpu className="w-5 h-5 text-purple-700" /> },
            { step: 'TOOLS / APIs', desc: 'Tool calling routes', icon: <Server className="w-5 h-5 text-purple-700" /> },
            { step: 'BUSINESS SYSTEMS', desc: 'CRM / Calendar', icon: <UserCheck className="w-5 h-5 text-purple-700" /> },
            { step: 'DATABASE', desc: 'Postgre SQL Vector', icon: <Database className="w-5 h-5 text-purple-700" /> },
            { step: 'ANALYTICS', desc: 'Metrics report', icon: <BarChart className="w-5 h-5 text-purple-700" /> }
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="border border-purple-100/80 bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm shadow-purple-900/5 min-h-[140px] justify-between card-hover-effect">
                <div className="p-2.5 bg-purple-50/60 rounded-xl border border-purple-100 mb-2">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold tracking-wider text-slate-900">{item.step}</div>
                  <div className="text-[8px] text-slate-400 mt-1 leading-tight uppercase font-medium">{item.desc}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 4. Capabilities Grid & What Can We Automate */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-purple-100/70 pt-20">
        {/* Capabilities List */}
        <div className="border border-purple-100/80 bg-white rounded-2xl p-8 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-6 uppercase tracking-wider">AI Capabilities Directory</h3>
          <div className="grid grid-cols-2 gap-3.5">
            {serviceList.map((svc, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <span className="text-purple-600 font-bold">•</span>
                <span>{svc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What Can We Automate */}
        <div className="bg-purple-50/25 border border-purple-100/60 rounded-2xl p-8">
          <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider">What Can We Automate?</h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            We map manual bottlenecks inside operations directories, executing automated triggers that eliminate repetitive tasks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {automationTargets.map((tgt, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                <span className="text-purple-700 font-bold">✓</span>
                <span>{tgt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-10 md:p-16 text-center mt-24 shadow-xl shadow-indigo-950/15 relative overflow-hidden">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Build My AI System
          </h2>
          <p className="text-xs text-indigo-200 leading-relaxed max-w-[450px]">
            Ready to integrate domain-specific tools, index internal compliance PDFs, or configure voice assistants? Connect with our engineering partners.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-4 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            START AN AUTOMATION SCOPE
          </Link>
        </div>
      </section>
    </div>
  );
}
