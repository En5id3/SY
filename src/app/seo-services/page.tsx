import React from 'react';
import SEOGrowth from '../seo-growth/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEO Services & Organic Distribution Engineering | SOCHYEAH",
  description: "We build database-driven programmatic SEO systems, run technical audits, and configure JSON-LD schemas to scale search leads."
};

export default function SEOServicesPage() {
  return <SEOGrowth />;
}
