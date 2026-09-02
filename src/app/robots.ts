import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: [
      'https://www.sochyeah.com/sitemap.xml',
      'https://seva.sochyeah.com/sitemap.xml',
    ],
  };
}
