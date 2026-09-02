import React from 'react';
import IndustriesClient from '@/components/IndustriesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industry Verticals & Sector Capabilities | SOCHYEAH",
  description: "Explore tailored AI, software, and technical growth infrastructure configured for SaaS, FinTech, Healthcare, Real Estate, E-commerce, and Logistics.",
  alternates: {
    canonical: "https://www.sochyeah.com/industries",
  },
  openGraph: {
    title: "Industry Verticals & Sector Capabilities | SOCHYEAH",
    description: "Explore tailored AI, software, and technical growth infrastructure configured for SaaS, FinTech, Healthcare, Real Estate, E-commerce, and Logistics.",
    url: "https://www.sochyeah.com/industries",
    siteName: "SOCHYEAH",
    type: "website",
  }
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
