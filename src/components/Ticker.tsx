import React from 'react';

const tickerItems = [
  'AI',
  'SOFTWARE',
  'MACHINE LEARNING',
  'AUTOMATION',
  'SEO',
  'DATA',
  'CLOUD',
  'PRODUCT'
];

export default function Ticker() {
  // Duplicate list to support continuous loop
  const list = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-white border-t border-b border-border-light py-5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap gap-20 ticker-animate w-max">
        {list.map((item, idx) => (
          <span 
            key={idx} 
            className="font-sans font-extrabold text-sm tracking-[0.2em] text-black/40 hover:text-black transition-colors duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
