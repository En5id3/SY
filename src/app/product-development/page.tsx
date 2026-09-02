import ServiceDetailPage, { generateMetadata as generateServiceMetadata } from '../services/[slug]/page';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata({ params: Promise.resolve({ slug: 'product-development' }) });
}

export default async function ProductDevelopmentPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'product-development' })} />;
}
