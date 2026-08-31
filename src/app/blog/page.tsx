'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts, categories } from '@/data/blog';
import { Search, BookOpen, Clock, Calendar } from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = 
      activeCategory === 'All' || 
      post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-16 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">ENGINEER NOTES</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          SOCHYEAH JOURNAL.
        </h1>
        <p className="sub-editorial">
          Technical blueprints, MLOps lessons, custom search strategies, and case insights written by our strategist-builders.
        </p>
      </div>

      {/* Interactive Controls Panel */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12 border-b border-border-light pb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 order-2 md:order-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded transition-colors ${
                activeCategory === cat 
                  ? 'bg-black text-white' 
                  : 'bg-neutral-50 text-color-text-secondary hover:bg-neutral-100 hover:text-black border border-neutral-200/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-[280px] order-1 md:order-2">
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="w-full border border-border-light bg-white rounded px-4 py-2.5 pl-10 text-xs outline-none focus:border-black transition-colors"
          />
          <Search size={14} className="absolute left-3.5 top-3.5 text-neutral-400" />
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id}
            className="border border-border-light bg-white rounded-lg p-5 flex flex-col justify-between shadow-sm hover:border-black transition-all duration-300"
          >
            <div>
              {/* Image thumbnail */}
              {post.image && (
                <div className="relative w-full h-[150px] mb-4 bg-neutral-50 border border-neutral-100 rounded overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 bg-neutral-50 border border-neutral-100 px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-[10px] font-mono text-color-text-muted flex items-center gap-1">
                  <Clock size={10} /> {post.readTime}
                </span>
              </div>

              <h3 className="text-sm font-bold text-black leading-snug mb-2">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>

              <p className="text-xs text-color-text-secondary leading-relaxed mb-4 line-clamp-3">
                {post.summary}
              </p>

              {/* Data Metrics badges */}
              {post.metrics && (
                <div className="flex gap-4 mb-4 border-t border-neutral-100 pt-3">
                  {post.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="font-mono">
                      <div className="text-[9px] text-color-text-muted uppercase leading-none">{m.label}</div>
                      <div className="text-xs font-bold text-black mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-neutral-100 pt-4 mt-auto">
              <span className="text-[10px] font-mono text-color-text-muted flex items-center gap-1">
                <Calendar size={10} /> {post.date}
              </span>
              <Link 
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-xs font-bold text-black"
              >
                Read Article <BookOpen size={12} className="ml-1.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
