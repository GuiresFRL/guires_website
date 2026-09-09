function PageHero({ eyebrow, title, subtitle }) {
    React.useEffect(() => {
        gsap.fromTo('.page-hero-elem',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-14 bg-gray-50 border-b border-black/5 overflow-hidden" data-name="page-hero" data-file="components/PageHero.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {eyebrow && (
                    <div className="page-hero-elem text-sm font-bold tracking-wider text-[var(--accent)] uppercase mb-4">
                        {eyebrow}
                    </div>
                )}
                <h1 className="page-hero-elem text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight mb-4 max-w-4xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="page-hero-elem text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
