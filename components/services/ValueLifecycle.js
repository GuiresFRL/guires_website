const LIFECYCLE_STAGES = [
    { num: '01', title: 'Understand', icon: 'icon-search', desc: 'We start by understanding the real question behind the request.' },
    { num: '02', title: 'Research', icon: 'icon-microscope', desc: 'Gathering evidence through primary and secondary research.' },
    { num: '03', title: 'Analyze', icon: 'icon-chart-column', desc: 'Applying rigorous statistical and analytical methods.' },
    { num: '04', title: 'Activate', icon: 'icon-zap', desc: 'Turning analysis into clear, actionable recommendations.' },
    { num: '05', title: 'Measure', icon: 'icon-target', desc: 'Tracking outcomes to validate impact and refine approach.' }
];

function ValueLifecycle() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-lifecycle-heading, .svc-lifecycle-content'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 70%' } }
        );
    }, []);

    return (
        <section ref={ref} className="fs-band fs-band--white py-24 lg:py-36 overflow-hidden">
            <div className="tg-container">
                <div className="svc-lifecycle-heading grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                    <h2 className="tg-h2 lg:col-span-8">From Complex Questions to Clear Decisions</h2>
                    <p className="lg:col-span-4 text-[var(--muted)] leading-relaxed">Every engagement follows the same five-stage path, from the first question to measured impact.</p>
                </div>

                <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                    {LIFECYCLE_STAGES.map((s, i) => (
                        <li key={s.num} className="svc-lifecycle-content border-t-2 border-[var(--ink)] pt-6 pb-10 lg:pr-8">
                            <div className="text-[clamp(3rem,5vw,4.5rem)] leading-none tracking-[-0.05em] tabular-nums mb-10 lg:mb-16" style={{ color: i === LIFECYCLE_STAGES.length - 1 ? 'var(--accent)' : 'var(--ink)' }}>{s.num}</div>
                            <h3 className="text-2xl tracking-[-0.02em] mb-3">{s.title}</h3>
                            <p className="text-[var(--muted)] leading-relaxed">{s.desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
