import { NextResponse } from 'next/server';
import { schemesData } from '@/data/schemes';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://seva.sochyeah.com';

  const urls = [
    {
      loc: baseUrl,
      lastmod: '2026-09-02',
      changefreq: 'daily',
      priority: '1.0',
    },
    ...schemesData.map((scheme) => ({
      loc: `${baseUrl}/schemes/${scheme.slug}`,
      lastmod: scheme.lastVerifiedDate || '2026-09-02',
      changefreq: 'weekly',
      priority: '0.9',
    })),
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
