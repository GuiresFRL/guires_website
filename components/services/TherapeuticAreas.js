function TAIllustration({ type, light }) {
    const c = light ? '#FFFFFF' : 'var(--accent)';
    const c2 = 'var(--accent-cyan)';
    const svgs = {
        oncology: (
            <g>
                <circle cx="50" cy="50" r="26" stroke={c} strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="14" stroke={c2} strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="50" r="3" fill={c} />
                <circle cx="76" cy="38" r="3" fill={c2} />
                <circle cx="30" cy="70" r="2.5" fill={c} />
                <circle cx="72" cy="68" r="2" fill={c2} />
            </g>
        ),
        cardiology: (
            <path d="M10 55 L28 55 L36 35 L48 75 L58 45 L66 55 L90 55" stroke={c} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        ),
        neurology: (
            <g stroke={c} strokeWidth="1.4" fill="none">
                <circle cx="30" cy="30" r="4" fill={c} stroke="none" />
                <circle cx="70" cy="28" r="4" fill={c2} stroke="none" />
                <circle cx="20" cy="65" r="4" fill={c2} stroke="none" />
                <circle cx="55" cy="55" r="4" fill={c} stroke="none" />
                <circle cx="80" cy="68" r="4" fill={c} stroke="none" />
                <path d="M30 30 L55 55 L70 28 M55 55 L20 65 M55 55 L80 68" />
            </g>
        ),
        immunology: (
            <g stroke={c} strokeWidth="1.6" fill="none">
                <path d="M50 15 L72 30 L72 60 L50 85 L28 60 L28 30 Z" />
                <path d="M50 15 L50 85 M28 30 L72 60 M72 30 L28 60" strokeOpacity="0.5" />
                <circle cx="50" cy="50" r="4" fill={c2} stroke="none" />
            </g>
        ),
        rareDisease: (
            <g stroke={c} strokeWidth="1.8" fill="none">
                <path d="M50 20 C 65 20, 78 33, 78 50 C 78 67, 65 80, 50 80 C 35 80, 22 67, 22 50" strokeDasharray="6 5" />
                <circle cx="22" cy="50" r="3" fill={c2} stroke="none" />
                <circle cx="50" cy="20" r="3" fill={c} stroke="none" />
            </g>
        ),
        diabetes: (
            <g stroke={c} strokeWidth="2" fill="none">
                <path d="M15 55 Q 30 30 45 55 T 75 55" />
                <circle cx="30" cy="42" r="2.5" fill={c2} stroke="none" />
                <circle cx="60" cy="42" r="2.5" fill={c2} stroke="none" />
            </g>
        ),
        infectious: (
            <g>
                <circle cx="50" cy="50" r="20" stroke={c} strokeWidth="2" fill="none" />
                {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    const x1 = 50 + Math.cos(angle) * 20;
                    const y1 = 50 + Math.sin(angle) * 20;
                    const x2 = 50 + Math.cos(angle) * 28;
                    const y2 = 50 + Math.sin(angle) * 28;
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i % 2 === 0 ? c : c2} strokeWidth="2" strokeLinecap="round" />;
                })}
            </g>
        ),
        womensHealth: (
            <g stroke={c} strokeWidth="2" fill="none">
                <circle cx="50" cy="38" r="18" />
                <line x1="50" y1="56" x2="50" y2="82" />
                <line x1="38" y1="70" x2="62" y2="70" />
                <circle cx="50" cy="38" r="4" fill={c2} stroke="none" />
            </g>
        )
    };
    return (
        <svg viewBox="0 0 100 100" className="w-16 h-16">
            {svgs[type]}
        </svg>
    );
}

const THERAPEUTIC_AREAS = [
    { name: 'Oncology', type: 'oncology' },
    { name: 'Cardiology', type: 'cardiology' },
    { name: 'Neurology', type: 'neurology' },
    { name: 'Immunology', type: 'immunology' },
    { name: 'Rare Disease', type: 'rareDisease' },
    { name: 'Diabetes', type: 'diabetes' },
    { name: 'Infectious Disease', type: 'infectious', img: 'https://www.costellomedical.com/wp-content/uploads/2025/03/infectious-disease-modelling.png' },
    { name: 'Women’s Health', type: 'womensHealth' }
];

function TherapeuticAreas() {
    const ref = React.useRef(null);
    const scrollerRef = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-ta-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    const scrollBy = (dir) => {
        if (scrollerRef.current) scrollerRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    };

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="svc-ta-elem flex items-end justify-between gap-6 mb-12">
                    <h2 className="tg-h2 !text-[clamp(2rem,4vw,3.5rem)] max-w-2xl">Deep Expertise Across Therapeutic Areas</h2>
                    <div className="hidden lg:flex items-center gap-2 shrink-0">
                        <button onClick={() => scrollBy(-1)} aria-label="Scroll left" className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors"><div className="icon-chevron-left"></div></button>
                        <button onClick={() => scrollBy(1)} aria-label="Scroll right" className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black/5 transition-colors"><div className="icon-chevron-right"></div></button>
                    </div>
                </div>
            </div>

            <div ref={scrollerRef} className="svc-ta-elem flex gap-5 overflow-x-auto pb-4 px-6 lg:px-12 snap-x snap-mandatory" style={{ scrollbarWidth: 'thin' }}>
                {THERAPEUTIC_AREAS.map((ta) => (
                    <div key={ta.name} className={`relative shrink-0 w-64 snap-start rounded-2xl overflow-hidden border border-black/10 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${ta.img ? '' : 'bg-[var(--bg-soft)]'}`}>
                        {ta.img && (
                            <React.Fragment>
                                <img src={ta.img} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#081B33CC]"></div>
                            </React.Fragment>
                        )}
                        <div className="relative z-10">
                            <TAIllustration type={ta.type} light={!!ta.img} />
                            <h3 className={`text-lg font-bold mt-6 ${ta.img ? 'text-white' : 'text-[var(--black)]'}`}>{ta.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
