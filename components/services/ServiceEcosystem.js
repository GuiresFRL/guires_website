function svcUrl(slug) {
    if (slug === 'data-science-analytics') {
        return 'https://guiresfrl.github.io/guires_website/services/data-science-analytics.html';
    }
    return `https://guiresfrl.github.io/guires_website/services/${slug}/`;
}

const SERVICE_PILLARS = [
    {
        num: '01', title: 'Research & Intelligence', slug: 'research-intelligence',
        desc: 'Primary and secondary research, market and competitive intelligence that ground decisions in evidence.',
        services: ['Market Research', 'Competitive Intelligence', 'Primary Research', 'Secondary Research', 'R&D Intelligence']
    },
    {
        num: '02', title: 'Data & Analytics', slug: 'data-science-analytics',
        desc: 'Turning complex, fragmented data into clear, decision-ready analysis and evidence.',
        services: ['Data Analytics', 'Statistical Programming', 'Biostatistics', 'Data Management', 'AI & Advanced Analytics']
    },
    {
        num: '03', title: 'Healthcare & Life Sciences', slug: 'healthcare-life-sciences',
        desc: 'Domain-specific support across the clinical and regulatory lifecycle.',
        services: ['Clinical Research Support', 'Real-World Evidence', 'HEOR', 'Pharmacovigilance', 'Regulatory Support']
    },
    {
        num: '04', title: 'Scientific & Medical', slug: 'scientific-medical-communication',
        desc: 'Communicating complex science clearly, accurately and compliantly.',
        services: ['Medical Writing', 'Scientific Writing', 'Regulatory Writing', 'Medical Communications']
    },
    {
        num: '05', title: 'Technology & Operations', slug: 'technology-operations',
        desc: 'Technology-enabled delivery that scales research operations.',
        services: ['Research Technology', 'Automation', 'AI Solutions', 'Managed Services']
    }
];

function PillarIllustration({ index }) {
    const c = 'var(--accent)';
    const c2 = 'var(--accent-cyan)';
    const illustrations = [
        <g key="0"><circle cx="70" cy="40" r="18" stroke={c} strokeWidth="2" fill="none" /><line x1="83" y1="53" x2="104" y2="74" stroke={c} strokeWidth="2" strokeLinecap="round" /><circle cx="70" cy="40" r="6" fill={c2} /></g>,
        <g key="1"><rect x="30" y="50" width="10" height="24" fill={c2} /><rect x="46" y="38" width="10" height="36" fill={c} /><rect x="62" y="26" width="10" height="48" fill={c2} /><rect x="78" y="44" width="10" height="30" fill={c} /></g>,
        <g key="2"><path d="M30 60 Q45 30 60 60 T90 60" stroke={c} strokeWidth="2" fill="none" /><circle cx="45" cy="45" r="3" fill={c2} /><circle cx="75" cy="45" r="3" fill={c2} /></g>,
        <g key="3"><rect x="35" y="28" width="34" height="44" rx="3" stroke={c} strokeWidth="2" fill="none" /><line x1="42" y1="40" x2="62" y2="40" stroke={c2} strokeWidth="2" /><line x1="42" y1="50" x2="62" y2="50" stroke={c2} strokeWidth="2" /><line x1="42" y1="60" x2="55" y2="60" stroke={c2} strokeWidth="2" /></g>,
        <g key="4"><circle cx="40" cy="50" r="6" fill={c} /><circle cx="70" cy="30" r="6" fill={c2} /><circle cx="80" cy="60" r="6" fill={c} /><circle cx="50" cy="72" r="6" fill={c2} /><path d="M40 50 L70 30 M70 30 L80 60 M80 60 L50 72 M50 72 L40 50" stroke={c} strokeWidth="1.2" strokeOpacity="0.5" /></g>
    ];
    return (
        <svg viewBox="0 0 120 90" className="w-full h-full">
            {illustrations[index]}
        </svg>
    );
}

function ServiceEcosystem() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-pillar-card'),
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section id="service-ecosystem" ref={ref} className="py-24 lg:py-36 bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-[var(--black)] mb-5">Expertise Across the Research &amp; Data Lifecycle</h2>
                    <p className="text-lg text-[var(--muted)] leading-relaxed">From research and evidence generation to analytics, scientific support and technology-enabled solutions, GUIRES brings specialized expertise together to solve complex business and scientific challenges.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {SERVICE_PILLARS.map((p, i) => (
                        <a
                            key={p.slug}
                            href={svcUrl(p.slug)}
                            className={`svc-pillar-card group relative overflow-hidden rounded-[20px] border border-black/10 p-9 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${i === SERVICE_PILLARS.length - 1 ? 'lg:col-span-2' : ''}`}
                        >
                            <div className="absolute inset-0 bg-[var(--bg-soft)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-start justify-between gap-6">
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-[var(--muted)] mb-3">{p.num}</div>
                                    <h3 className="text-2xl font-bold text-[var(--black)] mb-3">{p.title}</h3>
                                    <p className="text-[var(--muted)] leading-relaxed mb-6 max-w-md">{p.desc}</p>
                                    <ul className="space-y-2 mb-6">
                                        {p.services.map((s) => (
                                            <li key={s} className="flex items-center gap-2.5 text-sm text-[var(--black)]/80 transition-all duration-300 group-hover:text-[var(--black)]">
                                                <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0"></span>{s}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                                        Explore <div className="icon-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1.5"></div>
                                    </div>
                                </div>
                                <div className="hidden sm:block shrink-0 w-28 h-24 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                                    <PillarIllustration index={i} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
