const WHAT_WE_DO_CARDS = [
    { icon: 'icon-radar', title: 'Reveal hidden patterns', desc: 'Uncover structure in complex research and clinical datasets that spreadsheets and manual review miss.' },
    { icon: 'icon-triangle-alert', title: 'Detect data risk early', desc: 'Flag inconsistencies and anomalies in study data before they compromise results.' },
    { icon: 'icon-trending-up', title: 'Forecast under uncertainty', desc: 'Model outcomes and timelines with statistically sound, defensible projections.' },
    { icon: 'icon-zap', title: 'Turn insights into action', desc: 'Translate analysis into recommendations research and regulatory teams can act on.' },
    { icon: 'icon-message-square', title: 'Translate complexity into clarity', desc: 'Communicate findings clearly to stakeholders, reviewers and publication audiences.' }
];

const ACHIEVE_TABS = [
    {
        label: 'Build an effective data strategy',
        heading: 'Data Consulting',
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900',
        items: [
            'Study-specific data strategy recommendations',
            'Enterprise information management',
            'Integrated data &amp; analytics roadmap',
            'Governance and compliance frameworks'
        ]
    },
    {
        label: 'Ensure data is trustworthy & audit-ready',
        heading: 'Data Quality &amp; Governance',
        img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=900',
        items: [
            'Data quality audits &amp; validation',
            'Metadata &amp; documentation standards',
            'Regulatory-ready data lineage',
            'Continuous quality monitoring'
        ]
    }
];

const ACCELERATORS = [
    { icon: 'icon-layout-template', title: 'Design', items: ['Data model design', 'Source &amp; lineage mapping', 'Analytics roadmap definition'] },
    { icon: 'icon-code', title: 'Develop', items: ['Pipeline development', 'Quality &amp; validation testing', 'Dashboard &amp; reporting build'] },
    { icon: 'icon-gauge', title: 'Manage', items: ['Automated monitoring', 'Performance &amp; drift tracking', 'Version &amp; change management'] }
];

const DECISION_TILES = [
    { title: 'Data Visualization', img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=500' },
    { title: 'Anomaly Detection', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=500' },
    { title: 'Forecasting & Predictive Analytics', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=500' },
    { title: 'Segmentation & Clustering', img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=500' },
    { title: 'Statistical Modeling & Machine Learning', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500' }
];

const FAQS = [
    {
        q: 'What is data science & analytics support, and why does it matter for research organizations?',
        a: 'It combines statistical modelling, data engineering and visualization to turn raw research and operational data into decision-ready insight — helping teams move from data collection to publication-ready analysis faster and with greater confidence.'
    },
    {
        q: 'What challenges do research teams face managing complex study data?',
        a: 'Data often lives across disconnected systems, in inconsistent formats, with unclear ownership — making it hard to trust, audit or analyze without significant manual reconciliation.'
    },
    {
        q: 'How does GUIRES accelerate research data readiness?',
        a: 'We combine domain-specific data strategy, modern pipelines and rigorous quality frameworks so research data is structured, validated and analysis-ready from the start.'
    },
    {
        q: 'What governance and quality measures are critical in research data management?',
        a: 'Clear data lineage, documented metadata standards, continuous quality monitoring and compliance-aligned access controls are all essential to defensible, audit-ready research data.'
    },
    {
        q: 'Why partner with GUIRES for data science & analytics?',
        a: 'Our team combines biostatistics, data engineering and regulatory expertise in one practice — so analysis is not just statistically sound, but built for the standards research and regulatory review demand.'
    }
];

const INSIGHT_CARDS = [
    { category: 'Data Science', title: 'Building Robust Research Data Pipelines', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600' },
    { category: 'Biostatistics', title: 'The Role of Biostatistics in Modern Clinical Trials', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600' },
    { category: 'Regulatory', title: 'Navigating Global Pharmacovigilance Reporting Standards', img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=600' }
];

function AchieveTabs() {
    const [active, setActive] = React.useState(0);
    const current = ACHIEVE_TABS[active];
    return (
        <div>
            <div className="flex flex-wrap gap-3 mb-10">
                {ACHIEVE_TABS.map((tab, i) => (
                    <button
                        key={tab.label}
                        onClick={() => setActive(i)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${i === active ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'bg-white text-gray-600 border-black/15 hover:border-[var(--accent)]'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-black/5 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="h-64 lg:h-auto">
                    <img src={current.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-10">
                    <h3 className="text-2xl font-bold mb-5">{current.heading}</h3>
                    <ul className="space-y-3">
                        {current.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-gray-600">
                                <div className="icon-check text-[var(--accent)] mt-1 shrink-0"></div>
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function FaqAccordion() {
    const [open, setOpen] = React.useState(0);
    return (
        <div className="divide-y divide-black/10 border-t border-b border-black/10">
            {FAQS.map((faq, i) => (
                <div key={faq.q}>
                    <button
                        onClick={() => setOpen(open === i ? -1 : i)}
                        className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    >
                        <span className="text-lg font-semibold">{faq.q}</span>
                        <div className={`icon-chevron-down text-xl text-gray-400 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}></div>
                    </button>
                    <div className={`grid transition-all duration-300 ease-out ${open === i ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`} style={{ overflow: 'hidden' }}>
                        <div className="min-h-0">
                            <p className="text-gray-600 leading-relaxed max-w-3xl">{faq.a}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function CaseStudyVideo() {
    const [playing, setPlaying] = React.useState(false);
    return (
        <div className="dsa-reveal relative h-72 rounded-lg overflow-hidden group">
            {playing ? (
                <video
                    className="w-full h-full object-cover"
                    src="https://cdn.quantiphi.com/2025/08/Energy-and-Utilities_10-secs.mp4"
                    poster="https://www.exlservice.com/sites/default/files/styles/ng_style_webp/public/2025-07/moddata-promobanner-destkop.png.webp?itok=X8t0zeHR"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            ) : (
                <button className="absolute inset-0 w-full h-full cursor-pointer" onClick={() => setPlaying(true)} aria-label="Play video">
                    <img src="https://www.exlservice.com/sites/default/files/styles/ng_style_webp/public/2025-07/moddata-promobanner-destkop.png.webp?itok=X8t0zeHR" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-[var(--accent)] text-2xl">
                            <div className="icon-play"></div>
                        </div>
                    </div>
                </button>
            )}
        </div>
    );
}

function DataScienceAnalyticsPage() {
    const heroRef = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.dsa-hero-line', { y: '100%' }, { y: '0%', duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.15 });
        gsap.fromTo('.dsa-hero-fade', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', delay: 0.5 });
        gsap.fromTo('.dsa-hero-wall', { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out', delay: 0.2 });

        gsap.utils.toArray('.dsa-reveal').forEach((el) => {
            gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
        });
        gsap.utils.toArray('.dsa-reveal-group').forEach((group) => {
            gsap.fromTo(group.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: group, start: 'top 85%' } });
        });
    }, []);

    return (
        <React.Fragment>
            {/* ============ HERO ============ */}
            <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#050B18] overflow-hidden">
                <img
                    className="dsa-hero-wall absolute inset-0 w-full h-full object-cover opacity-0"
                    src="https://www.axtria.com/hs-fs/hubfs/Axtria-2025/Service%20-%20Data%20Engineering%20-%202025/Data-engineering-banner.jpg?width=2025&height=825&name=Data-engineering-banner.jpg"
                    alt=""
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#050B18]/70 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
                        <a href="https://guiresfrl.github.io/guires_website/index.html" className="hover:text-white transition-colors flex items-center"><div className="icon-house text-sm"></div></a>
                        <div className="icon-chevron-right text-[10px] text-[#F5A623]"></div>
                        <a href="https://guiresfrl.github.io/guires_website/services.html" className="hover:text-white transition-colors">Services</a>
                        <div className="icon-chevron-right text-[10px] text-[#F5A623]"></div>
                        <span className="text-white/80">Data Science &amp; Analytics</span>
                    </div>
                    <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.1] mb-4 overflow-hidden">
                        <span className="dsa-hero-line block text-white">Data Science &amp; Analytics</span>
                    </h1>
                    <p className="dsa-hero-fade text-blue-100 text-lg max-w-xl">Build the data foundation your research strategy demands.</p>
                </div>
            </section>

            {/* ============ INTRO SPLIT ============ */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="dsa-reveal">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">Turn siloed, messy data into fuel for discovery</h2>
                        <div className="w-16 h-1 bg-[var(--accent)]"></div>
                    </div>
                    <p className="dsa-reveal text-lg text-gray-600 leading-relaxed">
                        Research doesn&rsquo;t wait for teams to reconcile spreadsheets or track down missing files. Legacy systems, inconsistent formats and siloed platforms keep valuable data locked away &mdash; GUIRES&rsquo; data science &amp; analytics practice builds the modern data foundation research and regulatory teams need to move fast without sacrificing rigor.
                    </p>
                </div>
            </section>

            {/* ============ WHAT WE DO ============ */}
            <section className="relative py-24 bg-[var(--tint-1)] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="dsa-reveal text-center max-w-2xl mx-auto mb-14">
                        <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-4">What We Do</div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for Confident Research Decisions</h2>
                        <p className="text-gray-600">We apply advanced analytics to help research and regulatory teams navigate complexity with confidence and clarity.</p>
                    </div>
                    <div className="dsa-reveal-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {WHAT_WE_DO_CARDS.map((c) => (
                            <div key={c.title} className="bg-white rounded-lg border border-black/5 p-6 text-center shadow-sm">
                                <div className={`${c.icon} text-3xl text-[var(--accent)] mb-4`}></div>
                                <h3 className="text-sm font-bold mb-2 leading-snug">{c.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="hidden lg:flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 origin-right translate-x-1/2 bg-[var(--accent)] text-white text-xs font-bold tracking-wider uppercase px-5 py-3">
                    Connect With Us <div className="icon-arrow-right"></div>
                </a>
            </section>

            {/* ============ WHAT DO YOU WANT TO ACHIEVE ============ */}
            <section className="py-24 bg-[var(--tint-2)]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="dsa-reveal mb-10">
                        <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">Your Goals</div>
                        <h2 className="text-3xl lg:text-4xl font-bold">What do you want to achieve?</h2>
                    </div>
                    <div className="dsa-reveal">
                        <AchieveTabs />
                    </div>
                </div>
            </section>

            {/* ============ DELIVERY ACCELERATORS ============ */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="dsa-reveal text-3xl lg:text-4xl font-bold text-center mb-14">Our Delivery Accelerators</h2>
                    <div className="dsa-reveal-group grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ACCELERATORS.map((a) => (
                            <div key={a.title} className="bg-[var(--tint-1)] rounded-lg p-8">
                                <div className={`${a.icon} text-3xl text-[var(--accent)] mb-5`}></div>
                                <h3 className="text-xl font-bold mb-5">{a.title}</h3>
                                <ul className="space-y-3">
                                    {a.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                                            <div className="icon-check text-[var(--accent)] mt-0.5 shrink-0"></div>
                                            <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ CASE STUDY VIDEO CARD ============ */}
            <section className="py-24 bg-[var(--tint-1)]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <CaseStudyVideo />
                    <div className="dsa-reveal">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-5 leading-tight">How GUIRES&rsquo;s Research Data Platform Helps</h2>
                        <p className="text-gray-600 leading-relaxed">See how a unified data platform gives research and regulatory teams a single source of truth &mdash; from raw data collection to publication-ready analysis, with quality and governance built in at every stage.</p>
                    </div>
                </div>
            </section>

            {/* ============ CUSTOMER SUCCESS (dark carousel) ============ */}
            <section className="relative py-24 bg-[#081B33] overflow-hidden">
                <svg className="absolute -right-24 -top-24 w-[420px] h-[420px] text-white/5 pointer-events-none" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="dsa-reveal text-xs font-bold tracking-wider text-blue-300 uppercase mb-10 text-center">Customer Success Stories</div>
                    <div className="dsa-reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-dashed border-white/20 rounded-lg p-8 lg:p-10">
                        <div className="h-64 rounded-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Driving Efficiency Through Modern Data Infrastructure</h3>
                            <p className="text-white/50 mb-8 leading-relaxed">Client success story placeholder &mdash; to be replaced with a real GUIRES case study once available.</p>
                            <a href="https://guiresfrl.github.io/guires_website/case-studies.html" className="rounded-full px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2">Read More <div className="icon-arrow-right"></div></a>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-8">
                        {[0, 1, 2].map((i) => (
                            <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/25'}`}></span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ BUILT TO DRIVE BETTER DECISIONS ============ */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="dsa-reveal text-3xl lg:text-4xl font-bold text-center mb-14">Built to Drive Better <span className="text-[var(--accent)]">Decisions</span></h2>
                    <div className="dsa-reveal-group grid grid-cols-2 lg:grid-cols-5 gap-3">
                        {DECISION_TILES.map((tile) => (
                            <div key={tile.title} className="relative h-56 rounded-lg overflow-hidden group cursor-pointer">
                                <img src={tile.img} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" alt="" />
                                <div className="absolute inset-0 bg-black/50"></div>
                                <div className="absolute inset-0 flex items-end p-4">
                                    <div className="text-white text-xs font-semibold leading-snug">{tile.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <a href="https://guiresfrl.github.io/guires_website/case-studies.html" className="hidden lg:flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 origin-right translate-x-1/2 bg-[#081B33] text-white text-xs font-bold tracking-wider uppercase px-5 py-3">
                    View Case Studies <div className="icon-arrow-right"></div>
                </a>
            </section>

            {/* ============ FAQ ============ */}
            <section className="py-24 bg-[var(--tint-1)]">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <h2 className="dsa-reveal text-3xl lg:text-4xl font-bold mb-12">FAQs</h2>
                    <div className="dsa-reveal">
                        <FaqAccordion />
                    </div>
                </div>
            </section>

            {/* ============ INSIGHTS ============ */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="dsa-reveal text-3xl lg:text-4xl font-bold mb-4">Strategize Better With Our <span className="text-[var(--accent)]">Insights</span></h2>
                    <p className="dsa-reveal text-gray-600 mb-14">Perspectives on data, research and analytics for healthcare and life sciences.</p>
                    <div className="dsa-reveal-group grid grid-cols-1 md:grid-cols-3 gap-6">
                        {INSIGHT_CARDS.map((art) => (
                            <a key={art.title} href="https://guiresfrl.github.io/guires_website/insights.html" className="bg-white border border-black/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 block overflow-hidden">
                                <div className="h-40 overflow-hidden">
                                    <img src={art.img} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-[var(--accent-secondary)] uppercase tracking-wider mb-4">{art.category}</div>
                                    <h3 className="text-lg font-semibold mb-4 leading-snug">{art.title}</h3>
                                    <div className="text-sm font-medium flex items-center gap-2">Learn More <div className="icon-arrow-right"></div></div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
