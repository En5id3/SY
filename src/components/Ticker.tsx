'use client';

import React from 'react';

const tickerItems = [
  'GENERATIVE AI',
  'ENTERPRISE SOFTWARE',
  'PREDICTIVE ML',
  'AUTONOMOUS AGENTS',
  'TECHNICAL SEO',
  'DATA PIPELINES',
  'CLOUD ARCHITECTURE',
  'RAPID MVP SPRINTS'
];

export default function Ticker() {
  // Duplicate list to support continuous loop
  const list = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-purple-50/25 border-y border-purple-100/60 py-4.5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap items-center gap-12 ticker-animate w-max">
        {list.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="font-sans font-bold text-xs tracking-[0.25em] text-slate-400 hover:text-purple-950 transition-colors duration-200 cursor-default">
              {item}
            </span>
            <span className="text-purple-500/60 text-[10px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
