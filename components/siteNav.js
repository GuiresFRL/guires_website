const SITE_NAV = [
   
    {
        label: 'About Us',
        href: 'https://guiresfrl.github.io/guires_website/about-us.html',
        submenu: [
            { label: 'Company Overview', href: 'https://guiresfrl.github.io/guires_website/about-us.html#company-overview' },
            { label: 'Our Story', href: 'https://guiresfrl.github.io/guires_website/about-us.html#our-story' },
            { label: 'Vision & Mission', href: 'https://guiresfrl.github.io/guires_website/about-us.html#vision-mission' },
            { label: 'Leadership', href: 'https://guiresfrl.github.io/guires_website/about-us.html#leadership' },
            { label: 'Meet Our Team', href: 'https://guiresfrl.github.io/guires_website/about-us/meet-our-team.html' },
            { label: 'Our Values', href: 'https://guiresfrl.github.io/guires_website/about-us.html#values' },
            { label: 'Our Approach', href: 'https://guiresfrl.github.io/guires_website/about-us.html#our-approach' },
            { label: 'Quality & Compliance', href: 'https://guiresfrl.github.io/guires_website/about-us.html#quality-compliance' },
            { label: 'Awards & Recognition', href: 'https://guiresfrl.github.io/guires_website/about-us.html#awards' },
            { label: 'Associations', href: 'https://guiresfrl.github.io/guires_website/about-us.html#associations' },
            { label: 'Global Presence', href: 'https://guiresfrl.github.io/guires_website/about-us.html#global-presence' },
            { label: 'Milestones', href: 'https://guiresfrl.github.io/guires_website/about-us.html#milestones' }
        ]
    },
    {
        label: 'Services',
        href: 'https://guiresfrl.github.io/guires_website/services.html',
        submenu: [
            { label: 'Research Solutions', href: 'https://guiresfrl.github.io/guires_website/services.html#research-solutions' },
            { label: 'Data Science & Analytics', href: 'https://guiresfrl.github.io/guires_website/services.html#data-science-analytics' },
            { label: 'Regulatory & Pharmacovigilance', href: 'https://guiresfrl.github.io/guires_website/services.html#regulatory-pharmacovigilance' },
            { label: 'Biostatistics & Statistical Programming', href: 'https://guiresfrl.github.io/guires_website/services.html#biostatistics-statistical-programming' },
            { label: 'Scientific & Medical Communication', href: 'https://guiresfrl.github.io/guires_website/services.html#scientific-medical-communication' },
            { label: 'Branding & Communication', href: 'https://guiresfrl.github.io/guires_website/services.html#branding-communication' },
            { label: 'Food Research & R&D', href: 'https://guiresfrl.github.io/guires_website/services.html#food-research-rd' }
        ]
    },
    {
        label: 'Industries',
        href: 'https://guiresfrl.github.io/guires_website/industries.html',
        submenu: [
            'Healthcare & Life Sciences', 'Pharmaceuticals', 'Medical Devices', 'Biotechnology',
            'Diagnostics', 'Nutraceuticals', 'Food', 'Retail', 'Travel & Hospitality',
            'Insurance', 'Mortgage', 'Logistics', 'Telecom'
        ].map((label) => ({ label, href: 'https://guiresfrl.github.io/guires_website/industries.html' }))
    },
  
   
    {
        label: 'Insights',
        href: 'https://guiresfrl.github.io/guires_website/insights.html',
        submenu: [
            'Blog', 'Research Insights', 'Industry Insights', 'Whitepapers',
            'Reports', 'Publications', 'News & Updates', 'FAQs'
        ].map((label) => ({ label, href: 'https://guiresfrl.github.io/guires_website/insights.html' }))
    },
  
    { label: 'Careers', href: 'https://guiresfrl.github.io/guires_website/careers.html' },
    {
        label: 'Contact Us',
        href: 'https://guiresfrl.github.io/guires_website/contact-us.html',
        submenu: [
           
            'Request a Consultation', 'Support', 'Global Locations'
        ].map((label) => ({ label, href: 'https://guiresfrl.github.io/guires_website/contact-us.html' }))
    }
];

function findNavItem(label) {
    return SITE_NAV.find((item) => item.label === label);
}
