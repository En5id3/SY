import React from 'react';
import BlogClient from '@/components/BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Technical Journal & Engineering Blueprints",
  description: "Read technical articles on AI agent development, enterprise RAG architectures, machine learning workflows, SaaS engineering, and technical SEO growth.",
  alternates: {
    canonical: "https://www.sochyeah.com/blog",
  },
  openGraph: {
    title: "Technical Journal & Engineering Blueprints | SOCHYEAH",
    description: "Read technical articles on AI agent development, enterprise RAG architectures, machine learning workflows, SaaS engineering, and technical SEO growth.",
    url: "https://www.sochyeah.com/blog",
    siteName: "SOCHYEAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Journal & Engineering Blueprints | SOCHYEAH",
    description: "Read technical articles on AI agent development, enterprise RAG architectures, machine learning workflows, SaaS engineering, and technical SEO growth.",
  }
};

export default function BlogPage() {
  return <BlogClient />;
}
