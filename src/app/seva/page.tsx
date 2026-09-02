import React from 'react';
import SevaHeader from '@/components/SevaHeader';
import SevaDirectoryClient from '@/components/SevaDirectoryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Government Schemes in India: Eligibility, Subsidies & Benefits | SEVA Directory",
  description: "Search verified Indian government schemes for MSMEs, startups, farmers, healthcare, and rooftop solar with subsidy tables, eligibility checklists, and official portal links.",
  alternates: {
    canonical: "https://seva.sochyeah.com",
  },
  openGraph: {
    title: "Government Schemes in India | SEVA Directory",
    description: "Search verified Indian government schemes for MSMEs, startups, farmers, healthcare, and rooftop solar with subsidy tables and eligibility checklists.",
    url: "https://seva.sochyeah.com",
    siteName: "SEVA Directory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Government Schemes in India | SEVA Directory",
    description: "Search verified Indian government schemes for MSMEs, startups, farmers, healthcare, and rooftop solar.",
  }
};

export default function SevaDirectoryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://seva.sochyeah.com/#website',
        'url': 'https://seva.sochyeah.com',
        'name': 'SEVA - Indian Government Schemes Directory',
        'description': 'Independent, searchable directory of central and state Indian government schemes, subsidies, eligibility, and application guidelines.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://seva.sochyeah.com/#webpage',
        'url': 'https://seva.sochyeah.com',
        'name': 'Government Schemes in India: Eligibility, Subsidies & Benefits | SEVA Directory',
        'description': 'Search verified Indian government schemes for MSMEs, startups, farmers, healthcare, and rooftop solar.',
        'isPartOf': {
          '@id': 'https://seva.sochyeah.com/#website'
        }
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
