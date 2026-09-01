'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts, categories } from '@/data/blog';
import { Search, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';

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
      <div className="max-w-[800px] mb-16 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 self-start">
          TECHNICAL JOURNAL
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          SOCHYEAH JOURNAL.
        </h1>
        <p className="sub-editorial">
          Technical blueprints, MLOps lessons, custom search strategies, and case insights written by our strategist-builders.
        </p>
      </div>

      {/* Interactive Controls Panel */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12 border-b border-purple-100/70 pb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 order-2 md:order-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-150 ${
                activeCategory === cat 
                  ? 'bg-purple-900 text-white shadow-sm shadow-purple-950/20 font-bold' 
                  : 'bg-purple-50/50 text-slate-600 hover:bg-purple-100/70 hover:text-purple-950 border border-purple-100'
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
            className="w-full border border-purple-200 bg-white rounded-full px-4 py-2.5 pl-10 text-xs outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all shadow-xs"
          />
          <Search size={14} className="absolute left-3.5 top-3.5 text-purple-600" />
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id}
            className="border border-purple-100/80 bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm shadow-purple-900/5 card-hover-effect group"
          >
            <div>
              {/* Image thumbnail */}
              {post.image && (
                <div className="relative w-full h-[160px] mb-4 bg-purple-50/30 border border-purple-100/60 rounded-xl overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-800 bg-purple-50 border border-purple-200/50 px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Clock size={11} className="text-purple-600" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-purple-950 transition-colors">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {post.summary}
              </p>

              {/* Data Metrics badges */}
              {post.metrics && (
                <div className="flex gap-4 mb-4 border-t border-purple-50 pt-3">
                  {post.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="font-mono">
                      <div className="text-[9px] text-slate-400 uppercase leading-none">{m.label}</div>
                      <div className="text-xs font-bold text-purple-950 mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-purple-50 pt-4 mt-auto">
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                <Calendar size={11} className="text-purple-600" /> {post.date}
              </span>
              <Link 
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-xs font-bold text-purple-900 hover:text-purple-700 transition-colors group-hover:gap-2"
              >
                <span>Read Article</span>
                <ArrowRight size={13} className="ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
