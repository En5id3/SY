import React from 'react';
import CaseStudiesClient from '@/components/CaseStudiesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Client Case Studies & Engineering Solutions | SOCHYEAH",
  description: "Explore verified case studies: custom AI telephony assistants, RAG document knowledge bases, automated recommendation engines, and technical SEO growth infrastructure.",
  alternates: {
    canonical: "https://www.sochyeah.com/case-studies",
  },
  openGraph: {
    title: "Client Case Studies & Engineering Solutions | SOCHYEAH",
    description: "Explore verified case studies: custom AI telephony assistants, RAG document knowledge bases, automated recommendation engines, and technical SEO growth infrastructure.",
    url: "https://www.sochyeah.com/case-studies",
    siteName: "SOCHYEAH",
    type: "website",
  }
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
