function ServiceProofMetrics({ service }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-metric-elem'),
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-16 bg-white border-t border-b border-black/10">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="svd-metric-elem text-[clamp(1.6rem,3vw,2.1rem)] font-semibold text-[var(--black)] leading-snug mb-4">{service.proofHeadline}</h2>
                <p className="svd-metric-elem text-[var(--black)]/70 font-medium mb-4">{service.proofSubheading}</p>
                <p className="svd-metric-elem text-[var(--muted)] leading-relaxed mb-8">{service.proofParagraph}</p>

                <p className="svd-metric-elem text-xs text-[var(--muted)] uppercase tracking-wider mb-6">Figures to be confirmed and updated with verified GUIRES data</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10 mb-8">
                    {service.metrics.map((m) => (
                        <div key={m.label} className="svd-metric-elem py-6 sm:py-0">
                            <div className="text-4xl lg:text-5xl font-bold text-[var(--accent)] mb-2">{m.value}</div>
                            <div className="text-sm text-[var(--muted)] font-medium max-w-[16rem] mx-auto">{m.label}</div>
                        </div>
                    ))}
                </div>

                <a href={service.proofCta.href} className="svd-metric-elem inline-flex items-center gap-2 rounded-full border border-[var(--accent)] text-[var(--accent)] text-sm font-semibold px-6 py-3 hover:bg-[var(--tint-2)] transition-colors duration-300">
                    {service.proofCta.label} <div className="icon-chevron-right text-xs"></div>
                </a>
            </div>
        </section>
    );
}
