function explorerUrl(slug) {
    const base = 'https://guiresfrl.github.io/guires_website';
    if (slug === 'biostatistics') return base + '/services/biostatistics/';
    if (slug === 'data-analytics' || slug === 'data-science-analytics') return base + '/services/data-science-analytics/';
    // detail pages not built yet: route to a conversation instead of a dead link
    return base + '/contact-us/';
}

const EXPLORER_CATEGORIES = [
    {
        key: 'research', label: 'Research', icon: 'icon-search',
        items: [
            { title: 'Market Research', desc: 'Understand demand, positioning and opportunity across target markets.', slug: 'market-research' },
            { title: 'Competitive Intelligence', desc: 'Track competitor strategy, pipeline and positioning continuously.', slug: 'competitive-intelligence' },
            { title: 'Primary Research', desc: 'First-hand data collection through surveys, interviews and studies.', slug: 'research-solutions' },
            { title: 'Secondary Research', desc: 'Synthesis of existing literature, data and published evidence.', slug: 'research-solutions' }
        ]
    },
    {
        key: 'analytics', label: 'Analytics', icon: 'icon-chart-column',
        items: [
            { title: 'Data Analytics', desc: 'Turning research and operational data into decision-ready insight.', slug: 'data-science-analytics' },
            { title: 'Statistical Programming', desc: 'Production of analysis datasets, tables, listings and figures.', slug: 'statistical-programming' },
            { title: 'Biostatistics', desc: 'Statistical design and analysis for clinical and non-clinical studies.', slug: 'biostatistics' },
            { title: 'Data Management', desc: 'Structured, validated, audit-ready data pipelines.', slug: 'data-science-analytics' },
            { title: 'AI & Advanced Analytics', desc: 'Predictive and exploratory modelling for complex datasets.', slug: 'ai-analytics' }
        ]
    },
    {
        key: 'life-sciences', label: 'Life Sciences', icon: 'icon-flask-conical',
        items: [
            { title: 'Clinical Research Support', desc: 'End-to-end support across clinical development phases.', slug: 'research-solutions' },
            { title: 'Real-World Evidence', desc: 'Evidence generation from real-world data sources.', slug: 'regulatory-pharmacovigilance' },
            { title: 'HEOR', desc: 'Health economics and outcomes research for market access.', slug: 'regulatory-pharmacovigilance' },
            { title: 'Pharmacovigilance', desc: 'Safety monitoring and signal detection support.', slug: 'regulatory-pharmacovigilance' }
        ]
    },
    {
        key: 'scientific', label: 'Scientific', icon: 'icon-file-text',
        items: [
            { title: 'Medical Writing', desc: 'Clear, accurate medical and scientific documentation.', slug: 'scientific-medical-communication' },
            { title: 'Scientific Writing', desc: 'Publications, manuscripts and scientific communication.', slug: 'scientific-medical-communication' },
            { title: 'Regulatory Writing', desc: 'Submission-ready regulatory documentation.', slug: 'regulatory-support' }
        ]
    },
    {
        key: 'technology', label: 'Technology', icon: 'icon-cpu',
        items: [
            { title: 'Research Technology', desc: 'Platforms that streamline research operations.', slug: 'technology-operations' },
            { title: 'Automation', desc: 'Workflow automation across research processes.', slug: 'technology-operations' },
            { title: 'AI Solutions', desc: 'Applied AI for research and analytical workflows.', slug: 'ai-analytics' }
        ]
    }
];

function ServiceExplorer() {
    const [active, setActive] = React.useState('analytics');
    const [openMobile, setOpenMobile] = React.useState('analytics');
    const ref = React.useRef(null);
    const panelRef = React.useRef(null);
    const category = EXPLORER_CATEGORIES.find((c) => c.key === active);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-explorer-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    React.useEffect(() => {
        if (!panelRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.fromTo(panelRef.current.querySelectorAll('.svc-explorer-item'),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
        );
    }, [active]);

    return (
        <section id="service-explorer" ref={ref} className="fs-band fs-band--tan py-24 lg:py-36 scroll-mt-20">
            <div className="tg-container">
                <div className="svc-explorer-elem grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20 items-end">
                    <h2 className="tg-h2 lg:col-span-8">Explore Our Expertise</h2>
                    <p className="lg:col-span-4 leading-relaxed text-[#081b33cc]">Choose a discipline to see the services behind it.</p>
                </div>

                {/* Desktop split layout */}
                <div className="hidden lg:grid grid-cols-12 gap-16">
                    <div className="svc-explorer-elem col-span-4" role="tablist" aria-label="Disciplines">
                        <div className="sticky top-28">
                            {EXPLORER_CATEGORIES.map((c, i) => (
                                <button
                                    key={c.key}
                                    role="tab"
                                    aria-selected={active === c.key}
                                    onClick={() => setActive(c.key)}
                                    className={`w-full flex items-baseline gap-5 text-left py-5 border-t border-[#081b3340] last:border-b transition-colors ${active === c.key ? 'text-[var(--ink)]' : 'text-[#081b338c] hover:text-[var(--ink)]'}`}
                                >
                                    <span className="text-sm tabular-nums">0{i + 1}</span>
                                    <span className="flex-1 text-3xl tracking-[-0.03em]">{c.label}</span>
                                    <span className={`icon-arrow-right transition-all duration-300 ${active === c.key ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}></span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div ref={panelRef} className="col-span-8" role="tabpanel">
                        {category.items.map((item) => (
                            <a
                                key={item.title}
                                href={explorerUrl(item.slug)}
                                className="svc-explorer-item group grid grid-cols-12 gap-6 items-baseline py-7 border-t border-[#081b3340] last:border-b"
                            >
                                <h3 className="col-span-5 text-2xl tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2">{item.title}</h3>
                                <p className="col-span-6 text-[#081b33cc] leading-relaxed">{item.desc}</p>
                                <span className="col-span-1 text-right icon-arrow-right text-xl transition-transform duration-300 group-hover:translate-x-1.5"></span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile accordion */}
                <div className="lg:hidden border-t border-[#081b3340]">
                    {EXPLORER_CATEGORIES.map((c, i) => (
                        <div key={c.key} className="border-b border-[#081b3340]">
                            <button
                                onClick={() => setOpenMobile(openMobile === c.key ? null : c.key)}
                                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                                aria-expanded={openMobile === c.key}
                            >
                                <span className="flex items-baseline gap-4">
                                    <span className="text-sm tabular-nums">0{i + 1}</span>
                                    <span className="text-2xl tracking-[-0.02em]">{c.label}</span>
                                </span>
                                <div className={`icon-chevron-down transition-transform duration-300 ${openMobile === c.key ? 'rotate-180' : ''}`}></div>
                            </button>
                            <div className={`grid transition-all duration-300 ease-out ${openMobile === c.key ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`} style={{ overflow: 'hidden' }}>
                                <div className="min-h-0">
                                    {c.items.map((item) => (
                                        <a key={item.title} href={explorerUrl(item.slug)} className="block border-t border-[#081b3326] py-4">
                                            <h4 className="text-lg mb-1">{item.title}</h4>
                                            <p className="text-sm text-[#081b33cc]">{item.desc}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
