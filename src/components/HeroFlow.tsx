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
    description: 'We listen to your goals, identify the highest-impact opportunities, and craft a simple roadmap.',
    color: '#6366f1',
    cx: 55,
    cy: 150,
    icon: <Lightbulb className="w-4 h-4" />
  },
  {
    id: 'design',
    stepNumber: '02',
    title: 'Product Design',
    subtitle: 'Craft the Experience',
    description: 'We design modern, intuitive interfaces that your customers and team will genuinely enjoy using.',
    color: '#8b5cf6',
    cx: 145,
    cy: 75,
    icon: <Palette className="w-4 h-4" />
  },
  {
    id: 'ai-tech',
    stepNumber: '03',
    title: 'AI & Engineering',
    subtitle: 'Add Intelligence',
    description: 'We integrate smart AI agents, automated workflows, and fast, rock-solid software under the hood.',
    color: '#7c3aed',
    cx: 235,
    cy: 150,
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: 'launch',
    stepNumber: '04',
    title: 'Rapid Launch',
    subtitle: 'Go Live in Weeks',
    description: 'We test everything thoroughly and deploy your system to production smoothly in tight 6-week sprints.',
    color: '#2563eb',
    cx: 325,
    cy: 75,
    icon: <Rocket className="w-4 h-4" />
  },
  {
    id: 'scale',
    stepNumber: '05',
    title: 'Compounding Scale',
    subtitle: 'Grow with Ease',
    description: 'We optimize performance, attract organic search traffic, and help your business expand effortlessly.',
    color: '#0284c7',
    cx: 415,
    cy: 150,
    icon: <TrendingUp className="w-4 h-4" />
  }
];

export default function HeroFlow() {
  const [activeStepId, setActiveStepId] = useState<string>('ai-tech');

  const active = steps.find(s => s.id === activeStepId) || steps[2];

  return (
    <div className="w-full flex flex-col gap-4 select-none">
      {/* Visual Roadmap Card */}
      <div className="relative border border-indigo-100/90 bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl shadow-indigo-950/5 card-hover-effect overflow-hidden">
        
        {/* Soft Ambient Radial Lights */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-indigo-50 pb-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
              HOW WE BRING IDEAS TO LIFE
            </span>
          </div>
          <span className="text-[11px] text-indigo-700 font-medium">
            Hover to explore
          </span>
        </div>

        {/* SVG Curve Flow */}
        <div className="relative w-full h-[200px] flex items-center justify-center my-2">
          <svg 
            className="w-full h-full max-w-[460px] overflow-visible" 
            viewBox="0 0 470 220" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="smooth-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="40%" stopColor="#8b5cf6" />
                <stop offset="70%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Inactive Base Tracks */}
            <path d="M 55 150 C 100 110, 100 110, 145 75" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 145 75 C 190 110, 190 110, 235 150" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 235 150 C 280 110, 280 110, 325 75" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 325 75 C 370 110, 370 110, 415 150" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3 3" />

            {/* Glowing Active Stream */}
            <path 
              d="M 55 150 C 100 110, 100 110, 145 75 C 190 110, 190 110, 235 150 C 280 110, 280 110, 325 75 C 370 110, 370 110, 415 150" 
              stroke="url(#smooth-flow-grad)" 
              strokeWidth="2.5" 
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
                      r="26" 
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
                    r="20" 
                    fill={isActive ? st.color : '#ffffff'} 
                    stroke={isActive ? st.color : '#cbd5e1'} 
                    strokeWidth={isActive ? '2.5' : '1.5'}
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{ transformOrigin: `${st.cx}px ${st.cy}px` }}
                  />

                  {/* Step Label */}
                  <text 
                    x={st.cx} 
                    y={st.cy + 3.5} 
                    className={`text-[10px] font-mono font-bold select-none pointer-events-none transition-colors ${
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
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="border-t border-indigo-50 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          >
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-indigo-700">
                Step {active.stepNumber} • {active.subtitle}
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                {active.title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-[380px]">
                {active.description}
              </p>
            </div>

            <div className="p-3 bg-indigo-50/70 text-indigo-700 rounded-2xl border border-indigo-100 flex-shrink-0 self-start sm:self-center">
              {active.icon}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
