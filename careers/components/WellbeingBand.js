const WELLBEING_TILES = [
    { icon: 'icon-clock', label: 'Flexible Hours', desc: 'Work when you’re most productive' },
    { icon: 'icon-heart-pulse', label: 'Health Coverage', desc: 'For you and your family' },
    { icon: 'icon-scale', label: 'Work–Life Balance', desc: 'Real boundaries, respected' },
    { icon: 'icon-book-open', label: 'Learning Budget', desc: 'Courses, certifications & more' }
];

function WellbeingBand() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.fromTo(ref.current.querySelectorAll('.cw-well-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
        );
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-well-tile'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-20 bg-[var(--cw-bg)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                        <h2 className="cw-well-elem text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] mb-6" style={{ color: 'var(--cw-accent-secondary)' }}>
                            Our Commitment to Your Wellbeing
                        </h2>
                        <p className="cw-well-elem text-lg leading-relaxed mb-4" style={{ color: 'var(--cw-accent-secondary)' }}>
                            We care about our people and are committed to supporting them at every stage of their career and life.
                        </p>
                        <p className="cw-well-elem text-lg leading-relaxed mb-10" style={{ color: 'var(--cw-accent-secondary)' }}>
                            From flexible working arrangements to health coverage and genuine work&ndash;life balance, we shape our benefits around what our team actually needs &mdash; not a one-size-fits-all checklist.
                        </p>
                        <a
                            href="#why-work-with-us"
                            className="cw-well-elem cw-btn-arrow inline-flex items-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-base font-semibold px-8 py-4 hover:bg-[var(--cw-accent-dark)] transition-colors duration-300"
                        >
                            See How We Support Our Team <div className="icon-arrow-right transition-transform duration-300"></div>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {WELLBEING_TILES.map((tile) => (
                            <div
                                key={tile.label}
                                className="cw-well-tile group rounded-2xl bg-[var(--cw-surface)] border border-[var(--cw-border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0C4DA24D]"
                            >
                                <div className="w-11 h-11 rounded-xl bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110">
                                    <div className={tile.icon}></div>
                                </div>
                                <h3 className="text-sm font-semibold text-[var(--cw-text)] mb-1">{tile.label}</h3>
                                <p className="text-xs text-[var(--cw-muted)] leading-relaxed">{tile.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
