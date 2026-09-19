const WELLBEING_TILES = [
    { label: 'Flexible Hours', desc: 'Work when you’re most productive' },
    { label: 'Health Coverage', desc: 'For you and your family' },
    { label: 'Work–Life Balance', desc: 'Real boundaries, respected' },
    { label: 'Learning Budget', desc: 'Courses, certifications & more' }
];

function WellbeingBand() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-well-elem, .cw-well-tile'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-white">
            <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
                <div className="lg:col-span-6">
                    <div className="cw-well-elem tg-eyebrow mb-6">Wellbeing</div>
                    <h2 className="cw-well-elem tg-h2 !text-[clamp(2rem,4.2vw,3.75rem)] mb-8">Our Commitment to Your Wellbeing</h2>
                    <p className="cw-well-elem text-lg leading-relaxed text-[var(--muted)] mb-4 max-w-xl">
                        We care about our people and are committed to supporting them at every stage of their career and life.
                    </p>
                    <p className="cw-well-elem text-lg leading-relaxed text-[var(--muted)] mb-10 max-w-xl">
                        From flexible working arrangements to health coverage and genuine work&ndash;life balance, we shape our benefits around what our team actually needs &mdash; not a one-size-fits-all checklist.
                    </p>
                    <a href="#why-work-with-us" className="cw-well-elem tg-btn tg-btn--ghost">
                        See How We Support Our Team <div className="icon-arrow-right"></div>
                    </a>
                </div>

                <ul className="lg:col-span-6">
                    {WELLBEING_TILES.map((tile, i) => (
                        <li key={tile.label} className="cw-well-tile tg-hairline flex items-baseline gap-6 py-7 last:border-b last:border-[#01012024]">
                            <span className="text-sm tabular-nums text-[var(--accent-secondary)] w-6 shrink-0">0{i + 1}</span>
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-medium tracking-[-0.03em] mb-1">{tile.label}</h3>
                                <p className="text-[var(--muted)]">{tile.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
