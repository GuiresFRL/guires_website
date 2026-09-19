function PageHero({ eyebrow, title, subtitle }) {
    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.fromTo('.page-hero-elem',
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
        );
    }, []);

    return (
        <section className="tg-on-ink relative pt-32 pb-16 lg:pt-44 lg:pb-24 text-white overflow-hidden" style={{ background: 'var(--ink-navy)' }} data-name="page-hero" data-file="components/PageHero.js">
            <div className="absolute inset-0 tg-grid-bg opacity-60 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 60%)', maskImage: 'linear-gradient(180deg, transparent, #000 60%)' }}></div>
            <div className="tg-container relative z-10">
                {eyebrow && <div className="page-hero-elem tg-eyebrow mb-7">{eyebrow}</div>}
                <h1 className="page-hero-elem tg-display max-w-[16ch] !text-[clamp(2.5rem,6.6vw,6rem)] mb-8">{title}</h1>
                {subtitle && <p className="page-hero-elem tg-lead text-white/75 max-w-2xl">{subtitle}</p>}
            </div>
        </section>
    );
}
