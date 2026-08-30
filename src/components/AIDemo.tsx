'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoConversation {
  role: 'user' | 'ai';
  text: string;
  step?: 'UNDERSTAND' | 'REASON' | 'ACT';
  stepDetail?: string;
}

interface DemoPersona {
  id: string;
  name: string;
  messages: DemoConversation[];
}

const personas: DemoPersona[] = [
  {
    id: 'receptionist',
    name: 'AI Receptionist',
    messages: [
      { role: 'user', text: 'Hey, I want to book an alignment call tomorrow afternoon if possible.' },
      { 
        role: 'ai', 
        text: 'Let me check... We have openings tomorrow at 2:00 PM and 4:30 PM. Do either of those work for you?', 
        step: 'UNDERSTAND', 
        stepDetail: 'Parsed request: booking_enquiry, timeline: tomorrow_afternoon.' 
      },
      { role: 'user', text: '4:30 PM works. What details do you need?' },
      { 
        role: 'ai', 
        text: 'Perfect. I have scheduled that for tomorrow at 4:30 PM. I\'ve sent a calendar invite and SMS confirmation to your number.', 
        step: 'ACT', 
        stepDetail: 'Executing database calendar insert. Dispatched SMS scheduler Webhook.' 
      }
    ]
  },
  {
    id: 'document',
    name: 'AI Document Assistant',
    messages: [
      { role: 'user', text: 'What is our policy on data encryption for compliance audits?' },
      { 
        role: 'ai', 
        text: 'Searching manuals... Page 14 of the Compliance PDF states that all production databases must run AES-256 encryption at rest and TLS 1.3 in transit.', 
        step: 'REASON', 
        stepDetail: 'Retrieving context chunks. Top source: compliance_policy_2026.pdf (Similarity: 0.94)' 
      },
      { role: 'user', text: 'Great. Are there regular audit logs compiled?' },
      { 
        role: 'ai', 
        text: 'Yes, section 4.2 states audit logs are automatically compiled weekly and retained in read-only cold storage for 7 years.', 
        step: 'UNDERSTAND', 
        stepDetail: 'Query parsed: audit_logs_retention. Fetching document sections 4.0-4.5.' 
      }
    ]
  },
  {
    id: 'sales',
    name: 'AI Sales Agent',
    messages: [
      { role: 'user', text: 'I\'m looking to build a SaaS MVP in 6 weeks. Do you guys do that?' },
      { 
        role: 'ai', 
        text: 'Absolutely. We specialize in fast-turnaround product sprints. I\'d love to ask: what is your target industry and estimated budget tier?', 
        step: 'UNDERSTAND', 
        stepDetail: 'Lead qualification triggered. Intent class: SaaS_development. Budget query active.' 
      },
      { role: 'user', text: 'It\'s in logistics, and our budget is around $35k.' },
      { 
        role: 'ai', 
        text: 'That fits our Grow tier perfectly. Let\'s schedule a brief call with our lead systems engineer to map out your core MVP features.', 
        step: 'ACT', 
        stepDetail: 'Lead details logged to CRM. Dynamic lead score: 92/100 (High Intent). Routing to scheduling calendar.' 
      }
    ]
  },
  {
    id: 'analyst',
    name: 'AI Data Analyst',
    messages: [
      { role: 'user', text: 'Show me total sales forecast trends for next quarter.' },
      { 
        role: 'ai', 
        text: 'Running regressions... Based on historical sales and cyclic Q4 retail patterns, we forecast $240k in sales, a 14% increase from Q3.', 
        step: 'REASON', 
        stepDetail: 'Executing Python stats models on tables: transaction_records, cyclic_retail_trends.' 
      },
      { role: 'user', text: 'What is driving the 14% surge?' },
      { 
        role: 'ai', 
        text: 'The increase is primarily driven by seasonal order spikes in our apparel segments, which historical data maps at +22% every November.', 
        step: 'UNDERSTAND', 
        stepDetail: 'Query parsed: drivers_of_growth. Compiling feature weights: apparel_volume, seasonality.' 
      }
    ]
  }
];

export default function AIDemo() {
  const [selectedId, setSelectedId] = useState('receptionist');
  const [visibleCount, setVisibleCount] = useState(1);
  const [currentStep, setCurrentStep] = useState<'UNDERSTAND' | 'REASON' | 'ACT' | null>(null);
  const [stepText, setStepText] = useState('');

  const persona = personas.find(p => p.id === selectedId) || personas[0];

  useEffect(() => {
    setVisibleCount(1);
    setCurrentStep(null);
    setStepText('');
  }, [selectedId]);

  useEffect(() => {
    if (visibleCount > persona.messages.length) return;

    const currentMsg = persona.messages[visibleCount - 1];
    
    if (currentMsg.role === 'ai') {
      if (currentMsg.step) {
        setCurrentStep(currentMsg.step);
        setStepText(currentMsg.stepDetail || '');
      }
      
      const timer = setTimeout(() => {
        if (visibleCount < persona.messages.length) {
          setVisibleCount(prev => prev + 1);
        }
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (visibleCount < persona.messages.length) {
          setVisibleCount(prev => prev + 1);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, selectedId, persona]);

  return (
    <div className="border border-border-light bg-white rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[440px]">
      {/* Persona Menu Panel */}
      <div className="w-full md:w-1/3 bg-neutral-50/50 border-r border-border-light p-5 flex flex-col gap-2">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-4">
          Select AI Agent Profile
        </h4>
        {personas.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedId(p.id)}
            className={`text-left text-xs font-semibold px-4 py-3 rounded transition-all duration-150 ${
              selectedId === p.id 
                ? 'bg-black text-white' 
                : 'text-color-text-secondary hover:bg-neutral-100 hover:text-black'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Simulator Chat Window */}
      <div className="w-full md:w-2/3 flex flex-col justify-between p-6">
        {/* Chat Feed */}
        <div className="flex flex-col gap-4 flex-grow justify-end pb-6 overflow-y-auto max-h-[300px]">
          <AnimatePresence initial={false}>
            {persona.messages.slice(0, visibleCount).map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col max-w-[80%] ${
                  msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'
                }`}
              >
                <div className={`text-xs px-4 py-3 rounded-lg leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-neutral-100 text-black rounded-tr-none' 
                    : 'bg-black text-white rounded-tl-none font-medium'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Reasoning and Act Flow Status Bar */}
        <div className="border-t border-border-light pt-4 mt-auto">
          {currentStep && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="flex items-start gap-3 mb-4 bg-neutral-50 border border-border-light rounded p-3 text-[10px] font-mono"
            >
              <span className={`px-2 py-0.5 rounded font-bold text-white ${
                currentStep === 'UNDERSTAND' ? 'bg-indigo-600' :
                currentStep === 'REASON' ? 'bg-orange-500' : 'bg-green-600'
              }`}>
                {currentStep}
              </span>
              <span className="text-color-text-secondary flex-grow leading-relaxed">
                {stepText}
              </span>
            </motion.div>
          )}

          <div className="flex justify-between items-center gap-4">
            <button 
              onClick={() => setVisibleCount(1)}
              className="text-[10px] font-semibold uppercase tracking-wider text-color-text-muted hover:text-black transition-colors"
            >
              Replay Flow
            </button>
            <Link 
              href="/contact"
              className="text-[10px] font-bold uppercase tracking-wider bg-black text-white px-4 py-2 rounded hover:bg-neutral-800 transition-colors"
            >
              BUILD SOMETHING LIKE THIS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
