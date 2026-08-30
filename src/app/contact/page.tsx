'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 1500);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* 1. Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">GET IN TOUCH</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          HAVE AN IDEA?<br />LET'S BUILD IT.
        </h1>
        <p className="sub-editorial">
          "Tell us what you're trying to build, automate or improve."
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Direct Details */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-lg font-bold text-black uppercase tracking-wider mb-4">Partner with strategist-builders.</h3>
            <p className="text-xs text-color-text-secondary leading-relaxed mb-10">
              No pushy sales calls, no layers of project managers. You align directly with technical decision-makers to structure scopes and deliverables.
            </p>
          </div>

          <div className="flex flex-col gap-8 mb-10">
            <div>
              <span className="text-[8px] font-bold text-neutral-400 uppercase block tracking-wider mb-1">DIRECT EMAIL</span>
              <a href="mailto:soch9yeah@gmail.com" className="text-xs font-semibold text-black hover:text-neutral-600 transition-colors">
                soch9yeah@gmail.com
              </a>
            </div>
            <div>
              <span className="text-[8px] font-bold text-neutral-400 uppercase block tracking-wider mb-1">STUDIO ADDRESS</span>
              <p className="text-xs text-black font-semibold">
                Hamirpur, Himachal Pradesh & NCR, India
              </p>
            </div>
            <div>
              <span className="text-[8px] font-bold text-neutral-400 uppercase block tracking-wider mb-1">AVAILABILITY</span>
              <p className="text-xs text-black font-semibold">
                Open for Q3 & Q4 2026/2027 project cycles.
              </p>
            </div>
          </div>

          <div className="text-[10px] text-color-text-muted leading-relaxed">
            Looking for a career? We are always seeking curious systems engineers and growth specialists. Email your CV to <a href="mailto:build@sochyeah.com" className="underline hover:text-black">build@sochyeah.com</a>.
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-2/3 border border-border-light bg-white rounded-lg p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-wider" htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Jane Doe"
                  className="border border-border-light rounded px-4 py-3 text-xs outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-wider" htmlFor="company">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Company Inc."
                  className="border border-border-light rounded px-4 py-3 text-xs outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-wider" htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="jane@company.com"
                  className="border border-border-light rounded px-4 py-3 text-xs outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-black uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                  className="border border-border-light rounded px-4 py-3 text-xs outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-black uppercase tracking-wider" htmlFor="service">What do you need?</label>
              <select 
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="border border-border-light rounded px-4 py-3 text-xs outline-none focus:border-black bg-white transition-colors"
              >
                <option>AI / Automation</option>
                <option>Software Development</option>
                <option>Machine Learning</option>
                <option>SEO / Growth</option>
                <option>Mobile App</option>
                <option>SaaS</option>
                <option>Data / Analytics</option>
                <option>AI Consulting</option>
                <option>Other</option>
              </select>
            </div>



            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-black uppercase tracking-wider" htmlFor="desc">Project Description *</label>
              <textarea 
                id="desc"
                value={formData.desc}
                onChange={(e) => setFormData({...formData, desc: e.target.value})}
                required
                rows={4}
                placeholder="Describe the opportunity, core features, timeline, or current operations stack..."
                className="border border-border-light rounded px-4 py-3 text-xs outline-none focus:border-black transition-colors resize-y min-h-[100px]"
              />
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <button 
                type="submit"
                disabled={loading}
                className="w-full text-center text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-300 transition-colors py-4 rounded"
              >
                {loading ? 'SENDING INQUIRY...' : 'START THE CONVERSATION'}
              </button>
              <p className="text-[10px] text-color-text-muted text-center italic">
                "No hard sell. Just a conversation about what you're trying to build."
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white border border-border-light rounded-lg max-w-[400px] w-full p-8 text-center shadow-lg flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-black font-extrabold text-lg mb-2">
                ✓
              </div>
              <h3 className="text-lg font-bold text-black uppercase tracking-wider">Enquiry Submitted</h3>
              <p className="text-xs text-color-text-secondary leading-relaxed">
                Thank you. Your parameters have been sent directly to our engineer partners. We will review your project and respond within 1 business day.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors px-6 py-3 rounded mt-4"
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
