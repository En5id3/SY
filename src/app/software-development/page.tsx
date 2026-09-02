import ServiceDetailPage, { generateMetadata as generateServiceMetadata } from '../services/[slug]/page';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata({ params: Promise.resolve({ slug: 'software-development' }) });
}

export default async function SoftwareDevelopmentPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'software-development' })} />;
}
