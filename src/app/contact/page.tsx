import React from 'react';
import ContactFormClient from '@/components/ContactFormClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact SOCHYEAH | Start an AI or Software Project",
  description: "Schedule a project consultation directly with SOCHYEAH founders and technical lead engineers. Transparent roadmaps, 6-week MVP delivery, and zero sales pressure.",
  alternates: {
    canonical: "https://www.sochyeah.com/contact",
  },
  openGraph: {
    title: "Contact SOCHYEAH | Start an AI or Software Project",
    description: "Schedule a project consultation directly with SOCHYEAH founders and technical lead engineers. Transparent roadmaps, 6-week MVP delivery, and zero sales pressure.",
    url: "https://www.sochyeah.com/contact",
    siteName: "SOCHYEAH",
    type: "website",
  }
};

export default function ContactPage() {
  return <ContactFormClient />;
}
