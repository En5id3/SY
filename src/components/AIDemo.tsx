'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface DemoConversation {
  role: 'user' | 'ai';
  text: string;
  step?: 'UNDERSTAND' | 'REASON' | 'ACT';
  stepDetail?: string;
}

interface DemoPersona {
  id: string;
  name: string;
  tag: string;
  messages: DemoConversation[];
}

const personas: DemoPersona[] = [
  {
    id: 'receptionist',
    name: 'Voice AI Assistant',
    tag: 'Telephony & Calendar',
    messages: [
      { role: 'user', text: 'Hey, I want to book an architecture evaluation call tomorrow afternoon.' },
      { 
        role: 'ai', 
        text: 'Checking engineer calendars... We have slots available tomorrow at 2:00 PM and 4:30 PM. Which time fits your schedule best?', 
        step: 'UNDERSTAND', 
        stepDetail: 'Parsed intent: booking_enquiry | Parameters: date=tomorrow_afternoon' 
      },
      { role: 'user', text: '4:30 PM works. What info do you need from me?' },
      { 
        role: 'ai', 
        text: 'Confirmed. I have reserved 4:30 PM for you. I dispatched a Google Meet invite and calendar confirmation to your email.', 
        step: 'ACT', 
        stepDetail: 'Executed DB calendar lock. Webhook dispatched to SMS & CRM pipeline.' 
      }
    ]
  },
  {
    id: 'document',
    name: 'RAG Knowledge Agent',
    tag: 'Enterprise Retrieval',
    messages: [
      { role: 'user', text: 'What is our encryption standard for multi-tenant database clusters?' },
      { 
        role: 'ai', 
        text: 'According to page 14 of the Compliance PDF, all production PostgreSQL instances enforce AES-256 encryption at rest and TLS 1.3 in transit.', 
        step: 'REASON', 
        stepDetail: 'Vector search on cluster: security_handbook_2026.pdf (Cosine Similarity: 0.94)' 
      },
      { role: 'user', text: 'Where are audit snapshots archived?' },
      { 
        role: 'ai', 
        text: 'Section 4.2 states audit snapshots are automatically bundled weekly and retained in read-only cold storage with 7-year immutable locks.', 
        step: 'UNDERSTAND', 
        stepDetail: 'Parsed query: snapshot_retention_policy | Retrieved chunks 4.0-4.5' 
      }
    ]
  },
  {
    id: 'sales',
    name: 'Autonomous Sales Qualifier',
    tag: 'CRM & Lead Scoring',
    messages: [
      { role: 'user', text: 'We are looking to launch an enterprise SaaS MVP in 6 weeks.' },
      { 
        role: 'ai', 
        text: 'That aligns with our rapid sprint model. What is your target sector and expected database concurrency?', 
        step: 'UNDERSTAND', 
        stepDetail: 'Lead qualification triggered | Intent: SaaS_MVP_sprint' 
      },
      { role: 'user', text: 'Healthcare logistics, expecting ~5,000 daily active users initially.' },
      { 
        role: 'ai', 
        text: 'Understood. We will configure an auto-scaling serverless backend with HIPAA compliance. Routing your request to our lead systems engineer.', 
        step: 'ACT', 
        stepDetail: 'Lead logged to CRM | Lead Score: 94/100 (High Intent) | Team notified.' 
      }
    ]
  }
];

export default function AIDemo() {
  const [activePersona, setActivePersona] = useState<string>('receptionist');

  const current = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <div className="border border-purple-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-sm shadow-purple-900/5">
      {/* Top Controls: Persona Tabs */}
      <div className="flex flex-wrap gap-2.5 pb-6 mb-6 border-b border-slate-100">
        {personas.map((p) => {
          const isActive = activePersona === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActivePersona(p.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-purple-900 text-white shadow-sm shadow-purple-950/20'
                  : 'bg-purple-50/50 text-slate-600 border border-purple-100 hover:bg-purple-100/60 hover:text-purple-950'
              }`}
            >
              <Sparkles size={12} className={isActive ? 'text-purple-300' : 'text-purple-600'} />
              <span>{p.name}</span>
              <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-purple-800 text-purple-200' : 'bg-white text-slate-400'
              }`}>
                {p.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Conversation Stream */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePersona}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-4 min-h-[280px]"
        >
          {current.messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} gap-1.5`}
            >
              <div
                className={`max-w-[85%] md:max-w-[75%] p-4 rounded-2xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-slate-100 text-slate-900 rounded-br-xs font-medium'
                    : 'bg-purple-50/40 border border-purple-100 text-slate-800 rounded-bl-xs shadow-xs'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {msg.role === 'user' ? (
                    <>
                      <User size={11} className="text-slate-500" />
                      <span>User Request</span>
                    </>
                  ) : (
                    <>
                      <Bot size={11} className="text-purple-700" />
                      <span className="text-purple-900 font-bold">SOCHYEAH AI Engine</span>
                    </>
                  )}
                </div>
                <p className="text-slate-800">{msg.text}</p>
              </div>

              {/* Cognitive Step Meta Tag */}
              {msg.step && msg.stepDetail && (
                <div className="flex items-center gap-2 text-[10px] font-mono text-purple-800 bg-purple-100/60 px-3 py-1 rounded-full border border-purple-200/50 mt-0.5">
                  <span className="font-bold uppercase tracking-wider px-1.5 py-0.5 bg-purple-900 text-white rounded text-[8px]">
                    {msg.step}
                  </span>
                  <span className="truncate max-w-[320px] md:max-w-[500px]">{msg.stepDetail}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA Strip */}
      <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <span className="text-slate-500 font-medium">
          Ready to deploy customized reasoning models inside your stack?
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-900 hover:text-purple-700 transition-colors uppercase tracking-wider"
        >
          <span>Schedule an Architecture Sprint</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
