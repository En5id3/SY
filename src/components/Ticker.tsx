'use client';

import React from 'react';

const tickerItems = [
  { text: 'GENERATIVE AI', type: 'purple' },
  { text: 'ENTERPRISE SOFTWARE', type: 'blue' },
  { text: 'PREDICTIVE ML', type: 'purple' },
  { text: 'AUTONOMOUS AGENTS', type: 'purple' },
  { text: 'TECHNICAL SEO', type: 'blue' },
  { text: 'DATA PIPELINES', type: 'blue' },
  { text: 'CLOUD ARCHITECTURE', type: 'blue' },
  { text: 'RAPID MVP SPRINTS', type: 'purple' }
];

export default function Ticker() {
  // Duplicate list to support continuous loop
  const list = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-gradient-to-r from-purple-50/20 via-indigo-50/20 to-blue-50/20 border-y border-indigo-100/60 py-4.5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap items-center gap-12 ticker-animate w-max">
        {list.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className={`font-sans font-bold text-xs tracking-[0.25em] text-slate-400 transition-colors duration-200 cursor-default ${
              item.type === 'purple' ? 'hover:text-purple-900' : 'hover:text-blue-900'
            }`}>
              {item.text}
            </span>
            <span className={item.type === 'purple' ? 'text-purple-500/70 text-[10px]' : 'text-blue-500/70 text-[10px]'}>
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
