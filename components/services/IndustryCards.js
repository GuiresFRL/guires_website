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
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-industry-card'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-[var(--bg-soft)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-14">
                    <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[var(--black)]">Expertise Built Around Your Industry</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {INDUSTRIES.map((ind) => (
                        <div
                            key={ind.name}
                            className="svc-industry-card group relative overflow-hidden rounded-2xl bg-white border border-black/10 p-8 h-56 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                                <div className="w-12 h-12 rounded-xl bg-[#0C4DA21A] text-[var(--accent)] flex items-center justify-center text-2xl"><div className={ind.icon}></div></div>
                                <h3 className="text-xl font-bold text-[var(--black)]">{ind.name}</h3>
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-between bg-[var(--ink-navy)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-lg font-bold text-white">{ind.name}</h3>
                                <ul className="space-y-2">
                                    {INDUSTRY_CAPABILITIES.map((cap) => (
                                        <li key={cap} className="flex items-center gap-2 text-sm text-white/70">
                                            <span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] shrink-0"></span>{cap}
                                        </li>
                                    ))}
                                </ul>
                                <a href="https://guiresfrl.github.io/guires_website/industries.html" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-cyan)]">
                                    Explore Industry <div className="icon-arrow-right text-xs"></div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
