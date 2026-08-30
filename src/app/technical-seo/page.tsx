import React from 'react';
import SEOGrowth from '../seo-growth/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Technical SEO & Speed Optimization Audit Services | SOCHYEAH",
  description: "We optimize Largest Contentful Paint (LCP), clean rendering blocks, sitemaps index configurations, and search crawl parameters."
};

export default function TechnicalSEOPage() {
  return <SEOGrowth />;
}
