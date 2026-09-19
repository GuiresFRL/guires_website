const CAREERS_STATS = [
    { value: '250+', label: 'Research Projects Delivered' },
    { value: '40+', label: 'Countries Served' },
    { value: '1500+', label: 'Domain Experts' },
    { value: '85+', label: 'Publications Supported' }
];

function StatsBand() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-stats-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
        );
    }, []);

    return (
        <section ref={ref} className="tg-on-ink py-20 lg:py-28 text-white" style={{ background: 'var(--ink-navy)' }}>
            <div className="tg-container">
                <div className="cw-stats-elem tg-eyebrow mb-12">The team behind the work</div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {CAREERS_STATS.map((s, i) => (
                        <div key={s.label} className={`cw-stats-elem tg-hairline pt-6 pb-10 ${i % 2 === 1 ? 'pl-5 lg:pl-8' : 'pr-5'} lg:pr-8 ${i > 0 ? 'lg:pl-8' : ''}`}>
                            <div className="text-[clamp(2.75rem,6vw,5.5rem)] font-medium tracking-[-0.05em] leading-none mb-4 tabular-nums">{s.value}</div>
                            <div className="text-white/75 max-w-[13rem]">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
