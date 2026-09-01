'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send } from 'lucide-react';

export default function Contact() {
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get('submitted') === 'true') {
      setShowModal(true);
    }
  }, [searchParams]);

  const handleSubmit = () => {
    setLoading(true);
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

        {/* Right Side: Form with Direct Automated Email Delivery to soch9yeah@gmail.com */}
        <div className="w-full lg:w-2/3 border border-indigo-100/90 bg-white rounded-3xl p-6 md:p-8 shadow-sm shadow-indigo-900/5">
          <form 
            action="https://formsubmit.co/soch9yeah@gmail.com" 
            method="POST" 
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Hidden fields for automatic FormSubmit processing */}
            <input type="hidden" name="_subject" value="New Project Inquiry - SOCHYEAH Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://sochyeah.com/contact?submitted=true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700" htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  name="Name"
                  id="name"
                  required
                  placeholder="Jane Doe"
                  className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700" htmlFor="company">Company / Organization</label>
                <input 
                  type="text" 
                  name="Company"
                  id="company"
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
                  name="Email"
                  id="email"
                  required
                  placeholder="jane@company.com"
                  className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700" htmlFor="phone">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  name="Phone"
                  id="phone"
                  placeholder="+91 98000 00000"
                  className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700" htmlFor="service">Target Domain Focus</label>
              <select 
                name="Domain Focus"
                id="service"
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
                name="Project Requirements"
                id="desc"
                required
                rows={3}
                placeholder="Describe what you are trying to build, key goals, timeline constraints, or current tech stack..."
                className="border border-indigo-200/80 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all resize-y min-h-[90px] bg-white"
              />
            </div>

            <div className="flex flex-col gap-3 mt-1">
              <button 
                type="submit"
                disabled={loading}
                className="w-full text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white hover:from-indigo-700 hover:via-indigo-800 hover:to-violet-800 disabled:bg-slate-300 transition-all py-3.5 rounded-full shadow-md shadow-indigo-950/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <span>START THE CONVERSATION</span>
                    <Send size={13} />
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-400 text-center">
                Submissions are sent directly to <strong className="text-slate-600 font-semibold">soch9yeah@gmail.com</strong>.
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
