const SERVICES_INSIGHTS = [
    { category: 'Healthcare', title: 'Building Robust Research Data Pipelines', date: 'Aug 2026', desc: 'How modern data pipelines improve research data quality and speed.', img: 'https://www.syneoshealth.com/sites/default/files/2025-05/adobestock_397316347_rgb_300.jpg', featured: true },
    { category: 'Research', title: 'The Case for Continuous Competitive Intelligence', date: 'Aug 2026', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
    { category: 'AI & Technology', title: 'Where AI Actually Helps in Research Operations', date: 'Jul 2026', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600' },
    { category: 'Healthcare', title: 'Navigating Global Pharmacovigilance Standards', date: 'Jul 2026', img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=600' }
];

function ServicesInsights() {
    const ref = React.useRef(null);
    const featured = SERVICES_INSIGHTS.find((i) => i.featured);
    const rest = SERVICES_INSIGHTS.filter((i) => !i.featured);
    const href = 'https://guiresfrl.github.io/guires_website/insights/';

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-insight-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="fs-band fs-band--white py-24 lg:py-36">
            <div className="tg-container">
                <div className="svc-insight-elem flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-20">
                    <h2 className="tg-h2">Latest Insights</h2>
                    <a href={href} className="tg-btn tg-btn--ghost self-start md:self-auto">View All Insights <div className="icon-arrow-right"></div></a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12">
                    <a href={href} className="svc-insight-elem group lg:col-span-7 block min-w-0">
                        <div className="overflow-hidden mb-6 aspect-[16/10] bg-[var(--ink)]">
                            <img src={featured.img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="flex items-center gap-4 mb-4"><span className="tg-eyebrow">{featured.category}</span><span className="text-sm text-[var(--muted)]">{featured.date}</span></div>
                        <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] tracking-[-0.03em] leading-[1.08] mb-4 max-w-2xl transition-colors group-hover:text-[var(--accent-secondary)]">{featured.title}</h3>
                        <p className="text-[var(--muted)] leading-relaxed mb-6 max-w-xl">{featured.desc}</p>
                        <span className="tg-link text-[var(--accent-secondary)]">Read Insight <span className="icon-arrow-right"></span></span>
                    </a>

                    <div className="lg:col-span-5 min-w-0">
                        {rest.map((a) => (
                            <a key={a.title} href={href} className="svc-insight-elem group tg-hairline flex items-center gap-5 py-6 first:border-t-0 first:pt-0 min-w-0">
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-4 mb-3"><span className="tg-eyebrow">{a.category}</span><span className="text-sm text-[var(--muted)]">{a.date}</span></div>
                                    <h4 className="text-xl tracking-[-0.02em] leading-snug transition-colors group-hover:text-[var(--accent-secondary)]">{a.title}</h4>
                                </div>
                                <div className="w-24 h-24 overflow-hidden shrink-0 bg-[var(--ink)]">
                                    <img src={a.img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
