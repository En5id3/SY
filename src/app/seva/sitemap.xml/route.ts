import { NextResponse } from 'next/server';
import { schemesData, schemeCategories } from '@/data/schemes';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://seva.sochyeah.com';

  const urls = [
    {
      loc: `${baseUrl}/`,
      lastmod: '2026-09-02',
    },
    ...Object.keys(schemeCategories).map((cat) => ({
      loc: `${baseUrl}/schemes/${cat}`,
      lastmod: '2026-09-02',
    })),
    ...schemesData.map((scheme) => ({
      loc: `${baseUrl}/schemes/${scheme.slug}`,
      lastmod: scheme.lastReviewedIso || '2026-03-01',
    })),
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
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
