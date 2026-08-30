'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NodeDetail {
  title: string;
  desc: string;
}

const nodeDetails: Record<string, NodeDetail> = {
  idea: {
    title: '01 / IDEA (THINK)',
    desc: 'Understanding raw business goals, extracting core requirements, and mapping strategic technology solutions before coding begins.'
  },
  data: {
    title: '02 / DATA (STRUCTURE)',
    desc: 'Setting up database schemas, scaling data warehouses, and establishing real-time operational streams.'
  },
  ai: {
    title: '03 / AI (INTELLIGENCE)',
    desc: 'Deploying custom LLMs, building semantic search index graphs, and implementing autonomous cognitive agents.'
  },
  software: {
    title: '04 / SOFTWARE (BUILD)',
    desc: 'Developing fast, stable web systems, SaaS platforms, internal operations portals, and secure backend APIs.'
  },
  automation: {
    title: '05 / AUTOMATION (SYSTEMS)',
    desc: 'Connecting fragmented applications, scheduling workflows, and eliminating manual entries.'
  },
  growth: {
    title: '06 / GROWTH (SCALE)',
    desc: 'Implementing programmatic SEO routing, optimizing layout conversions, and ranking inside traditional and AI search engines.'
  }
};

export default function HeroFlow() {
  const [activeNode, setActiveNode] = useState<string>('idea');

  const nodes = [
    { id: 'idea', cx: 60, cy: 200, label: 'IDEA' },
    { id: 'data', cx: 140, cy: 110, label: 'DATA' },
    { id: 'ai', cx: 220, cy: 200, label: 'AI' },
    { id: 'software', cx: 300, cy: 110, label: 'SOFTWARE' },
    { id: 'automation', cx: 380, cy: 200, label: 'AUTOMATION' },
    { id: 'growth', cx: 440, cy: 110, label: 'GROWTH' }
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Dynamic Visualizer SVG */}
      <div className="relative border border-border-light bg-white rounded-lg p-6 flex items-center justify-center min-h-[300px] shadow-sm overflow-hidden">
        <svg className="w-full max-w-[480px] h-[260px] select-none" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG Filter for Glow Effect */}
          <defs>
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated Connecting Flow Lines */}
          <path 
            d="M 60 200 C 100 155, 100 155, 140 110" 
            stroke="#e5e7eb" 
            strokeWidth="1.5"
            filter={activeNode === 'idea' || activeNode === 'data' ? 'url(#glow-filter)' : undefined}
            className={`transition-all duration-300 ${activeNode === 'idea' || activeNode === 'data' ? 'stroke-indigo-600 stroke-[2.5px]' : ''}`}
          />
          <path 
            d="M 140 110 C 180 155, 180 155, 220 200" 
            stroke="#e5e7eb" 
            strokeWidth="1.5"
            filter={activeNode === 'data' || activeNode === 'ai' ? 'url(#glow-filter)' : undefined}
            className={`transition-all duration-300 ${activeNode === 'data' || activeNode === 'ai' ? 'stroke-indigo-600 stroke-[2.5px]' : ''}`}
          />
          <path 
            d="M 220 200 C 260 155, 260 155, 300 110" 
            stroke="#e5e7eb" 
            strokeWidth="1.5"
            filter={activeNode === 'ai' || activeNode === 'software' ? 'url(#glow-filter)' : undefined}
            className={`transition-all duration-300 ${activeNode === 'ai' || activeNode === 'software' ? 'stroke-indigo-600 stroke-[2.5px]' : ''}`}
          />
          <path 
            d="M 300 110 C 340 155, 340 155, 380 200" 
            stroke="#e5e7eb" 
            strokeWidth="1.5"
            filter={activeNode === 'software' || activeNode === 'automation' ? 'url(#glow-filter)' : undefined}
            className={`transition-all duration-300 ${activeNode === 'software' || activeNode === 'automation' ? 'stroke-indigo-600 stroke-[2.5px]' : ''}`}
          />
          <path 
            d="M 380 200 C 410 155, 410 155, 440 110" 
            stroke="#e5e7eb" 
            strokeWidth="1.5"
            filter={activeNode === 'automation' || activeNode === 'growth' ? 'url(#glow-filter)' : undefined}
            className={`transition-all duration-300 ${activeNode === 'automation' || activeNode === 'growth' ? 'stroke-indigo-600 stroke-[2.5px]' : ''}`}
          />

          {/* Animating Dash Overlay representing data packet flow */}
          <path 
            d="M 60 200 C 100 155, 100 155, 140 110 C 180 155, 180 155, 220 200 C 260 155, 260 155, 300 110 C 340 155, 340 155, 380 200 C 410 155, 410 155, 440 110" 
            stroke="#6366f1" 
            strokeWidth="2"
            className="flow-dash"
            opacity="0.8"
          />

          {/* Interactive Nodes */}
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <g 
                key={node.id} 
                className="cursor-pointer group"
                onMouseEnter={() => setActiveNode(node.id)}
              >
                <circle 
                  cx={node.cx} 
                  cy={node.cy} 
                  r="24" 
                  fill={isActive ? '#4f46e5' : '#ffffff'} 
                  stroke={isActive ? '#4f46e5' : '#e5e7eb'}
                  strokeWidth="2"
                  filter={isActive ? 'url(#glow-filter)' : undefined}
                  className="transition-colors duration-200 group-hover:stroke-indigo-600"
                />
                <circle 
                  cx={node.cx} 
                  cy={node.cy} 
                  r="30" 
                  fill="transparent" 
                  stroke={isActive ? 'rgba(79, 70, 229, 0.25)' : 'transparent'}
                  strokeWidth="2.5"
                  className="transition-all duration-200"
                />
                <text 
                  x={node.cx} 
                  y={node.cy + 4} 
                  className={`text-[8px] font-bold text-center select-none pointer-events-none transition-colors duration-200 ${
                    isActive ? 'fill-white font-extrabold' : 'fill-neutral-400 group-hover:fill-black'
                  }`}
                  textAnchor="middle"
                >
                  {node.label.substring(0, 3)}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Small floating technical grid overlays for aesthetics */}
        <div className="absolute top-2 left-2 text-[8px] font-mono text-neutral-300">SYSTEMS_ORCHESTRATION_GRID v1.02</div>
        <div className="absolute bottom-2 right-2 text-[8px] font-mono text-neutral-300">LATENCY: 0ms // EDGE CACHING ACTIVE</div>
      </div>

      {/* Synchronized Detail Box */}
      <div className="border border-border-light bg-white rounded-lg p-5 shadow-sm min-h-[96px] transition-all duration-150">
        <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-1">
          {nodeDetails[activeNode]?.title}
        </h4>
        <p className="text-xs text-color-text-secondary leading-relaxed">
          {nodeDetails[activeNode]?.desc}
        </p>
      </div>
    </div>
  );
}
