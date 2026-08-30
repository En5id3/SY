import React from 'react';
import AIAutomation from '../ai-automation/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Voice AI Receptionists & Call Center Schedulers | SOCHYEAH",
  description: "We deploy streaming voice AI agents capable of answering phone calls, scheduling meetings, and logging leads into CRM automatically."
};

export default function VoiceAIPage() {
  return <AIAutomation />;
}
