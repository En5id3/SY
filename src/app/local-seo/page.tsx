import React from 'react';
import SEOGrowth from '../seo-growth/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Local SEO & Programmatic Indexing Systems | SOCHYEAH",
  description: "We deploy database-driven local city pages to capture regional intent searches, optimized with rich snippets schema markup."
};

export default function LocalSEOPage() {
  return <SEOGrowth />;
}
