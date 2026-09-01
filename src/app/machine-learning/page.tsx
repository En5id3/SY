'use client';

import React from 'react';
import Link from 'next/link';
import MLPredictor from '@/components/MLPredictor';
import { ArrowRight, Database, Eye, Award, CheckCircle2, TrendingUp, Monitor } from 'lucide-react';

export default function MachineLearning() {
  const serviceList = [
    'Predictive Analytics', 'Demand Forecasting', 'Recommendation Engines', 
    'Customer Segmentation', 'Fraud Detection', 'Anomaly Detection', 'Classification', 
    'Computer Vision', 'NLP', 'Time-Series Forecasting', 'Churn Prediction', 
    'Scoring Models', 'ML APIs', 'Model Deployment', 'MLOps'
  ];

  const pipeline = [
    { label: 'DATA', desc: 'ETL pipelines structure historic operational tables.', icon: <Database className="w-5 h-5 text-purple-700" /> },
    { label: 'EXPLORE', desc: 'Identify variance patterns and isolate correlations.', icon: <Eye className="w-5 h-5 text-purple-700" /> },
    { label: 'MODEL', desc: 'Train algorithms matching exact metric boundaries.', icon: <Award className="w-5 h-5 text-purple-700" /> },
    { label: 'EVALUATE', desc: 'Confirm validation test set score weights.', icon: <CheckCircle2 className="w-5 h-5 text-purple-700" /> },
    { label: 'DEPLOY', desc: 'Wrap predictions in low-latency REST endpoints.', icon: <TrendingUp className="w-5 h-5 text-purple-700" /> },
    { label: 'MONITOR', desc: 'Track error logs and prevent training data drift.', icon: <Monitor className="w-5 h-5 text-purple-700" /> }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 self-start">
          APPLIED DATA SCIENCE & ML
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 uppercase leading-tight">
          TURN DATA INTO DECISIONS.
        </h1>
        <p className="sub-editorial text-purple-950 font-medium">
          Move beyond static reports and retrospectives. We build predictive modeling loops that forecast demand, classify leads, flag process anomalies, and customize user recommendation feeds in real time.
        </p>
      </div>

      {/* 2. Interactive Simulator Panel */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-8">
          <span className="text-[10px] font-mono font-bold text-purple-800 uppercase tracking-wider block mb-1">
            Predictor Module
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight mb-2">
            Interactive Visualizer
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Run the model prediction script below to visualize input vectors compiling through a neural layer to output revenue forecasts.
          </p>
        </div>
        <MLPredictor />
      </section>

      {/* 3. Pipeline Process Section */}
      <section className="mb-24 border-t border-purple-100/70 pt-20">
        <div className="max-w-[600px] mb-12 flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-800">
            01 // MLOPS ROADMAP
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            MODEL TRAINING CYCLES.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            How we translate raw database records into scalable live forecasting scripts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5">
          {pipeline.map((item, idx) => (
            <div key={idx} className="border border-purple-100/80 bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm shadow-purple-900/5 min-h-[170px] card-hover-effect">
              <div>
                <div className="p-2.5 bg-purple-50/60 rounded-xl border border-purple-100 self-start mb-4 w-max">
                  {item.icon}
                </div>
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">{item.label}</div>
              </div>
              <p className="text-[10px] text-slate-500 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Capabilities Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-purple-100/70 pt-20">
        <div className="border border-purple-100/80 bg-white rounded-2xl p-8 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-4 uppercase tracking-wider">Applied ML Capabilities</h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            We select appropriate models, optimize algorithms, compile features, and set up continuous telemetry infrastructure.
          </p>
        </div>

        <div className="bg-purple-50/25 border border-purple-100/60 rounded-2xl p-8">
          <div className="grid grid-cols-2 gap-3.5">
            {serviceList.map((svc, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <span className="text-purple-600 font-bold">•</span>
                <span>{svc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-10 md:p-16 text-center mt-24 shadow-xl shadow-indigo-950/15 relative overflow-hidden">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Turn My Data Into Predictions
          </h2>
          <p className="text-xs text-indigo-200 leading-relaxed max-w-[450px]">
            Ready to train recommendation engines, forecast product inventory demands, or run object classification? Connect with our engineering partners.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-4 rounded-full shadow-md hover:scale-[1.02] mt-2"
          >
            START AN ML SCOPE
          </Link>
        </div>
      </section>
    </div>
  );
}
