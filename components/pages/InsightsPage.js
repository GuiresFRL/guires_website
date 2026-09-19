function InsightsPage() {
    const filters = ['All', 'Blog', 'Research Insights', 'Industry Insights', 'Whitepapers', 'Reports', 'Publications', 'News & Updates', 'FAQs'];
    const [activeFilter, setActiveFilter] = React.useState('All');

    const articles = [
        { date: 'Oct 15, 2026', category: 'Regulatory', title: 'Navigating Global Pharmacovigilance Reporting Standards' },
        { date: 'Oct 02, 2026', category: 'Biostatistics', title: 'The Role of Biostatistics in Modern Clinical Trials' },
        { date: 'Sep 28, 2026', category: 'Research', title: 'Regulatory Trends Shaping Life Sciences in 2027' },
        { date: 'Sep 15, 2026', category: 'Data Science', title: 'Building Robust Research Data Pipelines' },
        { date: 'Sep 08, 2026', category: 'Publications', title: 'A Practical Guide to Scientific Manuscript Structure' },
        { date: 'Aug 30, 2026', category: 'Food Research', title: 'Sensory Evaluation Methods for Product Innovation' },
        { date: 'Aug 18, 2026', category: 'Industry Insights', title: 'What Diagnostics Companies Need From Their Data' },
        { date: 'Aug 05, 2026', category: 'Whitepapers', title: 'A Framework for Research Quality & Compliance' }
    ];

    // which article categories belong to each filter tab
    const filterMap = {
        'Research Insights': ['Research', 'Regulatory', 'Biostatistics', 'Data Science'],
        'Industry Insights': ['Industry Insights', 'Food Research'],
        'Whitepapers': ['Whitepapers'],
        'Publications': ['Publications']
    };
    const visible = activeFilter === 'All' ? articles : articles.filter((a) => (filterMap[activeFilter] || []).includes(a.category));

    React.useEffect(() => {
        tgReveal('.insight-page-card');
    }, []);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.fromTo('.insight-row', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'all' });
    }, [activeFilter]);

    const [featured, ...rest] = visible;
    const href = 'https://guiresfrl.github.io/guires_website/insights/';

    return (
        <React.Fragment>
            <section className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div role="tablist" aria-label="Filter insights" className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[#01012026] mb-16 lg:mb-20">
                        {filters.map((f) => (
                            <button
                                key={f}
                                role="tab"
                                aria-selected={activeFilter === f}
                                onClick={() => setActiveFilter(f)}
                                className={`relative pb-4 text-[15px] font-medium transition-colors ${activeFilter === f ? 'text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'}`}
                            >
                                {f}
                                <span className={`absolute left-0 right-0 -bottom-px h-0.5 bg-[var(--accent)] transition-transform origin-left ${activeFilter === f ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            </button>
                        ))}
                    </div>

                    {visible.length === 0 ? (
                        <div className="py-20 max-w-xl">
                            <h3 className="text-3xl font-medium tracking-[-0.03em] mb-4">Nothing here yet.</h3>
                            <p className="text-[var(--muted)] leading-relaxed mb-8">We haven&rsquo;t published anything under &ldquo;{activeFilter}&rdquo; yet. Browse everything instead.</p>
                            <button onClick={() => setActiveFilter('All')} className="tg-btn tg-btn--ghost">View all insights</button>
                        </div>
                    ) : (
                        <div id="insights-list" className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14">
                            <a href={href} className="insight-row insight-page-card group lg:col-span-7 flex flex-col justify-between min-h-[26rem] p-8 lg:p-12 tg-on-ink" style={{ background: 'var(--ink-navy)', color: '#fff' }}>
                                <div className="flex items-center justify-between">
                                    <span className="tg-eyebrow">{featured.category}</span>
                                    <span className="text-sm text-white/70">{featured.date}</span>
                                </div>
                                <div>
                                    <h3 className="text-[clamp(1.75rem,3.4vw,3.25rem)] font-medium tracking-[-0.035em] leading-[1.05] mb-8 max-w-2xl">{featured.title}</h3>
                                    <span className="tg-link">Read Article <span className="icon-arrow-right"></span></span>
                                </div>
                            </a>

                            <div className="lg:col-span-5">
                                {rest.map((art) => (
                                    <a key={art.title} href={href} className="insight-row insight-page-card group tg-hairline block py-7 first:border-t-0 lg:first:pt-0">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="tg-eyebrow">{art.category}</span>
                                            <span className="text-sm text-[var(--muted)]">{art.date}</span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-medium tracking-[-0.02em] leading-snug transition-colors group-hover:text-[var(--accent-secondary)]">{art.title}</h3>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <ContactCTA />
        </React.Fragment>
    );
}
