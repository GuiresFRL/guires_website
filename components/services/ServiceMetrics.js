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
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-metric-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-20 lg:py-28 bg-white border-t border-b border-black/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <p className="svc-metric-elem text-center text-xs text-[var(--muted)] uppercase tracking-wider mb-10">Figures to be confirmed and updated with verified GUIRES data</p>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                    {PROOF_METRICS.map((m) => (
                        <div key={m.label} className="svc-metric-elem text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-[var(--accent)] mb-2">{m.placeholder}{m.suffix}</div>
                            <div className="text-sm text-[var(--muted)] font-medium">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
