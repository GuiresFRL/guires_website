function CareersHero() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.fromTo(ref.current.querySelectorAll('.cw-hero-elem'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
        );
        gsap.fromTo(ref.current.querySelectorAll('.cw-hero-photo'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.3 }
        );
    }, []);

    const photo = (
        <div className="relative">
            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-[var(--accent)]"></div>
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[var(--purple)]"></div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ink)]">
                <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=900"
                    alt="Colleagues walking and talking in the office"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    );

    return (
        <section ref={ref} className="tg-on-ink relative overflow-hidden text-white" style={{ background: 'var(--ink-navy)' }}>
            <div className="absolute inset-0 tg-grid-bg opacity-60 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 60%)', maskImage: 'linear-gradient(180deg, transparent, #000 60%)' }}></div>
            <div className="tg-container relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                    <div className="cw-hero-elem tg-eyebrow mb-8">We&rsquo;re hiring across engineering, data, design &amp; research</div>
                    <h1 className="cw-hero-elem tg-display !text-[clamp(3rem,7.4vw,7rem)] mb-8 max-w-[12ch]">
                        Build Your Future <span className="text-[var(--accent-cyan)]">With Us</span>
                    </h1>
                    <p className="cw-hero-elem tg-lead text-white/75 max-w-xl mb-10">
                        Join a talented team solving meaningful problems in healthcare and life sciences research. We&rsquo;re looking for curious, driven people who want their work to matter.
                    </p>
                    <div className="cw-hero-elem flex flex-wrap gap-3">
                        <a href={`${CAREERS_BASE}/jobs/`} className="tg-btn tg-btn--primary">
                            View All Jobs <div className="icon-arrow-right"></div>
                        </a>
                        <a href="#why-work-with-us" className="tg-btn tg-btn--ghost-light">Why GUIRES</a>
                    </div>
                </div>
                <div className="cw-hero-photo lg:col-span-5 max-w-md w-full mx-auto lg:mx-0 lg:justify-self-end">
                    {photo}
                </div>
            </div>
        </section>
    );
}
