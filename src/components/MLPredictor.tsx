'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw } from 'lucide-react';

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
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 2200);
    const t3 = setTimeout(() => {
      setStep(3);
      setOutputVal('+18.4% Revenue Forecast');
      setIsPlaying(false);
    }, 3500);

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
    <div className="border border-border-light bg-white rounded-lg p-6 shadow-sm flex flex-col gap-6">
      <div className="flex justify-between items-center border-b border-border-light pb-4">
        <div>
          <h4 className="text-xs font-bold text-black uppercase tracking-wider">Predictor Laboratory</h4>
          <p className="text-[10px] text-color-text-muted mt-1 leading-normal uppercase">Simulating matrix computations on customer data tables</p>
        </div>
        <div className="flex gap-2">
          {step === 3 ? (
            <button 
              onClick={handleReset}
              className="p-2 border border-border-light rounded hover:bg-neutral-50 transition-colors"
              title="Reset Simulator"
            >
              <RotateCcw size={14} className="text-black" />
            </button>
          ) : (
            <button 
              onClick={() => setIsPlaying(true)}
              disabled={isPlaying}
              className="px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded hover:bg-neutral-800 disabled:bg-neutral-300 transition-colors flex items-center gap-2"
            >
              <Play size={10} fill="white" /> {isPlaying ? 'Computing...' : 'Run Predict'}
            </button>
          )}
        </div>
      </div>

      {/* Main visual flowchart grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch min-h-[160px]">
        {/* Left Column: Data features */}
        <div className="flex flex-col gap-2 bg-neutral-50/50 border border-neutral-100 rounded-lg p-4 justify-center">
          <span className="text-[8px] font-bold text-neutral-400 uppercase mb-2">01 // Input Vectors</span>
          {initialFeatures.map((feat, idx) => (
            <div key={idx} className="flex justify-between items-center text-[10px] font-mono border-b border-neutral-100 pb-1">
              <span className="text-color-text-secondary">{feat.name}</span>
              <motion.span 
                animate={isPlaying && step === 0 ? { color: '#4f46e5', fontWeight: 'bold' } : {}}
                className="text-black font-semibold"
              >
                {feat.val}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Middle Column: Model logic processing node */}
        <div className="flex flex-col items-center justify-center border border-border-light rounded-lg p-4 relative overflow-hidden bg-white">
          <span className="absolute top-2 text-[8px] font-mono text-neutral-300">02 // MODEL_NEURAL_LAYER</span>
          
          {/* Animated rings inside the layer */}
          <div className="relative w-16 h-16 rounded-full border border-border-light flex items-center justify-center">
            <motion.div 
              animate={isPlaying && step >= 1 ? { rotate: 360 } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="absolute inset-1 rounded-full border-t border-b border-black"
            />
            <motion.div 
              animate={isPlaying && step >= 2 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1 }}
              className={`w-6 h-6 rounded-full transition-colors duration-300 ${
                step === 1 ? 'bg-indigo-600' :
                step === 2 ? 'bg-orange-500' : 
                step === 3 ? 'bg-green-600' : 'bg-neutral-100'
              }`}
            />
          </div>

          <div className="text-[9px] font-mono text-neutral-400 mt-4 uppercase">
            {step === 0 && 'Awaiting trigger'}
            {step === 1 && 'Weighting features...'}
            {step === 2 && 'Computing probabilities...'}
            {step === 3 && 'Execution complete'}
          </div>
        </div>

        {/* Right Column: Prediction Output */}
        <div className="flex flex-col justify-between bg-neutral-50/50 border border-neutral-100 rounded-lg p-4">
          <span className="text-[8px] font-bold text-neutral-400 uppercase">03 // Outputs</span>
          <div className="my-auto text-center">
            <motion.div 
              animate={step === 3 ? { scale: [1, 1.05, 1] } : {}}
              className={`text-xs font-bold leading-normal transition-colors duration-300 ${
                step === 3 ? 'text-black font-extrabold text-sm' : 'text-neutral-300'
              }`}
            >
              {outputVal}
            </motion.div>
          </div>
          <span className="text-[8px] font-mono text-neutral-400 text-right">MODEL_ACCURACY: 94.6%</span>
        </div>
      </div>
    </div>
  );
}
