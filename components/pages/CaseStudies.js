function CaseStudiesPage() {
    const cases = [
        { title: 'Accelerating Clinical Research Delivery', category: 'Healthcare & Life Sciences', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Modernizing Pharmacovigilance Operations', category: 'Pharmaceuticals', img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Statistical Rigor for Global Trials', category: 'Biostatistics', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Advancing Diagnostics R&D', category: 'Diagnostics', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Scientific Communication for Global Publication', category: 'Scientific & Medical Communication', img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1200' }
    ];

    React.useEffect(() => {
        tgReveal('.case-card');
    }, []);

    return (
        <React.Fragment>
            <section id="case-list" className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                        <div className="lg:col-span-8">
                            <div className="tg-eyebrow mb-6">Selected work</div>
                            <h2 className="tg-h2">Outcomes our clients can point to</h2>
                        </div>
                        <p className="lg:col-span-4 tg-lead text-[var(--muted)]">A look at the kinds of challenges we take on across research, regulatory and data.</p>
                    </div>

                    <div className="flex flex-col gap-20 lg:gap-28">
                        {cases.map((c, idx) => (
                            <article key={idx} className="case-card group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                                <div className={`lg:col-span-7 overflow-hidden aspect-[16/10] bg-[var(--ink)] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="flex items-baseline gap-4 mb-6">
                                        <span className="tg-num !text-[clamp(2rem,3vw,2.75rem)] text-[var(--accent-secondary)]">{String(idx + 1).padStart(2, '0')}</span>
                                        <span className="tg-eyebrow">{c.category}</span>
                                    </div>
                                    <h3 className="text-[clamp(1.75rem,3.4vw,3rem)] font-medium tracking-[-0.03em] leading-[1.08] mb-8">{c.title}</h3>
                                    <a href="https://guiresfrl.github.io/guires_website/contact-us/" className="tg-link text-[var(--accent-secondary)]">
                                        Discuss a similar challenge <span className="icon-arrow-right"></span>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <ContactCTA />
        </React.Fragment>
    );
}
