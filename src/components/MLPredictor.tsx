'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Cpu, Sparkles } from 'lucide-react';

interface FeatureInput {
  name: string;
  val: number;
}

const initialFeatures: FeatureInput[] = [
  { name: 'Inbound Web Traffic', val: 1420 },
  { name: 'Ad Conversions', val: 84 },
  { name: 'Organic Query Rank', val: 3.2 },
  { name: 'Prior Month Churn', val: 2.1 }
];

export default function MLPredictor() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [outputVal, setOutputVal] = useState<string>('---');

  useEffect(() => {
    if (!isPlaying) return;

    // Step transitions simulation
    const t1 = setTimeout(() => setStep(1), 900);
    const t2 = setTimeout(() => setStep(2), 2000);
    const t3 = setTimeout(() => {
      setStep(3);
      setOutputVal('+18.4% Revenue Growth');
      setIsPlaying(false);
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setStep(0);
    setOutputVal('---');
  };

  return (
    <div className="border border-purple-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-sm shadow-purple-900/5 flex flex-col gap-6">
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-purple-700 uppercase tracking-widest block">
            PREDICTOR LABORATORY
          </span>
          <h4 className="text-sm font-bold text-slate-900 mt-0.5">
            Matrix Computations on Production Telemetry
          </h4>
        </div>
        <div className="flex gap-2">
          {step === 3 ? (
            <button 
              onClick={handleReset}
              className="p-2.5 border border-purple-200 rounded-full hover:bg-purple-50 transition-colors"
              title="Reset Simulator"
            >
              <RotateCcw size={14} className="text-purple-900" />
            </button>
          ) : (
            <button 
              onClick={() => setIsPlaying(true)}
              disabled={isPlaying}
              className="px-5 py-2.5 bg-purple-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-purple-950 disabled:bg-slate-300 transition-all shadow-sm shadow-purple-950/15 flex items-center gap-2"
            >
              <Play size={11} fill="white" />
              <span>{isPlaying ? 'Computing...' : 'Run Simulation'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main visual flowchart grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch min-h-[160px]">
        {/* Left Column: Data features */}
        <div className="flex flex-col gap-2.5 bg-purple-50/30 border border-purple-100/60 rounded-xl p-4 justify-center">
          <span className="text-[9px] font-mono font-bold text-purple-800 uppercase tracking-wider mb-1">
            01 // Input Feature Vectors
          </span>
          {initialFeatures.map((feat, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs font-mono border-b border-purple-100/40 pb-1.5 last:border-b-0">
              <span className="text-slate-600">{feat.name}</span>
              <motion.span 
                animate={isPlaying && step === 0 ? { color: '#7e22ce', scale: 1.1, fontWeight: 'bold' } : {}}
                className="text-slate-900 font-semibold"
              >
                {feat.val}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Middle Column: Model logic processing node */}
        <div className="flex flex-col items-center justify-center border border-purple-100/80 rounded-xl p-5 relative overflow-hidden bg-white shadow-xs">
          <span className="absolute top-2.5 text-[8px] font-mono text-slate-400 uppercase tracking-wider">
            02 // MODEL_NEURAL_LAYER
          </span>
          
          {/* Animated rings inside the layer */}
          <div className="relative w-18 h-18 rounded-full border border-purple-200 flex items-center justify-center mt-3">
            <motion.div
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-t-2 border-purple-600"
            />
            <Cpu size={22} className={isPlaying ? 'text-purple-700 animate-pulse' : 'text-slate-400'} />
          </div>

          <span className="text-[10px] font-mono text-purple-900 font-bold mt-3">
            {step === 0 && 'Awaiting Input'}
            {step === 1 && 'Weight Extraction...'}
            {step === 2 && 'Regression Scoring...'}
            {step === 3 && 'Inference Complete'}
          </span>
        </div>

        {/* Right Column: Output result score */}
        <div className="flex flex-col justify-between border border-purple-100/80 rounded-xl p-5 bg-gradient-to-br from-white to-purple-50/40 shadow-xs">
          <div>
            <span className="text-[9px] font-mono font-bold text-purple-800 uppercase tracking-wider block">
              03 // Predictive Outcome
            </span>
            <div className="text-lg md:text-xl font-extrabold text-slate-900 mt-3 font-sans">
              {outputVal}
            </div>
          </div>
          <div className="border-t border-purple-100/60 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>Confidence Index</span>
            <span className="font-bold text-purple-900">{step === 3 ? '98.2%' : '---'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
