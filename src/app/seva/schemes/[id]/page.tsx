import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { schemesData, schemeCategories, getSchemeById, getCategoryBySlug, getSchemesByCategory } from '@/data/schemes';
import SevaHeader from '@/components/SevaHeader';
import { 
  ArrowRight,
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  Calendar, 
  HelpCircle, 
  ChevronRight, 
  FileText, 
  Building2,
  AlertCircle,
  Layers,
  Users,
  Info,
  CheckSquare
} from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const schemeParams = schemesData.map((sc) => ({
    id: sc.slug,
  }));
  const categoryParams = Object.keys(schemeCategories).map((catKey) => ({
    id: catKey,
  }));

  return [...schemeParams, ...categoryParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  
  // 1. Check if ID matches a Category
  const category = getCategoryBySlug(id);
  if (category) {
    const canonicalUrl = `https://seva.sochyeah.com/schemes/${category.slug}`;
    return {
      title: {
        absolute: category.metaTitle,
      },
      description: category.metaDescription,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: category.title,
        description: category.metaDescription,
        url: canonicalUrl,
        siteName: 'SEVA Directory',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: category.title,
        description: category.metaDescription,
      }
    };
  }

  // 2. Check if ID matches a Scheme
  const sc = getSchemeById(id);
  if (!sc) {
    return {
      title: {
        absolute: 'Government Scheme Not Found | SEVA',
      },
    };
  }

  const canonicalUrl = `https://seva.sochyeah.com/schemes/${sc.slug}`;
  const seoTitle = `${sc.shortName || sc.name}: Eligibility, Benefits & How to Apply | SEVA`;
  const seoDescription = `Learn about the ${sc.name}, including eligibility, benefits, subsidy details, required documents and how to apply through official resources.`;

  return {
    title: {
      absolute: seoTitle,
    },
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${sc.name}: Eligibility, Benefits & How to Apply`,
      description: seoDescription,
      url: canonicalUrl,
      siteName: 'SEVA Directory',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sc.name}: Eligibility & How to Apply`,
      description: seoDescription,
    }
  };
}

export default async function SchemeOrCategoryPage({ params }: PageProps) {
  const { id } = await params;

  // Render Category Page if slug matches a category
  const category = getCategoryBySlug(id);
  if (category) {
    const categorySchemes = getSchemesByCategory(category.slug);
    
    const categoryJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `https://seva.sochyeah.com/schemes/${category.slug}#webpage`,
          'url': `https://seva.sochyeah.com/schemes/${category.slug}`,
          'name': category.title,
          'description': category.metaDescription,
          'isPartOf': {
            '@type': 'WebSite',
            'url': 'https://seva.sochyeah.com/'
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `https://seva.sochyeah.com/schemes/${category.slug}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://seva.sochyeah.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Government Schemes',
              'item': 'https://seva.sochyeah.com/#schemes-directory'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': category.name,
              'item': `https://seva.sochyeah.com/schemes/${category.slug}`
            }
          ]
        }
      ]
    };

    return (
      <div className="bg-[#fafafc] min-h-screen text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
        />
        <SevaHeader />

        <main className="max-w-[1080px] mx-auto px-6 pt-28 md:pt-32 pb-16 md:pb-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <li>
                <Link href="/" className="hover:text-indigo-900 transition-colors">Home</Link>
              </li>
              <ChevronRight size={12} className="text-slate-400" />
              <li>
                <Link href="/#schemes-directory" className="hover:text-indigo-900 transition-colors">Government Schemes</Link>
              </li>
              <ChevronRight size={12} className="text-slate-400" />
              <li className="text-slate-900 font-semibold truncate" aria-current="page">
                {category.name}
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="flex flex-col gap-4 mb-10 border-b border-indigo-100/80 pb-8">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60 flex items-center gap-1.5">
                <Layers size={12} /> WELFARE DOMAIN CATEGORY
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {category.h1}
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-[850px]">
              {category.detailedOverview}
            </p>
          </div>

          {/* Independent Notice */}
          <div className="mb-12 border border-amber-200/80 bg-amber-50/40 rounded-2xl p-5 md:p-6 flex items-start gap-4 text-xs text-amber-950 shadow-xs">
            <AlertCircle size={20} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="font-bold uppercase tracking-wider text-[10px] text-amber-800 font-mono">
                Independent Directory Notice
              </span>
              <p className="leading-relaxed">
                SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.
              </p>
            </div>
          </div>

          {/* Key Highlights & Eligible Entities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="bg-white border border-indigo-100/80 rounded-2xl p-6 md:p-8 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckSquare size={16} className="text-indigo-600" />
                <span>Key Subsidy &amp; Assistance Highlights</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {category.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                    <span className="text-indigo-600 font-bold mt-0.5">●</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-indigo-100/80 rounded-2xl p-6 md:p-8 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users size={16} className="text-emerald-600" />
                <span>Eligible Beneficiaries Overview</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {category.eligibleEntitiesSummary.map((ent, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{ent}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Schemes in this category */}
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-6">
              Verified Schemes in this Category ({categorySchemes.length})
            </h2>

            <div className="flex flex-col gap-6">
              {categorySchemes.map((sc) => (
                <article
                  key={sc.id}
                  className="border border-indigo-100/80 bg-white rounded-2xl p-6 md:p-8 shadow-xs hover:border-indigo-300 transition-all card-hover-effect flex flex-col md:flex-row justify-between gap-6"
                >
                  <div className="flex-[3] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block mb-1">
                        {sc.ministry}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        <Link href={`/schemes/${sc.slug}`} className="hover:text-indigo-900 transition-colors">
                          {sc.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {sc.overview}
                      </p>
                      <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 text-xs mb-4">
                        <span className="font-mono text-[9px] uppercase font-bold text-indigo-900 block mb-1">Financial Benefit</span>
                        <span className="text-slate-900 font-semibold">{sc.benefit}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/schemes/${sc.slug}`}
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-900 to-indigo-900 text-white px-5 py-2.5 rounded-full shadow-xs hover:opacity-95 transition-all"
                      >
                        <span>View full scheme guide and eligibility requirements</span>
                        <ArrowRight size={13} className="ml-1.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex-[2] bg-gradient-to-br from-purple-50/20 via-indigo-50/20 to-blue-50/25 border border-indigo-100/60 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-indigo-800 uppercase tracking-wider block mb-3">
                        Target Beneficiaries
                      </span>
                      <ul className="flex flex-col gap-2 mb-6">
                        {sc.beneficiaryTypes.slice(0, 3).map((el, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-relaxed">
                            <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-[10px] font-mono text-slate-400 border-t border-indigo-100/60 pt-3 flex justify-between items-center">
                      <span>Information last reviewed:</span>
                      <span className="text-slate-700 font-semibold">{sc.lastVerifiedDate}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Return link */}
          <div className="pt-6 border-t border-indigo-100/70">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-indigo-700"
            >
              <span>← Back to all government schemes directory</span>
            </Link>
          </div>
        </main>

        <footer className="border-t border-indigo-100/70 bg-white py-8 px-6 text-center text-xs text-slate-400">
          <p>© 2026 SEVA Public Information Portal. Independent public directory of Government of India schemes.</p>
        </footer>
      </div>
    );
  }

  // Render Scheme Detail Page
  const sc = getSchemeById(id);
  if (!sc) {
    notFound();
  }

  const relatedSchemes = schemesData.filter(s => sc.relatedSchemeIds.includes(s.id) && s.id !== sc.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GovernmentService',
        '@id': `https://seva.sochyeah.com/schemes/${sc.slug}#service`,
        'name': sc.name,
        'alternateName': sc.shortName,
        'description': sc.overview,
        'serviceType': sc.category,
        'serviceOperator': {
          '@type': 'GovernmentOrganization',
          'name': sc.ministry
        },
        'areaServed': 'India',
        'provider': {
          '@type': 'GovernmentOrganization',
          'name': sc.agency
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://seva.sochyeah.com/schemes/${sc.slug}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://seva.sochyeah.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Government Schemes',
            'item': 'https://seva.sochyeah.com/#schemes-directory'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': `${sc.category.charAt(0).toUpperCase() + sc.category.slice(1)} Schemes`,
            'item': `https://seva.sochyeah.com/schemes/${sc.category}`
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': sc.shortName,
            'item': `https://seva.sochyeah.com/schemes/${sc.slug}`
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `https://seva.sochyeah.com/schemes/${sc.slug}#faq`,
        'mainEntity': sc.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-[#fafafc] min-h-screen text-slate-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SevaHeader />

      <main className="max-w-[1080px] mx-auto px-6 pt-28 md:pt-32 pb-16 md:pb-24">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <li>
              <Link href="/" className="hover:text-indigo-900 transition-colors">Home</Link>
            </li>
            <ChevronRight size={12} className="text-slate-400" />
            <li>
              <Link href="/#schemes-directory" className="hover:text-indigo-900 transition-colors">Government Schemes</Link>
            </li>
            <ChevronRight size={12} className="text-slate-400" />
            <li>
              <Link href={`/schemes/${sc.category}`} className="hover:text-indigo-900 transition-colors capitalize">
                {sc.category} Schemes
              </Link>
            </li>
            <ChevronRight size={12} className="text-slate-400" />
            <li className="text-slate-900 font-semibold truncate" aria-current="page">
              {sc.shortName}
            </li>
          </ol>
        </nav>

        {/* 2. Scheme Hero Header with Primary H1 */}
        <div className="flex flex-col gap-4 mb-8 border-b border-indigo-100/80 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <Link 
              href={`/schemes/${sc.category}`}
              className="text-[10px] font-mono font-bold tracking-widest uppercase text-indigo-900 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60 hover:bg-indigo-100 transition-colors"
            >
              {sc.category} {'//'} SCHEME GUIDE
            </Link>
            <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
              <Calendar size={12} /> Information last reviewed: <strong className="text-slate-800 font-semibold">{sc.lastVerifiedDate}</strong>
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {sc.name}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium pt-1">
            <span className="flex items-center gap-1.5 bg-slate-100/80 px-3 py-1 rounded-md">
              <Building2 size={13} className="text-slate-600" />
              <span>Ministry: {sc.ministry}</span>
            </span>
            <span className="bg-slate-100/80 px-3 py-1 rounded-md">
              Agency: {sc.agency}
            </span>
            <span className="bg-indigo-50 text-indigo-900 font-semibold px-3 py-1 rounded-md">
              Mode: {sc.applicationMode}
            </span>
          </div>
        </div>

        {/* 3. Quick Facts & Target Beneficiaries Grid (SEVA 2.0 Feature) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Quick Facts */}
          <div className="md:col-span-2 bg-white border border-indigo-100/80 rounded-2xl p-6 shadow-xs">
            <h2 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Info size={14} /> Quick Scheme Parameters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sc.quickFacts.map((fact, idx) => (
                <div key={idx} className="bg-slate-50/70 border border-slate-200/60 rounded-xl p-3">
                  <span className="text-[9px] font-mono uppercase text-slate-500 font-bold block mb-1">{fact.label}</span>
                  <span className="text-xs font-bold text-slate-900">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Beneficiaries */}
          <div className="bg-gradient-to-br from-purple-50/30 via-indigo-50/30 to-blue-50/35 border border-indigo-100/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Users size={14} /> Who is this scheme for?
              </h2>
              <ul className="flex flex-col gap-2">
                {sc.beneficiaryTypes.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <span className="text-indigo-600 font-bold mt-0.5">●</span>
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-[10px] font-mono text-slate-500 pt-3 border-t border-indigo-100/60 mt-4">
              Territory: <strong>{sc.state || 'All India'}</strong>
            </div>
          </div>
        </div>

        {/* 4. Mandatory Independent Disclaimer */}
        <div className="mb-12 border border-amber-200/80 bg-amber-50/40 rounded-2xl p-5 md:p-6 flex items-start gap-4 text-xs text-amber-950 shadow-xs">
          <AlertCircle size={20} className="text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-bold uppercase tracking-wider text-[10px] text-amber-800 font-mono">
              Independent Directory Notice
            </span>
            <p className="leading-relaxed">
              {sc.disclaimer}
            </p>
          </div>
        </div>

        {/* 5. Overview Section */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="text-indigo-800 font-mono text-xs">01 {'//'}</span> What is {sc.shortName}? (Overview)
          </h2>
          <div className="bg-white border border-indigo-100/80 rounded-2xl p-6 md:p-8 shadow-xs">
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
              {sc.overview}
            </p>
          </div>
        </section>

        {/* 6. Eligibility & Ineligibility (Side-by-Side) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Eligibility */}
          <div className="bg-white border border-emerald-100/90 rounded-2xl p-6 md:p-8 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Who Can Apply &amp; Eligibility Requirements</span>
            </h2>
            <ul className="flex flex-col gap-3">
              {sc.eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ineligibility */}
          <div className="bg-white border border-rose-100/90 rounded-2xl p-6 md:p-8 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <XCircle size={16} className="text-rose-600" />
              <span>Who is NOT Eligible?</span>
            </h2>
            <ul className="flex flex-col gap-3">
              {sc.ineligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                  <span className="text-rose-500 font-bold mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Financial Assistance & Subsidy Table */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="text-indigo-800 font-mono text-xs">02 {'//'}</span> Benefits &amp; Financial Assistance / Subsidy Structure
          </h2>
          <div className="bg-white border border-indigo-100/80 rounded-2xl p-6 md:p-8 shadow-xs">
            <div className="bg-gradient-to-r from-purple-50/40 via-indigo-50/40 to-blue-50/40 border border-indigo-100/60 rounded-xl p-4 mb-6">
              <span className="text-[10px] font-mono font-bold text-indigo-800 uppercase block mb-1">Financial Benefit Summary</span>
              <p className="text-sm font-bold text-indigo-950 leading-relaxed">{sc.benefit}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-indigo-100 text-[10px] font-mono uppercase text-slate-400">
                    <th className="pb-3 pr-4 font-bold">Beneficiary / Project Tier</th>
                    <th className="pb-3 pr-4 font-bold">Government Subsidy / Cover</th>
                    <th className="pb-3 font-bold">Key Terms &amp; Conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-50">
                  {sc.subsidyTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 pr-4 font-bold text-slate-900 align-top">{row.tier}</td>
                      <td className="py-3.5 pr-4 text-indigo-900 font-semibold align-top">{row.subsidy}</td>
                      <td className="py-3.5 text-slate-600 leading-relaxed align-top">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. Required Documents Checklist */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="text-indigo-800 font-mono text-xs">03 {'//'}</span> Required Documents Checklist
          </h2>
          <div className="bg-white border border-indigo-100/80 rounded-2xl p-6 md:p-8 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {sc.docs.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/60 border border-slate-200/60 text-xs text-slate-700 font-medium">
                  <FileText size={14} className="text-indigo-600 flex-shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Step-by-Step Application Process */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="text-indigo-800 font-mono text-xs">04 {'//'}</span> How to Apply (Step-by-Step Application Process)
          </h2>
          <div className="flex flex-col gap-4">
            {sc.applicationSteps.map((step) => (
              <div key={step.step} className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-900 to-indigo-900 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  {step.step}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.instruction}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Official Government Sources & Application Portals with Descriptive Anchors */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="text-indigo-800 font-mono text-xs">05 {'//'}</span> Official Government Sources &amp; Application Portals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sc.officialPortals.map((portal, idx) => (
              <a
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs hover:border-indigo-300 transition-all card-hover-effect flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                      {portal.name}
                    </h3>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-indigo-900" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {portal.description}
                  </p>
                </div>
                <div className="inline-flex items-center text-xs font-bold text-indigo-900 group-hover:text-indigo-700 pt-2 border-t border-slate-50">
                  <span>Visit the official {portal.name} portal →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 11. Frequently Asked Questions */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="text-indigo-800 font-mono text-xs">06 {'//'}</span> Frequently Asked Questions About {sc.shortName}
          </h2>
          <div className="flex flex-col gap-4">
            {sc.faqs.map((faq, idx) => (
              <div key={idx} className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle size={15} className="text-indigo-600 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 12. Related Government Schemes (Contextual Internal Linking) */}
        {relatedSchemes.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-indigo-800 font-mono text-xs">07 {'//'}</span> Related Government Schemes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedSchemes.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/schemes/${rel.slug}`}
                  className="border border-indigo-100/80 bg-white rounded-2xl p-6 shadow-xs hover:border-indigo-300 transition-all card-hover-effect flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block mb-1">{rel.ministry}</span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-900 transition-colors mb-2">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {rel.overview}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-xs font-bold text-indigo-900 group-hover:text-indigo-700">
                    <span>View full scheme guide and eligibility requirements</span>
                    <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 13. Support Advisory Banner */}
        <section className="bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-indigo-950/15 relative overflow-hidden">
          <div className="max-w-[500px] mx-auto flex flex-col gap-4 items-center relative z-10">
            <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-white">Need Help With DPRs &amp; Technical Projects?</h3>
            <p className="text-xs text-indigo-200 leading-relaxed">
              We help industrial units and businesses compile Detailed Project Reports, audit automation feasibility, and structure technical infrastructure.
            </p>
            <a 
              href="https://www.sochyeah.com/contact" 
              className="text-xs font-bold uppercase tracking-wider bg-white text-indigo-950 hover:bg-indigo-50 transition-all px-8 py-3.5 rounded-full shadow-md hover:scale-[1.02] mt-2 inline-block"
            >
              Contact Systems Advisors
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-indigo-100/70 bg-white py-8 px-6 text-center text-xs text-slate-400">
        <p>© 2026 SEVA Public Information Portal. Independent public directory of Government of India schemes.</p>
      </footer>
    </div>
  );
}
