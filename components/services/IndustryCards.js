const INDUSTRIES = [
    { name: 'Pharmaceutical', icon: 'icon-pill' },
    { name: 'Biotechnology', icon: 'icon-dna' },
    { name: 'Healthcare', icon: 'icon-heart-pulse' },
    { name: 'Medical Devices', icon: 'icon-activity' },
    { name: 'Food & Nutrition', icon: 'icon-apple' },
    { name: 'Consumer Health', icon: 'icon-shield-check' },
    { name: 'Technology', icon: 'icon-cpu' },
    { name: 'Academic & Research', icon: 'icon-graduation-cap' },
    { name: 'Government & Public Sector', icon: 'icon-landmark' }
];

const INDUSTRY_CAPABILITIES = ['Research Intelligence', 'Data & Analytics', 'Scientific Support', 'Technology Solutions'];

function IndustryCards() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-industry-card'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } }
        );
    }, []);

    return (
        <section ref={ref} className="fs-band fs-band--paper py-24 lg:py-36">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
                    <h2 className="tg-h2 lg:col-span-8">Expertise Built Around Your Industry</h2>
                    <p className="lg:col-span-4 text-[var(--muted)] leading-relaxed">Hover or focus an industry to see the capabilities we bring to it.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#081b332e]">
                    {INDUSTRIES.map((ind, i) => (
                        <div
                            key={ind.name}
                            tabIndex={0}
                            className="svc-industry-card group relative overflow-hidden border-r border-b border-[#081b332e] p-8 min-h-[15rem] outline-none focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                        >
                            <div className="relative z-10 h-full min-h-[11rem] flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0">
                                <span className="text-sm tabular-nums text-[var(--muted)]">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] tracking-[-0.03em] leading-tight">{ind.name}</h3>
                            </div>

                            <div className="tg-on-ink absolute inset-0 p-8 flex flex-col justify-between bg-[var(--ink-navy)] text-[#eef3fa] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl tracking-[-0.02em]">{ind.name}</h3>
                                <ul>
                                    {INDUSTRY_CAPABILITIES.map((cap) => (
                                        <li key={cap} className="tg-hairline py-2 text-sm text-[#eef3facc]">{cap}</li>
                                    ))}
                                </ul>
                                <a href="https://guiresfrl.github.io/guires_website/industries.html" className="tg-link text-sm text-[var(--accent-cyan)]">
                                    Explore Industry <span className="icon-arrow-right text-xs"></span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
