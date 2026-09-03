import { CaseStudy } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-receptionist',
    title: 'AI Receptionist for a Service Business',
    metaDescription: 'How we built a production AI Voice Receptionist with sub-180ms latency, handling inbound bookings and reducing missed calls by 35%.',
    category: 'AI / Voice / Automation',
    challenge: 'A growing multi-location service firm was losing up to 22% of inbound appointment enquiries because front-desk staff were occupied assisting in-person clients or answering basic pricing questions, resulting in long call queues and missed revenue.',
    solution: 'We engineered a production-grade AI Voice Receptionist integrated directly into their local telephony routing and CRM scheduler, capable of holding complex natural-language phone calls, confirming availability, answering service FAQs, and booking calendar openings.',
    whatWeBuilt: [
      'Voice-to-Text streaming pipelines with latency under 180ms',
      'Context-aware conversation logic with automatic state tracking',
      'Integration API connecting directly to client scheduling CRM',
      'Live dashboard for staff to view call transcriptions and appointment actions',
      'Automated email/SMS confirmation triggers for booked clients'
    ],
    technology: ['Voice AI (VAPI)', 'GPT-4o', 'Twilio Telephony', 'FastAPI / Python', 'Node-RED Workflow Engine'],
    businessImpact: 'Streamlined front-office overhead and captured after-hours bookings, translating customer interest into booked appointments without adding staff headcount.',
    keyMetrics: [
      { label: 'Booking Capture Rate', value: '+35%' },
      { label: 'Repetitive Calls Diverted', value: '78%' },
      { label: 'Average Queue Time', value: '0 sec' }
    ],
    lessons: [
      'Latency is the key indicator of voice UX; keeping turn-taking under 500ms makes interactions feel completely natural.',
      'Always structure clear fallback options (e.g. standard forwarding) to handle complex, fringe customer queries.'
    ],
    message: "Your business shouldn't stop answering because your team is busy.",
    ctaText: 'BUILD MY AI RECEPTIONIST',
    relatedServiceSlugs: ['ai-agent-development', 'ai-automation', 'ai-chatbot-development', 'ai-development'],
    relatedCaseStudyIds: ['ai-sales-automation', 'ai-document-assistant']
  },
  {
    id: 'ai-document-assistant',
    title: 'AI Assistant for Business Documents',
    metaDescription: 'How we built an enterprise RAG document intelligence platform with pgvector, cutting internal audit and search resolution times by 85%.',
    category: 'Generative AI / RAG',
    challenge: 'Operations analysts and legal clerks spent an average of 9 hours per week searching through scattered PDFs, internal manuals, compliance briefs, and historical project files to answer customer enquiries and complete technical audits.',
    solution: 'We built a secure, high-performance Document Intelligence platform using Retrieval-Augmented Generation (RAG). The platform indexes company knowledge bases and enables secure natural-language chat queries with accurate source citations.',
    whatWeBuilt: [
      'Multi-format file parser parsing PDFs, DOCX, and CSV sheets',
      'Adaptive text chunking using layout-aware hierarchical models',
      'Semantic index database mapping document relationships',
      'Web-based chat interface with toggle references and source snippets',
      'Role-based database access control protecting confidential files'
    ],
    technology: ['Python / LangChain', 'PostgreSQL / pgvector', 'LlamaIndex', 'Next.js / TypeScript', 'OpenAI Embeddings'],
    businessImpact: 'Turned static document files into an interactive, conversational company brain, accelerating internal audit times and reducing customer onboarding cycles.',
    keyMetrics: [
      { label: 'Search Resolution Time', value: '-85%' },
      { label: 'Document Queries / Month', value: '14,000+' },
      { label: 'Accuracy Rating', value: '99.4%' }
    ],
    lessons: [
      'Data preparation and formatting represents 90% of search quality; simple text splits are insufficient for complex compliance forms.',
      'Providing clickable citations is essential for building employee trust in system outputs.'
    ],
    message: 'Your knowledge is valuable. Finding it shouldn\'t be difficult.',
    ctaText: 'BUILD MY AI DOCUMENT ASSISTANT',
    relatedServiceSlugs: ['rag-development', 'generative-ai', 'ai-development', 'saas-development'],
    relatedCaseStudyIds: ['ai-receptionist', 'business-analytics-platform']
  },
  {
    id: 'ecommerce-recommendation-engine',
    title: 'Personalized Product Recommendations',
    metaDescription: 'How we engineered a real-time ML product recommendation engine with PyTorch and Redis, lifting Average Order Value by 18.4%.',
    category: 'Machine Learning / E-commerce',
    challenge: 'A high-traffic e-commerce retailer had a catalog of 20,000+ items but was relying on manual product groupings, leading to low click-through rates on cross-sales and under-optimized average order value (AOV).',
    solution: 'We trained and deployed a custom hybrid Recommendation System using collaborative filtering, content features, and browse histories. The system serves custom API recommendations to the front-end in under 40ms.',
    whatWeBuilt: [
      'Real-time customer event streaming pipeline (click, cart, purchase)',
      'Offline matrix factorization models trained on transaction history',
      'Vector similarity index database for fast candidate retrieval',
      'A/B testing routing framework to compare model weights',
      'Automated email recommendation engine integration'
    ],
    technology: ['Scikit-learn', 'PyTorch', 'Redis Cache', 'FastAPI API Layer', 'Google Cloud Platform'],
    businessImpact: 'Created a personalized shopping experience designed to improve product discovery and conversion rates across all collection paths.',
    keyMetrics: [
      { label: 'Average Order Value (AOV)', value: '+18.4%' },
      { label: 'Click-Through Rate (CTR)', value: 'x2.4' },
      { label: 'Recommendation API Latency', value: '28ms' }
    ],
    lessons: [
      'Static recommendation models degrade quickly; scheduling daily differential training updates is critical to capture shifting customer trends.',
      'Caching item similarity vectors in Redis ensures high performance during shopping traffic surges.'
    ],
    message: 'Every customer should see a store that understands them.',
    ctaText: 'BUILD MY ML RECOMMENDATION ENGINE',
    relatedServiceSlugs: ['machine-learning', 'predictive-analytics', 'software-development'],
    relatedCaseStudyIds: ['business-analytics-platform', 'seo-growth-engine']
  },
  {
    id: 'seo-growth-engine',
    title: 'Building an Organic Growth Engine',
    metaDescription: 'How we built a programmatic SEO engine generating 3,500+ fast landing pages, delivering a 340% increase in organic B2B search traffic.',
    category: 'SEO / Growth',
    challenge: 'A high-ticket B2B service platform had high acquisition costs via paid channels but lacked search engine visibility, driving a need for a sustainable organic distribution pipeline.',
    solution: 'We engineered a database-driven Programmatic SEO framework, generating 3,500+ structured, fast-loading service landing pages targeting long-tail intent search phrases, backed by topic clusters and technical indexing setups.',
    whatWeBuilt: [
      'Programmatic landing page template rendering framework',
      'Database crawler mapping industry service search patterns',
      'Automatic schema markup generation (Service, Organization, FAQ)',
      'Internal link optimization engine linking relevant articles',
      'Core Web Vitals acceleration suite achieving perfect Lighthouse scores'
    ],
    technology: ['Next.js App Router', 'Tailwind CSS', 'JSON-LD Schema', 'PostgreSQL', 'Vercel Edge Network'],
    businessImpact: 'Created a scalable organic acquisition system designed to generate qualified inbound enquiries without ongoing ad spend.',
    keyMetrics: [
      { label: 'Monthly Organic Traffic', value: '220k+' },
      { label: 'Cost Per Acquisition (CPA)', value: '-62%' },
      { label: 'Pages Indexed by Google', value: '3,400+' }
    ],
    lessons: [
      'Search engines value page speed and layout clarity; minimal JavaScript ensures instant crawling and quick indexing.',
      'Commercial intent pages convert 6x better than generic advice blog posts.'
    ],
    message: 'Traffic is useful. Qualified intent is better.',
    ctaText: 'BUILD MY SEO GROWTH ENGINE',
    relatedServiceSlugs: ['seo', 'web-development', 'product-development'],
    relatedCaseStudyIds: ['ecommerce-recommendation-engine', 'saas-mvp-launch']
  },
  {
    id: 'ai-sales-automation',
    title: 'From Lead to Conversation Automatically',
    metaDescription: 'How we automated multi-channel lead qualification and CRM sync with autonomous AI agents, boosting lead-to-booking conversions by 40%.',
    category: 'AI / Sales / Automation',
    challenge: 'A business consultancy received hundreds of inbound lead enquiries weekly across ads, socials, and web forms, but inconsistent follow-up delays caused a drop in lead-to-booking conversions.',
    solution: 'We built a cognitive Sales Automation workflow that screens incoming messages, scores buy-intent, drafts contextual responses in minutes, updates the company CRM, and schedules discovery calls automatically.',
    whatWeBuilt: [
      'Inbound lead parser mapping fields from Webhooks',
      'Cognitive intent scoring block classifying lead profiles',
      'Personalized draft generator utilizing LLM company context',
      'SMS & email auto-responder with calendar scheduling links',
      'Sales rep alerting system (Slack/email) for high-intent leads'
    ],
    technology: ['Make.com', 'OpenAI GPT-4', 'HubSpot CRM API', 'Cal.com API', 'Node.js'],
    businessImpact: 'Reduced manual lead qualification workloads, ensuring every qualified lead receives an instant, intelligent response and booking pathway.',
    keyMetrics: [
      { label: 'Lead Response Time', value: '<2 min' },
      { label: 'Meeting Booking Rate', value: '+44%' },
      { label: 'Manual Screening Work', value: '-90%' }
    ],
    lessons: [
      'Lead response speed is the primary driver of digital sales; replies sent within 5 minutes increase booking rates by 5x.',
      'Always allow sales reps to easily override or pause automated outreach templates.'
    ],
    message: 'Every lead deserves a fast answer.',
    ctaText: 'BUILD MY SALES AUTOMATION ENGINE',
    relatedServiceSlugs: ['ai-automation', 'ai-agent-development', 'ai-chatbot-development'],
    relatedCaseStudyIds: ['ai-receptionist', 'business-analytics-platform']
  },
  {
    id: 'business-analytics-platform',
    title: 'From Spreadsheets to Intelligence',
    metaDescription: 'How we unified fragmented ERP, Excel, and SQL data into a real-time executive dashboard, cutting weekly reporting time by 12 hours.',
    category: 'Data / Analytics / ML',
    challenge: 'A manufacturing firm had operational metrics split across Excel sheets, legacy databases, ERP systems, and cloud tracking tools, preventing management from viewing cohesive profitability data.',
    solution: 'We constructed an ELT (Extract, Load, Transform) data pipeline feeding into an analytical data warehouse, complete with responsive Next.js dashboards showing historical KPIs and predictive demand trends.',
    whatWeBuilt: [
      'Data synchronizer pulling records from CRM, ERP, and databases',
      'Data warehouse mapping unified data schemas',
      'Auto-refreshing dashboard with charts and filters',
      'Anomaly detection block flagging cost overruns',
      'Demand-prediction model anticipating raw material needs'
    ],
    technology: ['PostgreSQL Warehouse', 'FastAPI', 'Next.js / Chart.js', 'Python / Pandas', 'Docker Containerization'],
    businessImpact: 'Unified company data into a secure decision control board, providing predictive analytics to prevent stock bottlenecks and material waste.',
    keyMetrics: [
      { label: 'Time-to-Report Generation', value: 'Instant' },
      { label: 'Inventory Waste Saved', value: '14%' },
      { label: 'Data Latency', value: '<1 hour' }
    ],
    lessons: [
      'Data accuracy starts with schema definition; cleaning historical databases is always the first step to successful business modeling.',
      'A dashboard is only as good as its readability; keep layouts clean and action-oriented.'
    ],
    message: "Don't just report what happened. Understand what happens next.",
    ctaText: 'BUILD MY BUSINESS DASHBOARD',
    relatedServiceSlugs: ['predictive-analytics', 'machine-learning', 'software-development'],
    relatedCaseStudyIds: ['ecommerce-recommendation-engine', 'ai-document-assistant']
  }
];
