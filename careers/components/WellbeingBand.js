function WellbeingBand() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.fromTo(ref.current.querySelectorAll('.cw-well-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-20 bg-[var(--cw-bg)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-3xl">
                    <h2 className="cw-well-elem text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6" style={{ color: 'var(--cw-accent-secondary)' }}>
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
            </div>
        </section>
    );
}
