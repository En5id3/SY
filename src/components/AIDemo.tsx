'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, PhoneCall, FileText, UserCheck, Bot } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  userMessage: string;
  aiMessage: string;
  benefitTag: string;
}

const scenarios: Scenario[] = [
  {
    id: 'receptionist',
    name: '24/7 AI Receptionist',
    badge: 'VOICE & SCHEDULING',
    icon: <PhoneCall className="w-3.5 h-3.5" />,
    userMessage: 'Hi, I need to schedule a consultation with your senior consultant tomorrow.',
    aiMessage: 'Hello! I have two open slots tomorrow: 11:00 AM and 3:30 PM. Which works best for you? Once chosen, I’ll send a calendar invite directly to your email.',
    benefitTag: 'Automates booking & answers after-hours client inquiries'
  },
  {
    id: 'documents',
    name: 'Document Expert',
    badge: 'INSTANT ANSWERS',
    icon: <FileText className="w-3.5 h-3.5" />,
    userMessage: 'What is our standard cancellation policy for annual enterprise contracts?',
    aiMessage: 'According to Section 6 of your master service agreement, clients may cancel with 30 days written notice, and any unused quarterly balances are automatically credited.',
    benefitTag: 'Finds verified answers from 500+ page PDFs in seconds'
  },
  {
    id: 'growth',
    name: 'Lead Assistant',
    badge: 'CLIENT ONBOARDING',
    icon: <UserCheck className="w-3.5 h-3.5" />,
    userMessage: 'We are looking to rebuild our patient portal and need an estimate.',
    aiMessage: 'Welcome! For healthcare portals, we typically design a clean prototype in 2 weeks and build the live system in 6 weeks. Let’s connect you with our lead designer.',
    benefitTag: 'Engages website visitors instantly and qualifies high-value clients'
  }
];

export default function AIDemo() {
  const [activeId, setActiveId] = useState<string>('receptionist');

  const current = scenarios.find(s => s.id === activeId) || scenarios[0];

  return (
    <div className="w-full border border-indigo-100/90 bg-white rounded-2xl p-5 md:p-8 shadow-md shadow-indigo-950/5 card-hover-effect overflow-hidden">
      {/* Scenario Selectors */}
      <div className="flex flex-wrap gap-2.5 mb-6 border-b border-slate-100 pb-4">
        {scenarios.map((sc) => {
          const isActive = activeId === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveId(sc.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-sm shadow-indigo-950/20 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-indigo-50/60 hover:text-indigo-950 border border-slate-200/70'
              }`}
            >
              <span className={isActive ? 'text-indigo-200' : 'text-indigo-600'}>
                {sc.icon}
              </span>
              <span>{sc.name}</span>
              <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-500'
              }`}>
                {sc.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Conversational Stream Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="flex flex-col gap-3.5 min-h-[160px]"
        >
          {/* User Message */}
          <div className="flex items-start justify-end">
            <div className="max-w-[85%] md:max-w-[70%] bg-slate-100 text-slate-900 px-4 py-3 rounded-xl rounded-br-xs text-xs font-medium">
              <span className="text-[9px] font-bold text-slate-400 block mb-0.5 uppercase tracking-wider">
                Customer Inbound
              </span>
              <p>{current.userMessage}</p>
            </div>
          </div>

          {/* AI Response Message */}
          <div className="flex items-start gap-2.5 justify-start">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-sm">
              <Bot size={14} />
            </div>
            <div className="max-w-[85%] md:max-w-[75%] bg-gradient-to-r from-indigo-50/60 via-purple-50/40 to-blue-50/60 border border-indigo-100 text-slate-800 px-4 py-3 rounded-xl rounded-bl-xs text-xs leading-relaxed shadow-xs">
              <span className="text-[9px] font-bold text-indigo-700 block mb-0.5 uppercase tracking-wider">
                SOCHYEAH AI Assistant
              </span>
              <p>{current.aiMessage}</p>
            </div>
          </div>

          {/* Value Badge */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-lg self-start mt-1">
            <CheckCircle2 size={13} className="text-indigo-600 flex-shrink-0" />
            <span className="font-medium text-[11px]">{current.benefitTag}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Conversion Link */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <span className="text-xs text-slate-500 font-medium">
          Ready to add custom AI assistants to your workflow?
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700 transition-colors"
        >
          <span>Talk with our team</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
