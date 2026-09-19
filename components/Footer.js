const SITE = 'https://guiresfrl.github.io/guires_website';

const FOOTER_COLUMNS = [
    {
        title: 'About Us',
        items: [
            { label: 'Our Story', href: `${SITE}/about-us/#our-story` },
            { label: 'Leadership', href: `${SITE}/about-us/#leadership` },
            { label: 'Awards & Recognition', href: `${SITE}/about-us/#awards` },
            { label: 'Associations', href: `${SITE}/about-us/#associations` }
        ]
    },
    {
        title: 'Industries',
        items: [
            { label: 'Healthcare & Life Sciences', href: `${SITE}/industries/healthcare-life-sciences/` },
            { label: 'Pharmaceuticals', href: `${SITE}/industries/pharmaceuticals/` },
            { label: 'Medical Devices', href: `${SITE}/industries/medical-devices/` },
            { label: 'Food', href: `${SITE}/industries/food/` }
        ]
    },
    {
        title: 'Services',
        items: [
            { label: 'Research Solutions', href: `${SITE}/services/#research-solutions` },
            { label: 'Data Science & Analytics', href: `${SITE}/services/data-science-analytics/` },
            { label: 'Regulatory & Pharmacovigilance', href: `${SITE}/services/#regulatory-pharmacovigilance` },
            { label: 'Biostatistics', href: `${SITE}/services/biostatistics/` }
        ]
    },
    {
        title: 'Resources',
        items: [
            { label: 'Insights', href: `${SITE}/insights/` },
            { label: 'Case Studies', href: `${SITE}/case-studies/` },
            { label: 'Publications', href: `${SITE}/insights/` }
        ]
    },
    {
        title: 'Careers',
        items: [
            { label: 'Why GUIRES', href: `${SITE}/careers/` },
            { label: 'Current Openings', href: `${SITE}/careers/jobs/` }
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
        <footer className="tg-on-ink relative text-white/80 pt-20 lg:pt-28 pb-8 overflow-hidden" style={{ background: 'var(--ink-navy)' }} data-name="footer" data-file="components/Footer.js">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-28">
                    <div className="lg:col-span-8">
                        <p className="text-white text-[clamp(1.6rem,3.2vw,3rem)] font-medium tracking-[-0.03em] leading-[1.12] mb-10 max-w-4xl">
                            Choose your research pathway, be it study design, regulatory strategy, biostatistics or scientific communication. Let&rsquo;s start a conversation about your next research challenge.
                        </p>
                        <a href={`${SITE}/contact-us/`} className="tg-btn tg-btn--primary">Get in Touch <div className="icon-arrow-right"></div></a>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="inline-block bg-white px-5 py-3 mb-6">
                            <img src={`${SITE}/assets/guires-logo.png`} alt="Guires" className="h-12 w-auto" width="520" height="160" />
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                            GUIRES exists to responsibly advance research, regulatory and scientific excellence for healthcare and life sciences organizations. With deep domain expertise spanning research, data science, biostatistics and communication, we are the partner of choice for organizations across pharmaceuticals, biotechnology, medical devices, diagnostics and food science.
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Our offerings span research solutions, regulatory &amp; pharmacovigilance, biostatistics, scientific communication and food research &amp; development &mdash; delivered by a family of five specialist research brands.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 pb-16 border-b border-white/15">
                    {FOOTER_COLUMNS.map((col) => (
                        <div key={col.title}>
                            <h4 className="tg-eyebrow mb-6">{col.title}</h4>
                            <ul className="space-y-3 text-[15px]">
                                {col.items.map((item) => (
                                    <li key={item.label}><a href={item.href} className="text-white/75 hover:text-white transition-colors">{item.label}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
                    <div className="text-sm text-white/60">&copy; {year} GUIRES. All Rights Reserved.</div>
                    <div className="flex items-center gap-3">
                        {SOCIAL_LINKS.map((s) => (
                            <a key={s.label} href="#" aria-label={s.label} className="w-10 h-10 border border-white/25 flex items-center justify-center text-white/80 hover:text-[var(--ink)] hover:bg-white hover:border-white transition-colors">
                                <div className={`${s.icon} text-sm`}></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
