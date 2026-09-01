'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Activity, Terminal } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  badge: string;
  query: string;
  response: string;
  toolCall: string;
  latency: string;
  precision: string;
}

const scenarios: Scenario[] = [
  {
    id: 'agent',
    name: 'Autonomous Multi-Agent Core',
    badge: 'ORCHESTRATION',
    query: 'Route inbound client payload, verify credit tier, and trigger calendar lock.',
    response: 'Evaluated client telemetry. Risk score: 0.02 (Low). Dispatched API lock to primary PostgreSQL scheduler and initiated secure SMS confirmation.',
    toolCall: 'exec_tool: db_schedule_lock(user_id="usr_8921", slot="2026-09-02T14:30:00Z")',
    latency: '168ms',
    precision: '99.98%'
  },
  {
    id: 'rag',
    name: 'Enterprise Knowledge RAG',
    badge: 'SEMANTIC RETRIEVAL',
    query: 'Retrieve compliance requirements for multi-tenant database partitioning.',
    response: 'According to Section 4.2 of the Global ISO Framework, data partitions must enforce isolated tenant schemas with AES-256 at rest and zero cross-tenant query keys.',
    toolCall: 'vector_search: cosine_sim(embedding, cluster="compliance_iso_2026", top_k=4)',
    latency: '142ms',
    precision: '99.99%'
  },
  {
    id: 'voice',
    name: 'Streaming Voice Telephony',
    badge: 'SUB-200MS VOICE',
    query: 'User dial-in via Twilio SIP trunk inquiring about urgent capacity booking.',
    response: 'Good afternoon. I can confirm we have a 4:30 PM slot open with our lead engineer today. Would you like me to reserve it directly?',
    toolCall: 'stream_tts: elevenlabs_ws_pipeline(audio_buffer_size=128B, format="mu-law")',
    latency: '185ms',
    precision: '99.94%'
  }
];

export default function AIDemo() {
  const [activeId, setActiveId] = useState<string>('agent');

  const current = scenarios.find(s => s.id === activeId) || scenarios[0];

  return (
    <div className="w-full border border-indigo-100/90 bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-indigo-950/5 card-hover-effect overflow-hidden">
      {/* Console Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <span className="h-4 w-px bg-slate-200 mx-1" />
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-indigo-600" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
              SOCHYEAH COGNITIVE RUNTIME v4.2
            </span>
          </div>
        </div>

        {/* Real-time Telemetry Badges */}
        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <Activity size={12} className="text-emerald-500" />
            <span>LATENCY: <strong className="text-slate-900 font-bold">{current.latency}</strong></span>
          </span>
          <span className="flex items-center gap-1">
            <Shield size={12} className="text-indigo-600" />
            <span>PRECISION: <strong className="text-slate-900 font-bold">{current.precision}</strong></span>
          </span>
        </div>
      </div>

      {/* Scenario Selectors */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {scenarios.map((sc) => {
          const isActive = activeId === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveId(sc.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2.5 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white shadow-md shadow-indigo-950/20 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/70'
              }`}
            >
              <Sparkles size={13} className={isActive ? 'text-indigo-300' : 'text-indigo-600'} />
              <span>{sc.name}</span>
              <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-500'
              }`}>
                {sc.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stream Simulation Canvas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-4 bg-slate-950 rounded-2xl p-6 md:p-8 text-slate-200 font-mono text-xs shadow-inner"
        >
          {/* User Payload */}
          <div className="flex items-start gap-3 border-b border-slate-800 pb-4">
            <span className="text-indigo-400 font-bold select-none">&gt; INBOUND:</span>
            <p className="text-slate-100 font-sans text-sm font-medium">{current.query}</p>
          </div>

          {/* Autonomous Tool Execution Trace */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between text-[11px] text-indigo-300">
            <div className="flex items-center gap-2 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
              <span className="truncate">{current.toolCall}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-bold uppercase pl-2 flex-shrink-0">
              EXEC_200_OK
            </span>
          </div>

          {/* Cognitive Response */}
          <div className="flex items-start gap-3 pt-2">
            <span className="text-purple-400 font-bold select-none">&lt; OUTPUT:</span>
            <p className="text-slate-200 font-sans text-sm leading-relaxed">{current.response}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Conversion Strip */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <CheckCircle2 size={15} className="text-indigo-600" />
          <span>Zero technical debt. Production-ready architectures deployed directly into your cloud.</span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700 transition-colors"
        >
          <span>Initiate Systems Audit</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
