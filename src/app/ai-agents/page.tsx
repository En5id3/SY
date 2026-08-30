import React from 'react';
import AIAutomation from '../ai-automation/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Agent Developers & Autonomous Bot Architectures | SOCHYEAH",
  description: "We deploy autonomous AI agents configured with custom tools and API triggers to run workflows and automate manual database operations."
};

export default function AIAgentsPage() {
  return <AIAutomation />;
}
