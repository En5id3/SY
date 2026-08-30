export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  whatWeBuilt: string[];
  technology: string[];
  businessImpact: string;
  keyMetrics: Metric[];
  lessons: string[];
  message: string;
  ctaText?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  problem: string;
  context: string;
  solution: string;
  implementation: string;
  architecture: string[];
  lessons: string[];
  image?: string;
  metrics?: { label: string; value: string }[];
  codeSnippet?: string;
  codeLanguage?: string;
  faqs?: { q: string; a: string }[];
}
