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
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelector('.svc-lifecycle-heading'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );

        const line = ref.current.querySelector('.svc-lifecycle-line');
        if (line) {
            const len = line.getTotalLength();
            gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(line, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: ref.current, start: 'top 65%' } });
        }

        gsap.utils.toArray(ref.current.querySelectorAll('.svc-lifecycle-node')).forEach((node, i) => {
            gsap.fromTo(node,
                { opacity: 0, scale: 0.6 },
                { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', scrollTrigger: { trigger: ref.current, start: 'top 65%' }, delay: i * 0.15 }
            );
        });

        gsap.fromTo(ref.current.querySelectorAll('.svc-lifecycle-content'),
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 60%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="svc-lifecycle-heading max-w-2xl mb-20">
                    <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[var(--black)]">From Complex Questions to Clear Decisions</h2>
                </div>

                <div className="relative">
                    <svg className="hidden lg:block absolute top-6 left-0 w-full h-1" viewBox="0 0 1000 4" preserveAspectRatio="none" fill="none">
                        <path className="svc-lifecycle-line" d="M0 2 L1000 2" stroke="var(--accent)" strokeWidth="2" />
                    </svg>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
                        {LIFECYCLE_STAGES.map((s) => (
                            <div key={s.num} className="relative">
                                <div className="svc-lifecycle-node relative z-10 w-12 h-12 rounded-full bg-white border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] text-lg mb-6">
                                    <div className={s.icon}></div>
                                </div>
                                <div className="svc-lifecycle-content">
                                    <div className="text-xs font-bold text-[var(--muted)] mb-2">{s.num}</div>
                                    <h3 className="text-lg font-bold text-[var(--black)] mb-2">{s.title}</h3>
                                    <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
