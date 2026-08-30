import React from 'react';
import AIAutomation from '../ai-automation/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Consulting, Feasibility Audits & Technical Roadmaps | SOCHYEAH",
  description: "Identify high-leverage workflows inside your business operations and map exact model schemas, vector architectures, and cost projections."
};

export default function AIConsultingPage() {
  return <AIAutomation />;
}
