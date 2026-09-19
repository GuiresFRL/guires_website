const SITE_NAV = [
   
    {
        label: 'About Us',
        href: 'https://guiresfrl.github.io/guires_website/about-us/',
        submenu: [
            { label: 'Company Overview', href: 'https://guiresfrl.github.io/guires_website/about-us/#company-overview' },
            { label: 'Our Story', href: 'https://guiresfrl.github.io/guires_website/about-us/#our-story' },
            { label: 'Vision & Mission', href: 'https://guiresfrl.github.io/guires_website/about-us/#vision-mission' },
            { label: 'Leadership', href: 'https://guiresfrl.github.io/guires_website/about-us/#leadership' },
            { label: 'Meet Our Team', href: 'https://guiresfrl.github.io/guires_website/about-us/meet-our-team/' },
            { label: 'Our Values', href: 'https://guiresfrl.github.io/guires_website/about-us/#values' },
            { label: 'Our Approach', href: 'https://guiresfrl.github.io/guires_website/about-us/#our-approach' },
            { label: 'Quality & Compliance', href: 'https://guiresfrl.github.io/guires_website/about-us/#quality-compliance' },
            { label: 'Awards & Recognition', href: 'https://guiresfrl.github.io/guires_website/about-us/#awards' },
            { label: 'Associations', href: 'https://guiresfrl.github.io/guires_website/about-us/#associations' },
            { label: 'Global Presence', href: 'https://guiresfrl.github.io/guires_website/about-us/#global-presence' },
            { label: 'Milestones', href: 'https://guiresfrl.github.io/guires_website/about-us/#milestones' }
        ]
    },
    {
        label: 'Services',
        href: 'https://guiresfrl.github.io/guires_website/services/',
        submenu: [
            { label: 'Research Solutions', href: 'https://guiresfrl.github.io/guires_website/services/#research-solutions' },
            { label: 'Data Science & Analytics', href: 'https://guiresfrl.github.io/guires_website/services/data-science-analytics/' },
            { label: 'Regulatory & Pharmacovigilance', href: 'https://guiresfrl.github.io/guires_website/services/#regulatory-pharmacovigilance' },
            { label: 'Biostatistics & Statistical Programming', href: 'https://guiresfrl.github.io/guires_website/services/biostatistics/' },
            { label: 'Scientific & Medical Communication', href: 'https://guiresfrl.github.io/guires_website/services/#scientific-medical-communication' },
            { label: 'Branding & Communication', href: 'https://guiresfrl.github.io/guires_website/services/#branding-communication' },
            { label: 'Food Research & R&D', href: 'https://guiresfrl.github.io/guires_website/services/#food-research-rd' }
        ]
    },
    {
        label: 'Industries',
        href: 'https://guiresfrl.github.io/guires_website/industries/',
        submenu: [
            'Healthcare & Life Sciences', 'Pharmaceuticals', 'Medical Devices', 'Biotechnology',
            'Diagnostics', 'Nutraceuticals', 'Food', 'Retail', 'Travel & Hospitality',
            'Insurance', 'Mortgage', 'Logistics', 'Telecom'
        ].map((label) => ({ label, href: 'https://guiresfrl.github.io/guires_website/industries/' }))
    },
  
   
    {
        label: 'Insights',
        href: 'https://guiresfrl.github.io/guires_website/insights/',
        submenu: [
            'Blog', 'Research Insights', 'Industry Insights', 'Whitepapers',
            'Reports', 'Publications', 'News & Updates', 'FAQs'
        ].map((label) => ({ label, href: 'https://guiresfrl.github.io/guires_website/insights/' }))
    },
  
    { label: 'Careers', href: 'https://guiresfrl.github.io/guires_website/careers/' },
    {
        label: 'Contact Us',
        href: 'https://guiresfrl.github.io/guires_website/contact-us/',
        submenu: [
           
            'Request a Consultation', 'Support', 'Global Locations'
        ].map((label) => ({ label, href: 'https://guiresfrl.github.io/guires_website/contact-us/' }))
    }
];

function findNavItem(label) {
    return SITE_NAV.find((item) => item.label === label);
}
