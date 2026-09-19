function svcUrl(slug) {
    if (slug === 'data-science-analytics') {
        return 'https://guiresfrl.github.io/guires_website/services/data-science-analytics.html';
    }
    if (slug === 'biostatistics') {
        return 'https://guiresfrl.github.io/guires_website/services/biostatistics/';
    }
    // pillar/detail pages not built yet fall back to the on-page explorer instead of a 404
    return '#service-explorer';
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
    const c = 'currentColor';
    const c2 = 'var(--accent)';
    const illustrations = [
        <g key="0"><circle cx="70" cy="40" r="18" stroke={c} strokeWidth="2" fill="none" /><line x1="83" y1="53" x2="104" y2="74" stroke={c} strokeWidth="2" strokeLinecap="round" /><circle cx="70" cy="40" r="6" fill={c2} /></g>,
        <g key="1"><rect x="30" y="50" width="10" height="24" fill={c2} /><rect x="46" y="38" width="10" height="36" fill={c} /><rect x="62" y="26" width="10" height="48" fill={c2} /><rect x="78" y="44" width="10" height="30" fill={c} /></g>,
        <g key="2"><path d="M30 60 Q45 30 60 60 T90 60" stroke={c} strokeWidth="2" fill="none" /><circle cx="45" cy="45" r="3" fill={c2} /><circle cx="75" cy="45" r="3" fill={c2} /></g>,
        <g key="3"><rect x="35" y="28" width="34" height="44" stroke={c} strokeWidth="2" fill="none" /><line x1="42" y1="40" x2="62" y2="40" stroke={c2} strokeWidth="2" /><line x1="42" y1="50" x2="62" y2="50" stroke={c2} strokeWidth="2" /><line x1="42" y1="60" x2="55" y2="60" stroke={c2} strokeWidth="2" /></g>,
        <g key="4"><circle cx="40" cy="50" r="6" fill={c} /><circle cx="70" cy="30" r="6" fill={c2} /><circle cx="80" cy="60" r="6" fill={c} /><circle cx="50" cy="72" r="6" fill={c2} /><path d="M40 50 L70 30 M70 30 L80 60 M80 60 L50 72 M50 72 L40 50" stroke={c} strokeWidth="1.2" strokeOpacity="0.5" /></g>
    ];
    return (
        <svg viewBox="0 0 120 90" className="w-full h-full">
            {illustrations[index]}
        </svg>
    );
}

const PILLAR_BANDS = [
    { cls: 'fs-band--paper', primary: false },
    { cls: 'fs-band--blue tg-on-ink', primary: true },
    { cls: 'fs-band--tan', primary: false },
    { cls: 'fs-band--mid tg-on-ink', primary: true },
    { cls: 'fs-band--paper', primary: false }
];

function ServiceEcosystem() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        ref.current.querySelectorAll('.svc-pillar-card').forEach((el) => {
            gsap.fromTo(el.querySelectorAll('.svc-fs-elem'),
                { opacity: 0, y: 32 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 75%' } }
            );
        });
    }, []);

    return (
        <section id="service-ecosystem" ref={ref} className="scroll-mt-20">
            <div className="fs-band fs-band--white">
                <div className="tg-container py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <h2 className="tg-h2 lg:col-span-8">Expertise Across the Research &amp; Data Lifecycle</h2>
                    <p className="tg-lead text-[var(--muted)] lg:col-span-4">From research and evidence generation to analytics, scientific support and technology-enabled solutions, GUIRES brings specialized expertise together to solve complex business and scientific challenges.</p>
                </div>
            </div>

            {SERVICE_PILLARS.map((p, i) => {
                const b = PILLAR_BANDS[i % PILLAR_BANDS.length];
                return (
                    <article
                        key={p.slug}
                        className={`svc-pillar-card fs-band ${b.cls}`}
                    >
                        <div className="tg-container py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                            <div className="svc-fs-elem lg:col-span-4 flex lg:flex-col justify-between items-start gap-8">
                                <div className="fs-num" aria-hidden="true">{p.num}</div>
                                <div className="hidden sm:block w-28 h-24 lg:w-36 lg:h-28" aria-hidden="true"><PillarIllustration index={i} /></div>
                            </div>
                            <div className="lg:col-span-8">
                                <h3 className="svc-fs-elem tg-h2 !text-[clamp(2rem,4.2vw,4rem)] mb-6">{p.title}</h3>
                                <p className="svc-fs-elem tg-lead max-w-2xl mb-10 opacity-90">{p.desc}</p>
                                <ul className="svc-fs-elem grid grid-cols-1 sm:grid-cols-2 gap-x-10 mb-12 max-w-3xl">
                                    {p.services.map((s) => (
                                        <li key={s} className="tg-hairline py-3.5 text-lg font-normal">{s}</li>
                                    ))}
                                </ul>
                                <a href={svcUrl(p.slug)} className={`svc-fs-elem tg-btn ${b.primary ? 'tg-btn--light' : 'tg-btn--ghost'}`}>
                                    Explore {p.title} <div className="icon-arrow-right"></div>
                                </a>
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
