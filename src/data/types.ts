export interface Metric {
  label: string;
  value: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  heroTitle: string;
  metaTitle: string;
  metaDescription: string;
  category: 'AI & Automation' | 'Software Engineering' | 'Machine Learning' | 'SEO & Growth' | 'Product Development';
  badge: string;
  shortDesc: string;
  heroDescription: string;
  whatIs: {
    title: string;
    content: string;
    highlights: string[];
  };
  howWeHelp: {
    title: string;
    points: { title: string; desc: string }[];
  };
  problemsSolved: string[];
  featuresIncluded: string[];
  techStack: { category: string; items: string[] }[];
  process: { step: string; title: string; desc: string }[];
  useCases: { title: string; desc: string; outcome: string }[];
  industries: string[];
  caseStudyIds: string[];
  relatedArticleIds: string[];
  relatedServiceSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export interface SchemeCategory {
  slug: 'business' | 'health' | 'energy' | 'agriculture';
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  detailedOverview: string;
  keyHighlights: string[];
  eligibleEntitiesSummary: string[];
  schemeIds: string[];
}

export interface SchemeItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: 'business' | 'health' | 'energy' | 'agriculture';
  agency: string;
  ministry: string;
  overview: string;
  benefit: string;
  subsidyTable: { tier: string; subsidy: string; details: string }[];
  eligibility: string[];
  ineligibility: string[];
  docs: string[];
  applicationSteps: { step: number; title: string; instruction: string }[];
  officialPortals: { name: string; url: string; description: string }[];
  lastVerifiedDate: string;
  lastReviewedIso: string;
  faqs: { question: string; answer: string }[];
  relatedSchemeIds: string[];
  disclaimer: string;
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
  relatedServiceSlugs?: string[];
  relatedCaseStudyIds?: string[];
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
  relatedServiceSlugs?: string[];
  relatedArticleIds?: string[];
}
