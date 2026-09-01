'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Sparkles, Server, Zap } from 'lucide-react';

interface SystemNode {
  id: string;
  stage: string;
  title: string;
  metric: string;
  metricLabel: string;
  desc: string;
  type: 'purple' | 'blue' | 'indigo';
  color: string;
  cx: number;
  cy: number;
  icon: React.ReactNode;
}

const systemNodes: SystemNode[] = [
  {
    id: 'strategy',
    stage: '01 // REASONING',
    title: 'COGNITIVE STRATEGY',
    metric: '< 180ms',
    metricLabel: 'Decision Latency',
    desc: 'Deep architecture modeling and context grounding before a line of code is written.',
    type: 'purple',
    color: '#7c3aed',
    cx: 55,
    cy: 160,
    icon: <Sparkles className="w-3.5 h-3.5" />
  },
  {
    id: 'data',
    stage: '02 // STORAGE',
    title: 'VECTOR & SQL MATRIX',
    metric: '10.2M',
    metricLabel: 'Indexed Vectors',
    desc: 'Sub-millisecond hybrid retrieval combining vector similarity and transactional PostgreSQL.',
    type: 'indigo',
    color: '#4f46e5',
    cx: 145,
    cy: 80,
    icon: <Database className="w-3.5 h-3.5" />
  },
  {
    id: 'ai-core',
    stage: '03 // INTELLIGENCE',
    title: 'AUTONOMOUS AI CORE',
    metric: '99.98%',
    metricLabel: 'Execution Precision',
    desc: 'Multi-agent orchestration graphs equipped with tool-calling and API triggers.',
    type: 'purple',
    color: '#9333ea',
    cx: 235,
    cy: 160,
    icon: <Cpu className="w-3.5 h-3.5" />
  },
  {
    id: 'cloud',
    stage: '04 // PRODUCTION',
    title: 'MISSION-CRITICAL API',
    metric: '99.99%',
    metricLabel: 'Edge Availability',
    desc: 'Serverless global edge routing with automated self-healing and zero cold-start latency.',
    type: 'blue',
    color: '#2563eb',
    cx: 325,
    cy: 80,
    icon: <Server className="w-3.5 h-3.5" />
  },
  {
    id: 'scale',
    stage: '05 // VELOCITY',
    title: 'COMPOUNDING REACH',
    metric: '14.2x',
    metricLabel: 'Organic Scaling',
    desc: 'Database-driven programmatic distribution networks capturing category search demand.',
    type: 'blue',
    color: '#0284c7',
    cx: 415,
    cy: 160,
    icon: <Zap className="w-3.5 h-3.5" />
  }
];

export default function HeroFlow() {
  const [activeNodeId, setActiveNodeId] = useState<string>('ai-core');

  const active = systemNodes.find(n => n.id === activeNodeId) || systemNodes[2];

  return (
    <div className="w-full flex flex-col gap-4 select-none">
      {/* Visualizer Container */}
      <div className="relative border border-indigo-100/90 bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl shadow-indigo-950/5 card-hover-effect overflow-hidden">
        
        {/* Ambient Radial Mesh Behind Vector Canvas */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between border-b border-indigo-50/90 pb-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
              LIVE SYSTEM TOPOLOGY
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
            <span>UPTIME <strong className="text-slate-900 font-semibold">99.99%</strong></span>
            <span className="hidden sm:inline">THROUGHPUT <strong className="text-slate-900 font-semibold">48k req/s</strong></span>
          </div>
        </div>

        {/* SVG Pipeline Canvas */}
        <div className="relative w-full h-[210px] flex items-center justify-center my-2">
          <svg 
            className="w-full h-full max-w-[460px] overflow-visible" 
            viewBox="0 0 470 240" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="hero-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="35%" stopColor="#4f46e5" />
                <stop offset="70%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Inactive Base Tracks */}
            <path d="M 55 160 C 100 120, 100 120, 145 80" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 145 80 C 190 120, 190 120, 235 160" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 235 160 C 280 120, 280 120, 325 80" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 325 80 C 370 120, 370 120, 415 160" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3 3" />

            {/* Glowing Active Beam with Smooth Dash Stream */}
            <path 
              d="M 55 160 C 100 120, 100 120, 145 80 C 190 120, 190 120, 235 160 C 280 120, 280 120, 325 80 C 370 120, 370 120, 415 160" 
              stroke="url(#beam-gradient)" 
              strokeWidth="2.5" 
              className="flow-dash"
              opacity="0.9"
              filter="url(#hero-glow)"
            />

            {/* Interactive Telemetry Nodes */}
            {systemNodes.map((node) => {
              const isActive = activeNodeId === node.id;
              return (
                <g 
                  key={node.id} 
                  className="cursor-pointer group"
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  onClick={() => setActiveNodeId(node.id)}
                >
                  {/* Outer Pulsing Halo Ring */}
                  {isActive && (
                    <circle 
                      cx={node.cx} 
                      cy={node.cy} 
                      r="28" 
                      fill="none" 
                      stroke={node.color} 
                      strokeWidth="1.5"
                      strokeOpacity="0.25"
                      className="animate-ping"
                      style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                    />
                  )}

                  {/* Main Node Housing */}
                  <circle 
                    cx={node.cx} 
                    cy={node.cy} 
                    r="21" 
                    fill={isActive ? node.color : '#ffffff'} 
                    stroke={isActive ? node.color : '#cbd5e1'} 
                    strokeWidth={isActive ? '2.5' : '1.5'}
                    filter={isActive ? 'url(#hero-glow)' : undefined}
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                  />

                  {/* Node Label Abbreviation */}
                  <text 
                    x={node.cx} 
                    y={node.cy + 3.5} 
                    className={`text-[9px] font-mono font-bold select-none pointer-events-none transition-colors ${
                      isActive ? 'fill-white font-extrabold' : 'fill-slate-500 group-hover:fill-slate-900'
                    }`}
                    textAnchor="middle"
                  >
                    {node.title.substring(0, 3)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Live Node Telemetry Readout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="border-t border-indigo-50/90 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          >
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono font-bold tracking-wider ${
                active.type === 'purple' ? 'text-purple-700' : 'text-blue-700'
              }`}>
                {active.stage}
              </span>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                {active.title}
              </h4>
            </div>

            <div className="flex items-center gap-4 bg-slate-50/80 px-3.5 py-1.5 rounded-xl border border-slate-200/60">
              <div className="text-right">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">{active.metricLabel}</span>
                <span className="text-xs font-mono font-extrabold text-slate-900">{active.metric}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
