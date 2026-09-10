const SITE = 'https://guiresfrl.github.io/guires_website';

const FOOTER_COLUMNS = [
    {
        title: 'About Us',
        items: [
            { label: 'Our Story', href: `${SITE}/about-us.html#our-story` },
            { label: 'Leadership', href: `${SITE}/about-us.html#leadership` },
            { label: 'Awards & Recognition', href: `${SITE}/about-us.html#awards` },
            { label: 'Associations', href: `${SITE}/about-us.html#associations` }
        ]
    },
    {
        title: 'Industries',
        items: [
            { label: 'Healthcare & Life Sciences', href: `${SITE}/industries.html` },
            { label: 'Pharmaceuticals', href: `${SITE}/industries.html` },
            { label: 'Medical Devices', href: `${SITE}/industries.html` },
            { label: 'Food', href: `${SITE}/industries.html` }
        ]
    },
    {
        title: 'Services',
        items: [
            { label: 'Research Solutions', href: `${SITE}/services.html#research-solutions` },
            { label: 'Data Science & Analytics', href: `${SITE}/services.html#data-science-analytics` },
            { label: 'Regulatory & Pharmacovigilance', href: `${SITE}/services.html#regulatory-pharmacovigilance` },
            { label: 'Biostatistics', href: `${SITE}/services.html#biostatistics-statistical-programming` }
        ]
    },
    {
        title: 'Resources',
        items: [
            { label: 'Insights', href: `${SITE}/insights.html` },
            { label: 'Case Studies', href: `${SITE}/case-studies.html` },
            { label: 'Publications', href: `${SITE}/insights.html` }
        ]
    },
    {
        title: 'Careers',
        items: [
            { label: 'Why GUIRES', href: `${SITE}/careers.html` },
            { label: 'Current Openings', href: `${SITE}/careers.html` }
        ]
    },
    {
        title: 'Contact Us',
        items: [
            { label: 'Privacy Notice', href: '#' },
            { label: 'Cookie Policy', href: '#' },
            { label: 'Terms of Use', href: '#' }
        ]
    }
];

const SOCIAL_LINKS = [
    { label: 'LinkedIn', icon: 'icon-linkedin' },
    { label: 'X / Twitter', icon: 'icon-twitter' },
    { label: 'Instagram', icon: 'icon-instagram' },
    { label: 'YouTube', icon: 'icon-youtube' }
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#05070D] text-gray-300 pt-16 pb-8 overflow-hidden border-t-2 border-[var(--accent)]" data-name="footer" data-file="components/Footer.js">
            <svg className="absolute -bottom-20 -right-20 w-[640px] h-[420px] opacity-25 pointer-events-none" viewBox="0 0 640 420" fill="none">
                <defs>
                    <radialGradient id="footerGlow" cx="70%" cy="60%" r="60%">
                        <stop offset="0%" stopColor="#0C4DA2" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0C4DA2" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <rect width="640" height="420" fill="url(#footerGlow)" />
                <g stroke="#5A8FD6" strokeWidth="1" opacity="0.5">
                    <path d="M40 380 L 200 380 L 240 340 L 420 340" />
                    <path d="M100 420 L 100 300 L 160 240 L 300 240" />
                    <path d="M560 40 L 560 160 L 500 220 L 500 320" />
                    <path d="M620 100 L 460 100 L 420 140" />
                </g>
                <g fill="#7FA8E8">
                    <circle cx="240" cy="340" r="3" />
                    <circle cx="420" cy="340" r="3" />
                    <circle cx="160" cy="240" r="3" />
                    <circle cx="500" cy="220" r="3" />
                    <circle cx="420" cy="140" r="3" />
                </g>
            </svg>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div className="inline-block bg-white rounded-lg px-5 py-3 mb-6">
                            <img src={`${SITE}/assets/guires-logo.png`} alt="Guires" className="h-10 w-auto" width="520" height="160" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
                            GUIRES exists to responsibly advance research, regulatory and scientific excellence for healthcare and life sciences organizations. With deep domain expertise spanning research, data science, biostatistics and communication, we are the partner of choice for organizations across pharmaceuticals, biotechnology, medical devices, diagnostics and food science.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Our offerings span research solutions, regulatory &amp; pharmacovigilance, biostatistics, scientific communication and food research &amp; development &mdash; delivered by a family of five specialist research brands.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-white text-lg font-medium leading-relaxed mb-6">
                            Choose your research pathway, be it study design, regulatory strategy, biostatistics or scientific communication. Let&rsquo;s start a conversation about your next research challenge.
                        </p>
                        <a href={`${SITE}/contact-us.html`} className="self-start px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold hover:bg-blue-800 transition-colors">Get in Touch</a>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 pb-14 border-b border-white/10">
                    {FOOTER_COLUMNS.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-xs font-bold tracking-wider text-white uppercase mb-5">{col.title}</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                {col.items.map((item) => (
                                    <li key={item.label}><a href={item.href} className="hover:text-white transition-colors">{item.label}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
                    <div className="text-sm text-gray-500">&copy; {year} GUIRES. All Rights Reserved.</div>
                    <img src={`${SITE}/assets/guires-logo.png`} alt="Guires" className="h-6 w-auto opacity-70" />
                    <div className="flex items-center gap-4">
                        {SOCIAL_LINKS.map((s) => (
                            <a key={s.label} href="#" aria-label={s.label} className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 transition-colors">
                                <div className={`${s.icon} text-sm`}></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
