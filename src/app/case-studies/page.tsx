import React from 'react';
import CaseStudiesClient from '@/components/CaseStudiesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Client Case Studies & Engineering Solutions",
  description: "Explore verified case studies: custom AI voice agents, RAG knowledge bases, ML recommendation engines, and high-impact technical SEO growth systems.",
  alternates: {
    canonical: "https://www.sochyeah.com/case-studies",
  },
  openGraph: {
    title: "Client Case Studies & Engineering Solutions | SOCHYEAH",
    description: "Explore verified case studies: custom AI voice agents, RAG knowledge bases, ML recommendation engines, and high-impact technical SEO growth systems.",
    url: "https://www.sochyeah.com/case-studies",
    siteName: "SOCHYEAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Engineering Solutions | SOCHYEAH",
    description: "Explore verified case studies: custom AI voice agents, RAG knowledge bases, ML recommendation engines, and high-impact technical SEO growth systems.",
  }
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
