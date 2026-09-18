function RelatedServices({ service }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-related-card'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section id="related-services" ref={ref} className="py-14 lg:py-16 bg-[var(--bg-soft)] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-10">
                    <h2 className="text-[clamp(1.9rem,3.6vw,2.5rem)] font-bold tracking-tight text-[var(--black)]">Explore Related Expertise</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {service.relatedServices.map((slug) => {
                        const rel = SERVICE_DIRECTORY[slug];
                        if (!rel) return null;
                        return (
                            <a key={slug} href={serviceUrl(slug)} className="svd-related-card group rounded-2xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="text-xs font-bold tracking-wider text-[var(--accent)] uppercase mb-3">{rel.category}</div>
                                <h3 className="text-lg font-bold text-[var(--black)] mb-4">{rel.title}</h3>
                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                                    Explore <div className="icon-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
