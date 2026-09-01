'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Palette, Sparkles, Rocket, TrendingUp } from 'lucide-react';

interface RoadmapStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  cx: number;
  cy: number;
  icon: React.ReactNode;
}

const steps: RoadmapStep[] = [
  {
    id: 'idea',
    stepNumber: '01',
    title: 'Idea & Strategy',
    subtitle: 'Shape the Vision',
    description: 'We listen to your goals, identify high-impact opportunities, and craft a simple roadmap.',
    color: '#6366f1',
    cx: 50,
    cy: 110,
    icon: <Lightbulb className="w-3.5 h-3.5" />
  },
  {
    id: 'design',
    stepNumber: '02',
    title: 'Product Design',
    subtitle: 'Craft Experience',
    description: 'We design modern, intuitive interfaces that your customers will genuinely enjoy using.',
    color: '#8b5cf6',
    cx: 135,
    cy: 50,
    icon: <Palette className="w-3.5 h-3.5" />
  },
  {
    id: 'ai-tech',
    stepNumber: '03',
    title: 'AI & Engineering',
    subtitle: 'Add Intelligence',
    description: 'We integrate smart AI agents, automated workflows, and fast, rock-solid software.',
    color: '#7c3aed',
    cx: 220,
    cy: 110,
    icon: <Sparkles className="w-3.5 h-3.5" />
  },
  {
    id: 'launch',
    stepNumber: '04',
    title: 'Rapid Launch',
    subtitle: 'Go Live Fast',
    description: 'We test thoroughly and deploy your system to production in tight 6-week sprints.',
    color: '#2563eb',
    cx: 305,
    cy: 50,
    icon: <Rocket className="w-3.5 h-3.5" />
  },
  {
    id: 'scale',
    stepNumber: '05',
    title: 'Compounding Scale',
    subtitle: 'Grow Effortlessly',
    description: 'We optimize performance, attract organic search traffic, and help you scale.',
    color: '#0284c7',
    cx: 390,
    cy: 110,
    icon: <TrendingUp className="w-3.5 h-3.5" />
  }
];

export default function HeroFlow() {
  const [activeStepId, setActiveStepId] = useState<string>('ai-tech');

  const active = steps.find(s => s.id === activeStepId) || steps[2];

  return (
    <div className="w-full flex flex-col gap-3 select-none">
      {/* Visual Roadmap Card */}
      <div className="relative border border-indigo-100/90 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-lg shadow-indigo-950/5 card-hover-effect overflow-hidden">
        
        {/* Soft Ambient Radial Lights */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-indigo-500/8 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-violet-500/8 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-indigo-50 pb-3 mb-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-wider text-slate-600 uppercase">
              HOW WE BRING IDEAS TO LIFE
            </span>
          </div>
          <span className="text-[10px] text-indigo-700 font-medium">
            Explore steps
          </span>
        </div>

        {/* SVG Curve Flow */}
        <div className="relative w-full h-[145px] flex items-center justify-center my-1">
          <svg 
            className="w-full h-full max-w-[440px] overflow-visible" 
            viewBox="0 0 440 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="compact-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="40%" stopColor="#8b5cf6" />
                <stop offset="70%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Inactive Base Tracks */}
            <path d="M 50 110 C 90 80, 90 80, 135 50" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 135 50 C 180 80, 180 80, 220 110" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 220 110 C 265 80, 265 80, 305 50" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 305 50 C 350 80, 350 80, 390 110" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Glowing Active Stream */}
            <path 
              d="M 50 110 C 90 80, 90 80, 135 50 C 180 80, 180 80, 220 110 C 265 80, 265 80, 305 50 C 350 80, 350 80, 390 110" 
              stroke="url(#compact-flow-grad)" 
              strokeWidth="2" 
              className="flow-dash"
              opacity="0.9"
            />

            {/* Interactive Step Nodes */}
            {steps.map((st) => {
              const isActive = activeStepId === st.id;
              return (
                <g 
                  key={st.id} 
                  className="cursor-pointer group"
                  onMouseEnter={() => setActiveStepId(st.id)}
                  onClick={() => setActiveStepId(st.id)}
                >
                  {/* Outer Pulsing Halo */}
                  {isActive && (
                    <circle 
                      cx={st.cx} 
                      cy={st.cy} 
                      r="22" 
                      fill="none" 
                      stroke={st.color} 
                      strokeWidth="1.5"
                      strokeOpacity="0.25"
                      className="animate-ping"
                      style={{ transformOrigin: `${st.cx}px ${st.cy}px` }}
                    />
                  )}

                  {/* Node Circle */}
                  <circle 
                    cx={st.cx} 
                    cy={st.cy} 
                    r="16" 
                    fill={isActive ? st.color : '#ffffff'} 
                    stroke={isActive ? st.color : '#cbd5e1'} 
                    strokeWidth={isActive ? '2' : '1.5'}
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{ transformOrigin: `${st.cx}px ${st.cy}px` }}
                  />

                  {/* Step Label */}
                  <text 
                    x={st.cx} 
                    y={st.cy + 3} 
                    className={`text-[9px] font-mono font-bold select-none pointer-events-none transition-colors ${
                      isActive ? 'fill-white font-extrabold' : 'fill-slate-500 group-hover:fill-slate-900'
                    }`}
                    textAnchor="middle"
                  >
                    {st.stepNumber}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Step Explanation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.15 }}
            className="border-t border-indigo-50 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-indigo-700">
                Step {active.stepNumber} • {active.subtitle}
              </span>
              <h4 className="text-xs font-bold text-slate-900">
                {active.title}
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-normal max-w-[360px]">
                {active.description}
              </p>
            </div>

            <div className="p-2 bg-indigo-50/70 text-indigo-700 rounded-xl border border-indigo-100 flex-shrink-0 self-start sm:self-center">
              {active.icon}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
