export interface ServiceProcess {
  step: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  valueProp: string;
  icon: string;
  category: 'design-dev' | 'marketing-growth' | 'content-production';
  deliverables: string[];
  process: ServiceProcess[];
  faqs: ServiceFAQ[];
  portfolioTags: string[];
}

export const services: Service[] = [
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    shortDescription: 'Fast, conversion-focused websites built to rank and convert.',
    valueProp: 'We build websites that load in under 2 seconds and turn visitors into paying customers.',
    icon: 'CodeBracketIcon',
    category: 'design-dev',
    deliverables: [
      'Custom UI/UX design (Figma)',
      'Responsive Next.js or Webflow build',
      'CMS integration (Sanity, Contentful, or WordPress)',
      'On-page SEO foundation',
      'Performance optimization (Core Web Vitals)',
      'Analytics setup (GA4 + heatmaps)',
      '30-day post-launch support',
    ],
    process: [
      { step: 'Discovery', description: 'Stakeholder interviews, competitor audit, sitemap and user-flow planning.' },
      { step: 'Design', description: 'Wireframes, high-fidelity Figma mockups, interactive prototype sign-off.' },
      { step: 'Development', description: 'Component-driven build in Next.js, full responsive QA across devices.' },
      { step: 'Launch', description: 'Staging review, DNS cutover, post-launch monitoring and bug fixes.' },
    ],
    faqs: [
      { question: 'How long does a website project take?', answer: 'Most sites take 6–10 weeks from kickoff to launch, depending on scope and feedback turnaround.' },
      { question: 'Do you offer ongoing maintenance?', answer: 'Yes, monthly retainers cover updates, security patches, performance monitoring, and content changes.' },
      { question: 'Can you redesign an existing site?', answer: 'Absolutely. We audit your current site, preserve SEO equity, and rebuild on a modern stack.' },
    ],
    portfolioTags: ['web', 'design'],
  },
  {
    slug: 'app-design-development',
    title: 'App Design & Development',
    shortDescription: 'Native-quality iOS and Android apps with intuitive UX.',
    valueProp: 'Ship polished mobile apps that users actually love, on both platforms, on schedule.',
    icon: 'DevicePhoneMobileIcon',
    category: 'design-dev',
    deliverables: [
      'Product scoping and feature prioritization',
      'UX research and user flow mapping',
      'High-fidelity UI design (Figma)',
      'React Native or Flutter development',
      'Backend API integration',
      'App Store and Google Play submission',
      '60-day post-launch support',
    ],
    process: [
      { step: 'Scoping', description: 'Feature list, tech stack selection, timeline and milestone planning.' },
      { step: 'Design', description: 'User flows, interactive prototypes, and platform-native UI patterns.' },
      { step: 'Build', description: 'Sprint-based development with weekly demos and stakeholder check-ins.' },
      { step: 'Deploy', description: 'Store submission, beta testing, crash monitoring setup.' },
    ],
    faqs: [
      { question: 'Do you build for both iOS and Android?', answer: 'Yes. We use React Native or Flutter to ship to both platforms from a single codebase, reducing cost and timeline.' },
      { question: 'What if I only need an MVP?', answer: 'We offer a focused MVP package with core features only, shipped in 8–12 weeks, ready for real user feedback.' },
      { question: 'Can you take over an existing app?', answer: 'Yes. We conduct a code audit first, then scope a handover and improvement plan.' },
    ],
    portfolioTags: ['app', 'design'],
  },
  {
    slug: 'graphic-designing',
    title: 'Graphic Designing',
    shortDescription: 'Brand identities and visuals that make your business look unforgettable.',
    valueProp: 'Scroll-stopping, on-brand design for every touchpoint, from logo to launch campaign, delivered in days, not weeks.',
    icon: 'PaintBrushIcon',
    category: 'design-dev',
    deliverables: [
      'Logo design and brand identity system',
      'Brand guidelines (colors, typography, usage rules)',
      'Social media post and story templates',
      'Marketing collateral (brochures, flyers, pitch decks)',
      'Ad creatives and banner sets',
      'Packaging and label design',
      'Print-ready and web-optimized source files',
      'Up to 3 revision rounds per project',
    ],
    process: [
      { step: 'Brief', description: 'Understand your brand, audience, competitors, and the goals for each design.' },
      { step: 'Concepts', description: 'Moodboards and 2–3 initial design directions for you to react to.' },
      { step: 'Refine', description: 'Up to 3 rounds of feedback and polish on your chosen direction.' },
      { step: 'Delivery', description: 'Final files in all required formats (AI, PSD, PDF, PNG, SVG) plus a usage guide.' },
    ],
    faqs: [
      { question: 'How long does a logo or brand identity take?', answer: 'A logo typically takes 1–2 weeks. A full brand identity with guidelines takes 3–4 weeks, depending on feedback turnaround.' },
      { question: 'Do I own the final designs?', answer: 'Yes. Once the project is paid in full, you receive full ownership and all source files.' },
      { question: 'Can you design on an ongoing monthly basis?', answer: 'Yes, our design retainers cover a fixed number of social posts, ads, and collateral pieces each month at a predictable cost.' },
    ],
    portfolioTags: ['graphic', 'branding', 'design'],
  },
  {
    slug: 'seo',
    title: 'SEO',
    shortDescription: 'Rank higher, get found faster, and own your category on Google.',
    valueProp: 'Data-driven SEO that moves rankings within 90 days and compounds over time.',
    icon: 'MagnifyingGlassIcon',
    category: 'marketing-growth',
    deliverables: [
      'Technical SEO audit and fix list',
      'Keyword research and content strategy',
      'On-page optimization (titles, meta, schema)',
      'Link-building outreach (5–15 placements/month)',
      'Core Web Vitals remediation',
      'Monthly ranking and traffic report',
      'Competitor gap analysis',
    ],
    process: [
      { step: 'Audit', description: 'Full technical and content audit covering crawl errors, speed issues, and gap analysis.' },
      { step: 'Strategy', description: 'Keyword clustering, content calendar, backlink target list.' },
      { step: 'Execution', description: 'On-page fixes, content publishing, outreach campaigns.' },
      { step: 'Report', description: 'Monthly ranking report, traffic trends, next-90-day plan.' },
    ],
    faqs: [
      { question: 'How soon will I see results?', answer: 'Technical fixes show impact in 4–6 weeks. Ranking improvements for competitive terms typically appear in 3–6 months.' },
      { question: 'Do you guarantee rankings?', answer: 'No ethical agency can guarantee specific positions. We guarantee consistent execution and transparent reporting.' },
      { question: 'Do you handle local SEO?', answer: 'Yes, Google Business Profile optimization, local citations, and geo-targeted content are part of our local SEO package.' },
    ],
    portfolioTags: ['seo', 'marketing'],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Build an audience that trusts your brand and buys from you.',
    valueProp: 'Consistent, on-brand social presence that grows followers and drives real pipeline.',
    icon: 'ChatBubbleLeftRightIcon',
    category: 'marketing-growth',
    deliverables: [
      'Platform strategy (Instagram, LinkedIn, X, TikTok)',
      'Monthly content calendar (16–30 posts)',
      'Copywriting and caption creation',
      'Graphic and short-video asset creation',
      'Community management (comments, DMs)',
      'Monthly analytics and performance report',
      'Hashtag and trend research',
    ],
    process: [
      { step: 'Brand Audit', description: 'Review existing channels, tone of voice, competitor benchmarking.' },
      { step: 'Strategy', description: 'Platform selection, content pillars, posting cadence, KPI targets.' },
      { step: 'Content Creation', description: 'Design, copy, and scheduling, delivered two weeks ahead.' },
      { step: 'Optimize', description: 'Monthly review of top performers, A/B test hooks, adjust strategy.' },
    ],
    faqs: [
      { question: 'Which platforms do you manage?', answer: 'Instagram, LinkedIn, X (Twitter), Facebook, TikTok, and YouTube Shorts. We recommend 2–3 platforms to start.' },
      { question: 'Do I need to provide content?', answer: 'No. We handle ideation, design, and copy. We do need a brand brief and any product assets upfront.' },
      { question: 'Can you run paid social ads too?', answer: 'Yes, our Ads service covers paid campaigns. Many clients bundle social management with paid ads for full-funnel coverage.' },
    ],
    portfolioTags: ['social', 'marketing'],
  },
  {
    slug: 'ads-paid-marketing',
    title: 'Ads / Paid Marketing',
    shortDescription: 'Google and Meta ad campaigns that pay for themselves, and then some.',
    valueProp: 'We run paid campaigns that average a 3.8× ROAS for our clients in the first 90 days.',
    icon: 'CursorArrowRaysIcon',
    category: 'marketing-growth',
    deliverables: [
      'Google Ads (Search, Display, Shopping, YouTube)',
      'Meta Ads (Facebook + Instagram)',
      'Audience research and persona mapping',
      'Ad creative (copy + design)',
      'Landing page optimization recommendations',
      'Conversion tracking setup (GA4, Pixel)',
      'Weekly performance dashboard',
    ],
    process: [
      { step: 'Research', description: 'Audience research, keyword intent mapping, competitor ad audit.' },
      { step: 'Launch', description: 'Campaign build, creative production, tracking setup.' },
      { step: 'Optimize', description: 'Weekly bid adjustments, A/B creative tests, audience refinement.' },
      { step: 'Scale', description: 'Increase budget on winners, cut losers, expand to new channels.' },
    ],
    faqs: [
      { question: 'What is the minimum ad spend you work with?', answer: 'We recommend a minimum $2,000/month ad spend to generate enough data for optimization. Management fees are separate.' },
      { question: 'Do you charge a percentage of ad spend?', answer: 'We use a flat monthly management fee, not a percentage, so our incentive is performance, not spend.' },
      { question: 'How quickly can campaigns go live?', answer: 'New campaigns are typically live within 7–10 business days of kickoff.' },
    ],
    portfolioTags: ['ads', 'marketing'],
  },
  {
    slug: 'automation',
    title: 'Automation',
    shortDescription: 'Eliminate repetitive work and let your systems run themselves.',
    valueProp: 'We automate the workflows that eat your team\'s time, saving an average of 12 hours per week.',
    icon: 'BoltIcon',
    category: 'marketing-growth',
    deliverables: [
      'Workflow audit and automation opportunity map',
      'CRM automation (HubSpot, Salesforce, Pipedrive)',
      'Email marketing automation sequences',
      'Zapier / Make (Integromat) workflow builds',
      'Lead routing and nurture flows',
      'Reporting and dashboard automation',
      'Team training and documentation',
    ],
    process: [
      { step: 'Audit', description: 'Map every manual process and find the 20% that takes 80% of your team\'s time.' },
      { step: 'Design', description: 'Architect the automation logic, tool selection, and integration map.' },
      { step: 'Build', description: 'Configure, test, and deploy automations in your existing stack.' },
      { step: 'Handover', description: 'Training session, documentation, and 30-day monitoring period.' },
    ],
    faqs: [
      { question: 'What tools do you work with?', answer: 'HubSpot, Salesforce, Pipedrive, Zapier, Make, Airtable, Notion, Slack, Gmail, Outlook, Shopify, and most major SaaS platforms.' },
      { question: 'Do I need to change my existing software?', answer: 'Usually not. We work within your existing stack and only recommend new tools when there\'s a clear ROI case.' },
      { question: 'How do you measure success?', answer: 'We track hours saved per week, error rates, and pipeline velocity, all visible in a live dashboard we build for you.' },
    ],
    portfolioTags: ['automation', 'tech'],
  },
  {
    slug: 'video-editing',
    title: 'Video Editing',
    shortDescription: 'Raw footage transformed into polished content that stops the scroll.',
    valueProp: 'Professional video editing with 48-hour turnaround, ready for YouTube, Reels, and ads.',
    icon: 'FilmIcon',
    category: 'content-production',
    deliverables: [
      'Long-form video editing (YouTube, webinars)',
      'Short-form clips (Reels, TikTok, Shorts)',
      'Captions and subtitles',
      'Motion graphics and lower thirds',
      'Color grading and audio mixing',
      'Thumbnail design',
      'Up to 3 revision rounds per video',
    ],
    process: [
      { step: 'Brief', description: 'Style guide, reference videos, brand assets, and platform specs.' },
      { step: 'First Cut', description: 'Rough edit delivered within 48 hours of receiving footage.' },
      { step: 'Revisions', description: 'Up to 3 rounds of feedback with 24-hour turnaround each.' },
      { step: 'Delivery', description: 'Final export in all required formats and resolutions.' },
    ],
    faqs: [
      { question: 'What format should I send footage in?', answer: 'Any format works: MP4, MOV, MXF, or a Google Drive / Dropbox link. We handle the rest.' },
      { question: 'How many videos per month?', answer: 'Our retainers cover 4, 8, or 16 videos per month. One-off projects are also available.' },
      { question: 'Can you repurpose long-form content into shorts?', answer: 'Yes, this is one of our most popular services. We extract the best moments and reformat for short-form platforms.' },
    ],
    portfolioTags: ['video', 'content'],
  },
  {
    slug: 'video-shooting-production',
    title: 'Video Shooting / Production',
    shortDescription: 'End-to-end video production from concept to camera-ready content.',
    valueProp: 'Cinematic brand videos, product demos, and testimonials, shot and delivered in 2 weeks.',
    icon: 'VideoCameraIcon',
    category: 'content-production',
    deliverables: [
      'Pre-production planning and shot list',
      'Location scouting (or studio booking)',
      'Professional camera and lighting setup',
      'Director and crew on-site',
      'Talent direction and scripting',
      'Full post-production edit',
      'Final delivery in broadcast-ready formats',
    ],
    process: [
      { step: 'Pre-Production', description: 'Script, storyboard, shot list, location scouting, crew booking.' },
      { step: 'Production Day', description: 'On-site filming with professional crew, lighting, and sound.' },
      { step: 'Post-Production', description: 'Edit, color grade, sound design, motion graphics.' },
      { step: 'Delivery', description: 'Final review, format export, and asset handover.' },
    ],
    faqs: [
      { question: 'Where do you film?', answer: 'We film on-location (your office, retail space, or outdoors) or in our partner studios. We cover the tri-state area and travel nationally.' },
      { question: 'Do you provide actors or on-screen talent?', answer: 'We can source talent through our network. Many clients use their own team, and we handle direction and coaching.' },
      { question: 'What types of videos do you produce?', answer: 'Brand films, product demos, customer testimonials, event recaps, training videos, and social content series.' },
    ],
    portfolioTags: ['video', 'production'],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(s => s.category === category);
};