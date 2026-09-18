function svcUrl(slug) {
    if (slug === 'data-science-analytics') {
        return 'https://guiresfrl.github.io/guires_website/services/data-science-analytics.html';
    }
    return `https://guiresfrl.github.io/guires_website/services/${slug}/`;
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
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-explorer-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    React.useEffect(() => {
        if (!panelRef.current) return;
        gsap.fromTo(panelRef.current.querySelectorAll('.svc-explorer-item'),
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
        );
    }, [active]);

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-[var(--bg-soft)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="svc-explorer-elem max-w-2xl mb-14">
                    <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[var(--black)]">Explore Our Expertise</h2>
                </div>

                {/* Desktop split layout */}
                <div className="hidden lg:grid grid-cols-12 gap-10">
                    <div className="svc-explorer-elem col-span-4">
                        <div className="flex flex-col gap-1 sticky top-28">
                            {EXPLORER_CATEGORIES.map((c) => (
                                <button
                                    key={c.key}
                                    onClick={() => setActive(c.key)}
                                    className={`flex items-center gap-3 text-left px-5 py-4 rounded-xl transition-all duration-300 ${active === c.key ? 'bg-white shadow-md' : 'hover:bg-white/60'}`}
                                >
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${active === c.key ? 'bg-[var(--accent)] text-white' : 'bg-black/5 text-[var(--muted)]'}`}>
                                        <div className={c.icon}></div>
                                    </div>
                                    <span className={`font-semibold ${active === c.key ? 'text-[var(--black)]' : 'text-[var(--muted)]'}`}>{c.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div ref={panelRef} className="col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {category.items.map((item) => (
                                <a
                                    key={item.title}
                                    href={svcUrl(item.slug)}
                                    className="svc-explorer-item group rounded-2xl bg-white border border-black/10 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                >
                                    <h3 className="text-lg font-bold text-[var(--black)] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{item.desc}</p>
                                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                                        Learn more <div className="icon-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile accordion */}
                <div className="lg:hidden divide-y divide-black/10 border-t border-b border-black/10">
                    {EXPLORER_CATEGORIES.map((c) => (
                        <div key={c.key}>
                            <button
                                onClick={() => setOpenMobile(openMobile === c.key ? null : c.key)}
                                className="w-full flex items-center justify-between gap-4 py-5"
                            >
                                <span className="flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${openMobile === c.key ? 'bg-[var(--accent)] text-white' : 'bg-black/5 text-[var(--muted)]'}`}><div className={c.icon}></div></div>
                                    <span className="font-semibold text-[var(--black)]">{c.label}</span>
                                </span>
                                <div className={`icon-chevron-down text-[var(--muted)] transition-transform duration-300 ${openMobile === c.key ? 'rotate-180' : ''}`}></div>
                            </button>
                            <div className={`grid transition-all duration-300 ease-out ${openMobile === c.key ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`} style={{ overflow: 'hidden' }}>
                                <div className="min-h-0 space-y-3">
                                    {c.items.map((item) => (
                                        <a key={item.title} href={svcUrl(item.slug)} className="block rounded-xl bg-white border border-black/10 p-5">
                                            <h4 className="font-bold text-[var(--black)] mb-1">{item.title}</h4>
                                            <p className="text-sm text-[var(--muted)]">{item.desc}</p>
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
