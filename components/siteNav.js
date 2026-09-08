const SITE_NAV = [
    { label: 'Home', href: '/index.html' },
    {
        label: 'About Us',
        href: '/about-us.html',
        submenu: [
            { label: 'Company Overview', href: '/about-us.html#company-overview' },
            { label: 'Our Story', href: '/about-us.html#our-story' },
            { label: 'Vision & Mission', href: '/about-us.html#vision-mission' },
            { label: 'Leadership', href: '/about-us.html#leadership' },
            { label: 'Meet Our Team', href: '/about-us/meet-our-team.html' },
            { label: 'Our Values', href: '/about-us.html#values' },
            { label: 'Our Approach', href: '/about-us.html#our-approach' },
            { label: 'Quality & Compliance', href: '/about-us.html#quality-compliance' },
            { label: 'Awards & Recognition', href: '/about-us.html#awards' },
            { label: 'Associations', href: '/about-us.html#associations' },
            { label: 'Global Presence', href: '/about-us.html#global-presence' },
            { label: 'Milestones', href: '/about-us.html#milestones' }
        ]
    },
    {
        label: 'Services',
        href: '/services.html',
        submenu: [
            { label: 'Research Solutions', href: '/services.html#research-solutions' },
            { label: 'Data Science & Analytics', href: '/services.html#data-science-analytics' },
            { label: 'Regulatory & Pharmacovigilance', href: '/services.html#regulatory-pharmacovigilance' },
            { label: 'Biostatistics & Statistical Programming', href: '/services.html#biostatistics-statistical-programming' },
            { label: 'Scientific & Medical Communication', href: '/services.html#scientific-medical-communication' },
            { label: 'Branding & Communication', href: '/services.html#branding-communication' },
            { label: 'Food Research & R&D', href: '/services.html#food-research-rd' }
        ]
    },
    {
        label: 'Industries',
        href: '/industries.html',
        submenu: [
            'Healthcare & Life Sciences', 'Pharmaceuticals', 'Medical Devices', 'Biotechnology',
            'Diagnostics', 'Nutraceuticals', 'Food', 'Retail', 'Travel & Hospitality',
            'Insurance', 'Mortgage', 'Logistics', 'Telecom'
        ].map((label) => ({ label, href: '/industries.html' }))
    },
    {
        label: 'Solutions',
        href: '/solutions.html',
        submenu: [
            'Research Solutions', 'Analytics Solutions', 'Healthcare Solutions', 'Life Sciences Solutions',
            'Regulatory Solutions', 'Digital Solutions', 'Customized Solutions'
        ].map((label) => ({ label, href: '/solutions.html' }))
    },
    { label: 'Case Studies', href: '/case-studies.html' },
    {
        label: 'Insights',
        href: '/insights.html',
        submenu: [
            'Blog', 'Research Insights', 'Industry Insights', 'Whitepapers',
            'Reports', 'Publications', 'News & Updates', 'FAQs'
        ].map((label) => ({ label, href: '/insights.html' }))
    },
    {
        label: 'Our Brands',
        href: '/our-brands.html',
        submenu: [
            { label: 'Statswork', href: '/our-brands.html#statswork' },
            { label: 'Pepgra', href: '/our-brands.html#pepgra' },
            { label: 'Pubrica', href: '/our-brands.html#pubrica' },
            { label: 'Food Research Lab', href: '/our-brands.html#food-research-lab' },
            { label: 'Pepcreations', href: '/our-brands.html#pepcreations' }
        ]
    },
    { label: 'Careers', href: '/careers.html' },
    {
        label: 'Contact Us',
        href: '/contact-us.html',
        submenu: [
            'Business Enquiry', 'Sales Enquiry', 'Request a Quote',
            'Request a Consultation', 'Support', 'Global Locations'
        ].map((label) => ({ label, href: '/contact-us.html' }))
    }
];

function findNavItem(label) {
    return SITE_NAV.find((item) => item.label === label);
}
