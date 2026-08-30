import React from 'react';
import AIAutomation from '../ai-automation/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Development Services & Custom Cognitive Systems | SOCHYEAH",
  description: "We design and build custom generative AI models, agentic RAG search systems, and cognitive automation pipelines for ambitious enterprise operations."
};

export default function AIDevelopmentPage() {
  return <AIAutomation />;
}
