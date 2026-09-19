function CareersCTA({ eyebrow = 'Join Us', heading, subtext, buttonLabel, buttonHref }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-cta-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
        );
    }, []);

    return (
        <section ref={ref} className="relative py-24 lg:py-40 overflow-hidden text-white" style={{ background: 'var(--accent)' }}>
            <svg className="absolute -right-24 -bottom-40 w-[560px] h-[560px] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                <circle cx="200" cy="200" r="190" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="140" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="90" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.5" />
            </svg>
            <div className="relative z-10 tg-container">
                <div className="cw-cta-elem tg-eyebrow !text-white mb-8">{eyebrow}</div>
                <h2 className="cw-cta-elem tg-display max-w-[14ch] mb-10 !text-[clamp(2.75rem,7.6vw,7.5rem)]">{heading}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    {subtext && <p className="cw-cta-elem lg:col-span-6 tg-lead text-white/90 max-w-xl">{subtext}</p>}
                    <div className="cw-cta-elem lg:col-span-6 lg:text-right">
                        <a href={buttonHref} className="tg-btn tg-btn--light !py-5 !px-8 !text-base">
                            {buttonLabel} <div className="icon-arrow-right"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
