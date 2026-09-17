const LOCATION_PINS = [
    { label: 'Chennai', slug: 'chennai', x: 68, y: 62 },
    { label: 'Bengaluru', slug: 'bengaluru', x: 64, y: 66 },
    { label: 'Mumbai', slug: 'mumbai', x: 58, y: 54 }
];

function OurLocations() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-loc-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
        gsap.fromTo(ref.current.querySelectorAll('.cw-loc-pin'),
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(2)', scrollTrigger: { trigger: ref.current, start: 'top 78%' }, delay: 0.3 }
        );
    }, []);

    const roleCount = (slug) => JOBS_DATA.filter((j) => j.locationSlug === slug).length;
    const remoteCount = JOBS_DATA.filter((j) => j.locationSlug === 'remote').length;

    return (
        <section ref={ref} className="py-14 lg:py-20 bg-[var(--cw-bg)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-14">
                    <div className="cw-loc-elem text-xs font-bold tracking-[0.2em] text-[var(--cw-accent)] uppercase mb-4">Where We Work</div>
                    <h2 className="cw-loc-elem text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--cw-text)]">Our Locations</h2>
                    <div className="cw-loc-elem w-12 h-1.5 rounded-full bg-[var(--cw-accent)] mt-5"></div>
                </div>

                <div className="cw-loc-elem relative rounded-2xl bg-[var(--cw-surface)] border border-[var(--cw-border)] overflow-hidden mb-8">
                    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" fill="none">
                        <path d="M15 30 Q 20 20, 32 22 Q 40 18, 48 24 Q 58 20, 66 26 Q 78 22, 86 30 Q 90 38, 84 44 Q 88 52, 80 58 Q 82 68, 72 72 Q 68 82, 56 80 Q 48 88, 38 82 Q 28 86, 22 76 Q 12 74, 14 62 Q 8 54, 14 46 Q 10 38, 15 30 Z" stroke="var(--cw-accent)" strokeWidth="0.6" fill="var(--cw-accent)" fillOpacity="0.3" />
                        {Array.from({ length: 60 }).map((_, i) => (
                            <circle key={i} cx={(i * 37) % 100} cy={(i * 53) % 100} r="0.5" fill="var(--cw-accent)" />
                        ))}
                    </svg>
                    <div className="relative h-64 sm:h-80">
                        {LOCATION_PINS.map((pin) => (
                            <div key={pin.slug} className="cw-loc-pin absolute -translate-x-1/2 -translate-y-full flex flex-col items-center" style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
                                <div className="rounded-lg bg-[var(--cw-ink)] text-white text-xs font-semibold px-2.5 py-1 mb-1 whitespace-nowrap shadow-lg">{pin.label}</div>
                                <div className="w-3 h-3 rounded-full bg-[var(--cw-accent)] border-2 border-white shadow-md"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {LOCATION_PINS.map((pin) => (
                        <div key={pin.slug} className="cw-loc-elem rounded-xl bg-[var(--cw-surface)] border border-[var(--cw-border)] p-5 text-center">
                            <div className="w-9 h-9 rounded-full bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center mx-auto mb-3"><div className="icon-map-pin text-sm"></div></div>
                            <div className="text-sm font-bold text-[var(--cw-text)] mb-1">{pin.label}</div>
                            <div className="text-xs text-[var(--cw-muted)]">{roleCount(pin.slug)} open role{roleCount(pin.slug) === 1 ? '' : 's'}</div>
                        </div>
                    ))}
                    <div className="cw-loc-elem rounded-xl bg-[var(--cw-surface)] border border-[var(--cw-border)] p-5 text-center">
                        <div className="w-9 h-9 rounded-full bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center mx-auto mb-3"><div className="icon-globe text-sm"></div></div>
                        <div className="text-sm font-bold text-[var(--cw-text)] mb-1">Remote</div>
                        <div className="text-xs text-[var(--cw-muted)]">{remoteCount} open role{remoteCount === 1 ? '' : 's'}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
