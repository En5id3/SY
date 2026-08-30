import React from 'react';
import SoftwareDevelopment from '../software-development/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SaaS Product Engineering & Custom App Development | SOCHYEAH",
  description: "We build modular, secure SaaS architectures with Stripe tiers integration, customer dashboard interfaces, and scaling database setups."
};

export default function SaaSDevelopmentPage() {
  return <SoftwareDevelopment />;
}
