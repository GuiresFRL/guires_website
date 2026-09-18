function ServiceApproach() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelector('.svd-approach-heading'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
        const line = ref.current.querySelector('.svd-approach-line');
        if (line) {
            const len = line.getTotalLength();
            gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(line, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: ref.current, start: 'top 65%' } });
        }
        gsap.fromTo(ref.current.querySelectorAll('.svd-approach-node'),
            { opacity: 0, scale: 0.6 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(2)', scrollTrigger: { trigger: ref.current, start: 'top 65%' } }
        );
        gsap.fromTo(ref.current.querySelectorAll('.svd-approach-content'),
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 60%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-24 lg:py-32 bg-[var(--bg-soft)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="svd-approach-heading max-w-2xl mb-20">
                    <h2 className="text-[clamp(1.9rem,3.6vw,2.5rem)] font-bold tracking-tight text-[var(--black)]">Our Approach</h2>
                </div>
                <div className="relative">
                    <svg className="hidden lg:block absolute top-6 left-0 w-full h-1" viewBox="0 0 1000 4" preserveAspectRatio="none" fill="none">
                        <path className="svd-approach-line" d="M0 2 L1000 2" stroke="var(--accent)" strokeWidth="2" />
                    </svg>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
                        {SERVICE_PROCESS_STEPS.map((s) => (
                            <div key={s.num} className="relative">
                                <div className="svd-approach-node relative z-10 w-12 h-12 rounded-full bg-white border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] text-sm font-bold mb-6">{s.num}</div>
                                <div className="svd-approach-content">
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
