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

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-insight-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-14">
                    <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[var(--black)]">Latest Insights</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <a href="https://guiresfrl.github.io/guires_website/insights.html" className="svc-insight-elem group rounded-2xl overflow-hidden border border-black/10">
                        <div className="relative h-72 overflow-hidden">
                            <img src={featured.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-7">
                            <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-[var(--accent)] uppercase mb-3"><span>{featured.category}</span><span className="text-[var(--muted)] font-medium normal-case tracking-normal">{featured.date}</span></div>
                            <h3 className="text-xl font-bold text-[var(--black)] mb-3">{featured.title}</h3>
                            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{featured.desc}</p>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">Read Insight <div className="icon-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></div></div>
                        </div>
                    </a>

                    <div className="grid grid-rows-3 gap-4">
                        {rest.map((a) => (
                            <a key={a.title} href="https://guiresfrl.github.io/guires_website/insights.html" className="svc-insight-elem group flex items-center gap-5 rounded-2xl border border-black/10 p-4 transition-all duration-300 hover:shadow-md">
                                <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                                    <img src={a.img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[11px] font-bold tracking-wider text-[var(--accent)] uppercase mb-1">{a.category}</div>
                                    <h4 className="text-sm font-bold text-[var(--black)] leading-snug truncate">{a.title}</h4>
                                    <div className="text-xs text-[var(--muted)] mt-1">{a.date}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
