function IndustryGoalTabs({ industry }) {
    const [active, setActive] = React.useState(0);
    const current = INDUSTRY_GOALS[active];
    return (
        <div>
            <div role="tablist" aria-label="What do you want to achieve" className="no-scrollbar flex gap-x-8 gap-y-2 overflow-x-auto border-b border-[#081B3326] mb-10">
                {INDUSTRY_GOALS.map((g, i) => (
                    <button
                        key={g.label}
                        role="tab"
                        aria-selected={i === active}
                        onClick={() => setActive(i)}
                        className={`relative shrink-0 pb-4 text-[15px] font-medium whitespace-nowrap transition-colors ${i === active ? 'text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'}`}
                    >
                        {g.label}
                        <span className={`absolute left-0 right-0 -bottom-px h-0.5 bg-[var(--accent)] transition-transform origin-left ${i === active ? 'scale-x-100' : 'scale-x-0'}`}></span>
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
                <div className="aspect-[16/10] lg:aspect-auto bg-[var(--ink)] overflow-hidden">
                    <img src={industry.img} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12">
                    <div className="tg-eyebrow mb-5">{current.label}</div>
                    <h3 className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium tracking-[-0.03em] leading-tight mb-4">{current.heading}</h3>
                    <p className="text-[var(--muted)] leading-relaxed mb-8">{current.desc} For {industry.name.toLowerCase()} teams.</p>
                    <ul>
                        {current.items.map((item) => (
                            <li key={item} className="tg-hairline flex items-center gap-4 py-3.5">
                                <span className="w-2 h-2 bg-[var(--accent)] shrink-0"></span>{item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function IndustryDetailPage({ slug }) {
    const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);
    const heroRef = React.useRef(null);

    React.useEffect(() => {
        tgReveal('.ind-reveal');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !heroRef.current) return;
        gsap.fromTo(heroRef.current.querySelectorAll('.ind-hero-elem'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 });
        gsap.fromTo(heroRef.current.querySelector('.ind-hero-img'), { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.3, ease: 'power2.out' });
    }, []);

    if (!industry) {
        return (
            <section className="pt-40 pb-24 tg-container">
                <h1 className="tg-display mb-6">Industry not found</h1>
                <a href={`${IND_SITE}/industries/`} className="tg-btn tg-btn--primary">All industries <div className="icon-arrow-right"></div></a>
            </section>
        );
    }

    const others = INDUSTRIES_DATA.filter((i) => i.slug !== slug);
    const intro = industry.long || industry.desc;

    return (
        <React.Fragment>
            {/* Hero: banner image, breadcrumb, title */}
            <section ref={heroRef} className="tg-on-ink relative overflow-hidden text-white pt-32 pb-20 lg:pt-44 lg:pb-28" style={{ background: 'var(--ink-navy)' }}>
                <img className="ind-hero-img absolute inset-0 w-full h-full object-cover opacity-40" src={industry.img} alt="" aria-hidden="true" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #081B33 0%, #081B33D9 45%, #081B3399 100%)' }}></div>
                <div className="tg-container relative z-10">
                    <nav aria-label="Breadcrumb" className="ind-hero-elem flex items-center gap-2 text-xs text-white/70 mb-8">
                        <a href={`${IND_SITE}/`} className="hover:text-white transition-colors flex items-center" aria-label="Home"><span className="icon-house text-sm"></span></a>
                        <span className="icon-chevron-right text-[10px] text-[var(--accent-cyan)]"></span>
                        <a href={`${IND_SITE}/industries/`} className="hover:text-white transition-colors">Industries</a>
                        <span className="icon-chevron-right text-[10px] text-[var(--accent-cyan)]"></span>
                        <span className="text-white">{industry.name}</span>
                    </nav>
                    <h1 className="ind-hero-elem tg-display max-w-[16ch] mb-6">{industry.name}</h1>
                    <p className="ind-hero-elem tg-lead text-white/80 max-w-xl">{industry.desc}</p>
                </div>
            </section>

            {/* Intro split */}
            <section className="tg-band tg-band--white tg-section">
                <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="ind-reveal lg:col-span-6">
                        <h2 className="tg-h2 mb-6">How GUIRES supports {industry.name}</h2>
                        <div className="w-16 h-1 bg-[var(--accent)]"></div>
                    </div>
                    <p className="ind-reveal lg:col-span-6 tg-lead text-[var(--muted)]">{intro}</p>
                </div>
            </section>

            {/* What we do */}
            <section className="tg-band tg-band--soft tg-section">
                <div className="tg-container">
                    <div className="ind-reveal max-w-2xl mb-14">
                        <div className="tg-eyebrow mb-5">What we do</div>
                        <h2 className="tg-h2">Built for confident decisions</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {INDUSTRY_CAPABILITIES_LIST.map((c, i) => (
                            <div key={c.title} className={`ind-reveal border-t-2 border-[var(--ink)] pt-6 pb-10 ${i > 0 ? 'lg:pl-8' : ''} lg:pr-8`}>
                                <div className="tg-num !text-[clamp(2rem,3.4vw,3rem)] mb-10" style={{ color: i === 0 ? 'var(--accent)' : 'var(--ink)' }}>0{i + 1}</div>
                                <h3 className="text-xl font-medium tracking-[-0.02em] mb-2">{c.title}</h3>
                                <p className="text-[var(--muted)] leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What do you want to achieve */}
            <section className="tg-band tg-band--lilac tg-section">
                <div className="tg-container">
                    <div className="ind-reveal mb-10">
                        <div className="tg-eyebrow !text-[var(--ink)] mb-5">Your goals</div>
                        <h2 className="tg-h2">What do you want to achieve?</h2>
                    </div>
                    <div className="ind-reveal"><IndustryGoalTabs industry={industry} /></div>
                </div>
            </section>

            {/* Other industries */}
            <section className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="ind-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <h2 className="tg-h2">Other industries we serve</h2>
                        <a href={`${IND_SITE}/industries/`} className="tg-btn tg-btn--ghost self-start">All industries <div className="icon-arrow-right"></div></a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
                        {others.map((o) => (
                            <a key={o.slug} href={industryUrl(o.slug)} className="ind-reveal tg-index-row group flex items-center justify-between gap-4 py-5">
                                <span className="tg-index-title text-xl font-medium tracking-[-0.02em]">{o.name}</span>
                                <span className="tg-index-arrow icon-arrow-right text-lg"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
        </React.Fragment>
    );
}
