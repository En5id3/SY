import React from 'react';
import SoftwareDevelopment from '../software-development/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Web Application Development Services | SOCHYEAH",
  description: "We design and develop high-speed, responsive React/Next.js web applications backed by stable database structures and secure cloud routing."
};

export default function WebDevelopmentPage() {
  return <SoftwareDevelopment />;
}
