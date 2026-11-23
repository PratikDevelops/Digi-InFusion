export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  tags: string[];
  result: string;
  image: string;
  alt: string;
  featured: boolean;
  // Extended fields for case study detail
  year?: string;
  duration?: string;
  overview?: string;
  challenge?: string;
  approach?: string[];
  results?: {metric: string;value: string;}[];
  gallery?: {src: string;alt: string;}[];
}

// Images live in: public/assets/portfolio/
// In Next.js, files in /public are served from the site root,
// so public/assets/portfolio/x.jpg  ->  "/assets/portfolio/x.jpg"
const IMG = '/assets/portfolio';

export const portfolioItems: PortfolioItem[] = [
{
  id: 'elder-mart',
  title: 'Elder-Mart — Shopify Store, Branding & Growth Marketing',
  client: 'Elder-Mart (Skin Origins)',
  tags: ['web', 'design', 'social', 'ads'],
  result: 'Full-funnel launch: Shopify storefront, brand creatives and paid social driving daily D2C orders',
  image: `${IMG}/elder-mart-hero.png`,
  alt: 'Elder-Mart skincare and wellness Shopify storefront hero banner',
  featured: true,
  year: '2026',
  duration: 'Ongoing retainer',
  overview: 'Elder-Mart (parent brand Skin Origins) is a science-backed skincare, haircare and wellness D2C label selling serums, sunscreens, hair oils and health supplements. We built and continue to run their entire online presence — the Shopify storefront, product and combo page design, graphic assets for campaigns, and the social media and paid ads that drive traffic to it.',
  challenge: 'Elder-Mart needed a storefront that could hold a wide catalogue — skincare, haircare, vitality and combo bundles — without feeling cluttered, plus a steady stream of scroll-stopping creative for Instagram and paid campaigns to compete in a crowded beauty and wellness category.',
  approach: [
  'Built and maintain the Shopify storefront: collections for Skincare, Haircare, Vitality and Combos, bundle/upsell sections, and new-arrival and best-seller rails',
  'Designed product and combo banners, homepage hero creatives, and seasonal offer graphics',
  'Ran ongoing social media management across Instagram and Facebook to build brand presence',
  'Set up and managed paid ad campaigns to drive traffic to key product and combo pages',
  'Configured reviews, FAQs and trust sections on-site to support conversion'],

  results: [
  { metric: 'Customer reviews', value: '960+' },
  { metric: 'Core collections live', value: '4' },
  { metric: 'Retail partners listed', value: '4' }],

  gallery: [
  { src: `${IMG}/elder-mart-gallery-1.jpg`, alt: 'Elder-Mart product launch banner design' }]

},
{
  id: 'nine-plus-nine-wholesale',
  title: 'Nine Plus Nine Wholesale — B2B Jewellery Shopify Store & Marketing',
  client: 'Nine Plus Nine Wholesale',
  tags: ['web', 'design', 'social', 'ads'],
  result: 'Built the wholesale storefront end-to-end plus the graphic design, social and ads that bring in resellers',
  image: `${IMG}/nine-plus-nine-hero.png`,
  alt: 'Nine Plus Nine Wholesale imitation jewellery Shopify storefront banner',
  featured: true,
  year: '2026',
  duration: 'Ongoing retainer',
  overview: 'Nine Plus Nine Wholesale is a Mumbai-based imitation and forming jewellery wholesaler serving retailers and resellers across India — mangalsutras, Rani Haars, micro chains and bracelets. We built their Shopify storefront and handle the graphic design, social media and ad campaigns that keep their reseller network buying.',
  challenge: 'As a wholesale business (₹3,000 minimum order), the site needed to read as a trade catalogue rather than a consumer store, organise fast-moving collections clearly, and be backed by creative and ads that speak directly to retailers and resellers rather than end shoppers.',
  approach: [
  'Built the Shopify storefront with trade-focused UX: minimum order messaging, WhatsApp contact, and collections for Mangalsutra, Rani Haar, Micro Chain and Bracelets',
  'Set up Featured and Latest product rails to spotlight fast-selling designs for resellers',
  'Designed product photography layouts, banners and offer creatives for the catalogue',
  'Manage social media accounts to showcase new arrivals to the reseller network',
  'Run paid ad campaigns aimed at retailers and resellers to drive wholesale enquiries'],

  results: [
  { metric: 'Product collections', value: '4+' },
  { metric: 'Mangalsutra designs listed', value: '35' },
  { metric: 'Minimum order value', value: '₹3,000' }],

  gallery: [
  { src: `${IMG}/nine-plus-nine-gallery-1.webp`, alt: 'Nine Plus Nine Wholesale jewellery product photography' }]

},
{
  id: 'elmento',
  title: 'Elmento — Men\u2019s & Women\u2019s Formalwear Shopify Store',
  client: 'Elmento',
  tags: ['web', 'ecommerce'],
  result: 'Own Shopify brand built and maintained end-to-end — theme, collections and merchandising',
  image: `${IMG}/elmento-hero.png`,
  alt: 'Elmento formal shirts Shopify storefront hero banner',
  featured: true,
  year: '2024 \u2013 present',
  duration: 'Ongoing',
  overview: 'Elmento (\u201cWear Your Element\u201d) is a men\u2019s and women\u2019s formalwear label sold direct-to-consumer on Shopify. As the founder and developer, I built the storefront on the Glozin theme and manage every part of it — from collections and metafields to performance fixes.',
  challenge: 'Running both the brand and the build meant the storefront had to stay fast and easy to merchandise without outside developer help, while solving recurring theme-level issues like blurry lazy-loaded product images on key homepage sections.',
  approach: [
  'Built out Shirts, Trousers and T-Shirts collections with custom Liquid sections for Men\u2019s and Women\u2019s categories',
  'Configured metafields for Frequently Bought Together and Size Chart on product pages',
  'Diagnosed and fixed a persistent homepage image-blur bug traced to lazy-load timing and container sizing',
  'Set up SEO-friendly collection structure, navigation and on-site content',
  'Manage ongoing theme support and troubleshooting directly with the theme developer'],

  results: [
  { metric: 'Product collections', value: '3' },
  { metric: 'Sizes offered', value: 'Up to 3XL' },
  { metric: 'Theme', value: 'Glozin' }],

  gallery: [
  { src: `${IMG}/elmento-gallery-1.jpg`, alt: 'Elmento casual t-shirt collection banner' }]

},
{
  id: 'boga-bags',
  title: 'Boga Bags — Handbag Brand Shopify Store',
  client: 'Boga Bags',
  tags: ['web', 'ecommerce'],
  result: 'Full Shopify storefront covering 5 product categories and 100+ SKUs',
  image: `${IMG}/boga-bags-hero.png`,
  alt: 'Boga Bags handbag Shopify storefront banner',
  featured: true,
  year: '2026',
  duration: '\u2014',
  overview: 'Boga Bags is a Mumbai-based handbag label (handbags, backpacks, clutches, cross-body and frame bags) sold through their own Shopify store, with a celebrity-inspired styling angle. We built the storefront to handle a large, fast-rotating catalogue and highlight bestsellers and new launches.',
  challenge: 'With five overlapping bag categories and frequent new drops, the store needed clear category navigation plus dedicated Trending, Bestseller and New Arrivals sections to keep the homepage from feeling like an undifferentiated product dump.',
  approach: [
  'Built category landing pages for Handbags, Backpacks, Clutch Bags, Cross Body Bags and Frame Bags',
  'Set up Trending Now, Bestsellers and New Arrivals rails on the homepage',
  'Designed the \u201cGet the celebrity look\u201d section to merchandise styles by inspiration',
  'Configured store details, policies and customer review display for trust and conversion'],

  results: [
  { metric: 'Bag categories', value: '5' },
  { metric: 'Handbag SKUs', value: '49' },
  { metric: 'Discount offer', value: 'Buy 2+, 10% off' }],

  gallery: [
  { src: `${IMG}/boga-bags-gallery-1.jpg`, alt: 'Boga Bags retail store photography used on-site' }]

},
];