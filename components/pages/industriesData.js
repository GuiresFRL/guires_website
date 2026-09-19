const IND_SITE = 'https://guiresfrl.github.io/guires_website';
const IND_GENERIC_IMG = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600';

const INDUSTRIES_DATA = [
    { slug: 'healthcare-life-sciences', name: 'Healthcare & Life Sciences', desc: 'Research and evidence support across the healthcare continuum.',
      long: 'Supporting pharmaceutical, biotechnology and medical device organizations with research, regulatory and pharmacovigilance expertise that keeps pace with evolving global standards.',
      img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1600' },
    { slug: 'pharmaceuticals', name: 'Pharmaceuticals', desc: 'Regulatory, clinical and scientific support for drug development.',
      long: 'Research, regulatory and pharmacovigilance support that helps pharmaceutical organizations bring safe, compliant products to market faster.',
      img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600' },
    { slug: 'medical-devices', name: 'Medical Devices', desc: 'Research and documentation support through the device lifecycle.',
      long: 'Regulatory and clinical research support across the medical device lifecycle, from design validation through post-market surveillance.',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600' },
    { slug: 'biotechnology', name: 'Biotechnology', desc: 'Data and regulatory support for emerging biotech innovation.',
      long: 'Data-driven research and statistical rigor supporting biotechnology organizations from discovery through clinical development.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600' },
    { slug: 'diagnostics', name: 'Diagnostics', desc: 'Research support for diagnostic development and validation.',
      long: 'Advancing diagnostics R&D with rigorous study design, data analysis and regulatory support tailored to evolving standards.',
      img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1600' },
    { slug: 'nutraceuticals', name: 'Nutraceuticals', desc: 'Scientific and regulatory support for nutraceutical products.',
      long: 'Research and regulatory support helping nutraceutical organizations validate claims and bring products to market with confidence.',
      img: 'https://images.unsplash.com/photo-1624362772755-4d5843e67047?auto=format&fit=crop&q=80&w=1600' },
    { slug: 'food', name: 'Food', desc: 'Product research and R&D for food and beverage innovation.',
      long: 'Sensory evaluation and food research & development support that helps food science organizations innovate with confidence.',
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1600' },
    { slug: 'retail', name: 'Retail', desc: 'Data and consumer research support for retail organizations.',
      long: 'Research and data intelligence that helps retail organizations understand customers and make evidence-based decisions.',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600' },
    { slug: 'travel-hospitality', name: 'Travel & Hospitality', desc: 'Research and analytics for travel and hospitality businesses.', long: '', img: IND_GENERIC_IMG },
    { slug: 'insurance', name: 'Insurance', desc: 'Data and analytics support for insurance risk and operations.', long: '', img: IND_GENERIC_IMG },
    { slug: 'mortgage', name: 'Mortgage', desc: 'Research and analytics support for mortgage and lending.', long: '', img: IND_GENERIC_IMG },
    { slug: 'logistics', name: 'Logistics', desc: 'Data-driven support for logistics and supply chain operations.', long: '', img: IND_GENERIC_IMG },
    { slug: 'telecom', name: 'Telecom', desc: 'Research and analytics support for telecom operators.', long: '', img: IND_GENERIC_IMG }
];

// the same service pillars used on the Services page, shown as goals on each industry page
const INDUSTRY_GOALS = [
    { label: 'Research & Intelligence', heading: 'Ground decisions in evidence',
      desc: 'Primary and secondary research, market and competitive intelligence.',
      items: ['Market Research', 'Competitive Intelligence', 'Primary Research', 'Secondary Research', 'R&D Intelligence'] },
    { label: 'Data & Analytics', heading: 'Turn complex data into clear analysis',
      desc: 'Decision-ready analysis and evidence from complex, fragmented data.',
      items: ['Data Analytics', 'Statistical Programming', 'Biostatistics', 'Data Management', 'AI & Advanced Analytics'] },
    { label: 'Healthcare & Life Sciences', heading: 'Support the clinical and regulatory lifecycle',
      desc: 'Domain-specific support across the clinical and regulatory lifecycle.',
      items: ['Clinical Research Support', 'Real-World Evidence', 'HEOR', 'Pharmacovigilance', 'Regulatory Support'] },
    { label: 'Scientific & Medical', heading: 'Communicate complex science clearly',
      desc: 'Clear, accurate and compliant scientific communication.',
      items: ['Medical Writing', 'Scientific Writing', 'Regulatory Writing', 'Medical Communications'] },
    { label: 'Technology & Operations', heading: 'Scale research operations with technology',
      desc: 'Technology-enabled delivery that scales research operations.',
      items: ['Research Technology', 'Automation', 'AI Solutions', 'Managed Services'] }
];

const INDUSTRY_CAPABILITIES_LIST = [
    { title: 'Research Intelligence', desc: 'Evidence and insight that ground decisions.' },
    { title: 'Data & Analytics', desc: 'Decision-ready analysis from complex data.' },
    { title: 'Scientific Support', desc: 'Clear, compliant scientific and regulatory work.' },
    { title: 'Technology Solutions', desc: 'Platforms and automation that scale delivery.' }
];

function industryUrl(slug) { return `${IND_SITE}/industries/${slug}/`; }
