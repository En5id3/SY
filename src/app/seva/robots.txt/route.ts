import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://seva.sochyeah.com/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
