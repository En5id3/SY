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
    { label: 'DATA', desc: 'ETL pipelines structure historic operational tables.', icon: <Database className="w-5 h-5 text-black" /> },
    { label: 'EXPLORE', desc: 'Identify variance patterns and isolate correlations.', icon: <Eye className="w-5 h-5 text-black" /> },
    { label: 'MODEL', desc: 'Train algorithms matching exact metric boundaries.', icon: <Award className="w-5 h-5 text-black" /> },
    { label: 'EVALUATE', desc: 'Confirm validation test set score weights.', icon: <CheckCircle2 className="w-5 h-5 text-black" /> },
    { label: 'DEPLOY', desc: 'Wrap predictions in low-latency REST endpoints.', icon: <TrendingUp className="w-5 h-5 text-black" /> },
    { label: 'MONITOR', desc: 'Track error logs and prevent training data drift.', icon: <Monitor className="w-5 h-5 text-black" /> }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24">
      {/* Editorial Header */}
      <div className="max-w-[800px] mb-20 flex flex-col gap-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">APPLIED STATISTICS</span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-black uppercase leading-tight">
          TURN DATA INTO DECISIONS.
        </h1>
        <p className="sub-editorial font-medium">
          Move beyond static reports and retrospectives. We build predictive modeling loops that forecast demand, classify leads, flag process anomalies, and customize user recommendation feeds in real time.
        </p>
      </div>

      {/* 2. Interactive Simulator Panel */}
      <section className="mb-24">
        <div className="max-w-[600px] mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-tight mb-2">
            Interactive Visualizer
          </h2>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            Run the model prediction script below to visualize input vectors compiling through a neural layer to output revenue forecasts.
          </p>
        </div>
        <MLPredictor />
      </section>

      {/* 3. Pipeline Process Section */}
      <section className="mb-24 border-t border-border-light pt-20">
        <div className="max-w-[600px] mb-12 flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">MLOPS ROADMAP</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-tight">
            MODEL TRAINING CYCLES.
          </h2>
          <p className="text-xs text-color-text-secondary leading-relaxed">
            How we translate raw database records into scalable live forecasting scripts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {pipeline.map((item, idx) => (
            <div key={idx} className="border border-border-light bg-white rounded-lg p-5 flex flex-col justify-between shadow-sm min-h-[160px]">
              <div>
                <div className="p-2 bg-neutral-50 rounded border border-neutral-100 self-start mb-4 w-max">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-black uppercase tracking-wider mb-2">{item.label}</div>
              </div>
              <p className="text-[10px] text-color-text-secondary leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Capabilities Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-light pt-20">
        <div>
          <h3 className="text-lg font-bold text-black mb-6 uppercase tracking-wider">Applied ML Capabilities</h3>
          <p className="text-xs text-color-text-secondary leading-relaxed mb-6">
            We select appropriate models, optimize algorithms, compile features, and set up continuous monitoring infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {serviceList.map((svc, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-color-text-secondary font-medium">
              <span className="text-black font-bold">•</span>
              <span>{svc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-black text-white rounded-lg p-10 md:p-16 text-center mt-24">
        <div className="max-w-[600px] mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter">
            Turn My Data Into Predictions
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-[450px]">
            Ready to train recommendation engines, forecast product inventory demands, or run object classification? Connect with our engineering partners.
          </p>
          <Link 
            href="/contact" 
            className="text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors px-8 py-4 rounded mt-4"
          >
            START AN ML SCOPE
          </Link>
        </div>
      </section>
    </div>
  );
}
