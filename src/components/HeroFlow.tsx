'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NodeDetail {
  title: string;
  stage: string;
  desc: string;
}

const nodeDetails: Record<string, NodeDetail> = {
  idea: {
    stage: '01 // THINK',
    title: 'IDEA & STRATEGY',
    desc: 'Extracting core business objectives, auditing bottlenecks, and drafting clean technical architecture before writing a single line of code.'
  },
  data: {
    stage: '02 // STRUCTURE',
    title: 'DATA & INFRASTRUCTURE',
    desc: 'Designing scalable PostgreSQL/vector databases, cloud pipelines, and real-time operational state models.'
  },
  ai: {
    stage: '03 // INTELLIGENCE',
    title: 'AI & COGNITION',
    desc: 'Deploying custom LLMs, RAG knowledge retrieval graphs, and autonomous multi-agent task execution flows.'
  },
  software: {
    stage: '04 // BUILD',
    title: 'SOFTWARE ENGINEERING',
    desc: 'Engineering high-performance Next.js interfaces, secure microservice APIs, and enterprise internal operational dashboards.'
  },
  automation: {
    stage: '05 // ACCELERATE',
    title: 'PROCESS AUTOMATION',
    desc: 'Integrating disparate enterprise software layers to eliminate repetitive manual overhead and ensure zero-latency execution.'
  },
  growth: {
    stage: '06 // SCALE',
    title: 'DISTRIBUTION & SCALE',
    desc: 'Deploying programmatic SEO systems, conversion rate optimization, and indexing models for organic compounding growth.'
  }
};

export default function HeroFlow() {
  const [activeNode, setActiveNode] = useState<string>('idea');

  const nodes = [
    { id: 'idea', cx: 60, cy: 200, label: 'IDEA' },
    { id: 'data', cx: 140, cy: 110, label: 'DATA' },
    { id: 'ai', cx: 220, cy: 200, label: 'AI' },
    { id: 'software', cx: 300, cy: 110, label: 'SOFTWARE' },
    { id: 'automation', cx: 380, cy: 200, label: 'AUTOMATE' },
    { id: 'growth', cx: 440, cy: 110, label: 'GROWTH' }
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Dynamic Visualizer SVG Card */}
      <div className="relative border border-purple-100/80 bg-white rounded-2xl p-6 flex flex-col items-center justify-center min-h-[300px] shadow-sm shadow-purple-900/5 card-hover-effect overflow-hidden">
        
        {/* Subtle Ambient Background Glow */}
        <div className="absolute inset-0 bg-radial from-purple-500/3 via-transparent to-transparent pointer-events-none" />

        <svg className="w-full max-w-[480px] h-[240px] select-none" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG Glow Filters & Gradients */}
          <defs>
            <filter id="purple-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* Base Inactive Flow Lines */}
          <path 
            d="M 60 200 C 100 155, 100 155, 140 110" 
            stroke="#ede9fe" 
            strokeWidth="2"
            className="transition-colors duration-300"
          />
          <path 
            d="M 140 110 C 180 155, 180 155, 220 200" 
            stroke="#ede9fe" 
            strokeWidth="2"
            className="transition-colors duration-300"
          />
          <path 
            d="M 220 200 C 260 155, 260 155, 300 110" 
            stroke="#ede9fe" 
            strokeWidth="2"
            className="transition-colors duration-300"
          />
          <path 
            d="M 300 110 C 340 155, 340 155, 380 200" 
            stroke="#ede9fe" 
            strokeWidth="2"
            className="transition-colors duration-300"
          />
          <path 
            d="M 380 200 C 410 155, 410 155, 440 110" 
            stroke="#ede9fe" 
            strokeWidth="2"
            className="transition-colors duration-300"
          />

          {/* Active Highlight Connection Path */}
          <path 
            d="M 60 200 C 100 155, 100 155, 140 110 C 180 155, 180 155, 220 200 C 260 155, 260 155, 300 110 C 340 155, 340 155, 380 200 C 410 155, 410 155, 440 110" 
            stroke="url(#purple-gradient)" 
            strokeWidth="2.5"
            className="flow-dash"
            opacity="0.9"
            filter="url(#purple-glow)"
          />

          {/* Interactive Nodes */}
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <g 
                key={node.id} 
                className="cursor-pointer group"
                onMouseEnter={() => setActiveNode(node.id)}
                onClick={() => setActiveNode(node.id)}
              >
                {/* Outer Halo Pulse */}
                <circle 
                  cx={node.cx} 
                  cy={node.cy} 
                  r="30" 
                  fill="transparent" 
                  stroke={isActive ? 'rgba(126, 34, 206, 0.25)' : 'transparent'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* Main Node Circle */}
                <circle 
                  cx={node.cx} 
                  cy={node.cy} 
                  r="23" 
                  fill={isActive ? '#6b21a8' : '#ffffff'} 
                  stroke={isActive ? '#7e22ce' : '#cbd5e1'}
                  strokeWidth={isActive ? '2.5' : '1.5'}
                  filter={isActive ? 'url(#purple-glow)' : undefined}
                  className="transition-all duration-300 group-hover:stroke-purple-600"
                />

                {/* Node Label Text */}
                <text 
                  x={node.cx} 
                  y={node.cy + 3.5} 
                  className={`text-[10px] font-mono font-bold text-center select-none pointer-events-none transition-colors duration-200 ${
                    isActive ? 'fill-white font-extrabold' : 'fill-slate-500 group-hover:fill-purple-900'
                  }`}
                  textAnchor="middle"
                >
                  {node.label.substring(0, 3)}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/50">
            Hover over nodes to inspect system stages
          </span>
        </div>
      </div>

      {/* Synchronized Detail Box */}
      <div className="border border-purple-100/80 bg-white rounded-2xl p-5 shadow-sm shadow-purple-900/5 card-hover-effect">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-purple-700 tracking-wider">
                {nodeDetails[activeNode].stage}
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                Architecture Node
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              {nodeDetails[activeNode].title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {nodeDetails[activeNode].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
