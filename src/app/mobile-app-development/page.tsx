import React from 'react';
import SoftwareDevelopment from '../software-development/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "iOS & Android Mobile Application Development | SOCHYEAH",
  description: "Custom mobile app development, cross-platform React Native codebases, and low-latency API connections to your core business systems."
};

export default function MobileAppDevelopmentPage() {
  return <SoftwareDevelopment />;
}
