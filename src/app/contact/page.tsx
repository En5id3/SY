import React from 'react';
import ContactFormClient from '@/components/ContactFormClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Our Team & Lead Builders",
  description: "Schedule a project consultation with SOCHYEAH lead engineers. Transparent technical roadmaps, 6-week MVP delivery sprints, and zero sales pressure.",
  alternates: {
    canonical: "https://www.sochyeah.com/contact",
  },
  openGraph: {
    title: "Contact Our Team & Lead Builders | SOCHYEAH",
    description: "Schedule a project consultation with SOCHYEAH lead engineers. Transparent technical roadmaps, 6-week MVP delivery sprints, and zero sales pressure.",
    url: "https://www.sochyeah.com/contact",
    siteName: "SOCHYEAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Our Team & Lead Builders | SOCHYEAH",
    description: "Schedule a project consultation with SOCHYEAH lead engineers. Transparent technical roadmaps, 6-week MVP delivery sprints, and zero sales pressure.",
  }
};

export default function ContactPage() {
  return <ContactFormClient />;
}
