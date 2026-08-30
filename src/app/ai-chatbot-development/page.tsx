import React from 'react';
import AIAutomation from '../ai-automation/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Chatbot Development & Custom RAG Integrations | SOCHYEAH",
  description: "Custom conversational AI bots and chatbots mapped directly to your internal documents database using RAG, running under 400ms."
};

export default function AIChatbotPage() {
  return <AIAutomation />;
}
