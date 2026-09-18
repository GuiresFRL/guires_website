function ServicesHero() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.fromTo(ref.current.querySelectorAll('.svc-hero-elem'),
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.15 }
        );
        const paths = ref.current.querySelectorAll('.svc-hero-line');
        paths.forEach((p, i) => {
            const len = p.getTotalLength();
            gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(p, { strokeDashoffset: 0, duration: 1.4, delay: 0.5 + i * 0.12, ease: 'power2.out' });
        });
        gsap.fromTo(ref.current.querySelectorAll('.svc-hero-node'),
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, delay: 0.6, ease: 'back.out(2)' }
        );
    }, []);

    const stages = ['DATA', 'RESEARCH', 'ANALYSIS', 'INSIGHT', 'DECISION', 'IMPACT'];

    return (
        <section ref={ref} className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--bg-soft)]">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--ink-navy) 1px, transparent 1px), linear-gradient(90deg, var(--ink-navy) 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="svc-hero-elem text-xs font-bold tracking-[0.25em] text-[var(--accent)] uppercase mb-6">Our Services</div>
                        <h1 className="svc-hero-elem text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold tracking-tight leading-[1.05] text-[var(--black)] mb-7">
                            Research, Data &amp; Science That Move Decisions Forward
                        </h1>
                        <p className="svc-hero-elem text-lg text-[var(--muted)] leading-relaxed max-w-xl mb-10">
                            Supporting organizations across research, healthcare, life sciences and technology with evidence-driven intelligence, analytics and specialized expertise.
                        </p>
                        <div className="svc-hero-elem flex flex-wrap items-center gap-4">
                            <a href="#service-ecosystem" className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] text-white text-sm font-semibold px-7 py-4 hover:bg-blue-800 transition-colors duration-300">
                                Explore Our Services <div className="icon-arrow-right transition-transform duration-300 group-hover:translate-x-1"></div>
                            </a>
                            <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="group inline-flex items-center gap-2 rounded-full border border-black/15 text-[var(--black)] text-sm font-semibold px-7 py-4 hover:bg-black/5 transition-colors duration-300">
                                Talk to an Expert <div className="icon-arrow-right transition-transform duration-300 group-hover:translate-x-1"></div>
                            </a>
                        </div>
                    </div>

                    <div className="relative h-[380px] lg:h-[440px]">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 440" fill="none">
                            <defs>
                                <linearGradient id="svcHeroGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="var(--accent)" />
                                    <stop offset="100%" stopColor="var(--accent-cyan)" />
                                </linearGradient>
                            </defs>
                            <path className="svc-hero-line" d="M60 40 L60 400" stroke="#CBD5E1" strokeWidth="1.5" />
                            {stages.map((s, i) => {
                                const y = 40 + i * 72;
                                return (
                                    <g key={s}>
                                        {i < stages.length - 1 && (
                                            <path className="svc-hero-line" d={`M60 ${y} L60 ${y + 72}`} stroke="url(#svcHeroGrad)" strokeWidth="2" />
                                        )}
                                        <circle className="svc-hero-node" cx="60" cy={y} r="7" fill="var(--white)" stroke="var(--accent)" strokeWidth="2.5" />
                                        <circle className="svc-hero-node" cx="60" cy={y} r="2.5" fill="var(--accent-cyan)" />
                                        <text x="82" y={y + 5} fontFamily="Inter, sans-serif" fontSize="15" fontWeight="600" fill="var(--black)" opacity="0.85">{s}</text>
                                    </g>
                                );
                            })}
                            <g opacity="0.5">
                                <circle className="svc-hero-node" cx="280" cy="90" r="3" fill="var(--accent-cyan)" />
                                <circle className="svc-hero-node" cx="340" cy="150" r="2" fill="var(--accent)" />
                                <circle className="svc-hero-node" cx="300" cy="230" r="2.5" fill="var(--accent-cyan)" />
                                <circle className="svc-hero-node" cx="370" cy="280" r="3" fill="var(--accent)" />
                                <circle className="svc-hero-node" cx="320" cy="350" r="2" fill="var(--accent-cyan)" />
                                <path className="svc-hero-line" d="M280 90 L340 150 L300 230 L370 280 L320 350" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.35" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
