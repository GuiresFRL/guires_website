function CareersCTA({ eyebrow = 'Join Us', heading, subtext, buttonLabel, buttonHref }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-cta-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="relative py-24 lg:py-28 bg-[var(--cw-ink)] overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true">
                <div className="cw-float-slow absolute -top-24 -right-16 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, var(--cw-accent) 0%, transparent 70%)' }}></div>
                <div className="cw-float-slower absolute -bottom-32 -left-20 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, var(--cw-accent-secondary) 0%, transparent 70%)' }}></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <div className="cw-cta-elem text-xs font-bold tracking-[0.2em] text-[var(--cw-accent-light)] uppercase mb-5">{eyebrow}</div>
                <h2 className="cw-cta-elem text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">{heading}</h2>
                {subtext && <p className="cw-cta-elem text-lg text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">{subtext}</p>}
                <a
                    href={buttonHref}
                    className="cw-cta-elem cw-btn-arrow inline-flex items-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-base font-semibold px-8 py-4 hover:bg-[var(--cw-accent-dark)] transition-colors duration-300"
                >
                    {buttonLabel} <div className="icon-arrow-right transition-transform duration-300"></div>
                </a>
            </div>
        </section>
    );
}
