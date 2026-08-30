import React from 'react';
import MachineLearning from '../machine-learning/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Analytics, Warehousing & Pipeline Engineering | SOCHYEAH",
  description: "We compile ELT data pipelines, configure PostgreSQL data warehouses, and build custom Next.js dashboards showing predictive KPIs."
};

export default function DataAnalyticsPage() {
  return <MachineLearning />;
}
