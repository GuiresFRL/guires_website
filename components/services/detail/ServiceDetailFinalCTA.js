function ServiceDetailFinalCTA({ service }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-cta-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    const title = service ? service.title : 'our services';

    return (
        <section ref={ref} className="relative overflow-hidden" style={{ background: 'var(--ink-navy)' }}>
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center min-h-[280px]">
                <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16">
                    <p className="svd-cta-elem text-2xl lg:text-3xl font-semibold text-white leading-snug max-w-lg mb-8">
                        For more information on our {title} services or to request a quote, please contact <span className="text-[var(--accent-cyan)] underline decoration-2 underline-offset-4">our specialist team</span>.
                    </p>
                    <a href="https://guiresfrl.github.io/guires_website/contact-us/" className="svd-cta-elem group inline-flex items-center gap-2 rounded-full bg-white text-[var(--ink-navy)] text-sm font-semibold px-7 py-4 hover:bg-white/90 transition-colors duration-300">
                        Get In Touch <div className="icon-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></div>
                    </a>
                </div>

                <div className="svd-cta-elem relative hidden lg:block h-full min-h-[280px] overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
                        <rect x="240" y="140" width="160" height="160" fill="var(--accent-cyan)" fillOpacity="0.9" />
                        {[40, 65, 90, 115, 140, 165].map((r) => (
                            <circle key={r} cx="260" cy="150" r={r} stroke="#fff" strokeOpacity="0.35" strokeWidth="1" fill="none" />
                        ))}
                    </svg>
                </div>
            </div>

            <div className="relative z-10 flex" aria-hidden="true">
                {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} className="flex-1 h-1" style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.15)' : 'transparent' }}></div>
                ))}
            </div>
        </section>
    );
}
