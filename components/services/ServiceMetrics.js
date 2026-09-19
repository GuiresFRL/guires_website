const PROOF_METRICS = [
    { target: null, suffix: '+', label: 'Years of Experience', placeholder: 'XX' },
    { target: null, suffix: '+', label: 'Countries Served', placeholder: 'XX' },
    { target: null, suffix: '+', label: 'Projects Delivered', placeholder: 'XXX' },
    { target: null, suffix: '+', label: 'Domain Experts', placeholder: 'XXX' },
    { target: null, suffix: '+', label: 'Therapeutic Areas', placeholder: 'XX' }
];

function ServiceMetrics() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-metric-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="fs-band fs-band--white py-20 lg:py-28">
            <div className="tg-container">
                <p className="svc-metric-elem tg-eyebrow mb-12">Figures to be confirmed and updated with verified GUIRES data</p>
                <div className="grid grid-cols-2 lg:grid-cols-5">
                    {PROOF_METRICS.map((m, i) => (
                        <div key={m.label} className={`svc-metric-elem tg-hairline pt-6 pb-10 ${i % 2 === 1 ? 'pl-5 lg:pl-8' : 'pr-5'} lg:pr-8 ${i > 0 ? 'lg:pl-8' : ''}`}>
                            <div className="text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.05em] text-[var(--accent)] mb-4 tabular-nums">{m.placeholder}{m.suffix}</div>
                            <div className="text-[var(--muted)] max-w-[12rem]">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
