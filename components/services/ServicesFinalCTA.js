function ServicesFinalCTA() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-cta-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--ink-navy)' }}>
            <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" viewBox="0 0 800 400" fill="none">
                {Array.from({ length: 14 }).map((_, i) => {
                    const x = (i * 61) % 800;
                    const y = (i * 97) % 400;
                    return <circle key={i} cx={x} cy={y} r="2" fill="var(--accent-cyan)" />;
                })}
                <path d="M50 80 L200 150 L350 60 L500 200 L650 100 L750 250" stroke="var(--accent-cyan)" strokeWidth="1" strokeOpacity="0.4" fill="none" />
            </svg>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <h2 className="svc-cta-elem text-[clamp(1.9rem,4vw,2.75rem)] font-bold tracking-tight text-white mb-6">Have a Research or Data Challenge?</h2>
                <p className="svc-cta-elem text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">Tell us what you&rsquo;re trying to solve and our experts will help identify the right approach.</p>
                <div className="svc-cta-elem flex flex-wrap items-center justify-center gap-4">
                    <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] text-white text-sm font-semibold px-8 py-4 hover:bg-blue-700 transition-colors duration-300">
                        Talk to Our Experts <div className="icon-arrow-right transition-transform duration-300 group-hover:translate-x-1"></div>
                    </a>
                    <a href="#service-ecosystem" className="group inline-flex items-center gap-2 rounded-full border border-white/25 text-white text-sm font-semibold px-8 py-4 hover:bg-white/10 transition-colors duration-300">
                        Explore Our Services <div className="icon-arrow-right transition-transform duration-300 group-hover:translate-x-1"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
