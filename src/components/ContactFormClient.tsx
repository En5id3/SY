'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, AlertCircle } from 'lucide-react';

export default function ContactFormClient() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'AI & Generative AI Systems',
    timeline: '1-3 months',
    desc: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setLoading(false);
      setShowModal(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'AI & Generative AI Systems',
        timeline: '1-3 months',
        desc: ''
      });
    } catch (err: unknown) {
      console.error('Contact submission error:', err);
      setLoading(false);
      const msg = err instanceof Error ? err.message : 'An error occurred while transmitting your parameters.';
      setErrorMsg(msg);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
      {/* 1. Header */}
      <div className="max-w-[800px] mb-14 flex flex-col gap-4">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200/60 self-start">
          START AN ENGAGEMENT
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          HAVE AN IDEA?<br />LET&apos;S BUILD IT.
        </h1>
        <p className="sub-editorial">
          Tell us what you&apos;re looking to build, automate, or scale.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Direct Details */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Partner with strategist-builders.
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No pushy sales calls, no layers of project managers. You align directly with technical decision-makers to structure scopes and deliverables.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Direct Recruitment & Inquiry */}
            <div className="border-l-2 border-indigo-600 pl-3.5 py-0.5">
              <span className="text-[10px] font-bold text-indigo-800 uppercase block tracking-wider mb-0.5">
                DIRECT INQUIRY &amp; RECRUITMENT
              </span>
              <a href="mailto:soch9yeah@gmail.com" className="text-xs font-semibold text-slate-900 hover:text-indigo-700 transition-colors">
                soch9yeah@gmail.com
              </a>
            </div>

            {/* Engineering Hubs */}
            <div className="border-l-2 border-violet-600 pl-3.5 py-0.5">
              <span className="text-[10px] font-bold text-violet-800 uppercase block tracking-wider mb-0.5">
                ENGINEERING HUBS
              </span>
              <p className="text-xs text-slate-700 font-medium">
                Hamirpur, Himachal Pradesh &amp; NCR, India
              </p>
            </div>

            {/* Sprint Availability */}
            <div className="border-l-2 border-blue-600 pl-3.5 py-0.5">
              <span className="text-[10px] font-bold text-blue-800 uppercase block tracking-wider mb-0.5">
                SPRINT AVAILABILITY
              </span>
              <p className="text-xs text-slate-700 font-medium">
                Open for Q3 &amp; Q4 2026/2027 project cycles.
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-600 leading-relaxed bg-gradient-to-r from-indigo-50/40 via-purple-50/40 to-blue-50/40 p-4 rounded-2xl border border-indigo-100/80">
            Looking for a career? We are always seeking curious systems engineers and growth specialists. Email your CV to <a href="mailto:soch9yeah@gmail.com" className="underline font-bold text-indigo-900 hover:text-indigo-700">soch9yeah@gmail.com</a>.
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-2/3 border border-indigo-100/90 bg-white rounded-3xl p-6 md:p-8 shadow-sm shadow-indigo-900/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700" htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Jane Doe"
                  className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700" htmlFor="company">Company / Organization</label>
                <input 
                  type="text" 
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Acme Inc."
                  className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700" htmlFor="email">Work Email *</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="jane@company.com"
                  className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700" htmlFor="phone">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98000 00000"
                  className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700" htmlFor="service">Target Domain Focus</label>
              <select 
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 bg-white transition-all text-slate-800"
              >
                <option>AI &amp; Generative AI Systems</option>
                <option>Software Engineering &amp; SaaS MVP</option>
                <option>Machine Learning &amp; Predictive Models</option>
                <option>SEO &amp; Programmatic Growth</option>
                <option>Workflow Automation &amp; API Connectors</option>
                <option>Strategic Architecture Consulting</option>
                <option>Other Custom Architecture</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700" htmlFor="desc">Project Context &amp; Requirements *</label>
              <textarea 
                id="desc"
                value={formData.desc}
                onChange={(e) => setFormData({...formData, desc: e.target.value})}
                required
                rows={3}
                placeholder="Describe what you are trying to build, key goals, timeline constraints, or current tech stack..."
                className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all resize-y min-h-[90px] bg-white"
              />
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs">
                <AlertCircle size={14} className="flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex flex-col gap-3 mt-1">
              <button 
                type="submit"
                disabled={loading}
                className="w-full text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white hover:from-indigo-700 hover:via-indigo-800 hover:to-violet-800 disabled:bg-slate-300 transition-all py-3.5 rounded-full shadow-md shadow-indigo-950/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span>SENDING INQUIRY...</span>
                ) : (
                  <>
                    <span>START THE CONVERSATION</span>
                    <Send size={13} />
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-400 text-center">
                Inquiries are delivered directly to <strong className="text-slate-600 font-semibold">soch9yeah@gmail.com</strong>.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal Overlay */}
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
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 12 }}
              className="bg-white border border-indigo-100 rounded-3xl max-w-[440px] w-full p-8 text-center shadow-2xl flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 flex items-center justify-center text-indigo-900 font-extrabold text-lg mb-1">
                <Check size={22} className="text-indigo-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Inquiry Delivered!</h3>
              
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you! Your project requirements have been transmitted to <strong className="text-slate-900">soch9yeah@gmail.com</strong>. Our systems team will review your parameters and follow up shortly.
              </p>

              <button 
                onClick={() => setShowModal(false)}
                className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-95 transition-all px-8 py-3 rounded-full mt-2 shadow-sm shadow-indigo-950/15"
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
