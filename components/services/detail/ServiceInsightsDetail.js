function ServiceInsightsDetail({ service }) {
    const ref = React.useRef(null);
    const articles = SERVICE_INSIGHTS_POOL.filter((a) => service.insightCategories.includes(a.category)).slice(0, 3);
    const list = articles.length ? articles : SERVICE_INSIGHTS_POOL.slice(0, 3);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-insight-card'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-10">
                    <h2 className="tg-h2 !text-[clamp(1.9rem,3.6vw,3rem)]">Related Insights</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {list.map((a) => (
                        <a key={a.title} href="https://guiresfrl.github.io/guires_website/insights/" className="svd-insight-card group rounded-2xl overflow-hidden border border-black/10 bg-[var(--bg-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="relative h-40 overflow-hidden">
                                <img src={a.img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-5">
                                <div className="text-[11px] font-bold tracking-wider text-[var(--accent)] uppercase mb-2">{a.category}</div>
                                <h3 className="text-sm font-bold text-[var(--black)] leading-snug">{a.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
