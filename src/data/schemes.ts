import { SchemeItem, SchemeCategory } from './types';

export const schemeCategories: Record<'business' | 'health' | 'energy' | 'agriculture', SchemeCategory> = {
  business: {
    slug: 'business',
    name: 'MSME & Business Support',
    title: 'Government Schemes for Businesses in India | SEVA',
    metaTitle: 'Government Schemes for Businesses in India | SEVA Directory',
    metaDescription: 'Discover verified central government credit-linked capital subsidies, collateral-free credit guarantees, and early-stage startup grants including PMEGP, CGTMSE, SISFS, and ZED.',
    h1: 'Government Schemes for Businesses',
    shortDescription: 'Credit-linked capital subsidies, collateral-free credit guarantees up to ₹5 Crore, and startup seed grants for micro, small, and medium enterprises across India.',
    detailedOverview: 'The Government of India, primarily through the Ministry of Micro, Small and Medium Enterprises (MoMSME) and the Department for Promotion of Industry and Internal Trade (DPIIT), operates multiple flagship schemes to empower entrepreneurs, foster domestic manufacturing, and provide debt-free credit backing.',
    keyHighlights: [
      '15% to 35% Capital Subsidies on manufacturing & service units (PMEGP)',
      'Up to ₹5 Crore Collateral-Free Credit Guarantee cover (CGTMSE)',
      'Up to ₹50 Lakhs early-stage seed funding & grants for DPIIT startups (SISFS)',
      'Up to 80% subsidy on international quality and sustainable certification (ZED)'
    ],
    eligibleEntitiesSummary: [
      'Proprietors and individual entrepreneurs (18+ years)',
      'Registered Micro and Small Enterprises with valid Udyam Registration',
      'DPIIT-recognized Startups incorporated under 2 years',
      'Self Help Groups (SHGs) and Producer Co-operatives'
    ],
    schemeIds: ['pmegp', 'cgtmse', 'startup-india-seed-fund', 'zed']
  },
  energy: {
    slug: 'energy',
    name: 'Solar & Renewable Energy',
    title: 'Government Solar & Renewable Energy Subsidy Schemes | SEVA',
    metaTitle: 'Government Solar & Renewable Energy Subsidy Schemes | SEVA Directory',
    metaDescription: 'Explore central and state rooftop solar and agricultural pump subsidies including PM Surya Ghar Muft Bijli Yojana and PM-KUSUM solar water pumps.',
    h1: 'Government Solar & Renewable Energy Schemes',
    shortDescription: 'Direct benefit transfer capital subsidies for residential rooftop solar installations and up to 60% subsidies on agricultural solar water pumps.',
    detailedOverview: 'Under the Ministry of New and Renewable Energy (MNRE), the central government is democratizing clean solar power for Indian households and agricultural communities to slash electricity bills and eliminate agricultural diesel pump dependence.',
    keyHighlights: [
      'Direct DBT subsidy up to ₹78,000 for 3 kW residential rooftop solar (PM Surya Ghar)',
      'Up to 300 units of free monthly electricity via net-metered grid ties',
      'Up to 60% combined Central and State subsidy on standalone solar pumps (PM-KUSUM)',
      'Surplus solar power purchase tariffs paid directly to farmer bank accounts'
    ],
    eligibleEntitiesSummary: [
      'Residential homeowners with grid electricity meters & suitable roof space',
      'Individual farmers with cultivable land and documented water sources',
      'Group Housing Societies (GHS) and Resident Welfare Associations (RWAs)',
      'Farmer Producer Organizations (FPOs) & Primary Agricultural Credit Societies'
    ],
    schemeIds: ['pm-surya-ghar', 'pm-kusum']
  },
  health: {
    slug: 'health',
    name: 'Healthcare & Health Assurance',
    title: 'Government Healthcare & Health Assurance Schemes | SEVA',
    metaTitle: 'Government Healthcare & Health Assurance Schemes | SEVA Directory',
    metaDescription: 'Explore cashless hospitalization schemes in India including Ayushman Bharat PM-JAY and Universal Senior Citizen 70+ health assurance.',
    h1: 'Government Healthcare & Health Assurance Schemes',
    shortDescription: 'Cashless and paperless secondary and tertiary hospitalization cover up to ₹5 Lakhs per family across 29,000+ empanelled public and private hospitals.',
    detailedOverview: 'Administered by the National Health Authority (NHA) under the Ministry of Health and Family Welfare (MoHFW), Ayushman Bharat PM-JAY is the world largest public health insurance initiative, recently expanded to provide universal coverage to all citizens aged 70 and above.',
    keyHighlights: [
      '₹5,00,000 annual cashless hospitalization cover per family (PM-JAY)',
      'Exclusive ₹5,00,000 top-up pool for senior citizens aged 70+ regardless of income',
      '1,949+ medical and surgical procedures covered with zero pre-existing disease waiting periods',
      '100% national portability across all Indian states and empanelled hospital networks'
    ],
    eligibleEntitiesSummary: [
      'Deprived rural and urban households identified via SECC 2011 criteria',
      'Beneficiaries with active NFSA Food Security Ration Cards',
      'All Indian senior citizens aged 70+ verified via Aadhaar (Ayushman Vay Vandana Card)',
      'No caps on family size, gender, or age'
    ],
    schemeIds: ['pm-jay', 'pmjay-senior-70']
  },
  agriculture: {
    slug: 'agriculture',
    name: 'Agriculture & Food Processing',
    title: 'Government Schemes for Agriculture & Farmers | SEVA',
    metaTitle: 'Government Schemes for Agriculture & Farmers | SEVA Directory',
    metaDescription: 'Explore central subsidies for cold storage infrastructure, food processing enterprises, and post-harvest management under MIDH and PMFME.',
    h1: 'Government Schemes for Agriculture & Food Processing',
    shortDescription: '35% to 50% capital subsidies for commercial cold storage infrastructure and 35% subsidies up to ₹10 Lakhs for unorganized micro food processing units.',
    detailedOverview: 'The Ministry of Agriculture & Farmers Welfare and Ministry of Food Processing Industries (MoFPI) provide substantial credit-linked subsidies to reduce post-harvest agricultural wastage, build modern cold chains, and formalize rural micro food enterprises.',
    keyHighlights: [
      '35% to 50% credit-linked capital subsidy on cold storage projects up to ₹3.50 Crore (MIDH)',
      '35% credit-linked subsidy up to ₹10 Lakhs for micro food processing enterprises (PMFME)',
      '₹40,000 seed capital per member for Self Help Groups in food processing',
      'Specialized One District One Product (ODOP) branding, packaging, and testing assistance'
    ],
    eligibleEntitiesSummary: [
      'Individual farmers, Grower Associations, and Farmer Producer Organizations (FPOs)',
      'Micro food processing units operating under One District One Product (ODOP)',
      'Self Help Groups (SHGs) and Producer Co-operatives',
      'Private and public agri-entrepreneurs with long-term land titles'
    ],
    schemeIds: ['midh-cold-chain', 'pmfme']
  }
};

export const schemesData: SchemeItem[] = [
  {
    id: 'pmegp',
    slug: 'pmegp',
    name: 'Prime Minister Employment Generation Programme (PMEGP)',
    shortName: 'PMEGP Subsidy Scheme',
    category: 'business',
    state: 'Central (All India)',
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MoMSME)',
    agency: 'Khadi and Village Industries Commission (KVIC)',
    applicationMode: 'Online e-Portal (kviconline.gov.in)',
    beneficiaryTypes: ['Individual Entrepreneurs (18+)', 'Unemployed Youth', 'Women Entrepreneurs', 'SC / ST / OBC / Minorities', 'Self Help Groups (SHGs)'],
    quickFacts: [
      { label: 'Max Project Cost (Mfg)', value: '₹50 Lakhs' },
      { label: 'Max Project Cost (Service)', value: '₹20 Lakhs' },
      { label: 'Subsidy Range', value: '15% to 35%' },
      { label: 'Own Contribution', value: '5% to 10%' },
      { label: 'Collateral Security', value: 'Zero for loans up to ₹10L' }
    ],
    searchKeywords: ['pmegp', 'kvic', 'prime minister employment generation', 'msme subsidy', 'business loan', 'self employment', 'manufacturing grant', 'women entrepreneur loan'],
    overview: 'The Prime Minister Employment Generation Programme (PMEGP) is a premier credit-linked subsidy initiative launched by the Government of India to generate sustainable self-employment opportunities across manufacturing and service sectors in rural and urban areas.',
    benefit: '15% to 35% Capital Subsidy on project costs up to ₹50 Lakhs for Manufacturing and ₹20 Lakhs for Service units.',
    subsidyTable: [
      { tier: 'General Category (Urban)', subsidy: '15% of Project Cost', details: 'Beneficiary contribution is 10% of project cost; remaining funded via bank term loan.' },
      { tier: 'General Category (Rural)', subsidy: '25% of Project Cost', details: 'Beneficiary contribution is 10% of project cost; higher subsidy to incentivize rural entrepreneurship.' },
      { tier: 'Special Category (Urban - SC/ST/OBC/Women/Ex-Servicemen/Differently Abled)', subsidy: '25% of Project Cost', details: 'Beneficiary contribution reduced to 5% of project cost.' },
      { tier: 'Special Category (Rural - SC/ST/OBC/Women/Ex-Servicemen/Differently Abled)', subsidy: '35% of Project Cost', details: 'Maximum subsidy tier available; beneficiary contribution is only 5%.' }
    ],
    eligibility: [
      'Individuals aged 18 years and above',
      'Minimum 8th standard pass for manufacturing projects costing above ₹10 Lakhs and service projects above ₹5 Lakhs',
      'Self Help Groups (SHGs) not availing benefits under any other central/state scheme',
      'Institutions registered under Societies Registration Act, 1860',
      'Production Co-operative Societies and Charitable Trusts'
    ],
    ineligibility: [
      'Existing units that have already availed government subsidies under PMRY, REGP, or PMEGP',
      'Units engaged in meat, slaughterhouse, intoxicant manufacturing, or tobacco processing',
      'Agricultural activities (farming, crop cultivation), except agro-processing and sericulture',
      'Projects with total cost exceeding ₹50 Lakhs (Manufacturing) or ₹20 Lakhs (Services)'
    ],
    docs: [
      'Aadhaar Card & PAN Card of Applicant',
      'Detailed Project Report (DPR) with cash-flow projections and machinery cost breakdown',
      'Educational Qualification Marksheet (Class 8th / 10th / Degree)',
      'Caste / Special Category Certificate (for SC/ST/OBC/Ex-Servicemen/PH)',
      'Rural Area Certificate from local Tehsildar / Gram Panchayat (if claiming rural subsidy)',
      'EDP (Entrepreneurship Development Programme) Training Certificate (can be completed online after approval)'
    ],
    applicationSteps: [
      { step: 1, title: 'Online Registration on KVIC Portal', instruction: 'Visit the official PMEGP e-Portal (kviconline.gov.in) and click on "Apply Online for PMEGP". Fill in personal, educational, and project details.' },
      { step: 2, title: 'Upload Required Documents & DPR', instruction: 'Upload scanned copies of Aadhaar, PAN, Detailed Project Report, and category certificates in PDF format.' },
      { step: 3, title: 'District Task Force Committee (DLTFC) Review', instruction: 'Your application is scrutinized by the District Level Task Force Committee and forwarded to your chosen financing bank.' },
      { step: 4, title: 'Bank Loan Sanction & EDP Training', instruction: 'The bank assesses project viability, sanctions the term loan and working capital, and disburses funds upon completion of mandatory EDP training.' },
      { step: 5, title: 'Margin Money Subsidy Lock-in', instruction: 'The government subsidy is kept in a separate Term Deposit Receipt (TDR) for 3 years, after which it is adjusted against the loan balance upon successful physical verification.' }
    ],
    officialPortals: [
      { name: 'KVIC PMEGP Official e-Portal', url: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp', description: 'Primary central portal for direct online application submission and status tracking.' },
      { name: 'National myScheme Directory', url: 'https://www.myscheme.gov.in/schemes/pmegp', description: 'Official Government of India portal for verified eligibility discovery and guidelines.' },
      { name: 'Ministry of MSME Official Website', url: 'https://msme.gov.in', description: 'Parent ministry portal detailing policy guidelines and circulars.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'Is collateral security required for a PMEGP loan?',
        answer: 'No collateral security or third-party guarantee is required for PMEGP projects up to ₹10 Lakhs. For projects up to ₹50 Lakhs, units are covered under the CGTMSE credit guarantee scheme without requiring physical asset mortgages.'
      },
      {
        question: 'Can I apply for PMEGP if I already have an existing business?',
        answer: 'PMEGP is primarily for establishing new micro-enterprises. However, existing well-performing PMEGP/REGP/MUDRA units can apply for a 2nd PMEGP loan up to ₹1 Crore for manufacturing (with a 15-20% subsidy) for technology upgradation and expansion.'
      },
      {
        question: 'What is the repayment tenure for a PMEGP bank loan?',
        answer: 'The repayment period ranges between 3 to 7 years, including an initial moratorium period (usually 6 to 12 months) determined by the financing bank based on project cash flows.'
      },
      {
        question: 'Where should I verify the latest PMEGP circulars and application forms?',
        answer: 'Always verify official guidelines directly on the Khadi and Village Industries Commission portal at kviconline.gov.in or the central myScheme portal at myscheme.gov.in.'
      }
    ],
    relatedSchemeIds: ['cgtmse', 'zed', 'pmfme'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'cgtmse',
    slug: 'cgtmse',
    name: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
    shortName: 'CGTMSE Collateral-Free Loan Guarantee',
    category: 'business',
    state: 'Central (All India)',
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MoMSME)',
    agency: 'Small Industries Development Bank of India (SIDBI) & MoMSME',
    applicationMode: 'Through Member Lending Banks & NBFCs',
    beneficiaryTypes: ['Micro & Small Enterprises', 'Startup Founders', 'Women Entrepreneurs', 'Manufacturing & Service Units'],
    quickFacts: [
      { label: 'Max Guarantee Limit', value: '₹5 Crore (₹500 Lakhs)' },
      { label: 'Guarantee Coverage', value: '75% to 85%' },
      { label: 'Collateral Required', value: 'Zero (No Third-Party Guarantee)' },
      { label: 'Eligible Lenders', value: 'PSU Banks, Private Banks, RRBs, NBFCs' },
      { label: 'Mandatory Doc', value: 'Udyam Registration' }
    ],
    searchKeywords: ['cgtmse', 'collateral free loan', 'credit guarantee', 'sidbi', 'msme loan without collateral', 'business credit', 'working capital guarantee', 'msme loan'],
    overview: 'The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) facilitates third-party collateral-free credit from scheduled commercial banks, NBFCs, and financial institutions to new and existing micro and small enterprises by providing credit guarantee cover up to 85%.',
    benefit: 'Collateral-free credit facility up to ₹500 Lakhs (₹5 Crore) with government-backed guarantee cover up to 85% and reduced annual guarantee fees.',
    subsidyTable: [
      { tier: 'Micro Enterprises (Loans up to ₹5 Lakhs)', subsidy: '85% Guarantee Cover', details: 'Designed for early micro units; minimal processing overhead and reduced guarantee fees.' },
      { tier: 'Micro Enterprises (Loans ₹5 Lakhs to ₹50 Lakhs)', subsidy: '75% to 85% Guarantee Cover', details: '85% guarantee cover for Women Entrepreneurs, SC/ST, and units in North-East / Aspirational Districts.' },
      { tier: 'Small Enterprises (Loans ₹50 Lakhs to ₹500 Lakhs)', subsidy: '75% Guarantee Cover', details: 'Enables established MSMEs to access substantial working capital and term loans without pledging commercial real estate.' }
    ],
    eligibility: [
      'New and existing Micro and Small Enterprises engaged in manufacturing or service activities',
      'Valid Udyam Registration Certificate is mandatory',
      'Viable project proposal evaluated and approved by Member Lending Institutions (MLIs)',
      'Educational institutions, training centers, and IT/software service firms are fully eligible'
    ],
    ineligibility: [
      'Medium Enterprises (investment in plant > ₹10 Cr or turnover > ₹50 Cr)',
      'Retail Trade activities exceeding single-borrower exposure limits',
      'Educational institutions that operate on a non-commercial or trust basis without MSME registration',
      'Units with past non-performing asset (NPA) records with existing financial institutions'
    ],
    docs: [
      'Udyam Registration Certificate (Mandatory)',
      'Detailed Project Feasibility Report & Financial Projections (3-5 Years)',
      'Audited Financial Statements & ITR Acknowledgements (Last 2-3 Years for existing units)',
      'KYC Documents of Directors / Partners / Proprietors (Aadhaar & PAN)',
      'Bank Statements of the business account (Last 12 Months)'
    ],
    applicationSteps: [
      { step: 1, title: 'Obtain Udyam Registration', instruction: 'Register your micro or small enterprise on the central Udyam portal (udyamregistration.gov.in) to obtain your unique MSME certificate.' },
      { step: 2, title: 'Prepare Project Business Plan', instruction: 'Compile a comprehensive project feasibility report with realistic revenue forecasts, debt service coverage ratio (DSCR), and machinery quotations.' },
      { step: 3, title: 'Approach Member Lending Institution (MLI)', instruction: 'Apply directly with public sector banks, private scheduled banks, or SIDBI, requesting credit appraisal under the CGTMSE guarantee scheme.' },
      { step: 4, title: 'Bank Credit Appraisal & Guarantee Enrolment', instruction: 'Upon sanctioning the credit limit, the bank directly applies to the CGTMSE trust portal to secure the guarantee cover upon payment of the annual guarantee fee.' },
      { step: 5, title: 'Loan Disbursement', instruction: 'The bank disburses the sanctioned term loan or cash-credit limit directly to the borrower without holding physical asset title deeds.' }
    ],
    officialPortals: [
      { name: 'CGTMSE Official Portal', url: 'https://www.cgtmse.in', description: 'Central Trust portal providing guarantee calculators, eligible lender lists, and policy guidelines.' },
      { name: 'Udyam MSME Registration Portal', url: 'https://udyamregistration.gov.in', description: 'Mandatory government portal for MSME business registration.' },
      { name: 'myScheme National Directory', url: 'https://www.myscheme.gov.in/schemes/cgtmse', description: 'Official Government of India scheme summary and verification guidelines.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'Does the borrower have to apply to CGTMSE directly?',
        answer: 'No. The borrower applies for the loan directly with a bank or NBFC (Member Lending Institution). The lending bank evaluates the project and registers the sanctioned loan with CGTMSE on the borrower behalf.'
      },
      {
        question: 'What is the Annual Guarantee Fee (AGF) charged under CGTMSE?',
        answer: 'The annual guarantee fee ranges between 0.37% to 1.35% of the sanctioned loan amount, depending on the loan size, enterprise category (women/SC/ST receive concessions), and lender risk grading.'
      },
      {
        question: 'Can working capital limits (Cash Credit / Overdraft) be covered under CGTMSE?',
        answer: 'Yes. Both term loans for machinery/infrastructure and non-fund/fund-based working capital facilities (Cash Credit lines) are eligible for CGTMSE guarantee coverage.'
      }
    ],
    relatedSchemeIds: ['pmegp', 'startup-india-seed-fund', 'zed'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'startup-india-seed-fund',
    slug: 'startup-india-seed-fund',
    name: 'Startup India Seed Fund Scheme (SISFS)',
    shortName: 'Startup India Seed Fund (SISFS)',
    category: 'business',
    state: 'Central (All India)',
    ministry: 'Ministry of Commerce and Industry',
    agency: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    applicationMode: 'Online Portal (seedfund.startupindia.gov.in)',
    beneficiaryTypes: ['Early-Stage Startups (<2 Years Old)', 'Tech Innovators', 'DPIIT-Recognized Startups', 'Student & First-Time Founders'],
    quickFacts: [
      { label: 'Prototype Grant (PoC)', value: 'Up to ₹20 Lakhs (Non-dilutive)' },
      { label: 'Commercialization Support', value: 'Up to ₹50 Lakhs (Debt/Convertibles)' },
      { label: 'Max Startup Age', value: '2 Years at Application' },
      { label: 'Promoter Shareholding', value: 'Min 51% Indian Promoters' },
      { label: 'Evaluation Period', value: '30-45 Business Days' }
    ],
    searchKeywords: ['sisfs', 'startup india', 'seed fund', 'dpiit grant', 'prototype grant', 'early stage startup funding', 'incubator grant', 'startup capital'],
    overview: 'The Startup India Seed Fund Scheme (SISFS) provides financial assistance to early-stage DPIIT-recognized startups for proof of concept, prototype development, product trials, market-entry commercialization, and initial operational scaling.',
    benefit: 'Up to ₹20 Lakhs as a non-dilutive grant for Proof of Concept / Prototyping; Up to ₹50 Lakhs via convertible debentures or debt-linked instruments for commercialization.',
    subsidyTable: [
      { tier: 'Proof of Concept (PoC) & Prototype Grant', subsidy: 'Up to ₹20 Lakhs (Grant)', details: '100% milestone-based grant for validation of idea, prototype build, and user trials. Non-dilutive.' },
      { tier: 'Market Entry & Commercialization Support', subsidy: 'Up to ₹50 Lakhs (Debt/Convertibles)', details: 'Disbursed via convertible debentures or debt-linked instruments with up to 10-year tenure to scale go-to-market operations.' }
    ],
    eligibility: [
      'DPIIT-recognized startup incorporated not more than 2 years prior to application date',
      'Must have a viable business idea to develop a product or service with market fit, viable commercialization, and scope of scaling',
      'Should use technology in its core product or service, or business model',
      'Should not have received more than ₹10 Lakhs of monetary support under any other Central or State Government scheme (excluding prize money)',
      'Indian promoters must hold at least 51% shareholding in the startup'
    ],
    ineligibility: [
      'Startups incorporated for more than 2 years at the time of application',
      'Entities operating as standard retail, trading, or franchise units without proprietary technology or scalable innovation',
      'Startups with foreign promoter majority shareholding (>49%)',
      'Startups that have already raised more than ₹10 Lakhs from other government grants'
    ],
    docs: [
      'DPIIT Startup Recognition Certificate',
      'Certificate of Incorporation / MCA Registration',
      'Pitch Deck outlining problem, technical architecture, and market size',
      'Proof of Concept (PoC) outline, wireframes, or working demo link',
      'Company Bank Account details & Founder KYC'
    ],
    applicationSteps: [
      { step: 1, title: 'Obtain DPIIT Recognition', instruction: 'Register your company on the Startup India portal (startupindia.gov.in) and obtain your official DPIIT Recognition Certificate.' },
      { step: 2, title: 'Apply on SISFS Portal', instruction: 'Log in to the SISFS portal (seedfund.startupindia.gov.in) and fill in the online application form with your business model, traction, and funding requirement.' },
      { step: 3, title: 'Select Incubators', instruction: 'Select up to 3 approved partner incubators across India that match your industry domain and geographical preference.' },
      { step: 4, title: 'Incubator Evaluation & Pitch Session', instruction: 'Selected incubators evaluate your application and invite shortlisted founders for a virtual or in-person pitch presentation before their Investment Committee.' },
      { step: 5, title: 'Grant / Seed Fund Disbursement', instruction: 'Upon approval, the incubator enters into a legal agreement and disburses the seed funds in milestone-linked tranches directly into your company bank account.' }
    ],
    officialPortals: [
      { name: 'Startup India Seed Fund Portal', url: 'https://seedfund.startupindia.gov.in', description: 'Central portal to apply for seed funds, select incubators, and monitor application status.' },
      { name: 'Startup India Hub', url: 'https://www.startupindia.gov.in', description: 'Central government hub for DPIIT recognition, tax exemptions, and mentor networks.' },
      { name: 'myScheme SISFS Directory', url: 'https://www.myscheme.gov.in/schemes/sisfs', description: 'National government portal summarizing scheme parameters and guidelines.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'Does DPIIT take equity in the startup under SISFS?',
        answer: 'No. The Government of India and DPIIT take zero equity. The ₹20 Lakhs prototype funding is a 100% non-dilutive grant. Commercialization funds up to ₹50 Lakhs are issued via incubators as debt or convertible debentures.'
      },
      {
        question: 'Can a single founder with an idea apply without a registered company?',
        answer: 'No. You must have a registered Private Limited Company or LLP with DPIIT recognition before you can submit an application on the SISFS portal.'
      },
      {
        question: 'How long does the incubator selection and evaluation process take?',
        answer: 'The evaluation process typically takes 30 to 45 business days from the date of submission, depending on the scheduling of the incubator Investment Committee meetings.'
      }
    ],
    relatedSchemeIds: ['cgtmse', 'zed', 'pmegp'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'zed',
    slug: 'zed',
    name: 'MSME Sustainable (ZED) Certification Scheme',
    shortName: 'MSME ZED Certification Scheme',
    category: 'business',
    state: 'Central (All India)',
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MoMSME)',
    agency: 'Quality Council of India (QCI) & National Productivity Council',
    applicationMode: 'Online Portal (zed.msme.gov.in)',
    beneficiaryTypes: ['Manufacturing Micro Enterprises', 'Manufacturing Small Enterprises', 'Manufacturing Medium Enterprises', 'Women/SC/ST Owned MSMEs'],
    quickFacts: [
      { label: 'Micro Enterprise Subsidy', value: '80% (Up to 90% for Women/SC/ST)' },
      { label: 'Small Enterprise Subsidy', value: '60% of Certification Cost' },
      { label: 'Medium Enterprise Subsidy', value: '50% of Certification Cost' },
      { label: 'Handholding Grant', value: 'Up to ₹5 Lakhs per MSME' },
      { label: 'Certification Validity', value: '3 Years' }
    ],
    searchKeywords: ['zed', 'zero defect zero effect', 'msme certification', 'zed bronze silver gold', 'manufacturing quality subsidy', 'qci', 'udyam subsidy', 'green msme'],
    overview: 'The MSME Sustainable (Zero Defect Zero Effect - ZED) Scheme incentivizes manufacturing micro, small, and medium enterprises to adopt world-class quality manufacturing processes while minimizing environmental impact.',
    benefit: 'Up to 80% subsidy on certification cost across Bronze, Silver, and Gold levels, plus financial support up to ₹5 Lakhs for handholding and ₹3 Lakhs for technology upgradation.',
    subsidyTable: [
      { tier: 'Micro Enterprises', subsidy: '80% Subsidy on Certification', details: 'Plus additional 10% for Women/SC/ST owned units and units in North-Eastern / Himalayan regions (total up to 90%).' },
      { tier: 'Small Enterprises', subsidy: '60% Subsidy on Certification', details: 'Plus additional 10% for special category units.' },
      { tier: 'Medium Enterprises', subsidy: '50% Subsidy on Certification', details: 'Plus additional 10% for special category units.' },
      { tier: 'Handholding & Consulting Assistance', subsidy: 'Up to ₹5,00,000 per MSME', details: 'Direct financial assistance to hire quality and environmental consultants to upgrade factory processes.' }
    ],
    eligibility: [
      'All manufacturing Micro, Small, and Medium Enterprises with valid Udyam Registration',
      'Unit must have an active factory / manufacturing premises in India',
      'Undertaking must complete the initial ZED Zero Defect Zero Effect self-assessment pledge'
    ],
    ineligibility: [
      'Pure service-sector enterprises (ZED is strictly for manufacturing enterprises)',
      'Trading and retail distribution units',
      'Units operating without valid Udyam registration'
    ],
    docs: [
      'Udyam Registration Certificate',
      'Factory / Unit Electricity Bill or Land Ownership / Lease agreement',
      'Self-Assessment Quality & Environmental Checklist',
      'Photographs / Geo-tagged images of manufacturing floor and safety setups',
      'Bank Account details of the enterprise'
    ],
    applicationSteps: [
      { step: 1, title: 'Take ZED Pledge & Register', instruction: 'Visit zed.msme.gov.in, enter your Udyam number, and take the online digital ZED Pledge to receive your provisional pledge certificate.' },
      { step: 2, title: 'Complete Online Self-Assessment', instruction: 'Complete the self-assessment questionnaire across Bronze (5 parameters), Silver (14 parameters), or Gold (20 parameters).' },
      { step: 3, title: 'Desktop / On-site Assessment by QCI', instruction: 'Accredited assessment agencies review your documentation and conduct physical factory verification for Silver/Gold tiers.' },
      { step: 4, title: 'Certification & Subsidy Reimbursement', instruction: 'Upon successful assessment, the official ZED Certificate is issued and the subsidy is credited to your enterprise bank account.' }
    ],
    officialPortals: [
      { name: 'MSME ZED Official Portal', url: 'https://zed.msme.gov.in', description: 'Central portal to take the pledge, upload self-assessment, and track certification.' },
      { name: 'myScheme ZED Directory', url: 'https://www.myscheme.gov.in/schemes/zed', description: 'Official Government of India scheme summary.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'What are the commercial benefits of holding a ZED certificate?',
        answer: 'ZED-certified MSMEs receive concessions on bank loan processing fees (0.5% interest rate discount by major PSU banks), preference in government procurement tenders, and export facilitation assistance.'
      },
      {
        question: 'How long is the ZED certificate valid?',
        answer: 'The ZED certification is valid for a period of 3 years from the date of issue, after which the unit can apply for renewal or upgrade to a higher tier (Bronze → Silver → Gold).'
      }
    ],
    relatedSchemeIds: ['pmegp', 'cgtmse', 'pmfme'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'pm-surya-ghar',
    slug: 'pm-surya-ghar',
    name: 'PM Surya Ghar: Muft Bijli Yojana',
    shortName: 'PM Surya Ghar Solar Rooftop Scheme',
    category: 'energy',
    state: 'Central (All India)',
    ministry: 'Ministry of New and Renewable Energy (MNRE)',
    agency: 'National Solar Rooftop Portal & State DISCOMs',
    applicationMode: 'National Portal (pmsuryaghar.gov.in) & DISCOM',
    beneficiaryTypes: ['Individual Residential Homeowners', 'Group Housing Societies (GHS)', 'Resident Welfare Associations (RWAs)'],
    quickFacts: [
      { label: 'Subsidy for 1 kW', value: '₹30,000 Direct DBT' },
      { label: 'Subsidy for 2 kW', value: '₹60,000 Direct DBT' },
      { label: 'Subsidy for 3 kW+', value: '₹78,000 Flat DBT Cap' },
      { label: 'Free Electricity Goal', value: 'Up to 300 Units / Month' },
      { label: 'Payback Period', value: '2.5 to 3.5 Years' }
    ],
    searchKeywords: ['pm surya ghar', 'muft bijli yojana', 'rooftop solar subsidy', 'solar panel subsidy', 'residential solar', 'mnre solar', 'free electricity solar', 'solar dbt'],
    overview: 'PM Surya Ghar: Muft Bijli Yojana is a flagship national initiative launched by the Government of India with an outlay of ₹75,021 Crore to power 1 Crore residential households across India with rooftop solar installations and provide up to 300 units of free monthly electricity.',
    benefit: 'Direct capital subsidy of ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and higher residential rooftop solar systems deposited directly into the beneficiary bank account.',
    subsidyTable: [
      { tier: '1 kW System', subsidy: '₹30,000 Direct Subsidy', details: 'Suitable for households with monthly consumption up to 150 units. Roof area required: ~100 sq.ft.' },
      { tier: '2 kW System', subsidy: '₹60,000 Direct Subsidy', details: 'Suitable for households consuming 150-300 units per month. Roof area required: ~200 sq.ft.' },
      { tier: '3 kW & Higher Systems', subsidy: '₹78,000 Flat Subsidy', details: 'Maximum central subsidy cap for residential individual houses. Consuming 300+ units monthly.' },
      { tier: 'Group Housing Societies (GHS / RWA)', subsidy: '₹18,000 per kW (up to 500 kW)', details: 'For common area lighting, lifts, and water pumping installations.' }
    ],
    eligibility: [
      'Indian citizens owning a residential house with suitable rooftop space',
      'Valid domestic grid electricity connection in the applicant name',
      'Must not have availed any other central financial assistance (CFA) for the same rooftop space',
      'Must install grid-connected solar panels through DISCOM-empanelled registered vendors'
    ],
    ineligibility: [
      'Commercial, industrial, and institutional buildings (residential only)',
      'Tenants without property owner authorization and dedicated electricity meters',
      'Off-grid standalone solar systems without grid-tie net metering'
    ],
    docs: [
      'Recent Electricity Bill (Consumer Number matching applicant address)',
      'Aadhaar Card of the electricity consumer',
      'Proof of Rooftop Ownership (Property Tax receipt / Sale Deed / Electricity Connection)',
      'Bank Passbook / Cancelled Cheque (for Direct Benefit Transfer subsidy credit)'
    ],
    applicationSteps: [
      { step: 1, title: 'Register on National Solar Portal', instruction: 'Visit pmsuryaghar.gov.in, select your State and DISCOM, enter your Electricity Consumer Account Number and mobile number.' },
      { step: 2, title: 'Submit Feasibility Application', instruction: 'Apply for Rooftop Solar and wait for technical feasibility approval from your local DISCOM.' },
      { step: 3, title: 'Select Empanelled Vendor & Install', instruction: 'Select a registered vendor in your district, sign the installation agreement, and install ALMM-approved solar panels and inverters.' },
      { step: 4, title: 'Net-Meter Installation & Inspection', instruction: 'Vendor applies for net-metering; DISCOM officials inspect the plant and install the bi-directional meter.' },
      { step: 5, title: 'Receive Subsidy via DBT', instruction: 'Submit bank account details and commissioning certificate on the portal; subsidy is credited directly into your bank account within 30 days.' }
    ],
    officialPortals: [
      { name: 'PM Surya Ghar National Portal', url: 'https://pmsuryaghar.gov.in', description: 'Official central portal for household registration, vendor selection, and subsidy tracking.' },
      { name: 'myScheme Surya Ghar Directory', url: 'https://www.myscheme.gov.in/schemes/pmsgy', description: 'National government portal summarizing scheme details.' },
      { name: 'MNRE Official Website', url: 'https://mnre.gov.in', description: 'Ministry of New & Renewable Energy notifications and circulars.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'How much does a 3 kW solar rooftop system cost after government subsidy?',
        answer: 'A standard 3 kW system typically costs around ₹1,45,000 to ₹1,60,000. With the ₹78,000 direct subsidy, the net out-of-pocket cost for the homeowner is approximately ₹67,000 to ₹82,000, which pays for itself in electricity savings within 2.5 to 3 years.'
      },
      {
        question: 'Are collateral-free bank loans available for installing PM Surya Ghar solar systems?',
        answer: 'Yes. Major public and private sector banks (such as SBI, Canara Bank, and PNB) provide collateral-free solar loans at concessional interest rates (~7% per annum) for systems up to 3 kW with zero margin requirement.'
      },
      {
        question: 'What happens to excess electricity generated by the rooftop solar system?',
        answer: 'Excess solar electricity is automatically exported to the power grid through the bidirectional net meter, generating bill credits that offset your nighttime grid consumption or result in cash adjustments.'
      }
    ],
    relatedSchemeIds: ['pm-kusum'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'pm-kusum',
    slug: 'pm-kusum',
    name: 'PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan)',
    shortName: 'PM-KUSUM Solar Agricultural Pumps',
    category: 'energy',
    state: 'Central (All India)',
    ministry: 'Ministry of New and Renewable Energy (MNRE)',
    agency: 'State Renewable Energy Development Agencies & DISCOMs',
    applicationMode: 'State Nodal Agency Portals (HAREDA, UPNEDA, RREC, MSEDCL)',
    beneficiaryTypes: ['Individual Farmers', 'Farmer Producer Organizations (FPOs)', 'Water User Associations (WUAs)', 'Primary Agricultural Credit Societies (PACS)'],
    quickFacts: [
      { label: 'Total Subsidy', value: 'Up to 60% (30% Central + 30% State)' },
      { label: 'Farmer Contribution', value: '10% (30% via Bank Loan)' },
      { label: 'Hilly / NE States Subsidy', value: 'Up to 80% (50% Central + 30% State)' },
      { label: 'Supported Pump Sizes', value: '3 HP, 5 HP, 7.5 HP Solar Pumps' },
      { label: 'Surplus Solar Sale', value: 'Feed-in Tariff paid by DISCOM' }
    ],
    searchKeywords: ['pm kusum', 'kusum solar pump', 'agricultural solar pump', 'solar tube well', 'farmer subsidy', 'solar irrigation', 'diesel pump replacement', 'solar water pump'],
    overview: 'PM-KUSUM de-dieselizes India agricultural sector and provides water and energy security to farmers by subsidizing standalone off-grid solar agricultural pumps and solarizing existing grid-connected agricultural tube wells.',
    benefit: 'Up to 60% total subsidy (30% Central Government + 30% State Government) on solar agricultural pumps, with farmers contributing only 10% and the remaining 30% available via bank loan.',
    subsidyTable: [
      { tier: 'Component B (Standalone Solar Pumps)', subsidy: '60% Total Subsidy', details: '30% Central CFA + 30% State Subsidy for individual farmers in off-grid areas. Pump sizes: 3 HP, 5 HP, 7.5 HP.' },
      { tier: 'Component C (Solarization of Grid Pumps)', subsidy: '60% Total Subsidy', details: 'Solarize existing grid-connected agricultural pumps. Farmers can sell surplus solar power back to DISCOMs at pre-fixed tariffs.' },
      { tier: 'North-East & Himalayan States', subsidy: '80% Total Subsidy', details: '50% Central CFA + 30% State Subsidy in Himachal Pradesh, Uttarakhand, J&K, Ladakh, and NE States.' }
    ],
    eligibility: [
      'Individual farmers owning cultivable agricultural land',
      'Farmer Producer Organizations (FPOs), Water User Associations (WUAs), and Primary Agricultural Credit Societies (PACS)',
      'Must have verified water source (borewell, open well, farm pond)',
      'Applicable for standalone diesel pump replacement or grid pump solarization'
    ],
    ineligibility: [
      'Land without documented agricultural title records',
      'Dark-zone or over-exploited groundwater blocks without Micro-Irrigation (drip/sprinkler) setup',
      'Commercial industrial farming units'
    ],
    docs: [
      'Land Ownership Record (7/12 extract / Khasra / Jamabandi / RoR)',
      'Aadhaar Card of the farmer',
      'Active Bank Account Details (Passbook copy)',
      'Existing Electricity Connection Bill (for Component C grid pump solarization)',
      'Water Source certificate / proof'
    ],
    applicationSteps: [
      { step: 1, title: 'Apply on State Renewable Energy Portal', instruction: 'Visit your respective State Nodal Agency portal (e.g. HAREDA in Haryana, UPNEDA in UP, RREC in Rajasthan, or MSEDCL in Maharashtra) and select PM-KUSUM Component B or C.' },
      { step: 2, title: 'Submit Land Records & Water Details', instruction: 'Enter Aadhaar, land khasra number, pump capacity requirement (3HP / 5HP / 7.5HP), and water depth details.' },
      { step: 3, title: 'Pay 10% Farmer Share', instruction: 'Upon verification of documents, deposit the mandatory 10% beneficiary share through the state nodal agency designated portal.' },
      { step: 4, title: 'Installation & Joint Commissioning', instruction: 'Empanelled vendors install the solar panels, controller, and DC submersible pump; nodal agency conducts joint inspection and issues commissioning certificate.' }
    ],
    officialPortals: [
      { name: 'PM-KUSUM National MNRE Portal', url: 'https://pmkusum.mnre.gov.in', description: 'Central ministry portal detailing guidelines, component guidelines, and state nodal agencies.' },
      { name: 'myScheme PM-KUSUM Directory', url: 'https://www.myscheme.gov.in/schemes/pm-kusum', description: 'Verified national directory overview and eligibility rules.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'Can farmers earn extra income from PM-KUSUM Component C?',
        answer: 'Yes. Under Component C (Feeder Level Solarization), farmers use solar power to irrigate crops during the day and export surplus solar power back to the local DISCOM, receiving tariff payments directly into their bank accounts.'
      },
      {
        question: 'What pump sizes are available under PM-KUSUM Component B?',
        answer: 'Subsidies are provided for standalone solar water pumping systems up to 7.5 HP capacity. Systems higher than 7.5 HP can be installed, but the subsidy is capped at the 7.5 HP rate.'
      }
    ],
    relatedSchemeIds: ['pm-surya-ghar', 'midh-cold-chain'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'pm-jay',
    slug: 'pm-jay',
    name: 'Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    shortName: 'Ayushman Bharat PM-JAY Health Cover',
    category: 'health',
    state: 'Central (All India)',
    ministry: 'Ministry of Health and Family Welfare (MoHFW)',
    agency: 'National Health Authority (NHA)',
    applicationMode: 'Beneficiary Portal (beneficiary.nha.gov.in) & CSC',
    beneficiaryTypes: ['Low-Income Families (SECC 2011)', 'NFSA Ration Card Holders', 'Vulnerable Urban & Rural Households'],
    quickFacts: [
      { label: 'Annual Health Cover', value: '₹5,00,000 per Family / Year' },
      { label: 'Treatment Type', value: '100% Cashless & Paperless' },
      { label: 'Empanelled Hospitals', value: '29,000+ Public & Private' },
      { label: 'Procedures Covered', value: '1,949+ Surgeries & Treatments' },
      { label: 'Pre-Existing Diseases', value: 'Covered from Day 1 (No Waiting Period)' }
    ],
    searchKeywords: ['pm jay', 'pmjay', 'ayushman bharat', 'ayushman card', 'free hospital treatment', 'government health insurance', '5 lakh health cover', 'nha beneficiary', 'cashless hospital'],
    overview: 'Ayushman Bharat PM-JAY is the world largest government-funded health assurance scheme, providing a health cover of ₹5,00,000 per family per year for secondary and tertiary care hospitalization across more than 29,000 empanelled public and private hospitals in India.',
    benefit: '₹5,00,000 annual cashless and paperless hospitalization health cover per family covering over 1,949 medical and surgical procedures with zero pre-existing disease exclusion.',
    subsidyTable: [
      { tier: 'Eligible Rural & Urban Families', subsidy: '₹5,00,000 Annual Health Cover', details: '100% cashless treatment at all empanelled hospitals across India. Covers pre-hospitalization (3 days) and post-hospitalization (15 days) expenses.' },
      { tier: 'Senior Citizens (70+ Years)', subsidy: 'Dedicated ₹5,00,000 Cover', details: 'Universal health coverage tier for all seniors aged 70+ regardless of household income tier (Ayushman Vay Vandana Card).' }
    ],
    eligibility: [
      'Families identified in Socio-Economic Caste Census (SECC 2011) deprivation criteria',
      'Beneficiaries with active NFSA Ration Cards as integrated by state governments',
      'All Indian senior citizens aged 70 years and above (under the expanded AB-PMJAY Universal Senior Citizen tier)',
      'No cap on family size, age, or gender'
    ],
    ineligibility: [
      'Families possessing motorized vehicles, mechanized agricultural equipment, or salaried government employment (for general SECC tier)',
      'Families enrolled in other statutory government health schemes (e.g. CGHS, ECHS) who choose not to switch'
    ],
    docs: [
      'Aadhaar Card (Mandatory for biometric/OTP e-KYC)',
      'Active Ration Card / Family ID document',
      'Active Mobile Number linked with Aadhaar'
    ],
    applicationSteps: [
      { step: 1, title: 'Check Eligibility on Beneficiary Portal', instruction: 'Visit beneficiary.nha.gov.in or download the Ayushman App and enter your mobile number, Aadhaar number, or Ration Card number to verify your family listing.' },
      { step: 2, title: 'Complete e-KYC Verification', instruction: 'Perform instant e-KYC via Aadhaar OTP, facial recognition, or fingerprint biometrics on the portal or at any Common Service Center (CSC).' },
      { step: 3, title: 'Download Ayushman Card (PVC/Digital)', instruction: 'Once e-KYC is approved, download your official Ayushman Card containing your unique ABHA/PMJAY ID number.' },
      { step: 4, title: 'Cashless Hospital Admission', instruction: 'Show your Ayushman Card at the Ayushman Mitra desk at any empanelled public or private hospital across India for 100% cashless hospitalization.' }
    ],
    officialPortals: [
      { name: 'NHA Beneficiary Portal', url: 'https://beneficiary.nha.gov.in', description: 'Official National Health Authority portal to check eligibility, complete e-KYC, and download Ayushman Cards.' },
      { name: 'National Health Authority (NHA) Official Site', url: 'https://nha.gov.in', description: 'Apex central agency governing PM-JAY policy and hospital empanelment.' },
      { name: 'myScheme PM-JAY Directory', url: 'https://www.myscheme.gov.in/schemes/pmjay', description: 'Official Government of India portal for verified scheme details.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'Are pre-existing medical conditions covered under PM-JAY?',
        answer: 'Yes. All pre-existing conditions are covered from day one of enrollment. There is zero waiting period for heart surgeries, oncology, kidney transplants, or orthopedic procedures.'
      },
      {
        question: 'Can an Ayushman Card be used in a different state from where it was issued?',
        answer: 'Yes. Ayushman Bharat PM-JAY features complete national portability. A card issued in Bihar, Uttar Pradesh, or Maharashtra is fully valid for cashless treatment in any empanelled hospital across India.'
      },
      {
        question: 'What expenses are covered during hospitalization?',
        answer: 'The package covers medical examinations, doctor consultations, ICU charges, surgical procedures, medicines, consumables, diagnostic tests, food services, and post-hospitalization follow-up for 15 days.'
      }
    ],
    relatedSchemeIds: ['pmjay-senior-70'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'pmjay-senior-70',
    slug: 'pmjay-senior-70',
    name: 'AB-PMJAY Senior Citizen Universal Healthcare (70+ Years)',
    shortName: 'Ayushman Vay Vandana (70+ Health Cover)',
    category: 'health',
    state: 'Central (All India)',
    ministry: 'Ministry of Health and Family Welfare (MoHFW)',
    agency: 'National Health Authority (NHA)',
    applicationMode: 'Beneficiary Portal (beneficiary.nha.gov.in) & Ayushman App',
    beneficiaryTypes: ['All Indian Citizens Aged 70+ (Universal)', 'Senior Citizens with Private Insurance', 'Senior Citizens in Existing PMJAY Families'],
    quickFacts: [
      { label: 'Annual Health Cover', value: '₹5,00,000 Dedicated Pool' },
      { label: 'Income Limit', value: 'None (Universal Coverage)' },
      { label: 'Eligibility Verification', value: 'Aadhaar Date of Birth (Age 70+)' },
      { label: 'Card Name', value: 'Ayushman Vay Vandana Card' },
      { label: 'Private Insurance Holders', value: 'Eligible to Hold Concurrently' }
    ],
    searchKeywords: ['ayushman vay vandana', 'pmjay senior citizen', 'ayushman 70 plus', '70 year old health cover', 'free senior citizen health insurance', 'nha 70 plus card', 'senior citizen hospital cover'],
    overview: 'The expanded AB-PMJAY Senior Citizen Universal Healthcare scheme provides distinct ₹5,00,000 annual cashless hospitalization coverage to every Indian senior citizen aged 70 years and above, irrespective of their household income, caste, or economic tier.',
    benefit: 'Distinct annual health cover of ₹5,00,000 exclusively for senior citizens aged 70+, which is over and above the existing family PM-JAY cover.',
    subsidyTable: [
      { tier: 'Senior Citizens (70+ Years) in Existing PMJAY Families', subsidy: 'Additional ₹5,00,000 Top-Up Cover', details: 'Seniors receive an exclusive ₹5 Lakhs cover that does not share or deplete the family regular ₹5 Lakhs limit.' },
      { tier: 'Senior Citizens (70+ Years) in Non-PMJAY Families', subsidy: '₹5,00,000 Universal Family Cover', details: 'Open to all middle-class and affluent households. Eligibility is determined solely by age (70+) on Aadhaar.' }
    ],
    eligibility: [
      'All Indian citizens aged 70 years and above',
      'Age is verified strictly on the basis of Date of Birth recorded in the Aadhaar Card database',
      'No income criteria, wealth tax, or pension exclusions',
      'Seniors currently enrolled in private health insurance can hold the Ayushman Vay Vandana Card concurrently'
    ],
    ineligibility: [
      'Individuals below 70 years of age (general PM-JAY SECC criteria applies to those under 70)',
      'Seniors availing CGHS, ECHS, or Railway health schemes must choose between their existing statutory scheme or AB-PMJAY'
    ],
    docs: [
      'Aadhaar Card (Mandatory age and identity document)',
      'Mobile Number linked with Aadhaar (for OTP e-KYC)'
    ],
    applicationSteps: [
      { step: 1, title: 'Visit Beneficiary Portal or Ayushman App', instruction: 'Go to beneficiary.nha.gov.in and select "Senior Citizen 70+ Registration".' },
      { step: 2, title: 'Authenticate via Aadhaar OTP', instruction: 'Enter the senior citizen Aadhaar number and complete OTP authentication sent to the Aadhaar-linked mobile.' },
      { step: 3, title: 'Capture Live Photo / e-KYC', instruction: 'Take a clear live photograph of the senior citizen using the web camera or Ayushman mobile app.' },
      { step: 4, title: 'Instant Ayushman Vay Vandana Card Download', instruction: 'The distinct Ayushman Card for 70+ seniors is generated instantly and can be downloaded as a PDF or printed at a CSC center.' }
    ],
    officialPortals: [
      { name: 'NHA Beneficiary Portal (70+ Section)', url: 'https://beneficiary.nha.gov.in', description: 'Official central portal for instant enrollment and card generation for citizens aged 70 and above.' },
      { name: 'National Health Authority', url: 'https://nha.gov.in', description: 'Central health policy guidelines and hospital lists.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'Can senior citizens with existing private health insurance apply?',
        answer: 'Yes. Seniors with private mediclaim policies can freely enroll for the Ayushman Vay Vandana Card. They can choose to utilize either their private insurance or PM-JAY at the time of hospitalization.'
      },
      {
        question: 'What if two seniors aged 70+ live in the same family?',
        answer: 'Both senior citizens are covered under the distinct ₹5,00,000 senior citizen pool, providing peace of mind and comprehensive hospital assurance.'
      }
    ],
    relatedSchemeIds: ['pm-jay'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'midh-cold-chain',
    slug: 'midh-cold-chain',
    name: 'Mission for Integrated Development of Horticulture (MIDH) – Cold Chain & Storage',
    shortName: 'MIDH Cold Storage & Packhouse Subsidy',
    category: 'agriculture',
    state: 'Central (All India)',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    agency: 'National Horticulture Board (NHB) & State Horticulture Missions',
    applicationMode: 'Online In-Principle Approval (nhb.gov.in) & Bank Term Loan',
    beneficiaryTypes: ['Individual Farmers & Grower Groups', 'Farmer Producer Organizations (FPOs)', 'Agri-Enterprises & Promoters', 'Agricultural Cooperatives & SHGs'],
    quickFacts: [
      { label: 'General Areas Subsidy', value: '35% of Eligible Project Cost' },
      { label: 'Hilly & NE Areas Subsidy', value: '50% of Eligible Project Cost' },
      { label: 'Max Financial Assistance', value: 'Up to ₹3.50 Crore per Unit' },
      { label: 'Subsidy Mechanism', value: 'Credit-Linked Back-Ended (SRF Account)' },
      { label: 'Mandatory Condition', value: 'IPA before starting construction' }
    ],
    searchKeywords: ['midh', 'cold storage subsidy', 'nhb subsidy', 'packhouse subsidy', 'horticulture infrastructure', 'cold chain grant', 'national horticulture board', 'post harvest subsidy'],
    overview: 'The Mission for Integrated Development of Horticulture (MIDH) provides substantial capital subsidies to farmers, FPOs, and private entrepreneurs to establish cold storages, integrated packhouses, ripening chambers, and cold chain transport infrastructure to minimize post-harvest agricultural losses.',
    benefit: '35% to 50% capital investment subsidy on integrated cold chain infrastructure up to ₹3.50 Crore per project via the National Horticulture Board (NHB).',
    subsidyTable: [
      { tier: 'General Areas (Plains)', subsidy: '35% Capital Subsidy', details: 'Credit-linked back-ended subsidy on eligible project cost up to ₹3.50 Crore per cold storage unit.' },
      { tier: 'Hilly & Scheduled Areas (NE, HP, UK, J&K, A&N, Lakshadweep)', subsidy: '50% Capital Subsidy', details: 'Credit-linked back-ended subsidy for cold storages and integrated packhouses established in mountainous terrain.' }
    ],
    eligibility: [
      'Individual Farmers, Grower Associations, and Farmer Producer Organizations (FPOs)',
      'Self Help Groups (SHGs), NGOs, and Cooperatives',
      'Proprietorship / Partnership firms and Private / Public Limited Agri-Enterprises',
      'Must have clear title / long-term registered lease (minimum 15 years) on project land',
      'Project must be funded with a minimum 50% term loan from a commercial / cooperative bank'
    ],
    ineligibility: [
      'Projects that commenced physical construction prior to receiving NHB In-Principle Approval (IPA)',
      'Units without institutional bank term loan financing',
      'Land with encumbrances or unresolved title disputes'
    ],
    docs: [
      'Detailed Techno-Economic Feasibility Report (TEFR) prepared by a chartered engineer',
      'Bank Loan In-Principle Sanction Letter & Appraisal Note',
      'Land Ownership Record (Sale deed / Mutation / Registered 15-year lease)',
      'Building Blueprint & Machinery Quotations from accredited refrigeration manufacturers',
      'Udyam Certificate / Company Incorporation Documents'
    ],
    applicationSteps: [
      { step: 1, title: 'Prepare Bankable Project Report (TEFR)', instruction: 'Engage an accredited agricultural engineer to draft a detailed techno-economic feasibility report.' },
      { step: 2, title: 'Secure Bank Loan In-Principle Sanction', instruction: 'Submit the TEFR to your commercial bank and obtain an in-principle loan sanction letter.' },
      { step: 3, title: 'Online IPA Application on NHB Portal', instruction: 'Submit an online application for In-Principle Approval (IPA) on the National Horticulture Board portal (nhb.gov.in) before starting civil work.' },
      { step: 4, title: 'Joint Inspection & Construction', instruction: 'Upon receiving IPA, construct the cold storage facility according to approved technical standards.' },
      { step: 5, title: 'Subsidy Release to Bank Subsidy Reserve Fund', instruction: 'NHB conducts joint physical inspection and releases the back-ended subsidy into the bank Subsidy Reserve Fund (SRF) account to reduce your loan principal.' }
    ],
    officialPortals: [
      { name: 'National Horticulture Board (NHB) Portal', url: 'https://www.nhb.gov.in', description: 'Central portal to apply for NHB IPA, view cost norms, and track subsidy status.' },
      { name: 'MIDH Scheme Official Portal', url: 'https://midh.gov.in', description: 'Central ministry mission portal.' },
      { name: 'myScheme MIDH Directory', url: 'https://www.myscheme.gov.in/schemes/midh', description: 'Official Government of India summary.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'What is meant by a credit-linked back-ended subsidy in MIDH?',
        answer: 'The subsidy amount is not given as cash upfront. Instead, the National Horticulture Board disburses the approved subsidy into a Subsidy Reserve Fund (SRF) account at your financing bank. No interest is charged on the subsidy portion, and it is adjusted against the loan balance upon successful project completion.'
      },
      {
        question: 'What is the minimum capacity for a cold storage project under NHB?',
        answer: 'Standard cold storage projects typically have a minimum capacity of 2,000 Metric Tonnes (MT) up to a maximum subsidized capacity of 5,000 MT per beneficiary.'
      }
    ],
    relatedSchemeIds: ['pmfme', 'pm-kusum'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  },
  {
    id: 'pmfme',
    slug: 'pmfme',
    name: 'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
    shortName: 'PMFME Micro Food Processing Scheme',
    category: 'agriculture',
    state: 'Central (All India)',
    ministry: 'Ministry of Food Processing Industries (MoFPI)',
    agency: 'State Nodal Agencies (SNA) & National Institute of Food Technology (NIFTEM)',
    applicationMode: 'National MIS Portal (pmfme.mofpi.gov.in) & DRP Support',
    beneficiaryTypes: ['Existing Micro Food Processors', 'SHG Members in Food Processing', 'Farmer Producer Organizations (FPOs)', 'Producer Cooperatives', 'ODOP Commodity Units'],
    quickFacts: [
      { label: 'Capital Subsidy Rate', value: '35% of Eligible Project Cost' },
      { label: 'Max Subsidy Ceiling', value: '₹10,00,000 (₹10 Lakhs)' },
      { label: 'SHG Seed Capital', value: '₹40,000 per Member' },
      { label: 'Handholding Support', value: 'Free assistance by District Resource Persons' },
      { label: 'Focus Framework', value: 'One District One Product (ODOP)' }
    ],
    searchKeywords: ['pmfme', 'micro food processing subsidy', 'odop scheme', 'food processing grant', 'mofpi subsidy', 'shg seed capital', 'one district one product', 'flour mill subsidy', 'oil mill subsidy'],
    overview: 'The PM Formalisation of Micro Food Processing Enterprises (PMFME) scheme provides financial, technical, and business support for the upgradation of existing unorganized micro food processing units and the creation of common infrastructure under the One District One Product (ODOP) framework.',
    benefit: 'Credit-linked capital subsidy of 35% of eligible project costs with a maximum ceiling of ₹10 Lakhs per micro enterprise, plus seed capital of ₹40,000 per SHG member.',
    subsidyTable: [
      { tier: 'Individual Micro Food Processing Units', subsidy: '35% Credit-Linked Subsidy', details: 'Maximum subsidy ceiling of ₹10,00,000 per unit. Beneficiary contributes 10% min, remaining funded via bank term loan.' },
      { tier: 'Farmer Producer Organizations (FPOs) & Cooperatives', subsidy: '35% Capital Subsidy', details: 'For establishing common processing facilities, sorting/grading lines, and testing laboratories.' },
      { tier: 'Self Help Group (SHG) Seed Capital', subsidy: '₹40,000 per Member', details: 'Working capital and small tool purchases for SHG members engaged in food processing.' }
    ],
    eligibility: [
      'Existing individual micro food processing enterprises with operations',
      'New units involved in One District One Product (ODOP) crops/commodities',
      'Farmer Producer Organizations (FPOs), Producer Cooperatives, and Self Help Groups (SHGs)',
      'Enterprise must possess valid Udyam and FSSAI basic registration'
    ],
    ineligibility: [
      'Large and Medium scale food processing units',
      'Units operating without statutory food safety (FSSAI) compliance',
      'Non-food manufacturing activities'
    ],
    docs: [
      'Aadhaar Card and PAN Card of Promoters',
      'Udyam Registration Certificate',
      'FSSAI Food License or Basic Registration',
      'Bank Statement (Last 6 Months)',
      'Quotation for food processing machinery and equipment from certified vendors',
      'Brief Project Report with cost-benefit analysis'
    ],
    applicationSteps: [
      { step: 1, title: 'Register on National PMFME MIS Portal', instruction: 'Visit pmfme.mofpi.gov.in and click on "Apply for Individual Enterprise Upgradation".' },
      { step: 2, title: 'Select ODOP Product & District', instruction: 'Choose your district One District One Product (ODOP) category and enter existing turnover and proposed machinery details.' },
      { step: 3, title: 'Assistance by District Resource Person (DRP)', instruction: 'A certified District Resource Person (DRP) assists you free of cost in preparing your bankable DPR and FSSAI registration.' },
      { step: 4, title: 'Bank Loan Sanction & Subsidy Credit', instruction: 'The bank sanctions the term loan and the 35% subsidy is transferred into your bank Subsidy Reserve Fund account.' }
    ],
    officialPortals: [
      { name: 'PMFME National MIS Portal', url: 'https://pmfme.mofpi.gov.in', description: 'Central portal to apply for individual subsidies, seed capital, and DRP assistance.' },
      { name: 'Ministry of Food Processing Industries (MoFPI)', url: 'https://mofpi.gov.in', description: 'Parent ministry portal detailing ODOP district lists and guidelines.' },
      { name: 'myScheme PMFME Directory', url: 'https://www.myscheme.gov.in/schemes/pmfme', description: 'Official Government of India portal summary.' }
    ],
    lastVerifiedDate: 'March 2026',
    lastReviewedIso: '2026-03-01',
    faqs: [
      {
        question: 'What is the One District One Product (ODOP) approach in PMFME?',
        answer: 'Under ODOP, each district across India specializes in a specific agricultural or processed food commodity (such as Mango processing in Ratnagiri or Mustard Oil in Rajasthan). Units processing the designated ODOP commodity receive priority approval and branding assistance.'
      },
      {
        question: 'Do applicants have to pay fees for District Resource Person (DRP) support?',
        answer: 'No. Handholding support by certified District Resource Persons (DRPs) for preparing Detailed Project Reports and securing bank loans is fully funded by the Ministry and is completely free for entrepreneurs.'
      }
    ],
    relatedSchemeIds: ['pmegp', 'midh-cold-chain', 'zed'],
    disclaimer: 'SEVA is an independent information directory and is not affiliated with or operated by the Government of India or any government department. Scheme eligibility, benefits, deadlines and application requirements may change. Always verify information through the relevant official government source before applying.'
  }
];

export const getSchemeById = (id: string): SchemeItem | undefined => {
  return schemesData.find(s => s.id === id || s.slug === id);
};

export const getCategoryBySlug = (slug: string): SchemeCategory | undefined => {
  if (slug === 'business' || slug === 'health' || slug === 'energy' || slug === 'agriculture') {
    return schemeCategories[slug];
  }
  return undefined;
};

export const getSchemesByCategory = (category: SchemeItem['category']): SchemeItem[] => {
  return schemesData.filter(s => s.category === category);
};
