import type { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { caseStudies } from '@/data/case-studies';
import { blogPosts } from '@/data/blog';
import { schemesData, schemeCategories } from '@/data/schemes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sochyeah.com';
  const sevaUrl = 'https://seva.sochyeah.com';
  const now = new Date();

  // Core static pages for SOCHYEAH
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  // 15 Commercial Services
  const servicePages: MetadataRoute.Sitemap = servicesData.map(svc => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Case Studies
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map(cs => ({
    url: `${baseUrl}/case-studies/${cs.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog Articles
  const blogPages: MetadataRoute.Sitemap = blogPosts.map(bp => ({
    url: `${baseUrl}/blog/${bp.id}`,
    lastModified: new Date(bp.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // SEVA Directory Homepage, Categories & Individual Schemes
  const sevaCategoryPages: MetadataRoute.Sitemap = Object.keys(schemeCategories).map(catKey => ({
    url: `${sevaUrl}/schemes/${catKey}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const sevaSchemePages: MetadataRoute.Sitemap = schemesData.map(sc => ({
    url: `${sevaUrl}/schemes/${sc.slug}`,
    lastModified: new Date(sc.lastReviewedIso || '2026-03-01'),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const sevaPages: MetadataRoute.Sitemap = [
    { url: `${sevaUrl}`, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    ...sevaCategoryPages,
    ...sevaSchemePages,
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...caseStudyPages,
    ...blogPages,
    ...sevaPages,
  ];
}
