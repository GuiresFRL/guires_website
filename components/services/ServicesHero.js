function ServicesHero() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;
        gsap.fromTo(ref.current.querySelectorAll('.svc-hero-elem'),
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
        );
        const paths = ref.current.querySelectorAll('.svc-hero-line');
        paths.forEach((p, i) => {
            const len = p.getTotalLength();
            gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(p, { strokeDashoffset: 0, duration: 1.4, delay: 0.5 + i * 0.12, ease: 'power2.out' });
        });
        gsap.fromTo(ref.current.querySelectorAll('.svc-hero-node'),
            { opacity: 0 },
            { opacity: 1, duration: 0.5, stagger: 0.08, delay: 0.6, ease: 'power2.out' }
        );
    }, []);

    const stages = ['DATA', 'RESEARCH', 'ANALYSIS', 'INSIGHT', 'DECISION', 'IMPACT'];
    const cloud = ['Research & Intelligence', 'Data & Analytics', 'Healthcare & Life Sciences', 'Scientific & Medical', 'Technology & Operations'];

    return (
        <section ref={ref} className="fs-band fs-band--dark tg-on-ink overflow-hidden">
            <div className="absolute inset-0 tg-grid-bg pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(180deg, transparent 5%, #000 60%)', maskImage: 'linear-gradient(180deg, transparent 5%, #000 60%)' }}></div>

            <div className="relative z-10 tg-container pt-36 pb-20 lg:pt-48 lg:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-end">
                    <div className="lg:col-span-8">
                        <div className="svc-hero-elem tg-eyebrow mb-8">Our Services</div>
                        <h1 className="svc-hero-elem tg-display !text-[clamp(2.75rem,7vw,6.75rem)] mb-9 max-w-[16ch]">
                            Research, Data &amp; Science That Move Decisions Forward
                        </h1>
                        <p className="svc-hero-elem tg-lead text-[#eef3fad9] max-w-xl mb-10">
                            Supporting organizations across research, healthcare, life sciences and technology with evidence-driven intelligence, analytics and specialized expertise.
                        </p>
                        <div className="svc-hero-elem flex flex-wrap items-center gap-3">
                            <a href="#service-ecosystem" className="tg-btn tg-btn--primary">
                                Explore Our Services <div className="icon-arrow-right"></div>
                            </a>
                            <a href="https://guiresfrl.github.io/guires_website/contact-us/" className="tg-btn tg-btn--ghost-light">
                                Talk to an Expert
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-4 relative h-[360px] hidden lg:block" aria-hidden="true">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 440" fill="none">
                            {stages.map((s, i) => {
                                const y = 30 + i * 72;
                                return (
                                    <g key={s}>
                                        {i < stages.length - 1 && (
                                            <path className="svc-hero-line" d={`M40 ${y} L40 ${y + 72}`} stroke="#7fb5ff" strokeWidth="1.5" strokeOpacity="0.6" />
                                        )}
                                        <rect className="svc-hero-node" x="33" y={y - 7} width="14" height="14" fill={i === stages.length - 1 ? '#7fb5ff' : '#081B33'} stroke="#7fb5ff" strokeWidth="1.5" />
                                        <text x="66" y={y + 5} fontFamily="inherit" fontSize="15" fontWeight="500" letterSpacing="2" fill="#eef3fa">{s}</text>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>
                </div>
            </div>

            <div className="relative z-10 border-t border-[#7fb5ff47] overflow-hidden brand-marquee-mask" aria-label="Service pillars">
                <div className="brand-marquee-track flex items-center w-max py-6">
                    {cloud.concat(cloud).map((name, i) => (
                        <span key={i} className="flex items-center text-lg lg:text-xl font-normal tracking-[-0.01em] text-[#eef3fa] whitespace-nowrap" aria-hidden={i >= cloud.length}>
                            {name}<span className="mx-8 w-2 h-2 bg-[var(--accent-cyan)] inline-block"></span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
