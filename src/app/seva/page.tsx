import React from 'react';
import SevaHeader from '@/components/SevaHeader';
import SevaDirectoryClient from '@/components/SevaDirectoryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "Government Schemes Directory India | SEVA",
  },
  description: "Find government schemes, subsidies and welfare programs for businesses, farmers, health, energy and communities. SEVA helps you discover relevant government benefits and official sources.",
  alternates: {
    canonical: "https://seva.sochyeah.com/",
  },
  openGraph: {
    title: "Government Schemes Directory India | SEVA",
    description: "Find government schemes, subsidies and welfare programs for businesses, farmers, health, energy and communities. SEVA helps you discover relevant government benefits and official sources.",
    url: "https://seva.sochyeah.com/",
    siteName: "SEVA Directory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Government Schemes Directory India | SEVA",
    description: "Find government schemes, subsidies and welfare programs for businesses, farmers, health, energy and communities. SEVA helps you discover relevant government benefits and official sources.",
  }
};

export default function SevaDirectoryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://seva.sochyeah.com/#website',
        'url': 'https://seva.sochyeah.com/',
        'name': 'SEVA - Government Schemes Directory India',
        'description': 'Find government schemes, subsidies and welfare programs for businesses, farmers, health, energy and communities. SEVA helps you discover relevant government benefits and official sources.',
        'publisher': {
          '@type': 'Organization',
          'name': 'SEVA Public Information Directory',
          'url': 'https://seva.sochyeah.com/'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://seva.sochyeah.com/#organization',
        'name': 'SEVA',
        'url': 'https://seva.sochyeah.com/',
        'description': 'Independent public directory of central and state Government of India schemes, welfare initiatives, and subsidy guidelines.'
      }
    ]
  };

  return (
    <div className="bg-[#fafafc] min-h-screen text-slate-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SevaHeader />
      <SevaDirectoryClient />
      <footer className="border-t border-indigo-100/70 bg-white py-8 px-6 text-center text-xs text-slate-400">
        <p>© 2026 SEVA Public Information Portal. Independent public directory of Government of India schemes and welfare parameters.</p>
      </footer>
    </div>
  );
}
