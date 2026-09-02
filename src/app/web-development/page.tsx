import ServiceDetailPage, { generateMetadata as generateServiceMetadata } from '../services/[slug]/page';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata({ params: Promise.resolve({ slug: 'web-development' }) });
}

export default async function WebDevelopmentPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'web-development' })} />;
}
