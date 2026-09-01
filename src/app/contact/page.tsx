'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send } from 'lucide-react';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'AI / Automation',
    timeline: '1-3 months',
    desc: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'AI / Automation',
        timeline: '1-3 months',
        desc: ''
      });
    }, 1400);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* 1. Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-indigo-800 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-1 rounded-full border border-indigo-200/60 self-start">
          START AN ENGAGEMENT
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          HAVE AN IDEA?<br />LET'S BUILD IT.
        </h1>
        <p className="sub-editorial">
          "Tell us what you're trying to build, automate or scale."
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Direct Details */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4">
              Partner with strategist-builders.
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-10">
              No pushy sales calls, no layers of project managers. You align directly with technical decision-makers to structure scopes and deliverables.
            </p>
          </div>

          <div className="flex flex-col gap-6 mb-10">
            {/* Purple for Strategic/Career Inquiries */}
            <div className="border-l-3 border-purple-600 pl-4 py-1">
              <span className="text-[9px] font-mono font-bold text-purple-800 uppercase block tracking-wider mb-0.5">DIRECT RECRUITMENT & INQUIRY</span>
              <a href="mailto:soch9yeah@gmail.com" className="text-xs font-semibold text-slate-900 hover:text-purple-700 transition-colors">
                soch9yeah@gmail.com
              </a>
            </div>
            {/* Indigo for Physical Engineering Hubs */}
            <div className="border-l-3 border-indigo-600 pl-4 py-1">
              <span className="text-[9px] font-mono font-bold text-indigo-800 uppercase block tracking-wider mb-0.5">ENGINEERING HUBS</span>
              <p className="text-xs text-slate-700 font-semibold">
                Hamirpur, Himachal Pradesh & NCR, India
              </p>
            </div>
            {/* Blue for Sprint Velocity Availability */}
            <div className="border-l-3 border-blue-600 pl-4 py-1">
              <span className="text-[9px] font-mono font-bold text-blue-800 uppercase block tracking-wider mb-0.5">SPRINT AVAILABILITY</span>
              <p className="text-xs text-slate-700 font-semibold">
                Open for Q3 & Q4 2026/2027 project cycles.
              </p>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 leading-relaxed bg-gradient-to-r from-purple-50/40 via-indigo-50/40 to-blue-50/40 p-4 rounded-xl border border-indigo-100">
            Looking for a career? We are always seeking curious systems engineers and growth specialists. Email your CV to <a href="mailto:soch9yeah@gmail.com" className="underline font-bold text-indigo-900 hover:text-indigo-700">soch9yeah@gmail.com</a>.
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-2/3 border border-indigo-100/80 bg-white rounded-2xl p-8 md:p-10 shadow-sm shadow-indigo-900/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider" htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Jane Doe"
                  className="border border-indigo-200/80 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider" htmlFor="company">Company / Organization</label>
                <input 
                  type="text" 
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Acme Inc."
                  className="border border-indigo-200/80 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider" htmlFor="email">Work Email *</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="jane@company.com"
                  className="border border-indigo-200/80 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider" htmlFor="phone">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98000 00000"
                  className="border border-indigo-200/80 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider" htmlFor="service">Target Domain Focus</label>
              <select 
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="border border-indigo-200/80 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 bg-white transition-all text-slate-800"
              >
                <option>AI & Generative AI Systems</option>
                <option>Software Engineering & SaaS MVP</option>
                <option>Machine Learning & Predictive Models</option>
                <option>SEO & Programmatic Growth</option>
                <option>Workflow Automation & API Connectors</option>
                <option>Strategic Architecture Consulting</option>
                <option>Other Custom Architecture</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider" htmlFor="desc">Project Context & Requirements *</label>
              <textarea 
                id="desc"
                value={formData.desc}
                onChange={(e) => setFormData({...formData, desc: e.target.value})}
                required
                rows={4}
                placeholder="Describe what you are trying to build, key goals, timeline constraints, or current tech stack..."
                className="border border-indigo-200/80 rounded-xl px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all resize-y min-h-[100px] bg-white"
              />
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <button 
                type="submit"
                disabled={loading}
                className="w-full text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white hover:from-purple-950 hover:via-indigo-950 hover:to-blue-950 disabled:bg-slate-300 transition-all py-4 rounded-full shadow-sm shadow-indigo-950/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>TRANSMITTING PARAMETERS...</span>
                ) : (
                  <>
                    <span>START THE CONVERSATION</span>
                    <Send size={13} />
                  </>
                )}
              </button>
              <p className="text-[10px] font-mono text-slate-400 text-center italic">
                "No sales scripts. Direct review with technical decision-makers."
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Glassmorphic success modal overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white border border-indigo-100 rounded-3xl max-w-[420px] w-full p-8 text-center shadow-2xl flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-50 to-blue-50 border border-indigo-200 flex items-center justify-center text-indigo-900 font-extrabold text-lg mb-1">
                <Check size={22} className="text-indigo-800" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Parameters Transmitted</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you. Your project brief has been received by our lead systems engineer. We will review your architecture requirements and respond within 1 business day.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 to-blue-900 text-white hover:opacity-95 transition-all px-8 py-3.5 rounded-full mt-3 shadow-sm shadow-indigo-950/20"
              >
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
