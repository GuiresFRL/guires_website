const CAREERS_STATS = [
    { value: '250+', label: 'Research Projects Delivered' },
    { value: '40+', label: 'Countries Served' },
    { value: '1500+', label: 'Domain Experts' },
    { value: '85+', label: 'Publications Supported' }
];

function StatsBand() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-stats-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-16 lg:py-20 bg-[var(--cw-bg)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="relative rounded-2xl overflow-hidden grid grid-cols-2 lg:grid-cols-4">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0B1120CC]"></div>
                    {CAREERS_STATS.map((s, i) => (
                        <div key={s.label} className={`cw-stats-elem relative p-7 lg:p-10 text-center ${i % 2 === 1 ? 'border-l border-white/15' : ''} ${i >= 2 ? 'border-t lg:border-t-0 border-white/15' : ''} ${i === 2 ? 'lg:border-l' : ''}`}>
                            <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                            <div className="text-xs sm:text-sm text-white/60 font-medium">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
