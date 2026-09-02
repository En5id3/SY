import React from 'react';
import SevaHeader from '@/components/SevaHeader';
import SevaDirectoryClient from '@/components/SevaDirectoryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "Government Schemes Directory India | SEVA",
  },
  description: "Find government schemes, subsidies and welfare programs in India for businesses, farmers, health, energy and communities. Explore schemes and verify details through official sources.",
  alternates: {
    canonical: "https://seva.sochyeah.com/",
  },
  openGraph: {
    title: "Government Schemes Directory India | SEVA",
    description: "Find government schemes, subsidies and welfare programs in India for businesses, farmers, health, energy and communities. Explore schemes and verify details through official sources.",
    url: "https://seva.sochyeah.com/",
    siteName: "SEVA Directory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Government Schemes Directory India | SEVA",
    description: "Find government schemes, subsidies and welfare programs in India for businesses, farmers, health, energy and communities. Explore schemes and verify details through official sources.",
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
        'description': 'Find government schemes, subsidies and welfare programs in India for businesses, farmers, health, energy and communities. Explore schemes and verify details through official sources.',
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
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://seva.sochyeah.com/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What are government schemes and subsidies in India?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Government schemes are public assistance initiatives launched by the Central Government of India or State Governments to deliver financial subsidies, credit guarantees, welfare benefits, healthcare coverage, and technical support.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I find government schemes I am eligible for?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use the SEVA search tool to filter schemes by sector (MSME, Agriculture, Energy, Healthcare), beneficiary category (Women, Unemployed Youth, Farmers, Senior Citizens), or specific benefit type.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Where should I verify scheme information before applying?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Always verify guidelines, eligibility criteria, and application forms directly through the designated official government portal linked on every SEVA scheme page.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is SEVA an official Government of India website?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. SEVA is an independent public information directory and is not affiliated with or operated by any government ministry.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How often is the scheme information on SEVA reviewed?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Our editorial team audits scheme parameters periodically against updated ministerial gazettes and notifications.'
            }
          }
        ]
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
